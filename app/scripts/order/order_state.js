define(['angularAMD'], function (angularAMD) {
  'use strict';
  angularAMD.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('order.list', {
        url: '/list',
        templateUrl: 'views/order/list.html'
      })
      .state('order.edit', {
        url: '/edit',
        templateUrl: 'views/order/edit.html'
      })
      .state('order.print', {
        url: '/ptint',
        templateUrl: 'views/order/print.html'
      })
    ;

    // Else -- This is not working for some reason:
    $urlRouterProvider
      .when('/order', '/order/list');

  }]);

});
