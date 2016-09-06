angular.module('fanStop')
  .config(configure);

configure.$inject = ['$httpProvider'];

function configure($httpProvider) {
  $httpProvider.interceptors.push("jsonHeadersService");
  $httpProvider.interceptors.push("tokenSigningService");

  console.log('http', $httpProvider.interceptors)
}
