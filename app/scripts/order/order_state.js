define(['angularAMD'], function (angularAMD) {
  'use strict';
  angularAMD.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {



    $stateProvider
      .state('order.list', {
        url: '/list',
        templateUrl: 'views/order/list.html'
      })
      .state('order.edit', {
        url: '/edit/{orderId:int}',
        templateUrl: 'views/order/edit.html',
        controller: function ($scope,$stateParams) {
            $scope.orderId = $stateParams.orderId;
            console.log($stateParams.orderId)
        }
      })
      .state('order.print', {
        url: '/print',
        templateUrl: 'views/order/print.html'
      });

      //$urlRouterProvider.when("order", "order/list");
      


  }]);

});
