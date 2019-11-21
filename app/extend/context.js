'use strict';

module.exports = {
  OK_CODE: 200,
  CREATED_CODE: 201,
  NO_CONTENT_CODE: 204,
  UNAUTHORIZED_CODE: 401,
  NOT_FOUND_CODE: 404,
  UNPROCESABLE_NENTITY_CODE: 422,
  ERROR_CODE: 500,

  /**
   * 生成 Token
   * @param data {Object}
   * @return {number | PromiseLike<ArrayBuffer>}
   */
  async createToken(data) {
    const { app } = this;
    const expiredTime = await app.getDifferDate(1).getTime();
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

  /**
   * 删除token
   */
  removeToken() {
    const { ctx } = this;
    console.log(ctx);
  },
};
