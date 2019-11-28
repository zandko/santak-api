'use strict';

const Controller = require('../../core/base_controller');

/**
* @controller 活动管理
*/
class LotteryManagementsController extends Controller {
  /**
  * @summary 活动列表
  * @description
  * @router get /v1/admin/lotteryManagements
  * @request header string authorization token
  */
  async index() {
    const { ctx } = this;
    const lotteryManagements = await ctx.service.lotteryManagement.index();
    ctx.helper.success(ctx, lotteryManagements);
  }

  /**
  * @summary 活动详情
  * @description
  * @router get /v1/admin/lotteryManagements/{id}
  * @request path integer id 活动id
  * @request header string authorization token
  */
  async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    const lotteryManagement = await ctx.service.lotteryManagement.show(id);
    if (!lotteryManagement) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, lotteryManagement);
  }


  /**
 * @summary 添加活动
 * @description
 * @router post /v1/admin/lotteryManagements
 * @request header string authorization token
 * @request body createLotteryManagementRequest *body
 */
  async create() {
    const { ctx } = this;
    const lotteryManagement = await ctx.service.lotteryManagement.create(ctx.params);
    ctx.helper.success(ctx, lotteryManagement, ctx.CREATED_CODE);
  }

  /**
  * @summary 修改活动
  * @description
  * @router put /v1/admin/lotteryManagements/{id}
  * @request path integer id 活动id
  * @request header string authorization token
  * @request body updateLotteryManagementRequest *body
  */
  async update() {
    const { ctx } = this;
    const id = ctx.params.id;
    const lotteryManagement = await ctx.service.lotteryManagement.update(ctx.request.body, id);
    if (!lotteryManagement) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, {}, ctx.NO_CONTENT_CODE);
  }

  /**
  * @summary 删除活动
  * @description
  * @router delete /v1/admin/lotteryManagements/{id}
  * @request path integer id 活动id
  * @request header string authorization token
  */
  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    const lotteryManagement = await ctx.service.lotteryManagement.destroy(id);
    if (!lotteryManagement) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, {}, ctx.NO_CONTENT_CODE);
  }
}

module.exports = LotteryManagementsController;
