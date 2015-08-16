myApp.controller('MainController', ['$scope', 'User', function ($scope, User) {
    $scope.login = function () {
        User.login($scope.name, $scope.password)
            .then(function (data) {
                $scope.logged = true;
            }, function (error) {
                console.log(error);
            });
    };
}]);