'use strict';

const Controller = require('../../core/base_controller');

/**
* @controller 抽奖活动配置
*/
class LotteryManagementDeploysController extends Controller {
  /**
  * @summary 配置列表
  * @description
  * @router get /v1/admin/lotteryManagementDeploys
  * @request header string authorization token
  */
  async index() {
    const { ctx } = this;
    const lotteryManagementDeploys = await ctx.service.lotteryManagementDeploy.index();
    ctx.helper.success(ctx, lotteryManagementDeploys);
  }

  /**
  * @summary 配置详情
  * @description
  * @router get /v1/admin/lotteryManagementDeploys/{id}
  * @request path integer id 配置id
  * @request header string authorization token
  */
  async show() {
    const { ctx } = this;
    const { id } = ctx.params;
    const lotteryManagementDeploy = await ctx.service.lotteryManagementDeploy.show(id);
    if (!lotteryManagementDeploy) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, lotteryManagementDeploy);
  }


  /**
 * @summary 添加配置
 * @description
 * @router post /v1/admin/lotteryManagementDeploys
 * @request header string authorization token
 * @request body createLotteryManagementDeployRequest *body
 */
  async create() {
    const { ctx } = this;
    const { prize_list } = ctx.params;
    const prizeList = ctx.helper.JSONParse(prize_list);

    let prize_total_num = 0;
    let prize_num = 0;

    for (let i = 0; i < prizeList.length; i++) {
      prize_total_num += prizeList[i].num;
      prize_num += prizeList[i].num;
    }

    ctx.params.prize_total_num = prize_total_num;
    ctx.params.prize_num = prize_num;

    const lotteryManagementDeploy = await ctx.service.lotteryManagementDeploy.create(ctx.params);
    ctx.helper.success(ctx, lotteryManagementDeploy, ctx.CREATED_CODE);
  }

  /**
  * @summary 修改配置
  * @description
  * @router put /v1/admin/lotteryManagementDeploys/{id}
  * @request path integer id 配置id
  * @request header string authorization token
  * @request body updateLotteryManagementDeployRequest *body
  */
  async update() {
    const { ctx } = this;
    const { id, prize_list } = ctx.params;
    const prizeList = ctx.helper.JSONParse(prize_list);

    let prize_total_num = 0;
    let prize_num = 0;

    for (let i = 0; i < prizeList.length; i++) {
      prize_total_num += prizeList[i].num;
      prize_num += prizeList[i].num;
    }

    ctx.params.prize_total_num = prize_total_num;
    ctx.params.prize_num = prize_num;

    const lotteryManagementDeploy = await ctx.service.lotteryManagementDeploy.update(ctx.params, id);
    if (!lotteryManagementDeploy) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, {}, ctx.NO_CONTENT_CODE);
  }

  /**
  * @summary 删除配置
  * @description
  * @router delete /v1/admin/lotteryManagementDeploys/{id}
  * @request path integer id 配置id
  * @request header string authorization token
  */
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;
    const lotteryManagementDeploy = await ctx.service.lotteryManagementDeploy.destroy(id);
    if (!lotteryManagementDeploy) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, {}, ctx.NO_CONTENT_CODE);
  }
}

module.exports = LotteryManagementDeploysController;
