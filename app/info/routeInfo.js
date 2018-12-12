'use strict';

// var routeInfo = angular.module('app.routeInfo', ['ngRoute'])
//
//     .config(['$routeProvider', function ($routeProvider) {
//         $routeProvider.when('/routeInfo', {
//             templateUrl: '/camel-monitor/app/info/routeInfo.html',
//             controller: 'RouteInfoCtrl'
//         });
//
//
//     }]);

//app create by main.js
app.controller('routeFilesCtrl', ['$scope', function ($scope) {

    var data = JSON.parse('{\n' +
        '  "result_code": "OK",\n' +
        '  "result_message": "정상",\n' +
        '  "result": [\n' +
        '    "/work/manjin/project/camel-launcher/src/test/resources/conf/route/process.xml",\n' +
        '    "/work/manjin/project/camel-launcher/src/test/resources/conf/route/process1.xml"\n' +
        '  ]\n' +
        '}');
    $scope.routeFiles = data.result;

    //라우터 파일 선택시(nav-link) 이벤트
    $scope.routeFileNameClick = function($event) {
        angular.element('#v-pills-tab a').attr('class', 'nav-link');
        $event.preventDefault();
    }

}]);

app.controller('RouteInfoCtrl', [function () {

}]);



/////////////////////////////////////
////  filter
////////////////////////////////////
app.filter('getFileName', function () {
    return function (input) {
        if (input.indexOf('/') >= 0) {
            return input.substring(input.lastIndexOf('/') + 1);
        } else {
            return input;
        }

    }
});