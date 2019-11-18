'use strict';

const Controller = require('../core/base_controller');

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}
/**
* @controller card
*/
class CardController extends Controller {
  /**
  * @summary 卡片列表
  * @description
  * @router get /card
  */
  async index() {
    const { ctx } = this;
    const cards = await ctx.service.card.index();
    return ctx.helper.success(ctx, cards);
  }

  /**
  * @summary 卡片详情
  * @description
  * @router get /card/{id}
  * @request path integer id 卡片id
  */
  async show() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const card = await ctx.service.card.show(id);
    if (card) return ctx.helper.success(ctx, card);
    return ctx.helper.notFound(ctx);
  }

  /**
  * @summary  添加卡片
  * @description
  * @router post /card
  * @request body createCardRequest *body
  */
  async create() {
    const { ctx } = this;
    const { title, picture, probability } = ctx.request.body;
    const card = await ctx.service.card.create({ title, picture, probability });
    return ctx.helper.success(ctx, card, 201);
  }

  /**
  * @summary 修改卡片
  * @description
  * @router put /card/{id}
  * @request path integer id 卡片id
  * @request body updateCardRequest *body
  */
  async update() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const { title, picture, probability } = ctx.request.body;
    await ctx.service.card.update({ title, picture, probability }, id);
    return ctx.helper.success(ctx, {}, 204);
  }

  /**
  * @summary 删除卡片
  * @description
  * @router delete /card/{id}
  * @request path integer id 卡片id
  */
  async destroy() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    await ctx.service.card.destroy(id);
    return ctx.helper.success(ctx, {}, 204);
  }
}

module.exports = CardController;
