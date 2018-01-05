google.maps.event.addDomListener(window, 'load', init);

function init() {
  var mapOptions = {
    zoom: 16,
    disableDefaultUI: true,
    center: new google.maps.LatLng(55.849300, 37.690189), // New York

    styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
  };
  
  var mapElement = document.getElementById('map');
  
  var map = new google.maps.Map(mapElement, mapOptions);

  var image = "img/map-point.png";
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(55.849300, 37.690189),
    map: map,
    icon: image
  });
}