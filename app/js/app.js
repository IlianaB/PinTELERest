var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html'
        })
        .when('/addpin', {
            templateUrl: 'views/addPin.html'
        })
        .when('/editpin/:id', {
            templateUrl: 'views/editPin.html'
        })
        .otherwise({redirectTo: '/home'});
});