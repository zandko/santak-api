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

  /**
 * @summary 添加记录
 * @description
 * @router post /v1/admin/winningRecords
 * @request header string authorization token
 * @request body createPrizeRequest *body
 */
  async create() {
    const { ctx } = this;
    const winningRecord = await ctx.service.winningRecord.create(ctx.request.body);
    ctx.helper.success(ctx, winningRecord, ctx.CREATED_CODE);
  }

  /**
  * @summary 修改记录
  * @description
  * @router put /v1/admin/winningRecords/{id}
  * @request path integer id 记录id
  * @request header string authorization token
 *  @request body createPrizeRequest *body
  */
  async update() {
    const { ctx } = this;
    const id = ctx.params.id;
    await ctx.service.winningRecord.update(ctx.request.body, id);
    ctx.helper.success(ctx, {}, ctx.NO_CONTENT_CODE);
  }

  /**
  * @summary 删除记录
  * @description
  * @router delete /v1/admin/winningRecords/{id}
  * @request path integer id 记录id
  * @request header string authorization token
  */
  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    await ctx.service.winningRecord.destroy(id);
    ctx.helper.success(ctx, {}, ctx.NOT_FOUND_CODE);
  }
}

module.exports = WinningRecordsController;
