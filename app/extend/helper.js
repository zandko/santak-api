'use strict';

const uuidv1 = require('uuid/v1');
const md5 = require('md5');


module.exports = {
  uuidv1,

  /**
   * 成功
   * @param {context} ctx
   * @param {object} data
   * @param {number} code
   */
  success(ctx, data, code) {
    // eslint-disable-next-line no-bitwise
    const timestamp = (0 | Date.now() / 1000).toString();
    ctx.body = {
      timestamp,
      code,
      data,
    };
    ctx.status = code || ctx.OK_CODE;
  },

  /**
   * 失败
   * @param {context} ctx
   * @param {number} code
   * @param {string} message
   */
  fail(ctx, code, message) {
    // eslint-disable-next-line no-bitwise
    const timestamp = (0 | Date.now() / 1000).toString();
    ctx.body = {
      timestamp,
      code,
      message,
    };
    ctx.status = code;
  },

  /**
   * 找不到
   * @param {context} ctx
   * @param {string} msg
   */
  notFound(ctx, msg) {
    msg = msg || 'not found';
    ctx.throw(ctx.NOT_FOUND_CODE, msg);
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

  /**
   * md5加密
   * @param {string} str
   */
  async md5(str) {
    return md5(str);
  },

};
