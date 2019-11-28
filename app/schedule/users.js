'use strict';

// eslint-disable-next-line strict
module.exports = () => {
  return {
    schedule: {
      // cron: '0 0 2 * * ?', // 每日2点执行
      interval: '10s',
      type: 'all',
      immediate: false,
      disable: true,
    },
    async task(ctx) {
      const { user } = ctx.service;
      console.log('user.increaseLotteryNum()， 时间点： ' + new Date().getTime());
      await user.increaseLotteryNum();
    },
  };
};
