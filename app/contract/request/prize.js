'use strict';

module.exports = {
  createPrizeRequest: {
    prize_type: { type: 'integer', required: true, example: 1, comment: '奖品类型 1.虚拟物品，2.邮寄实物，3.用于填坑位的未中奖奖品' },
    prize_name: { type: 'string', required: true, example: 'ipad', comment: '奖品名称' },
    prize_icon: { type: 'string', required: true, example: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4279459168,2581479041&fm=26&gp=0.jpg', comment: '奖品图片' },
    prize_price: { type: 'integer', required: true, example: 100, comment: '奖品价值' },
    prize_num: { type: 'integer', required: true, example: 24, comment: '奖品数量' },
    prize_lev: { type: 'integer', required: true, example: 1, comment: '奖品等级' },
    prize_probability: { type: 'integer', required: true, example: 25, comment: '中奖概率' },
    remarks: { type: 'string', required: true, example: '666', comment: '备注' },
    status: { type: 'integer', required: true, example: 1, comment: '状态 1：正常，0删除' },
    created_at: { type: 'string', required: true, example: '2019-11-21 23:59:59.499', comment: '创建时间' },
    updated_at: { type: 'string', required: true, example: '2019-11-21 23:59:59.499', comment: '创建时间' },
    deleted_at: { type: 'string', required: true, example: '2019-11-21 23:59:59.499', comment: '删除时间' },
  },
  updatePrizeRequest: {
    prize_type: { type: 'integer', required: true, example: 1, comment: '奖品类型 1.虚拟物品，2.邮寄实物，3.用于填坑位的未中奖奖品' },
    prize_name: { type: 'string', required: true, example: 'ipad', comment: '奖品名称' },
    prize_icon: { type: 'string', required: true, example: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4279459168,2581479041&fm=26&gp=0.jpg', comment: '奖品图片' },
    prize_price: { type: 'integer', required: true, example: 100, comment: '奖品价值' },
    prize_num: { type: 'integer', required: true, example: 24, comment: '奖品数量' },
    prize_lev: { type: 'integer', required: true, example: 1, comment: '奖品等级' },
    prize_probability: { type: 'integer', required: true, example: 25, comment: '中奖概率' },
    remarks: { type: 'string', required: true, example: '666', comment: '备注' },
    status: { type: 'integer', required: true, example: 1, comment: '状态 1：正常，0删除' },
    created_at: { type: 'string', required: true, example: '2019-11-21 23:59:59.499', comment: '创建时间' },
    updated_at: { type: 'string', required: true, example: '2019-11-21 23:59:59.499', comment: '创建时间' },
    deleted_at: { type: 'string', required: true, example: '2019-11-21 23:59:59.499', comment: '删除时间' },
  },
};

