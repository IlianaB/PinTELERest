myApp.controller('DashboardController', ['$scope', 'Pin', function ($scope, Pin) {
    Pin.getAllByUser($scope.$parent.currentUserId)
        .then(function (data) {
            $scope.pins = data.result;
        }, function (error) {
            console.log(error);
        });
}]);