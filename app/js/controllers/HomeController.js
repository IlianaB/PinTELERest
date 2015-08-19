myApp.controller('HomeController', ['$scope', 'Pin', function ($scope, Pin) {
    $scope.category = "";

    Pin.getAll().then(function (data) {
        $scope.pins = data.result;
    });

    $scope.vote = function (pin) {
        var votes = pin.Vote.Value + 1;

        Pin.vote(pin.Id, votes)
            .then(function (data) {
                pin.Vote.Value = votes;
            });
    };
}]);