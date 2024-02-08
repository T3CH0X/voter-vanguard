var map = L.map('map').setView([37.8, -96], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);
// Add your code here to create interactive map with election poll results
.nav-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f8f9fa;
}

.logo img {
    height: 50px;
}

.links a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
}
