myApp.factory('Pin', ['$q', 'Backend', function ($q, Backend) {
    var pin = Backend.el.data('Pin');
    var vote = Backend.el.data('Vote');

    function createVote(data, deferred) {
        var pinId = data.result.Id;

        vote.create({
            Value: 0,
            PinId: pinId
        }).then(function (data) {
            pin.update({
                'Vote': data.result.Id
            }, { Id: pinId })
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });
        }, function (error) {
            deferred.reject(error);
        });
    }

    function deleteVote(pinId, deferred) {
        vote.destroy({ 'PinId': pinId })
            .then(function (data) {
                deferred.resolve(data);
            }, function (error) {
                deferred.reject(error);
            });
    }

    return {
        getAll: function () {
            var deferred = $q.defer(),
                expandExp = {
                    "Vote": {
                        "TargetTypeName": "Vote"
                    }
                };
            var query = new Everlive.Query();
            query.expand(expandExp);

            pin.get(query).then(function (data) {
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
                createVote(data, deferred);
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
            }, { Id: id })
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },

        delete: function (pinId) {
            var deferred = $q.defer();

            pin.destroySingle({ Id: pinId })
                .then(function () {
                    deleteVote(pinId, deferred);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },

        vote: function (id, votes) {
            var deferred = $q.defer();

            vote.update({ 'Value': votes },
                { PinId: id })
                .then(function (data) {
                    deferred.resolve(data);
                }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    };
}]);
