'use strict';

module.exports = {
  createLotteryManagementDeployRequest: {
    lottery_id: { type: 'integer', required: true, example: 1 },
    prize_list: { type: 'string', required: true, example: '[{"prize_id":1,"num":1},{"prize_id":2,"num":1}]' },
    card_list: { type: 'string', required: true, example: '[{"card_id":1,"num":1},{"card_id":2,"num":1}]' },
  },
  updateLotteryManagementDeployRequest: {
    lottery_id: { type: 'integer', required: true, example: 1 },
    prize_list: { type: 'string', required: true, example: '[{"prize_id":1,"num":1},{"prize_id":2,"num":1}]' },
    card_list: { type: 'string', required: true, example: '[{"card_id":1,"num":1},{"card_id":2,"num":1}]' },
  },
};
