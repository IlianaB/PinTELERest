myApp.controller('HomeController', ['$scope', 'Pin', function ($scope, Pin) {
    $scope.category = "";

    Pin.getAll().then(function (data) {
        $scope.pins = data.result;
    });
}]);