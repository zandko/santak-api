'use strict';

const Service = require('egg').Service;

class WinningRecordService extends Service {
  async index(obj) {
    const { app } = this;
    const cards = await app.model.WinningRecord.findAll(obj);
    return cards;
  }

  async show(id) {
    const { app } = this;
    const card = await app.model.WinningRecord.findByPk(id);
    return card;
  }
}

module.exports = WinningRecordService;
