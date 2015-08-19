myApp.factory('Backend', [function () {
    var el = new Everlive(apiKey);

    return {
        el: el
    };
}]);