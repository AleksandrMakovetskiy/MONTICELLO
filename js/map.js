let map;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.6690343, lng: -73.8691217 },
        zoom: 12,
    });
}