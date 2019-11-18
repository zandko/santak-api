'use strict';

// eslint-disable-next-line strict
module.exports = () => {
  return {
    schedule: {
      interval: '10s',
      type: 'all',
      immediate: false,
      disable: true,
    },
    async task(ctx) {
      ctx.logger.info('更新缓存');
    },
  };
};
