'use strict';

const uuidv1 = require('uuid/v1');

module.exports = {
  uuidv1,
  success(ctx, data, code) {
    // eslint-disable-next-line no-bitwise
    const timestamp = (0 | Date.now() / 1000).toString();
    ctx.body = {
      timestamp,
      code,
      data,
    };
    ctx.status = code || 200;
  },

  fail(ctx, code, message) {
    // eslint-disable-next-line no-bitwise
    const timestamp = (0 | Date.now() / 1000).toString();
    ctx.body = {
      timestamp,
      code,
      message,
      data: {},
    };
    ctx.status = code;
  },

  notFound(ctx, msg) {
    msg = msg || 'not found';
    ctx.throw(404, msg);
  },

  /**
   * 字符串转对象
   * @param {string} str
   * @param {object} defaultRusult
   * @return {object|{}}
   */
  JSONParse(str, defaultRusult) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return defaultRusult || {};
    }
  },
};
