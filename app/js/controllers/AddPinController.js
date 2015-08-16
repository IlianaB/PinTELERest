myApp.controller('AddPinController', ['$scope', '$location', 'Pin', function ($scope, $location, Pin) {
    if (!$scope.$parent.logged) {
        $location.path('/home');

        return;
    }

    $scope.createPin = function () {
        Pin.create($scope.pinName, $scope.url, $scope.category)
            .then(function () {
                $location.path('/dashboard');
            }, function (error) {
                console.log(error);
            });
    };
}]);