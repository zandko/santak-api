'use strict';

const Controller = require('../../core/base_controller');

/**
* @controller 管理员
*/
class AdministratorsController extends Controller {
  /**
  * @summary 获取管理员信息
  * @description
  * @router get /v1/admin
  * @request header string authorization token
  */
  async show() {
    const { ctx } = this;
    const verifuResult = await ctx.verifyToken(ctx.request.header.authorization);
    if (verifuResult.verify) {
      const result = ctx.helper.JSONParse(verifuResult.message.data)[0];
      if (result) {
        const { id } = result;
        const user = await ctx.service.admin.show(id);
        return ctx.helper.success(ctx, user);
      }
      return ctx.helper.fail(ctx, ctx.UNAUTHORIZED_CODE, 'token无效，请重新登陆！');
    }
    ctx.helper.fail(ctx, ctx.UNAUTHORIZED_CODE, {
      message: verifuResult.message,
      expiredAt: verifuResult.expiredAt,
    });
  }
}

module.exports = AdministratorsController;
