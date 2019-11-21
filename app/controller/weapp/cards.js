'use strict';

const Controller = require('../../core/base_controller');

/**
* @controller 小程序卡片管理
*/
class CardsController extends Controller {
  /**
  * @summary 抽取卡片
  * @description
  * @router get /v1/weapp/cards/drawcar
  * @request header string authorization token
  */
  async drawcard() {
    const { ctx, app } = this;
    let result = await ctx.service.redis.get('cards');
    if (!result) {
      result = JSON.stringify(await ctx.service.card.index());
      await ctx.service.redis.set('cards', result);
    }
    const card = await app.getRand(ctx.helper.JSONParse(result));

    ctx.helper.success(ctx, card);
  }
}

module.exports = CardsController;
