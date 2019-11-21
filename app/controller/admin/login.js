'use strict';

const Controller = require('../../core/base_controller');

/**
* @controller 后台登录
*/
class LoginController extends Controller {
  /**
  * @summary 登陆
  * @description
  * @router post /v1/admin/login
  * @request body adminLoginRequest *body
  */
  async authentication() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;

    const where = {
      where: {
        username,
        password: await ctx.helper.md5(password),
      },
    };
    const result = await ctx.service.admin.index(where);
    if (result) {
      const token = await ctx.createToken(JSON.stringify(result));
      return ctx.helper.success(ctx, token);
    }

    return ctx.helper.fail(ctx, ctx.UNPROCESABLE_NENTITY_CODE, '用户名或密码错误');
  }
}

module.exports = LoginController;
