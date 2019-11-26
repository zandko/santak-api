'use strict';

const Controller = require('../../core/base_controller');

/**
* @controller 抽奖记录管理
*/
class LotteryLogsController extends Controller {
  /**
  * @summary 记录列表
  * @description
  * @router get /v1/admin/lotteryLogs
  * @request header string authorization token
  */
  async index() {
    const { ctx } = this;
    const lotteryLogs = await ctx.service.lotteryLog.index();
    ctx.helper.success(ctx, lotteryLogs);
  }

  /**
  * @summary 记录详情
  * @description
  * @router get /v1/admin/lotteryLogs/{id}
  * @request path integer id 记录id
  * @request header string authorization token
  */
  async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    const lotteryLog = await ctx.service.lotteryLog.show(id);
    if (!lotteryLog) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, lotteryLog);
  }
}

module.exports = LotteryLogsController;
