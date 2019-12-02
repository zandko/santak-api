'use strict';

/**
 * 判断是否登录
 */
module.exports = () => {
  return async function auth(ctx, next) {
    if (ctx.path.indexOf('/weapp/') !== -1) {
      // 微信小程序接口
      const uuid = ctx.request.header.Authorization;
      const cache = ctx.helper.JSONParse(await ctx.service.redis.get(uuid)) || {};

      const { open_id: openId } = cache;
      ctx.request.body.openId = openId;
      ctx.request.body = { ...ctx.request.body, ...ctx.query };

      // 过滤登录接口
      if (openId || ctx.path === '/v1/weapp/login') {
        await next();
      } else {
        ctx.helper.fail(ctx, ctx.UNAUTHORIZED_CODE, '尚未登录！');
      }
    } else {
      // 管理端接口
      const ignorePaths = [ '/v1/admin/login' ];
      const token = ctx.request.header.Authorization;
      const valid = await ctx.verifyToken(token);
      if (valid.verify || ignorePaths.includes(ctx.path)) {
        await next();
      } else {
        ctx.helper.fail(ctx, ctx.UNAUTHORIZED_CODE, valid.message);
      }
    }
  };
};
