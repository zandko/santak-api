'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { admin, weapp, utils } = controller;

  /* =================== Admin Start ================================= */
  /** 登陆 */
  router.post('/v1/admin/login', admin.login.authentication);
  /** 管理员信息 */
  router.get('/v1/admin', admin.administrators.show);
  /** 用户管理 */
  router.get('/v1/admin/users', admin.users.index);
  router.get('/v1/admin/users/:id', admin.users.show);
  /** 卡片管理 */
  router.resources('/v1/admin/cards', 'cards', admin.cards);
  /** 奖品管理 */
  router.resources('/v1/admin/prizes', 'prizes', admin.prizes);
  /** 活动管理 */
  router.resources('/v1/admin/lotteryManagements', 'lotteryManagements', admin.lotteryManagements);
  /** 抽奖活动配置 */
  router.resources('/v1/admin/lotteryManagementDeploys', 'lotteryManagementDeploys', admin.lotteryManagementDeploys);
  /** 抽奖记录管理 */
  router.get('/v1/admin/lotteryLogs', admin.lotteryLogs.index);
  router.get('/v1/admin/lotteryLogs/:id', admin.lotteryLogs.show);
  /** 中奖记录管理 */
  router.get('/v1/admin/winningRecords', admin.winningRecords.index);
  router.get('/v1/admin/winningRecords/:id', admin.winningRecords.show);
  /* =================== Admin Stop ================================= */


  /* =================== Index Start ================================= */
  router.post('/v1/weapp/login', weapp.login.authentication);
  router.get('/v1/weapp/cards/drawcar', weapp.cards.drawcard);
  /* =================== Index Stop ================================= */


  /* =================== Utils Start ================================= */
  router.post('/v1/upload', utils.upload.upload);
  /* =================== Utils Stop ================================= */
  // swagger
  router.redirect('/', '/swagger-ui.html', 302); // 重定向到swagger-ui.html
};
