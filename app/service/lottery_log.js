'use strict';

const Service = require('egg').Service;

class LotteryLogService extends Service {
  async index(obj) {
    const { app } = this;
    const cards = await app.model.LotteryLog.findAll(obj);
    return cards;
  }

  async show(id) {
    const { app } = this;
    const card = await app.model.LotteryLog.findByPk(id);
    return card;
  }
}

module.exports = LotteryLogService;
