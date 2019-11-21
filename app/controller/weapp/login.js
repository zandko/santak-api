'use strict';

const Controller = require('../../core/base_controller');

/**
* @controller 小程序登录
*/
class LoginController extends Controller {
  /**
  * @summary 登录
  * @router post /v1/weapp/login
  * @request body weappLoginRequest *body
  */
  async authentication() {
    const { ctx, app } = this;
    const { APP_ID, APP_SECRET } = app.config.wxconfig;
    const { code } = ctx.request.body;
    const uuid = ctx.helper.uuidv1();

    const weappInfo = await ctx.curl(`https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${code}&grant_type=authorization_code`, {
      dataType: 'json',
    }) || {};

    const { openid: open_id, session_key } = weappInfo.data || {};
    if (open_id) {
      const user = await ctx.service.user.index({ where: { open_id } });
      if (!user) await ctx.service.user.create({ open_id, session_key });
      const result = JSON.stringify({ open_id, session_key });
      await ctx.service.redis.set(uuid, result, 3600 * 24);
    } else {
      return ctx.helper.fail(ctx, ctx.ERROR_CODE, weappInfo.data.errmsg);
    }
    ctx.helper.success(ctx, uuid);
  }
}

module.exports = LoginController;
