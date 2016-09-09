angular.module('fanStop')
  .factory('tokenSigning',tokenSigning);

tokenSigning.$inject = ['$log', 'tokens'];

function tokenSigning($log, tokens) {
  return {
    request: signinWithToken
  }

  function signinWithToken(request) {
    if (tokens.retrieve()) {
      request.headers['Authorization'] = `Bearer ${tokens.retrieve()}`;

    }
    return request;
  }
}
