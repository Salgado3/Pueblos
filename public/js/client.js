var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

//Mapbox API
mapboxgl.accessToken = 'pk.eyJ1IjoiamltYm9jIiwiYSI6ImNrc3Y3bXRwaDBpY20ycXBsN2RwNWIzY28ifQ.YDmRFmqblf_TyM_zHGYOwA';
var map = new mapboxgl.Map({
container: 'mapBox',
style: 'mapbox://styles/mapbox/streets-v11',
center: [0,0],
zoom: 2
});