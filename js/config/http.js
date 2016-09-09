angular.module('fanStop')
  .config(configure);

configure.$inject = ['$httpProvider'];

function configure($httpProvider) {
  $httpProvider.interceptors.push("jsonHead");
  $httpProvider.interceptors.push("tokenSigning");

  console.log('http', $httpProvider.interceptors)
}
