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
app.controller('routeFilesCtrl', ['$scope', function ($scope)  {

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

app.filter('getFileName', function(){
   return function (input) {
       if(input.indexOf('/') >= 0 ) {
           return input.substring(input.lastIndexOf('/') + 1);
       } else {
           return input;
       }

   }
});

$('div').on('click', 'a', function (e) {

    $(".navbar-link").each(function() {
        $(this).addClass("active");
    });

    //console.log($('div').children('.nav-link active'));

    //console.log(this.parentNode.childNodes);

    console.log(e);

    // $('div').children('a').forEach(function(value, index, array1) {
    //     value.tab('hide');
    // });

     //$(this).tab('show')
     e.preventDefault()
});

