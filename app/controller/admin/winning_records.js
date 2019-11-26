'use strict';

const Controller = require('../../core/base_controller');

/**
* @controller 中奖记录管理
*/
class WinningRecordsController extends Controller {
  /**
  * @summary 记录列表
  * @description
  * @router get /v1/admin/winningRecords
  * @request header string authorization token
  */
  async index() {
    const { ctx } = this;
    const winningRecords = await ctx.service.winningRecord.index();
    ctx.helper.success(ctx, winningRecords);
  }

  /**
  * @summary 记录详情
  * @description
  * @router get /v1/admin/winningRecords/{id}
  * @request path integer id 记录id
  * @request header string authorization token
  */
  async show() {
    const { ctx } = this;
    const id = ctx.params.id;
    const winningRecord = await ctx.service.winningRecord.show(id);
    if (!winningRecord) return ctx.helper.notFound(ctx);
    ctx.helper.success(ctx, winningRecord);
  }
}

module.exports = WinningRecordsController;
