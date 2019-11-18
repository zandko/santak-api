'use strict';

// mysql
exports.sequelize = {
  dialect: 'mysql', // 数据库类型
  host: '127.0.0.1', // 数据库地址
  port: 3306, // 端口号
  database: 'lovelp', // 数据库库名
  username: 'root', // 数据库登陆用户名
  password: '', // 数据库登陆密码
  timezone: '+08:00', // 保存为本地时区
  define: {
    freezeTableName: true, // 阻止数据表名变为复数
    timestamps: false, // 阻止model生成createAt和updateAt字段
  },
};

// redis
exports.redis = {
  client: {
    prot: 6379,
    host: '127.0.0.1',
    password: '',
    db: 0,
  },
};

// Socket.IO
exports.io = {
  init: { }, // passed to engine.io
  namespace: {
    '/': {
      connectionMiddleware: [ 'auth' ],
      packetMiddleware: [],
    },
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
  },
};
