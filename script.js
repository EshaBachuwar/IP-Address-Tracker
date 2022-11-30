const ipAddress = document.getElementById('ip-address');
const ipLocation = document.getElementById('location');
const timezome = document.getElementById('timezome');
const isp = document.getElementById('isp');

const inputIp = document.querySelector('input');
const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {
    console.log(inputIp.value);
    getLocation();
})

inputIp.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        console.log(inputIp.value);
        getLocation();
    }
})

let ip = "8.8.8.8";
let api_key = "at_qZwIkKj39gY20hXvq6u6Ict321tGI";
let api_url = "https://geo.ipify.org/api/v1?";

const getLocation = async () => {
    let url = api_url + "apiKey=" + api_key + "&ipAddress=" + inputIp.value;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    ipAddress.innerText = inputIp.value;
    ipLocation.innerText = data.location.city + data.location.country;
    timezone.innerText = data.location.timezone;
    isp.innerText = data.isp;

    let map = L.map('map').setView([Number(data.location.lat), Number(data.location.lng)],13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}



