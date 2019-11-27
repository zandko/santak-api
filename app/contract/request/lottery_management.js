'use strict';

module.exports = {
  createLotteryManagementRequest: {
    lottery_name: { type: 'integer', required: true, example: '年年抽五福', comment: '名称' },
    share_title: { type: 'string', required: false, example: '分享标题', comment: '分享标题' },
    share_icon: { type: 'string', required: false, example: '分享图片地址', comment: '分享图片地址' },
    share_intro: { type: 'string', required: false, example: '分享描述', comment: '分享描述' },
    online_start_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49', comment: '上线时间' },
    online_end_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49', comment: '下线时间' },
    start_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49', comment: '开始时间' },
    stop_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49', comment: '结束时间' },
    lottery_type: { type: 'integer', required: true, example: 1, comment: '类型: 1集卡,2抽奖' },
    lottery_num: { type: 'integer', required: true, example: 0, comment: '抽奖次数' },
    status: { type: 'integer', required: true, example: 1, comment: '状态: 2开始,1正常,0删除,' },
  },
  updateLotteryManagementRequest: {
    lottery_name: { type: 'integer', required: true, example: '年年抽五福', comment: '名称' },
    share_title: { type: 'string', required: false, example: '分享标题', comment: '分享标题' },
    share_icon: { type: 'string', required: false, example: '分享图片地址', comment: '分享图片地址' },
    share_intro: { type: 'string', required: false, example: '分享描述', comment: '分享描述' },
    online_start_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49', comment: '上线时间' },
    online_end_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49', comment: '下线时间' },
    start_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49', comment: '开始时间' },
    stop_date: { type: 'string', required: true, example: '2019-11-21 23:59:59.49', comment: '结束时间' },
    lottery_type: { type: 'integer', required: true, example: 1, comment: '类型: 1集卡,2抽奖' },
    lottery_num: { type: 'integer', required: true, example: 0, comment: '抽奖次数' },
    status: { type: 'integer', required: true, example: 1, comment: '状态: 2开始,1正常,0删除,' },
  },
};
