/* 
* @Author: jaumebonet
* @Date:   2015-05-19 14:25:18
* @Last Modified by:   Jaume Bonet
* @Last Modified time: 2016-03-09 14:18:08
*/

(function(){
    var app = angular.module('interactomix', ['bullseye', 'info', 'ui.bootstrap']);

    app.controller('MixController', ['$http', '$location', '$rootScope', function($http, $location, $rootScope){
        $rootScope.status = 0;
        $rootScope.over   = 0;
        $rootScope.server = ['intro', 'biana', 'bips', 'iloops', 'guildify', 'modlink',
                             'vorffip', 'mvorffip', 'vdock', 'pipred', 'pcrpidb', 'pcpriw'];
        $http.get('./app/content/interactoMIX.json').success(function(data){
            $rootScope.content = data;
        });

        this.currentDate = function(){
            return new Date();
        };
        this.isOfficialURL = function(){
            return $location.absUrl() == "http://interactomix.com";
        }
    }]);

    app.directive('pickHeight', function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                scope.$watch(function() {
                    scope.beh = element[0].offsetHeight;
                });
            }
        };
    });
    app.directive('setHeight', function($window) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                var resize = function(){
                    element.css('height', (scope.beh - 15) + "px");
                    angular.element($window).triggerHandler('resize');
                };
                scope.$watch('beh', function() {resize();});
            }
        };
    });
    app.directive('isolateScrolling', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
              element.bind('mousewheel', function (e) {
                if ((e.deltaY > 0 && this.clientHeight + this.scrollTop == this.scrollHeight) ||
                    (e.deltaY < 0 && this.scrollTop == 0)) {
                  e.stopPropagation();
                  e.preventDefault();
                  return false;
                }

                return true;
              });
            }
        };
    });
})();