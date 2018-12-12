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
// app.controller('routeFilesCtrl', ['$scope', function ($scope) {
//
//     var data = JSON.parse('{\n' +
//         '  "result_code": "OK",\n' +
//         '  "result_message": "정상",\n' +
//         '  "result": [\n' +
//         '    "/work/manjin/project/camel-launcher/src/test/resources/conf/route/process.xml",\n' +
//         '    "/work/manjin/project/camel-launcher/src/test/resources/conf/route/process1.xml"\n' +
//         '  ]\n' +
//         '}');
//     $scope.routeFiles = data.result;
//
//     //라우터 파일 선택시(nav-link) 이벤트
//     $scope.routeFileNameClick = function($event) {
//         angular.element('#v-pills-tab a').attr('class', 'nav-link');
//         $event.preventDefault();
//     }
//
// }]);
//
// app.controller('routeStatisticCtrl', ['$scope', function ($scope) {
//     var routeData = JSON.parse('{\n' +
//         '  "result_code": "OK",\n' +
//         '  "result_message": "정상",\n' +
//         '  "result": [\n' +
//         '    {\n' +
//         '      "fileName": "/work/manjin/project/camel-launcher/src/test/resources/conf/route/process.xml",\n' +
//         '      "routeId": "process",\n' +
//         '      "startTimestamp": "2018-12-12 12:02:32",\n' +
//         '      "exchangesTotal": 173,\n' +
//         '      "exchangesFailed": 0,\n' +
//         '      "exchangesInflight": 0,\n' +
//         '      "lastProcessingTime": 1,\n' +
//         '      "minProcessingTime": 0,\n' +
//         '      "maxProcessingTime": 10,\n' +
//         '      "uptimeMills": 864255,\n' +
//         '      "description": "description.... 처음에 있어야함",\n' +
//         '      "state": "Started"\n' +
//         '    },\n' +
//         '    {\n' +
//         '      "fileName": "/work/manjin/project/camel-launcher/src/test/resources/conf/route/process1.xml",\n' +
//         '      "routeId": "process",\n' +
//         '      "startTimestamp": "2018-12-12 12:02:32",\n' +
//         '      "exchangesTotal": 173,\n' +
//         '      "exchangesFailed": 0,\n' +
//         '      "exchangesInflight": 0,\n' +
//         '      "lastProcessingTime": 1,\n' +
//         '      "minProcessingTime": 0,\n' +
//         '      "maxProcessingTime": 10,\n' +
//         '      "uptimeMills": 864255,\n' +
//         '      "description": "description.... 처음에 있어야함",\n' +
//         '      "state": "Started"\n' +
//         '    }\n' +
//         '  ]\n' +
//         '}');
//
//     $scope.routeStatistic = routeData.result;
// }]);
//
// /////////////////////////////////////
// ////  service
// /////////////////////////////////////
//
//
//
//
// /////////////////////////////////////
// ////  filter
// /////////////////////////////////////
// app.filter('getFileName', function () {
//     return function (input) {
//         if (input.indexOf('/') >= 0) {
//             return input.substring(input.lastIndexOf('/') + 1);
//         } else {
//             return input;
//         }
//
//     }
// });