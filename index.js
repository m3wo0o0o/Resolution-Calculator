let outputEL = document.getElementById("output-el")

function getPos() {
var x = document.getElementById("width").value;
var y = document.getElementById("height").value;
console.log(x / y)
outputEL.textContent = "Aspect Ratio: " + (x / y) + ":1"
}

function methodChange() {

    document.getElementById("method").value; 
    console.log(document.getElementById("method").value);
}
