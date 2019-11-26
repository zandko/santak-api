'use strict';
const _ = require('lodash');
const fecha = require('fecha');

const TRANSITION = Symbol('Application#transition');

module.exports = {
  _,
  dayFormat: '%Y-%m-%d',
  dayTimeFormat: '%Y-%m-%d %H:%i:%s',

  // 日期格式化
  formatToDay(date = new Date()) {
    return fecha.format(date, 'YYYY-MM-DD');
  },
  formatToDayNoYear(date = new Date()) {
    return fecha.format(date, 'MM-DD');
  },
  formatToDayStart(date = new Date()) {
    return fecha.format(date, 'YYYY-MM-DD 00:00:00');
  },
  formatToDayEnd(date = new Date()) {
    return fecha.format(date, 'YYYY-MM-DD 23:59:59');
  },
  formatToDayTime(date = new Date()) {
    return fecha.format(date, 'YYYY-MM-DD HH:mm:ss');
  },

  async getRand(arr) {
    const result = 0;
    let sum = 0;
    arr.forEach(val => {
      sum += val.probability;
    });
    for (const index in arr) {
      const rand = Math.round(Math.random() * (sum - 1) + 1);
      if (rand <= arr[index].probability) {
        return arr[index];
      }
      sum -= arr[index].probability;
    }
    return result;
  },

  // 获取当前时间相差 count 天的时间
  getDifferDate(count = 0, date = new Date()) {
    const time = date.getTime();
    const oneDayTime = 86400000;

    return new Date(time + oneDayTime * count);
  },

  // 获取排序条件数组
  getSortInfo(sort) {
    return _.isEmpty(sort) ? [[ 'created_at', 'DESC' ]] : sort;
  },

  // 事务
  async transition() {
    if (!this[TRANSITION]) {
      this[TRANSITION] = await this.model.transaction();
    }
    return this[TRANSITION];
  },
  getTransition() {
    return this[TRANSITION];
  },
  deleteTransition() {
    this[TRANSITION] = null;
  },

  // 检查update
  checkUpdate(arr, message) {
    if (arr.includes(0)) {
      const error = new Error(message || '保存失败，请刷新后重试！');
      error.status = 422;
      throw error;
    }
  },
  // 检查delete
  checkDelete(count, message) {
    if (!count) {
      const error = new Error(message || '删除失败，请刷新后重试！');
      error.status = 422;
      throw error;
    }
  },
};
