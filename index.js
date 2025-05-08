let outputEL = document.getElementById("output-el")
let listofOptions = [
    "Width", "Height","Ratio"
]

function getPos() {
const x = document.getElementById("width").value;
const y = document.getElementById("height").value;
console.log(x / y);
outputEL.textContent = "Aspect Ratio: " + (x / y) + ":1";
}

function methodChange() {
    let e = document.getElementById("method").value; 
    //console.log(document.getElementById("method").value);
    console.log(listofOptions[0]);
    console.log(e);
    document.getElementById("slot 1").textContent = e;
    
}

