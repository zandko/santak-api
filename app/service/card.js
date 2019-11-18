'use strict';

const Service = require('egg').Service;

class CardService extends Service {
  async index() {
    const { app } = this;
    const cards = await app.model.Cards.findAll();
    return cards;
  }

  async show(id) {
    const { app } = this;
    const card = await app.model.Cards.findByPk(id);
    return card;
  }

  async create(data) {
    const { app } = this;
    const card = await app.model.Cards.create(data);
    return card;
  }

  async update(data, id) {
    const { app } = this;
    const card = await app.model.Cards.findByPk(id);
    if (!card) return;
    await card.update(data);
    return card;
  }

  async destroy(id) {
    const { app } = this;
    const card = await app.model.Cards.findByPk(id);
    if (!card) return;
    await card.destroy();
  }
}

module.exports = CardService;
