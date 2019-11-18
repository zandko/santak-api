'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  const { card, login } = controller;

  router.resources('/card', 'card', card);


  router.post('/login', login.login);
  // swagger
  router.redirect('/', '/swagger-ui.html', 302); // 重定向到swagger-ui.html
};
