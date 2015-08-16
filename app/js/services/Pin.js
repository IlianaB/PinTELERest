myApp.factory('Pin', ['$q', 'Backend', function ($q, Backend) {
    var pin = Backend.el.data('Pin');

    return {
        getAll: function () {
            var deferred = $q.defer();

            pin.get().then(function (data) {
                deferred.resolve(data);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        },

        getAllByUser: function (userId) {
            var deferred = $q.defer(),
                filter = new Everlive.Query();

            filter.where().eq('Owner', userId);

            pin.get(filter)
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },

        getById: function (pinId) {
            var deferred = $q.defer();

            pin.getById(pinId)
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },

        create: function (name, url, category) {
            var deferred = $q.defer();

            pin.create({
                Name: name,
                URL: url,
                Category: category
            }).then(function (data) {
                deferred.resolve(data);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        },

        update: function (id, name, url, category) {
            var deferred = $q.defer();

            pin.update({
                'Name': name,
                'URL': url,
                'Category': category
            }, {Id: id})
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },

        delete: function (pinId) {
            var deferred = $q.defer();

            pin.destroySingle({Id: pinId})
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
}]);
