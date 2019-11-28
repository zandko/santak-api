'use strict';

// eslint-disable-next-line strict
module.exports = () => {
  return {
    schedule: {
      cron: '0 0 * * *', // 每日0点执行
      type: 'all',
      immediate: false,
      disable: false,
    },
    async task(ctx) {
      await ctx.service.user.increaseLotteryNum();
    },
  };
};
