myApp.controller('RegisterController', ['$scope', '$location', 'User',
    function ($scope, $location, User) {
        if ($scope.$parent.logged) {
            $location.path('/home');

            return;
        }

        $scope.createUser = function () {
            User.create($scope.username, $scope.displayName, $scope.email, $scope.password)
                .then(function (data) {
                    $scope.$parent.$parent.logged = true;
                    $scope.$parent.$parent.currentUserId = data.result.Id;
                    $scope.$parent.$parent.name = $scope.displayName;
                    $scope.username = '';
                    $scope.displayName = '';
                    $scope.email = '';
                    $scope.password = '';
                    $location.path('/dashboard');
                }, function (error) {
                    console.log(error);
                });
        };
    }]);
