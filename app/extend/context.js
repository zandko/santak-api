'use strict';

module.exports = {
  SUCCESS_CODE: 200,
  NO_LOGIN_CODE: 100,
  UNIQUE_CODE: 200,
  ERROR_CODE: 500,


  /**
   * 生成 Token
   * @param data {Object}
   * @return {number | PromiseLike<ArrayBuffer>}
   */
  async createToken(data) {
    const { app } = this;
    const expiredTime = Math.floor(Date.now() / 1000) + (60 * 60);
    return {
      token: app.jwt.sign({
        exp: expiredTime,
        data,
      }, app.jwt.secret),
      expiresIn: expiredTime,
    };
  },

  /**
   * 验证 Token
   * @param {String} token
   */
  async verifyToken(token) {
    const { app } = this;
    return new Promise(resolve => {
      app.jwt.verify(token, app.config.jwt.secret, function(err, decoded) {
        const result = {};
        if (err) {
          result.verify = false;
          result.message = err.message;
          result.expiredAt = err.expiredAt;
        } else {
          result.verify = true;
          result.message = decoded;
        }
        resolve(result);
      });
    });
  },
  // 获取token
  getAccessToken() {
    return this.cookies.get('token', { signed: false });
  },
  // 设置token
  setToken(data = {}) {
    const { app } = this;
    let { name, userUuid, userName, userType, orgUuid } = data;

    // 如果需要得到精确的结果，需要自己另加额外的控制标志位
    if (decodeURI(name) === name) {
      name = encodeURI(name);
    }

    const token = app.jwt.sign(data, app.config.jwt.secret, { expiresIn: '12h' });
    const cookieConfig = { maxAge: 1000 * 3600 * 24 * 7, httpOnly: false, overwrite: true, signed: false };

    this.cookies.set('token', token, cookieConfig);
    this.cookies.set('name', name, cookieConfig);
    this.cookies.set('userUuid', userUuid, cookieConfig);
    this.cookies.set('userName', userName, cookieConfig);
    this.cookies.set('userType', userType, cookieConfig);
    this.cookies.set('orgUuid', orgUuid || userUuid, cookieConfig);
  },
  removeToken() {
    this.cookies.set('token', null);
  },
  // // 校验token
  // async verifyToken() {
  //   const { app } = this;
  //   const name = this.cookies.get('name', { signed: false });
  //   const userUuid = this.cookies.get('userUuid', { signed: false });
  //   const userName = this.cookies.get('userName', { signed: false });
  //   const userType = this.cookies.get('userType', { signed: false });
  //   const orgUuid = this.cookies.get('orgUuid', { signed: false });
  //   const token = this.getAccessToken(this);
  //   const verifyResult = await new Promise(resolve => {
  //     app.jwt.verify(token, app.config.jwt.secret, (err, decoded) => {
  //       if (err) {
  //         if (err.name === 'TokenExpiredError' && userUuid) {
  //           this.setToken({ name, userUuid, userName, userType, orgUuid }); // 刷新token
  //           resolve({ verify: true, message: { userUuid } });
  //         } else {
  //           resolve({ verify: false, message: err.message });
  //         }
  //       } else {
  //         resolve({ verify: true, message: decoded });
  //       }
  //     });
  //   });

  //   if (!verifyResult.verify) {
  //     this.verifyFail(401, verifyResult.message);
  //     return false;
  //   }
  //   if (userUuid !== verifyResult.message.userUuid) {
  //     this.verifyFail(401, '用户 UUID 与 Token 不一致');
  //     return false;
  //   }
  //   this.request.body.userUuid = userUuid;
  //   this.request.body.userName = userName;
  //   this.request.body.userType = userType;
  //   this.request.body.orgUuid = orgUuid;
  //   // 将get请求的ctx.query合并到ctx.request.body，这里这么做是暂时的想法，我再考虑下
  //   this.request.body = { ...this.request.body, ...this.query };
  //   return true;
  // },
  // 校验token失败
  verifyFail(code, message) {
    this.body = { code, message };
    this.status = code;
  },
};
