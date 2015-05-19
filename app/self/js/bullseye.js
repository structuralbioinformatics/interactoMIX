/* 
* @Author: jaumebonet
* @Date:   2015-05-19 14:23:10
* @Last Modified by:   jaumebonet
* @Last Modified time: 2015-05-19 16:01:12
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
            }],
            controllerAs: 'beye'
        };
    });
})();