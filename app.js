angular.module('app', [])
     .directive('vDrop', function() {
          return {
               restrict: 'AE',
               require: 'ngModel',
               templateUrl: 'boot-dropdown.html',
               scope: {
                    list: '=',
                    vTitle: '=',
                    localFn: '&vOnselect'
               },
               link: function(scope, elem, attr, model) {
                    scope.localFn();
                    scope.selected_option = {};
                    scope.selected_option.name = 'select one';

                    if (model.$valid) {
                         model.$setValidity();
                    }
                    // another test comment
                    scope.showval = function() {
                         var option = this.option;
                         model.$setViewValue(option);
                         scope.selected_option = option;
                         model.$setValidity();
                         scope.localFn();
                    };
               }
          };
     });
