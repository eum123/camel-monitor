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

    // $scope.click = function(id) {
    //     console.log(id);
    //     $("#nav-link active").class('nav-link');
    //     console.log($("#nav-link active"));
    // }

}]);

app.controller('RouteInfoCtrl', [function () {

}]);


/**
 * 라우터 파일 선택시(nav-link) 이벤트
 */
$('div').on('click', 'a', function (e) {

    $('#v-pills-tab a').each(function () {
        console.log($(this).attr('class', 'nav-link'));
    })

    e.preventDefault()
});


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