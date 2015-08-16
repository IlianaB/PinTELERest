var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html'
        })
        .otherwise({redirectTo: '/home'});
});