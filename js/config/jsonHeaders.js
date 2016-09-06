angular.module('fanStop')
  .factory('jsonHead', jsonHead);

jsonHead.$inject = ['$log'];

function jsonHead($log) {
  return {
    request: addJsonHeaders
  };

  function addJsonHeaders(request) {
    request.headers['Content-Type'] = 'application/json'
    return request;
  }
}
