'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async index(obj) {
    const { app } = this;
    const cards = await app.model.User.findAll(obj);
    return cards;
  }

  async show(id) {
    const { app } = this;
    const card = await app.model.User.findByPk(id);
    return card;
  }

  async create(data) {
    const { app } = this;
    const card = await app.model.User.create(data);
    return card;
  }

  async update(data, id) {
    const { app } = this;
    const card = await app.model.User.findByPk(id);
    await card.update(data);
  }

  async destroy(id) {
    const { app } = this;
    const card = await app.model.User.findByPk(id);
    await card.destroy();
  }
}

module.exports = UserService;
