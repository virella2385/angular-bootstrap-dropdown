angular.module('app')
     .controller('mainCtrl', ['$http', '$scope', function($http, $scope) {

          //$scope.selected = 'default';
          $scope.name = 'gregg';
          //$scope.array = [];
          $scope.array = [{
                    name: 'chris',
                    value: 1
               }, {
                    name: 'bruce',
                    value: 2
               }, {
                    name: 'clark',
                    value: 3
               },
               {
                    name: 'arthur',
                    value: 4
               }, {
                    name: 'diana',
                    value: 5
               }
          ];

          $scope.testfn = function() {
               console.log('called controller function!');
          };
     }]);
