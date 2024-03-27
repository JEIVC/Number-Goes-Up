const PERFECTFPS = 100 / 6;
let rootElement = document.documentElement;
let rootBGAnim = 150;

let dt = 0;
let lastTimestamp = 0;

let mainPoints = 0;
let mainPPS = 0;
let automaclickers = 0;
let automaCost = 20;

function updateCounters() {
    document.getElementById("mainCounter").innerHTML = "This mentioned number is <h1>" + format(mainPoints) + "</h1>";
    document.getElementById("mainPPS").innerHTML = "It goes up by " + format(mainPPS) + " every second";
    document.getElementById("automaBtn").innerHTML = mainPoints >= automaCost ? "Buy an Automaclicker" : "Buy an Automaclicker (you don't have enough)";
    document.getElementById("automaCost").innerHTML = "Buying one would decrement " + format(automaCost) + " from your number.";
}

document.getElementById("automaBtn").onclick = function() {
    if (mainPoints >= automaCost) {
        mainPoints -= automaCost;
        automaCost *= 1.2;
        ++automaclickers;
    }
}

function update(timestamp) {
    requestAnimationFrame(update);
    dt = (timestamp - lastTimestamp) / PERFECTFPS;
    lastTimestamp = timestamp;

    mainPoints += (dt / 60) * automaclickers;
    updateCounters();

    rootElement.style.backgroundColor = "hsl(" + rootBGAnim + ", 32%, 68%)";
    rootBGAnim += dt / 120;
}

requestAnimationFrame(update);
