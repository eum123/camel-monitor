'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('app', [
    'ngRoute'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/', {
            templateUrl: 'info/routeInfo.html'
            // controller: navMenuController
        })
        .otherwise({redirectTo: '/'});
}]);


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
