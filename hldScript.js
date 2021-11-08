var prototype = document.getElementById("prototype");
var latest = document.getElementById("latest");

function prototypeClicked() {
    prototype.style.display = "block";
    latest.style.display = "none";
}

function latestClicked() {
    latest.style.display = "block";
    prototype.style.display = "none";
}