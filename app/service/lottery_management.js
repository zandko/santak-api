'use strict';

const Service = require('egg').Service;

class LotteryManagementService extends Service {
  constructor(ctx) {
    super(ctx);
    this.database = ctx.model.LotteryManagement;
  }

  async index(query) {
    const { app } = this;
    try {
      return await this.database.findAll({
        where: query,
        order: app.getSortInfo(),
      });
    } catch (error) {
      throw (error);
    }
  }

  async show(id) {
    try {
      return await this.database.findByPk(id);
    } catch (error) {
      throw (error);
    }
  }

  async create(data) {
    try {
      return await this.database.create(data);
    } catch (error) {
      throw (error);
    }
  }

  async update(data, id) {
    const lotteryManagement = await this.database.findByPk(id);
    if (!lotteryManagement) return lotteryManagement;
    return await lotteryManagement.update(data);
  }

  async destroy(id) {
    const lotteryManagement = await this.database.findByPk(id);
    if (!lotteryManagement) return lotteryManagement;
    return await lotteryManagement.destroy();
  }
}

module.exports = LotteryManagementService;
