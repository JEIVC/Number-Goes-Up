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
    document.getElementById("mainPPS").innerHTML = "It goes up by " + format(mainPPS) + " every secrulan";
    document.getElementById("automaBtn").disabled = mainPoints < automaCost;
    document.getElementById("automaBtn").innerHTML = mainPoints >= automaCost ? "Buy an Automaclicker" : "Buy an Automaclicker (you don't have enough)";
    document.getElementById("automaCost").innerHTML = "Buying one would decrement " + format(automaCost) + " from your number.";
}

document.getElementById("pointsBtn").onclick = function() {
    let timesClicked = 0;
    let randomText = [
        "Make number go up",
        "Up up up",
        "Press to progress",
        "If you click this the number will go up",
        "number++;",
        "📈📈📈",
    ];
    return function() {
        ++mainPoints;
        ++timesClicked;
        if (timesClicked % 10 == 0) {
            index = Math.round(Math.random() * (randomText.length - 1));
            document.getElementById("pointsBtn").innerHTML = randomText[index];
        }
    }
}();

document.getElementById("automaBtn").onclick = function() {
    console.log(mainPoints, automaCost);
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

    mainPPS = automaclickers;
    mainPoints += (dt / 60) * mainPPS;
    updateCounters();

    rootElement.style.backgroundColor = "hsl(" + rootBGAnim + ", 32%, 68%)";
    rootBGAnim += dt / 120;
}

updateCounters();
requestAnimationFrame(update);
