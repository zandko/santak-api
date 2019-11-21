'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  async index(obj) {
    const { app } = this;
    const cards = await app.model.Admin.findAll(obj);
    return cards;
  }

  async show(id) {
    const { app } = this;
    const card = await app.model.Admin.findByPk(id);
    return card;
  }

  async create(data) {
    const { app } = this;
    const card = await app.model.Admin.create(data);
    return card;
  }

  async update(data, id) {
    const { app } = this;
    const card = await app.model.Admin.findByPk(id);
    await card.update(data);
  }

  async destroy(id) {
    const { app } = this;
    const card = await app.model.Admin.findByPk(id);
    await card.destroy();
  }
}

module.exports = AdminService;
