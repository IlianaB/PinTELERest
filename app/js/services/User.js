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
            var deferred = $q.defer();

            Backend.el.Authentication.logout()
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
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
        },

        create: function (name, displayName, email, password) {
            var deferred = $q.defer();

            Backend.el.Users.register(name, password, {
                Email: email,
                DisplayName: displayName
            })
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    };
}]);