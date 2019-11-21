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

  async create(data) {
    const { app } = this;
    const card = await app.model.WinningRecord.create(data);
    return card;
  }

  async update(data, id) {
    const { app } = this;
    const card = await app.model.WinningRecord.findByPk(id);
    await card.update(data);
  }

  async destroy(id) {
    const { app } = this;
    const card = await app.model.WinningRecord.findByPk(id);
    await card.destroy();
  }
}

module.exports = WinningRecordService;
