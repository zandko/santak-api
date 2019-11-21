'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { admin, weapp } = controller;

  router.post('/v1/admin/login', admin.login.authentication);
  router.get('/v1/admin', admin.administrators.show);
  router.resources('/v1/admin/cards', 'cards', admin.cards);


  router.post('/v1/weapp/login', weapp.login.authentication);
  router.get('/v1/weapp/cards/drawcar', weapp.cards.drawcard);

  // swagger
  router.redirect('/', '/swagger-ui.html', 302); // 重定向到swagger-ui.html
};
