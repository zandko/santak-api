'use strict';

module.exports = {
  createCardRequest: {
    title: { type: 'string', required: true, example: '花花卡' },
    picture: { type: 'integer', required: true, example: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4279459168,2581479041&fm=26&gp=0.jpg' },
    probability: { type: 'integer', required: true, example: '20' },
  },
  updateCardRequest: {
    title: { type: 'string', example: '花花卡' },
    picture: { type: 'integer', example: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4279459168,2581479041&fm=26&gp=0.jpg' },
    probability: { type: 'integer', example: '20' },
  },
};
