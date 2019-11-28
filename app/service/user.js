'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    this.database = ctx.model.Users;
  }
  async index(query) {
    try {
      return await this.database.findAll({
        where: query,
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

  async increaseLotteryNum() {
    try {
      const users = await this.database.findAll();
      for (let index = 0; index < users.length; index++) {
        users[index].update({ lottery_num: users[index].lottery_num + 5 });
      }
    } catch (error) {
      throw (error);
    }
  }
}

module.exports = UserService;
