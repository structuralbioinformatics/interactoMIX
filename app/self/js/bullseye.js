/* 
* @Author: jaumebonet
* @Date:   2015-05-19 14:23:10
* @Last Modified by:   jaumebonet
* @Last Modified time: 2015-05-20 12:36:32
*/

(function(){
    var app = angular.module('bullseye', []);

    app.directive('bullsEye', function(){
        return {
            restrict: 'E',
            templateUrl: './app/content/interactoMIX.svg',
            controller: ['$http', '$rootScope', function($http, $rootScope){
                this.selectStatus = function(value){
                    $rootScope.status = value;
                };
                this.exploreStatus = function(value){
                    $rootScope.over = value;
                };
                this.isActive = function(value) {
                    if ($rootScope.status == 0) {
                        return true;
                    };
                    if ($rootScope.status == value) {
                        return true;
                    };
                    return false;
                };
                this.isExplored = function(value) {
                    if ($rootScope.status == value) {
                        return false;
                    };
                    return $rootScope.over == value;
                }
            }],
            controllerAs: 'beye'
        };
    });
})();