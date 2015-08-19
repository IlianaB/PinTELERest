myApp.controller('EditPinController', ['$scope', '$location', '$routeParams', 'Pin',
    function ($scope, $location, $routeParams, Pin) {
        if (!$scope.$parent.logged) {
            $location.path('/home');

            return;
        }

        Pin.getById($routeParams.id)
            .then(function (data) {
                var pin = data.result;

                $scope.pinName = pin.Name;
                $scope.url = pin.URL;
                $scope.category = pin.Category;
            });

        $scope.updatePin = function () {
            Pin.update($routeParams.id, $scope.pinName, $scope.url, $scope.category)
                .then(function () {
                    $location.path('/dashboard');
                }, function (error) {
                    console.log(error);
                });
        };
    }]);
