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


  //   /**
  //  * @summary 添加用户
  //  * @description
  //  * @router post /v1/admin/users
  //  * @request header string authorization token
  //  */
  //   async create() {
  //     const { ctx } = this;
  //     const user = await ctx.service.user.create(ctx.request.body);
  //     ctx.helper.success(ctx, user, ctx.CREATED_CODE);
  //   }

  //   /**
  //   * @summary 修改用户
  //   * @description
  //   * @router put /v1/admin/users/{id}
  //   * @request path integer id 用户id
  //   * @request header string authorization token
  //   */
  //   async update() {
  //     const { ctx } = this;
  //     const id = ctx.params.id;
  //     await ctx.service.user.update(ctx.request.body, id);
  //     ctx.helper.success(ctx, {}, ctx.NO_CONTENT_CODE);
  //   }

  // /**
  // * @summary 删除用户
  // * @description
  // * @router delete /v1/admin/users/{id}
  // * @request path integer id 用户id
  // * @request header string authorization token
  // */
  // async destroy() {
  //   const { ctx } = this;
  //   const id = ctx.params.id;
  //   await ctx.service.user.destroy(id);
  //   ctx.helper.success(ctx, {}, ctx.NOT_FOUND_CODE);
  // }
}

module.exports = UsersController;
