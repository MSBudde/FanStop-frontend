angular.module('fanStop')
  .controller('yelpController', yelpController)

yelpController.$inject = ['MyYelpApi']
function yelpController(MyYelpApi) {
  var self = this;

  self.businesses = [];

  MyYelpApi.retrieveYelp('', function(data) {
    console.log(data.businesses)
    self.businesses = data.businesses;
  })
}
