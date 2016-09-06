angular.module('fanStop')
  .controller('MapBox', MapBox)

function MapBox(){
  var mapboxgl = require('mapbox-gl');
mapboxgl.accessToken = 'pk.eyJ1IjoibWJ1ZGRlIiwiYSI6ImNpc2c5Y2h3ejAxdTcyc252N2RkMnA3cGgifQ.cuWTfmEbV0DgGmQbkQjjLg';
var map = new mapboxgl.Map({
    container: '<your HTML element id>',
    style: 'mapbox://styles/mapbox/streets-v9'
});
}
