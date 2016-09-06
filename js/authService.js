angular.module('fanStop')
  .factory('authService', authService);

authService.$inject = ['$log', 'tokens', '$http'];

function authService($log, token, $http) {
  $log.info('auth loaded!')

  var service = {
    logIn: logIn,
    isLoggedIn: isLoggedIn,
    logOut: logOut
  }
  return service;

  function isLoggedIn(data) {
    return (token.retrieve() != null);
  }

  function logIn(data) {
    var promise = $http({
      method: 'POST',
      url: 'http://localhost:3000/api/token',
      data: data,
      headers: {
        'Content-Type':'application/json'
      }
    }).then(function(res) {
      token.store(res.data);
      return token.decode();
    });
    return promise;
  }

  function logOut() {
    token.destroy();
  }
}
