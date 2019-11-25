'use strict';

const Controller = require('../../core/base_controller');

/**
* @controller 抽奖活动配置
*/
class LotteryManagementDeploysController extends Controller {
  /**
  * @summary 配置列表
  * @description
  * @router get /v1/admin/LotteryManagementDeploys
  * @request header string authorization token
  */
  async index() {
    const { ctx } = this;
    const LotteryManagementDeploys = await ctx.service.lotteryManagementDeploy.index();
    ctx.helper.success(ctx, LotteryManagementDeploys);
  }

  /**
  * @summary 配置详情
  * @description
  * @router get /v1/admin/LotteryManagementDeploys/{id}
  * @request path integer id 配置id
  * @request header string authorization token
  */
  async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    const lotteryManagementDeploy = await ctx.service.lotteryManagementDeploy.show(id);
    if (!lotteryManagementDeploy) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, lotteryManagementDeploy);
  }


  /**
 * @summary 添加配置
 * @description
 * @router post /v1/admin/LotteryManagementDeploys
 * @request header string authorization token
 * @request body createLotteryManagementDeployRequest *body
 */
  async create() {
    const { ctx } = this;
    const lotteryManagementDeploy = await ctx.service.lotteryManagementDeploy.create(ctx.request.body);
    ctx.helper.success(ctx, lotteryManagementDeploy, ctx.CREATED_CODE);
  }

  /**
  * @summary 修改配置
  * @description
  * @router put /v1/admin/LotteryManagementDeploys/{id}
  * @request path integer id 配置id
  * @request header string authorization token
  * @request body updateLotteryManagementDeployRequest *body
  */
  async update() {
    const { ctx } = this;
    const id = ctx.params.id;
    await ctx.service.lotteryManagementDeploy.update(ctx.request.body, id);
    ctx.helper.success(ctx, {}, ctx.NO_CONTENT_CODE);
  }

  /**
  * @summary 删除配置
  * @description
  * @router delete /v1/admin/LotteryManagementDeploys/{id}
  * @request path integer id 配置id
  * @request header string authorization token
  */
  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    await ctx.service.lotteryManagementDeploy.destroy(id);
    ctx.helper.success(ctx, {}, ctx.NOT_FOUND_CODE);
  }
}

module.exports = LotteryManagementDeploysController;
