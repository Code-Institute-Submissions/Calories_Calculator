$(document).ready(function () {
  initMap();
});
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {
      lat: 59.473124,
      lng: 18.267165,
    },
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    { lat: 59.473124, lng: 18.267165 },
    { lat: 59.462184, lng: 18.290508 },
    { lat: 59.494038, lng: 18.303506 },
    { lat: 59.489049, lng: 18.303996 },
    { lat: 59.518513, lng: 18.341753 },
    { lat: 59.468139, lng: 18.339944 },
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
