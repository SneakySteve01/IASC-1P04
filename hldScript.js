var prototype = document.getElementById("prototype");
var submitted = document.getElementById("submitted");
var latest = document.getElementById("latest");

function prototypeClicked() {
    prototype.style.display = "block";
    latest.style.display = "none";
    submitted.style.display = "none";
}

function submittedClicked() {
    submitted.style.display = "block";
    prototype.style.display = "none";
    latest.style.display = "none";
}

function latestClicked() {
    latest.style.display = "block";
    prototype.style.display = "none";
    submitted.style.display = "none";
}
