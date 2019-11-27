'use strict';

const Service = require('egg').Service;
const qiniu = require('qiniu');

// const zone = {
//   Zone_z0: qiniu.zone.Zone_z0, // 华东
//   Zone_z1: qiniu.zone.Zone_z1, // 华北
//   Zone_z2: qiniu.zone.Zone_z2, // 华南
//   Zone_na0: qiniu.zone.Zone_na0, // 北美
// };

class QiniuService extends Service {
  constructor(ctx) {
    super(ctx);
    this.qiniu = this.app.config.qiniu;
  }

  /**
   * 获取七牛云token
   * @return {string} qiniu token
   */
  async getToken() {
    const { AccessKey: accessKey, SecretKey: secretKey, Bucket } = this.qiniu;
    const putPolicy = new qiniu.rs.PutPolicy({ scope: Bucket });
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const uploadToken = putPolicy.uploadToken(mac);

    return uploadToken;
  }

  /**
   * 上传图片至七牛
   * @param {string} localFile
   * @param {string} suffix
   * @return {object} 图片信息
   */
  async uploader(localFile, suffix) {
    const { ctx } = this;
    const { Domain } = this.qiniu;
    const config = new qiniu.conf.Config();
    config.zone = qiniu.zone.Zone_z0;
    const formUploader = new qiniu.form_up.FormUploader(config);
    const token = await this.getToken();
    const putExtra = new qiniu.form_up.PutExtra();
    const key = ctx.helper.uuidv1() + '.' + suffix;
    return new Promise(resolve => {
      formUploader.putFile(token, key, localFile, putExtra, (respErr, respBody, respInfo) => {
        if (respErr) {
          throw respErr;
        }
        if (respInfo.statusCode === 200) {
          const { hash, key } = respBody;
          const result = {
            hash,
            key: `${Domain}/${key}`,
          };
          resolve(result);
        }
      });
    });
  }
}

module.exports = QiniuService;
