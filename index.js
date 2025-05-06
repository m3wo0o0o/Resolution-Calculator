let outputEL = document.getElementById("output-el")


function getPos() {
var x = document.getElementById("width").value;
var y = document.getElementById("height").value;
console.log(x * y)
outputEL.textContent = "Output: " + (x * y)
}