'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  constructor(ctx) {
    super(ctx);
    this.datebase = ctx.model.Admin;
  }

  async index(query) {
    try {
      return await this.datebase.findAll({
        where: query,
      });
    } catch (error) {
      throw (error);
    }
  }

  async show(id) {
    try {
      return await this.datebase.findByPk(id);
    } catch (error) {
      throw (error);
    }
  }
}

module.exports = AdminService;
