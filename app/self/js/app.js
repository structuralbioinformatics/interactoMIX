/* 
* @Author: jaumebonet
* @Date:   2015-05-19 14:25:18
* @Last Modified by:   jaumebonet
* @Last Modified time: 2015-05-20 12:45:16
*/

(function(){
    var app = angular.module('interactomix', ['bullseye', 'info']);

    app.controller('MixController', ['$http', '$rootScope', function($http, $rootScope){
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
    }]);

    app.directive('pickHeight', function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                scope.beh = element[0].offsetHeight;
            }
        };
    });
    app.directive('setHeight', function($window) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                element.css('height', (scope.beh - 15) + "px");
                angular.element($window).triggerHandler('resize')
            }
        };
    });
})();