'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('app', [
    'ngRoute'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html'
        })
        .when('/routeInfo', {
            templateUrl: 'info/routeInfo.html'
            // controller: navMenuController
        })
        .when('/routeConfig', {
            templateUrl: 'config/routeConfig.html'
        })
        .otherwise({redirectTo: '/'});
}]);


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
