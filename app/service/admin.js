'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  constructor(ctx) {
    super(ctx);
    this.datebase = this.ctx.model.Admin;
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
