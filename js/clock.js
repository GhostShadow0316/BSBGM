// clock.js

// [ init ]

const clock_elem = document.getElementById("clock");
const [hour_elem, _, minute_elem, __, second_elem] = clock.getElementsByTagName("p");

let [now, hour, minute, second] = [0, 0, 0, 0];

// [ main ]

const change_time = () => {
    now = new Date();

    second_elem.textContent = String(now.getSeconds()).padStart(2, "0");
    minute_elem.textContent = String(now.getMinutes()).padStart(2, "0");
    hour_elem.textContent   = String(now.getHours(  )).padStart(2, "0");
}

change_time();
setInterval(change_time, 1000);
