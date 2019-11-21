'use strict';

const Controller = require('../../core/base_controller');

/**
* @controller 卡片管理
*/
class CardsController extends Controller {
  /**
  * @summary 卡片列表
  * @description
  * @router get /v1/admin/cards
  * @request header string authorization token
  */
  async index() {
    const { ctx } = this;
    const cards = await ctx.service.card.index();
    ctx.helper.success(ctx, cards);
  }

  /**
  * @summary 卡片详情
  * @description
  * @router get /v1/admin/cards/{id}
  * @request path integer id 卡片id
  * @request header string authorization token
  */
  async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    const card = await ctx.service.card.show(id);
    if (!card) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, card);
  }

  /**
  * @summary  添加卡片
  * @description
  * @router post /v1/admin/cards
  * @request header string authorization token
  * @request body createCardRequest *body
  */
  async create() {
    const { ctx } = this;
    const { title, picture, probability } = ctx.request.body;
    const card = await ctx.service.card.create({ title, picture, probability });
    ctx.helper.success(ctx, card, ctx.CREATED_CODE);
  }

  /**
  * @summary 修改卡片
  * @description
  * @router put /v1/admin/cards/{id}
  * @request path integer id 卡片id
  * @request header string authorization token
  * @request body updateCardRequest *body
  */
  async update() {
    const { ctx } = this;
    const id = ctx.params.id;
    const { title, picture, probability } = ctx.request.body;
    await ctx.service.card.update({ title, picture, probability }, id);
    ctx.helper.success(ctx, {}, ctx.NO_CONTENT_CODE);
  }

  /**
  * @summary 删除卡片
  * @description
  * @router delete /v1/admin/cards/{id}
  * @request path integer id 卡片id
  * @request header string authorization token
  */
  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    await ctx.service.card.destroy(id);
    ctx.helper.success(ctx, {}, ctx.NOT_FOUND_CODE);
  }
}

module.exports = CardsController;
