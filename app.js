
function updateClock() {
    var now = new Date();
    var hours = now.getHours() % 12 || 12; // Use modulo to get 12-hour format, and handle midnight (0) as 12
    var minutes = formatTimeComponent(now.getMinutes());
    var seconds = formatTimeComponent(now.getSeconds());
    var period = (now.getHours() < 12) ? 'AM' : 'PM';

    var clockElement = document.getElementById("clock");
    clockElement.textContent = hours + ':' + minutes + ':' + seconds + ' ' + period;
}

function formatTimeComponent(component) {
    return (component < 10) ? '0' + component : component;
}

setInterval(updateClock, 1000);








