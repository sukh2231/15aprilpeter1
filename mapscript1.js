var map;
function intialize(){
var mapOptions={
zoom: 12,
center: new google.maps.latLng(40.758904, -73.985128)};
map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
}
google.maps.event.addDomListener(Window,'load',intialize);

