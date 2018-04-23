'use strict';

// Declare app level module which depends on filters, and services
angular.module('dxApp', [
    'ngRoute',
    'dxApp.controllers',
    'dx'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', { templateUrl: 'partials/home.html', controller: 'HomeCtrl' });
        $routeProvider.otherwise({ redirectTo: '/home' });
    }]);


