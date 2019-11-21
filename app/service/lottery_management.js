'use strict';

const Service = require('egg').Service;

class LotteryManagementService extends Service {
  async index(obj) {
    const { app } = this;
    const cards = await app.model.LotteryManagement.findAll(obj);
    return cards;
  }

  async show(id) {
    const { app } = this;
    const card = await app.model.LotteryManagement.findByPk(id);
    return card;
  }

  async create(data) {
    const { app } = this;
    const card = await app.model.LotteryManagement.create(data);
    return card;
  }

  async update(data, id) {
    const { app } = this;
    const card = await app.model.LotteryManagement.findByPk(id);
    await card.update(data);
  }

  async destroy(id) {
    const { app } = this;
    const card = await app.model.LotteryManagement.findByPk(id);
    await card.destroy();
  }
}

module.exports = LotteryManagementService;
