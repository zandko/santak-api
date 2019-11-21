'use strict';

module.exports = {
  weappLoginRequest: {
    code: { type: 'string', required: true, example: '081nSzAU0j4xJY1gnKzU0OcEAU0nSzAu' },
  },
  adminLoginRequest: {
    username: { type: 'string', required: true, example: 'admin' },
    password: { type: 'string', required: true, example: 'admin' },
  },
};
