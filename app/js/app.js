var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html'
        })
        .otherwise({redirectTo: '/home'});
});