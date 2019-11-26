'use strict';

const Controller = require('../../core/base_controller');

/**
* @controller 奖品管理
*/
class PrizesController extends Controller {
  /**
  * @summary 奖品列表
  * @description
  * @router get /v1/admin/prizes
  * @request header string authorization token
  */
  async index() {
    const { ctx } = this;
    const prizes = await ctx.service.prize.index();
    ctx.helper.success(ctx, prizes);
  }

  /**
  * @summary 奖品详情
  * @description
  * @router get /v1/admin/prizes/{id}
  * @request path integer id 卡片id
  * @request header string authorization token
  */
  async show() {
    const { ctx } = this;
    const { id } = ctx.params;
    const prize = await ctx.service.prize.show(id);
    if (!prize) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, prize);
  }


  /**
 * @summary 添加奖品
 * @description
 * @router post /v1/admin/prizes
 * @request header string authorization token
 * @request body createPrizeRequest *body
 */
  async create() {
    const { ctx } = this;
    const prize = await ctx.service.prize.create(ctx.params);
    ctx.helper.success(ctx, prize, ctx.CREATED_CODE);
  }

  /**
  * @summary 修改奖品
  * @description
  * @router put /v1/admin/prizes/{id}
  * @request path integer id 奖品id
  * @request header string authorization token
  * @request body updatePrizeRequest *body
  */
  async update() {
    const { ctx } = this;
    const { id } = ctx.params;
    const prize = await ctx.service.prize.update(ctx.params, id);
    if (!prize) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, {}, ctx.NO_CONTENT_CODE);
  }

  /**
  * @summary 删除奖品
  * @description
  * @router delete /v1/admin/prizes/{id}
  * @request path integer id 奖品id
  * @request header string authorization token
  */
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;
    const prize = await ctx.service.prize.destroy(id);
    if (!prize) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, {}, ctx.NOT_FOUND_CODE);
  }
}

module.exports = PrizesController;
