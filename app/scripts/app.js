define(['common'], function (angularAMD) {
  'use strict';
  var app = angular.module('angularAmdSample', ['ui.router', 'ngResource','ui.bootstrap']);

  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('order', angularAMD.route({
        url: '/order',
        templateUrl: 'views/order.html',
        controllerUrl: 'order/order_ctrl'
      }))
      .state('home', angularAMD.route({
        url: '/home',
        templateUrl: 'views/home.html',
        controllerUrl: 'main/home_ctrl'
      }))
      .state('rooms', angularAMD.route({
        url: '/rooms',
        templateUrl: 'views/rooms.html',
        controllerUrl: 'rooms/rooms_ctrl'
      }))
      .state('users', angularAMD.route({
        url: '/users',
        templateUrl: 'views/users.html',
        controllerUrl: 'users/users_ctrl'
      }))
      .state('login', angularAMD.route({
        url: '/login',
        templateUrl: 'views/login.html',
        controllerUrl: 'scripts/login.js'
      }))
    ;

    // Else
    $urlRouterProvider
      .otherwise('/login');


  }]);

  return angularAMD.bootstrap(app);
});
