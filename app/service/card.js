'use strict';

const Service = require('egg').Service;

class CardService extends Service {
  constructor(ctx) {
    super(ctx); // 调用父对象上的函数
    this.database = this.ctx.model.Card; // 根据表名获得相应的数据模型
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
    try {
      const card = await this.database.findByPk(id);
      if (!card) return card;
      return await card.update(data);
    } catch (error) {
      throw (error);
    }
  }

  async destroy(id) {
    try {
      const card = await this.database.findByPk(id);
      if (!card) return card;
      return await card.destroy();
    } catch (error) {
      throw (error);
    }
  }
}

module.exports = CardService;
