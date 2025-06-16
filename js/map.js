import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { db } from './firebase.js';

var map = L.map('map').setView([-23.55052, -46.633308], 12); // São Paulo coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

function toBRTDate(date) {
    return new Date(date.getTime() - 3 * 60 * 60 * 1000);
}


$('#searchButton').on('click', async function() {
    let trip_code = $('#searchField').val();

    fetch(`https://storage.googleapis.com/sptransit-content/trips/${trip_code}.geojson`)
        .then(response => response.json())
        .then(geojson => {
            L.geoJSON(geojson).addTo(map);
        })
        .catch(error => {
            console.error('Error loading GeoJSON:', error);
        });

    const buses = collection(db, 'trips', trip_code, 'buses')
    const busesSnapshot = await getDocs(buses);
    
    busesSnapshot.docs.map(doc => {
        const bus = doc.data();

        L.marker([bus.lat, bus.lon])
            .bindPopup(`Bus ID: ${doc.id}<br>Last Updated: ${toBRTDate(new Date(bus.timestamp)).toLocaleString()}`)
            .addTo(map);
    });
        
});


