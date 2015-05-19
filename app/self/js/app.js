/* 
* @Author: jaumebonet
* @Date:   2015-05-19 14:25:18
* @Last Modified by:   jaumebonet
* @Last Modified time: 2015-05-19 16:14:27
*/

(function(){
    var app = angular.module('interactomix', ['bullseye']);

    app.controller('MixController', ['$http', '$rootScope', function($http, $rootScope){
        $rootScope.status = 0;
        $rootScope.server = ['intro', 'biana', 'bips', 'iloops', 'guildify', 'modlink',
                             'vorffip', 'mvorffip', 'vdock', 'pipred', 'pcrpidb', 'pcpriw'];
        // $http.get('./data/user/user.json').success(function(data){
        //     $rootScope.user = data;
        // });
        // this.content = new Array();
        // this.content = ['education', 'experience', 'publications', 'grants'];

        this.currentDate = function(){
            return new Date();
        };
    }]);
})();