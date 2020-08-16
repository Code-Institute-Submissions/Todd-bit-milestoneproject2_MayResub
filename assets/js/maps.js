function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 40.5187,
            lng: -78.3947
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 40.513631, lng: -78.399484 },
        { lat: 40.497411, lng: -78.483745 },
        { lat: 40.582704, lng: -78.273789 },
        { lat: 40.490108, lng: -78.408588 },
        { lat: 40.451305, lng: -78.549257 },
        { lat: 40.482815, lng: -78.551774 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}