angular.module('fanStop')
  .config(routes);

routes.$inject = ['$urlRouterProvider', '$stateProvider'];

function routes($urlRouterProvider, $stateProvider) {
  $stateProvider
  .state('welcome', {
    url:'/',
    templateUrl: 'pages/welcome.html'
  })
    .state('signin', {
      url:'/sign-in',
      templateUrl: 'pages/signin.html',
      controller: 'signInController',
      controllerAs: 'sign'
    })
    .state('results', {
      url:'/results',
      templateUrl: 'pages/results.html',
      controller: 'yelpController',
      controllerAs: 'gMaps'
    })
    $urlRouterProvider.otherwise('/')
}
