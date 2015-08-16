myApp.controller('MainController', ['$scope', 'User', function ($scope, User) {
    $scope.login = function () {
        User.login($scope.name, $scope.password)
            .then(function (data) {
                $scope.logged = true;
                $scope.$parent.currentUserId = data.result.principal_id;
            }, function (error) {
                console.log(error);
            });
    };

    $scope.logout = function () {
        User.logout();
        $scope.logged = false;
        $scope.$parent.currentUserId = null;
    }
}]);