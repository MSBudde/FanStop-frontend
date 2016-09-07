angular.module('fanStop')
  .factory('userService', userService)

userService.$inject = ['$log', '$http'];

function userService($log, $http) {
  $log.info('userService loaded');

  var service = {
    create: create
  };
  return service;

  function create(data) {
    var promise = $http({
      method: 'POST',
      url: 'https://localhost:3000/api/users',
      data: data
    });
    return promise;
  };
};
