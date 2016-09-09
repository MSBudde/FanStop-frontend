angular.module('fanStop')
  .controller('yelpController', yelpController)


yelpController.$inject = ['MyYelpApi','$http']

function yelpController(MyYelpApi, $http) {
  var self = this;
  self.bars = [];
  self.updateBar = updateBar;
  self.getBars = getBars;
  self.editBar = {
    votes: [{
      team: ''
    }]
  }
  self.initialize = initialize;
  self.teams = [{voteNum: 0,
                name:'49ers',
                icon:'http://icons.iconarchive.com/icons/astahrr/nfl/128/49ers-icon.png'},
                {voteNum: 1 ,
                name:'Bears',
                 icon: 'http://www.clarkstreetsports.com/site/images/bearslogo.png',},
                 {voteNum: 2,
                  name:'Bengals',
                  icon:'http://prod.static.bengals.clubs.nfl.com/nfl-assets/img/gbl-ico-team/CIN/logos/home/large.png'},
                  {voteNum: 3 ,
                  name:'Bills',
                  icon:'http://vector.me/files/images/2/8/28193/buffalo_bills.png'},
                  {voteNum: 4,
                  name:'Broncos',
                  icon:'http://images.vectorhq.com/images/previews/e63/denver-broncos-logo-psd-446725.png'},
                  {voteNum: 5,
                  name:'Browns',
                  icon:'http://www.prosportsblogging.com/psb/themes/psb/images/icons/nfl-clevelandbrowns.png'},
                  {voteNum: 6,
                  name:'Bucaneers',
                  icon:'http://prod.static.buccaneers.clubs.nfl.com/nfl-assets/img/gbl-ico-team/TB/logos/home/large.png'},
                  {voteNum: 7,
                  name:'Cardinals',
                  icon:'https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Arizona_Cardinals_logo.svg/1280px-Arizona_Cardinals_logo.svg.png'},
                  {voteNum: 8,
                  name:'Chargers',
                  icon:'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/San_Diego_Chargers_logo.svg/1280px-San_Diego_Chargers_logo.svg.png'},
                  {voteNum: 9,
                  name:'Cheifs',
                  icon:'http://i44.tinypic.com/mvqiph.jpg'},
                  {voteNum: 10,
                  name:'Colts',
                  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Indianapolis_Colts_logo.svg/2000px-Indianapolis_Colts_logo.svg.png'},
                  {voteNum: 11,
                  name:'Cowboys',
                  icon:'http://media-s3-us-east-1.ceros.com/dallas-cowboys/images/2015/08/31/92a6e92fad165d3e99f00b72fd477082/2000px-dallas-cowboys-svg.png'},
                  {voteNum: 12,
                  name:'Dolphins',
                  icon:'http://vignette2.wikia.nocookie.net/madden/images/1/18/Miami_Dolphins_Logo.png/revision/latest?cb=20120713203308'},
                  {voteNum: 13,
                  name:'Eagles',
                  icon:'https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Philadelphia_Eagles_primary_logo.svg/800px-Philadelphia_Eagles_primary_logo.svg.png'},
                  {voteNum: 14,
                  name:'Falcons',
                  icon:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Atlanta_Falcons_logo.svg/1088px-Atlanta_Falcons_logo.svg.png'},
                  {voteNum: 15,
                  name:'Giants',
                  icon:'http://vignette1.wikia.nocookie.net/madden/images/8/81/New_York_Giants_Logo.png/revision/latest?cb=20120716204150'},
                  {voteNum: 16,
                  name:'Jaguars',
                  icon:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Jacksonville_Jaguars.svg/1274px-Jacksonville_Jaguars.svg.png'},
                  {voteNum: 17,
                  name:'Jets',
                  icon:'http://prod.static.jets.clubs.nfl.com/nfl-assets/img/gbl-ico-team/NYJ/logos/home/large.png'},
                  {voteNum: 18,
                  name:'Lions',
                  icon:'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/New_Lions_Logo.svg/1280px-New_Lions_Logo.svg.png'},
                  {voteNum: 19,
                  name:'Packers',
                  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Green_Bay_Packers_logo.svg/1024px-Green_Bay_Packers_logo.svg.png'},
                  {voteNum: 20,
                  name:'Panthers',
                  icon:'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Carolina_Panthers_logo_2012.svg/1280px-Carolina_Panthers_logo_2012.svg.png'},
                  {voteNum: 21,
                  name:'Patriots',
                  icon:'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/New_England_Patriots_logo.svg/1024px-New_England_Patriots_logo.svg.png'},
                  {voteNum: 22,
                  name:'Raiders',
                  icon:'http://www.thesportsbank.net/core/wp-content/uploads/2014/09/oakland-raiders-logo.png'},
                  {voteNum: 23,
                  name:'Rams',
                  icon:'http://vignette3.wikia.nocookie.net/madden/images/5/51/St._Louis_Rams_Logo.png/revision/latest?cb=20120716234547'},
                  {voteNum: 24,
                  name:'Ravens',
                  icon:'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Baltimore_Ravens_logo.svg/1280px-Baltimore_Ravens_logo.svg.png'},
                  {voteNum: 25,
                  name:'Redskins',
                  icon:'http://vignette1.wikia.nocookie.net/madden/images/c/c4/Washington_Redskins_Logo.png/revision/latest?cb=20120716235848'},
                  {voteNum: 26,
                  name:'Saints',
                  icon:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/New_Orleans_Saints.svg/633px-New_Orleans_Saints.svg.png'},
                  {voteNum: 27,
                  name:'Seahawks',
                  icon:'http://www.prosportsblogging.com/psb/themes/psb/images/icons/nfl-seattleseahawks.png'},
                  {voteNum: 28,
                  name:'Steelers',
                  icon:'http://vignette1.wikia.nocookie.net/madden/images/5/5d/Pittsburgh_Steelers_Logo.png/revision/latest?cb=20120716204951'},
                  {voteNum: 29,
                  name:'Texans',
                  icon:'http://s5.tinypic.com/110k9xv.jpg'},
                  {voteNum: 30,
                  name:'Titans',
                  icon:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Tennessee_Titans_logo.svg/1280px-Tennessee_Titans_logo.svg.png'},
                  {voteNum: 31,
                  name:'Vikings',
                  icon:'http://prod.static.vikings.clubs.nfl.com/nfl-assets/img/gbl-ico-team/MIN/logos/home/large.png'}
                ];
  self.teamIcons = ['http://icons.iconarchive.com/icons/astahrr/nfl/128/49ers-icon.png']
  MyYelpApi.retrieveYelp('', function(data) {


    // console.log(data.businesses)
    self.businesses = data.businesses;
    for (var i = 0; i < data.businesses.length; i++) {
      // console.log(data.businesses[i].name, data.businesses[i].location)
    $http({
      method: 'POST',
      url: 'http://localhost:3000/api/bars',
      data: data.businesses[i]
    }).then(getBars());
    }
})


// self.map = {
//      center: { latitude: 14.8282, longitude: 122.5795 },
//      zoom: 1
//   };
//
//   self.markers = [];
//
//   $http.get('https://fanstop-backend.herokuapp.com/api/bars')
//   .then(function(response) {
//     console.log(response.data.bars)
//     _.forEach(response.data.bars, function(marker) {
//       marker.coords = {
//         latitude: response.data.bars.lat,
//         longitude: response.data.bars.lng
//       }
//     })
//    self.markers = markers;
//   })

  function updateBar(bar) {
    console.log(bar.newVote)
  if (bar.newVote === "") {
    $log.info("You must choose a category!");
  } else {
    $http.put('http://localhost:3000/api/bars/' + bar._id, bar.newVote).then(function(response) {
      console.log(response)
    }, function(errRes) {
      console.log('Error updating bar!', errRes);
    }).then(getBars);
  }
}

function getBars() {
  $http.get('http://localhost:3000/api/bars').then(function(response) {
    self.bars = response.data.bars;

  })
}

function initialize() {
  var markers = [];
  var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 34.0195, lng: -118.4912},
            zoom: 13,
            mapTypeId: 'roadmap'
          });
          // Create the search box and link it to the UI element.
          /// adrianna's code given to me repurposed.
  $http.get('http://localhost:3000/api/bars').then(function(response) {
    self.bars = response.data.bars;
                var lat;
                var lng;
                var latLng;
                // console.log(response)
                for(var i = 0; i < response.data.bars.length; i++) {
                  // console.log(response.data.bars[i].lat)
                  lat = response.data.bars[i].lat;
                  lng = response.data.bars[i].lng;
                  // console.log (lat, lng)
                  latLng = {lat: lat , lng: lng }

                  var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: 'Place'
                  })

                  // console.log(lng)
                  // console.log("LAT LNG:")
                  // console.log(latLng)
                }
                  // markers = [];

          //         var infowindow = new google.maps.InfoWindow({
          //            content:
          //         });
          //  marker.addListener('click', function() {
          //   infowindow.open(map, marker);
          // });

           marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        })
        // }).then(
        //   // searchBox.addListener('places_changed', function() {
        //   //   var places = searchBox.getPlaces();
        //   //   if (places.length == 0) {
        //   //     return;
        //   //   }
        //     // Clear out the old markers.
        //   //   function getMarkers (marker) {
        //   //   for(var i = 0; i < markers.length; i++) {
        //   //       marker.setMap(null);
        //   //   }
        //   // }
        //     // markers = [];
        //     // markers.forEach(function(marker) {
        //     //   marker.setMap(null);
        //     // });
        //     // markers = [];
        //     // For each place, get the icon, name and location.
        //     function createMarkers(places) {
        //       console.log(places)
        //       var bounds = new google.maps.LatLngBounds();
        //       var placesList = document.getElementById('places');
        //
        //       for (var i = 0, place; place = places[i]; i++) {
        //         var image = {
        //           url: 'https://cdn1.iconfinder.com/data/icons/food-drinks-4/96/Beer-512.png',
        //           size: new google.maps.Size(71, 71),
        //           origin: new google.maps.Point(0, 0),
        //           anchor: new google.maps.Point(17, 34),
        //           scaledSize: new google.maps.Size(25, 25)
        //         };
        //         markers.push(new google.maps.Marker({
        //          map: map,
        //          icon: image,
        //          title: place.name,
        //          position: place.geometry.location
        //        }));
        //         console.log(markers)
        //         // var marker = new google.maps.Marker({
        //         //   map: map,
        //         //   icon: image,
        //         //   title: place.name,
        //         //   position: place.geometry.location
        //         // });
        //
        //         // placesList.innerHTML += '<li>' + place.name + '</li>';
        //
        //         bounds.extend(place.geometry.location);
        //       }
        //       map.fitBounds(bounds);
        //     })
          // }

        }
      }
            // }
