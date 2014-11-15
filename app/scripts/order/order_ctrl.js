define(['order/order_state','main/state_name'], function () {
  'use strict';
  return ['$scope','$modal','$log', function ($scope,$stateParams,$modal,$log) {
    $scope.orderId = $stateParams;

////
    $scope.openOrder = function(size) {
        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });
    };



////






    //$scope.message = 'Comprehensive User List';
    $scope.invoice = {
        items: [{
            qty: 10,
            description: 'item',
            cost: 9.95}]
    };

    $scope.addItem = function() {
        $scope.invoice.items.push({
            qty: 1,
            description: '',
            cost: 0
        });
    };

    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    };
    
    $scope.items = ['item1', 'item2', 'item3'];

  

  $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * item.cost;
        })

        return total;
  };
  }];
});
