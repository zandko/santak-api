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

  //   /**
  //  * @summary 添加记录
  //  * @description
  //  * @router post /v1/admin/lotteryLogs
  //  * @request header string authorization token
  //  */
  //   async create() {
  //     const { ctx } = this;
  //     const { title, picture, probability } = ctx.request.body;
  //     const lotteryLog = await ctx.service.lotteryLog.create({ title, picture, probability });
  //     ctx.helper.success(ctx, lotteryLog, ctx.CREATED_CODE);
  //   }

  //   /**
  //   * @summary 修改记录
  //   * @description
  //   * @router put /v1/admin/lotteryLogs/{id}
  //   * @request path integer id 记录id
  //   * @request header string authorization token
  //   */
  //   async update() {
  //     const { ctx } = this;
  //     const id = ctx.params.id;
  //     const { title, picture, probability } = ctx.request.body;
  //     await ctx.service.lotteryLog.update({ title, picture, probability }, id);
  //     ctx.helper.success(ctx, {}, ctx.NO_CONTENT_CODE);
  //   }

  // /**
  // * @summary 删除记录
  // * @description
  // * @router delete /v1/admin/lotteryLogs/{id}
  // * @request path integer id 记录id
  // * @request header string authorization token
  // */
  // async destroy() {
  //   const { ctx } = this;
  //   const id = ctx.params.id;
  //   await ctx.service.lotteryLog.destroy(id);
  //   ctx.helper.success(ctx, {}, ctx.NOT_FOUND_CODE);
  // }
}

module.exports = LotteryLogsController;
