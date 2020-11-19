$(document).ready(function() {
    var map = L.map('mapid').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([15.0, 101.0]).addTo(map)
        .bindPopup('Thailand')
        .openPopup();
    L.marker([49.2827, -123.1207]).addTo(map)
        .bindPopup('Cannada')
        .openPopup();
})