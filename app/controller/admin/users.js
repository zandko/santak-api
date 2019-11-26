'use strict';

const Controller = require('../../core/base_controller');

/**
* @controller 用户管理
*/
class UsersController extends Controller {
  /**
  * @summary 用户列表
  * @description
  * @router get /v1/admin/users
  * @request header string authorization token
  */
  async index() {
    const { ctx } = this;
    const users = await ctx.service.user.index();
    ctx.helper.success(ctx, users);
  }

  /**
  * @summary 用户详情
  * @description
  * @router get /v1/admin/users/{id}
  * @request path integer id 用户id
  * @request header string authorization token
  */
  async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    const user = await ctx.service.user.show(id);
    if (!user) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, user);
  }
}

module.exports = UsersController;
