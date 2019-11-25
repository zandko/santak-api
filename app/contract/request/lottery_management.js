'use strict';

module.exports = {
  createLotteryManagementRequest: {
    lottery_name: { type: 'integer', required: true, example: '年年抽五福' },
    share_title: { type: 'string', required: false, example: '分享标题' },
    share_icon: { type: 'string', required: false, example: '分享图片地址' },
    share_intro: { type: 'string', required: false, example: '分享描述' },
    online_start_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49' },
    online_end_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49' },
    start_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49' },
    stop_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49' },
    lottery_type: { type: 'integer', required: true, example: 1 },
    lottery_num: { type: 'integer', required: true, example: 0 },
  },
  updateLotteryManagementRequest: {
    lottery_name: { type: 'integer', required: true, example: '年年抽五福' },
    share_title: { type: 'string', required: false, example: '分享标题' },
    share_icon: { type: 'string', required: false, example: '分享图片地址' },
    share_intro: { type: 'string', required: false, example: '分享描述' },
    online_start_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49' },
    online_end_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49' },
    start_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49' },
    stop_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49' },
    lottery_type: { type: 'integer', required: true, example: 1 },
    lottery_num: { type: 'integer', required: true, example: 0 },
  },
};
