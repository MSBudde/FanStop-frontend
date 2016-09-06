angular.module('fanStop')
  .factory('tokens', tokens);

tokens.$inject = ['$log', '$window'];

function tokens($log, $window) {
  $log.info('tokens loading!')

  var TOKEN_KEY = '5613771473';

  var service = {
    store: store,
    retrieve: retrieve,
    decode: decode,
    destroy: destroy
  };
  return service;

  function store(token) {
    $window.localStorage.setItem(TOKEN_KEY, token);
    $log.info('token stored', $window.localStorage);
  }

  function retrieve() {
   return $window.localStorage.getItem(TOKEN_KEY);
  }

  function decode() {
    return $window.jwt_decode(retrieve());
  }

  function destroy() {
    $window.localStorage.removeItem(TOKEN_KEY);
    console.log('key has been destroyed');
  }
}
