angular.module('fanStop')
  .factory('MyYelpApi', MyYelpApi)

MyYelpApi.$inject = ['$http'];

function MyYelpApi($http) {

  function randomString(length, chars) {
     var result = '';
     for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
     return result;
    }
    return {
      "retrieveYelp": function(name, callback) {
        console.log('clicked')
        var method = 'GET';
        var url = 'https://api.yelp.com/v2/search';
        var params = {
          callback: 'angular.callbacks._0',
          location: 'Santa+Monica',
          oauth_consumer_key: 'pQjtjS-XCxD9K-cXsQpnnQ', //Consumer Key
          oauth_token: 'Jl3CSm4tWywHylfZ65dkapX4IVoSbriZ', //Token
          oauth_signature_method: "HMAC-SHA1",
          oauth_timestamp: new Date().getTime(),
          oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
          term: 'sports+bar'
        };
        var consumerSecret = 'OrqtMlu8VWQ3vIyQ_VfSXENyOmg'; //Consumer Secret
        var tokenSecret = 'XJ3ZlU8vtGPipPpIXu6abMVL9uk'; //Token Secret
        var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
        params['oauth_signature'] = signature;
        $http.jsonp(url, {params: params}).success(callback);
      }
    }


}
