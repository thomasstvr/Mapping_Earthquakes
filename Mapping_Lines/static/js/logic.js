// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object centered at San Francisco Airport.
let map = L.map('mapid').setView([39.83, -98.58], 5);

//  Add a marker to the map for Los Angeles, California.
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color:'black',
//     fillColor: '#ffffa1'
//  }).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city);
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: 'orange',
//         lineweight: 4
//     }).bindPopup('<h2>' + city.city + ',' + city.state + '</h2> <hr> <h3>Population ' + city.population.toLocaleString() + '</h3>').addTo(map);
//    });

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.20, -97.67],
    [43.68, -79.62],
    [40.64, -73.78]
  ];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: .5,
    dashArray: '20, 20'
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

