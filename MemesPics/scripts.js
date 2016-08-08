var number, counter = 0, numTracker;

function numGen() {
    number = Math.floor((Math.random() * 8) + 1);
}

function checkIfMemeVis() {
    if (counter > 0) {
        document.getElementById("" + number + "").style.display = "none";
    }
    counter++;
}

function memeGen() {
    checkIfMemeVis();
    numGen();
    document.getElementById("" + number + "").style.display = "inline";
}
