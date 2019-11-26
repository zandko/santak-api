'use strict';

const fecha = require('fecha');

// sequelize
exports.sequelize = {
  dialect: 'mysql', // 数据库类型
  host: '47.100.194.4', // 数据库地址
  port: 3306, // 端口号
  database: 'santak', // 数据库库名
  username: 'lovelp', // 数据库登陆用户名
  password: 'mm123321', // 数据库登陆密码
  timezone: '+08:00', // 保存为本地时区
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true, // 阻止数据表名变为复数
    timestamps: true,
    getterMethods: {
      created_at() {
        const created_at = this.getDataValue('created_at');
        if (created_at) {
          return fecha.format(created_at, 'YYYY-MM-DD HH:mm:ss');
        }
      },
      updated_at() {
        const updated_at = this.getDataValue('updated_at');
        if (updated_at) {
          return fecha.format(updated_at, 'YYYY-MM-DD HH:mm:ss');
        }
      },
    },
  },
};

// redis
exports.redis = {
  client: {
    port: 6379, // Redis port
    host: '47.100.194.4', // Redis host
    password: '123456',
    db: 0,
  },
};

exports.wxconfig = {
  APP_ID: 'wx7425acfdb271ef9a',
  APP_SECRET: 'f1091d2b50f223f1fd394276d84e9fd7',
};
