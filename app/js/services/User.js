myApp.factory('User', ['$q', 'Backend', function ($q, Backend) {
    return {
        login: function (user, password) {
            var deferred = $q.defer();

            Backend.el.Authentication.login(user, password)
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },

        logout: function () {
            Backend.el.Authentication.clearAuthorization();
        },

        getCurrentUser: function () {
            var deferred = $q.defer();

            Backend.el.Users.currentUser()
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
}]);