const PERFECTFPS = 100 / 6;
let rootElement = document.documentElement;
let rootBGAnim = 150;

let dt = 0;
let lastTimestamp = 0;

let mainPoints = 0;
let mainPPS = 0;

function updateCounters() {
    document.getElementById("mainCounter").innerHTML = "This mentioned number is <h1>" + format(mainPoints) + "</h1>";
    document.getElementById("mainPPS").innerHTML = "It goes up by " + format(mainPPS) + " every second";
}

function update(timestamp) {
    requestAnimationFrame(update);
    dt = (timestamp - lastTimestamp) / PERFECTFPS;
    lastTimestamp = timestamp;

    // mainPoints += dt / 60;
    updateCounters();

    rootElement.style.backgroundColor = "hsl(" + rootBGAnim + ", 32%, 68%)";
    rootBGAnim += dt / 120;
}

requestAnimationFrame(update);
