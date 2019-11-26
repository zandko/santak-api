'use strict';

const Service = require('egg').Service;

class PrizeService extends Service {
  constructor(ctx) {
    super(ctx); // 调用父对象上的函数
    this.database = this.ctx.model.Prize; // 根据表名获得相应的数据模型
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
      const prize = await this.database.findByPk(id);
      if (!prize) return prize;
      return await prize.update(data);
    } catch (error) {
      throw (error);
    }
  }

  async destroy(id) {
    try {
      const prize = await this.database.findByPk(id);
      if (!prize) return prize;
      return await prize.destroy();
    } catch (error) {
      throw (error);
    }
  }
}

module.exports = PrizeService;
