/* 
* @Author: jaumebonet
* @Date:   2015-05-19 22:50:14
* @Last Modified by:   jaumebonet
* @Last Modified time: 2015-05-20 00:27:25
*/

(function(){
    var app = angular.module('info', ['ngSanitize']);

    app.directive('serverInfo', function(){
        return {
            restrict: 'E',
            templateUrl: './app/content/box.html',
            controller: ['$http', '$rootScope', function($http, $rootScope){
                this.resetStatus = function() {
                    $rootScope.status = 0;
                };
                this.isIntro = function() {
                    return $rootScope.status == 0;
                };
                this.getCurrentTitle = function() {
                    return $rootScope.content[$rootScope.server[$rootScope.status]]['title'];
                };
            }],
            controllerAs: 'sinfo'
        };
    });
})();
