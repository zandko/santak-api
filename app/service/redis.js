'use strict';

const Service = require('egg').Service;

class RedisService extends Service {
  /**
   * 设置
   * @param {string} key
   * @param {object} value
   * @param {date} seconds
   * @memberof RedisService
   */
  async set(key, value, seconds) {
    const { redis } = this.app;
    value = JSON.stringify(value);
    if (!seconds) await redis.set(key, value);
    else await redis.set(key, value, 'EX', seconds);
  }

  /**
   * 获取
   * @param {string} key
   */
  async get(key) {
    const { ctx, app } = this;
    const { redis } = app;
    const data = await redis.get(key);
    if (!data) return;
    const result = ctx.helper.JSONParse(data);
    return result;
  }

  /**
   * 清空
   */
  async flushall() {
    const { redis } = this.app;
    redis.flushall();
    return;
  }

}

module.exports = RedisService;
