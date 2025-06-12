var map = L.map('map').setView([-23.55052, -46.633308], 12); // São Paulo coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


$('#searchButton').on('click', function() {
    let trip_code = $('#searchField').val();

    fetch(`https://storage.googleapis.com/sptransit-content/trips/${trip_code}.geojson`)
        .then(response => response.json())
        .then(geojson => {
            L.geoJSON(geojson).addTo(map);
        })
        .catch(error => {
            console.error('Error loading GeoJSON:', error);
        });
});