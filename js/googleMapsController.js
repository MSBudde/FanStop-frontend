angular.module('fanStop')
  .controller('googleMapsController', googleMapsController)


function googleMapsController(){
  var self = this;

  self.initialize = initialize;
  self.placesList;

  var map;

function initialize() {
  var sm = {lat: 34.024212, lng: -118.496475};

  map = new google.maps.Map(document.getElementById('map'), {
    center: sm,
    zoom: 17
  });

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: sm,
    radius: 750,
    type: ['bar']
  }, processResults);
}

function processResults(results, status, pagination) {
  if (status !== google.maps.places.PlacesServiceStatus.OK) {
    return;
  } else {
    createMarkers(results);

    if (pagination.hasNextPage) {
      var moreButton = document.getElementById('more');

      moreButton.disabled = false;

      moreButton.addEventListener('click', function() {
        moreButton.disabled = true;
        pagination.nextPage();
      });
    }
  }
}

function createMarkers(places) {
  var bounds = new google.maps.LatLngBounds();
  var placesList = document.getElementById('places');

  for (var i = 0, place; place = places[i]; i++) {
    var image = {
      url: 'https://cdn1.iconfinder.com/data/icons/food-drinks-4/96/Beer-512.png',
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    var marker = new google.maps.Marker({
      map: map,
      icon: image,
      title: place.name,
      position: place.geometry.location
    });

    placesList.innerHTML += '<li>' + place.name + '</li>';

    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
}

}
