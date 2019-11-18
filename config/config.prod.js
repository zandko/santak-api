'use strict';

const fecha = require('fecha');

// sequelize
exports.sequelize = {
  dialect: 'mysql', // 数据库类型
  host: 'santak_mysql', // 数据库地址
  port: 3306, // 端口号
  database: 'santak', // 数据库库名
  username: 'lovelp', // 数据库登陆用户名
  password: 'mm123321', // 数据库登陆密码
  timezone: '+08:00', // 保存为本地时区
  define: {
    createdAt: 'createdTime',
    updatedAt: 'lastModifiedTime',
    freezeTableName: true, // 阻止数据表名变为复数
    timestamps: false, // 阻止model生成createAt和updateAt字段,
    getterMethods: {
      createdTime() {
        const createdTime = this.getDataValue('createdTime');
        if (createdTime) {
          return fecha.format(createdTime, 'YYYY-MM-DD HH:mm:ss');
        }
      },
      lastModifiedTime() {
        const lastModifiedTime = this.getDataValue('lastModifiedTime');
        if (lastModifiedTime) {
          return fecha.format(lastModifiedTime, 'YYYY-MM-DD HH:mm:ss');
        }
      },
    },
  },
};

// redis
// exports.redis = {
//   client: {
//     prot: 6379,
//     host: '127.0.0.1',
//     password: '',
//     db: 0,
//   },
// };

exports.wxconfig = {
  APP_ID: 'wx7425acfdb271ef9a',
  APP_SECRET: 'f1091d2b50f223f1fd394276d84e9fd7',
};
