'use strict';

const Controller = require('../core/base_controller');

/**
* @controller login
*/
class LoginController extends Controller {
  /**
  * @summary 登录
  * @router post /login
  * @request body weappLoginRequest *body
  */
  async login() {
    const { ctx, app } = this;
    const { APP_ID, APP_SECRET } = app.config.wxconfig;
    const { code } = ctx.request.body;

    // const sessionid = ctx.helper.uuidv1();

    // 登录凭证校验
    const weappInfo = await ctx.curl(`https://api.weixin.qq.com/sns/jscode2session?appid=${APP_ID}&secret=${APP_SECRET}&js_code=${code}&grant_type=authorization_code`, {
      dataType: 'json',
    }) || {};

    const { openid: open_id, session_key } = weappInfo.data || {};

    if (open_id) {
      const result = JSON.stringify({ open_id, session_key });
      const token = await ctx.createToken(result);

      // 保存openId和session_key到redis
      // await app.redis.get('default').setex(sessionid, 3600 * 24, result);
      return ctx.helper.success(ctx, token);
    }
    return ctx.helper.fail(ctx, ctx.ERROR_CODE, weappInfo.data.errmsg);
  }
}

module.exports = LoginController;
