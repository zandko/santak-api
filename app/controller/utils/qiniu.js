'use strict';

const Controller = require('egg').Controller;

/**
* @controller Qiniu
*/
class QiniuController extends Controller {
  /**
  * @summary Qiniu上传
  * @description
  * @router post /uploader
  * @request formData file file
  */
  async uploader() {
    const { ctx } = this;
    const suffix = ctx.request.files[0].mime.split('/')[1];
    const result = await ctx.service.qiniu.uploader(ctx.request.files[0].filepath, suffix);
    ctx.helper.success(ctx, result, ctx.CREATED_CODE);
  }
}

module.exports = QiniuController;

