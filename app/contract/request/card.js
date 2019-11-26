'use strict';

module.exports = {
  createCardRequest: {
    card_type: { type: 'integer', required: true, example: 1, comment: '类型: 1普通卡片,0用于填坑位的未抽中卡片' },
    card_name: { type: 'string', required: true, example: '花花卡', comment: '名称' },
    card_icon: { type: 'string', required: true, example: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4279459168,2581479041&fm=26&gp=0.jpg', comment: 'icon' },
    card_num: { type: 'integer', required: true, example: 20, comment: '数量' },
    card_probability: { type: 'integer', required: true, example: 20, comment: '概率' },
    remarks: { type: 'string', required: false, example: '备注', comment: '备注' },
    status: { type: 'integer', required: true, example: 1, comment: '状态: 1正常,0删除' },
  },
  updateCardRequest: {
    card_type: { type: 'integer', required: true, example: 1, comment: '类型: 1普通卡片,0用于填坑位的未抽中卡片' },
    card_name: { type: 'string', required: true, example: '花花卡', comment: '名称' },
    card_icon: { type: 'string', required: true, example: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4279459168,2581479041&fm=26&gp=0.jpg', comment: 'icon' },
    card_num: { type: 'integer', required: true, example: 20, comment: '数量' },
    card_probability: { type: 'integer', required: true, example: 20, comment: '概率' },
    remarks: { type: 'string', required: false, example: '备注', comment: '备注' },
    status: { type: 'integer', required: true, example: 1, comment: '状态: 1正常,0删除' },
  },
};
