myApp.controller('DashboardController', ['$scope', '$location', 'Pin', function ($scope, $location, Pin) {
    if (!$scope.$parent.logged) {
        $location.path('/home');

        return;
    }

    Pin.getAllByUser($scope.$parent.currentUserId)
        .then(function (data) {
            $scope.pins = data.result;
        }, function (error) {
            console.log(error);
        });
}]);