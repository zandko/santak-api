'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  constructor(ctx) {
    super(ctx); // 调用父对象上的函数
    this.datebase = this.ctx.model.Admin; // 根据表名获得相应的数据模型
  }
  async index(obj) {
    const cards = await this.datebase.findAll(obj);
    return cards;
  }

  async show(id) {
    const card = await this.datebase.findByPk(id);
    return card;
  }
}

module.exports = AdminService;
