let outputEL = document.getElementById("output-el")
let listofOptions = [
    "Width", "Height","Ratio"
]


function getPos() {
    let e = document.getElementById("method").value;
    let i = document.getElementById("method").selectedIndex;
    const x = document.getElementById("width").value;
    const y = document.getElementById("height").value;
    if (i == 0) {
        outputEL.textContent = e + ": " + (x * y) + "px"
    } else if (i == 1) {
        outputEL.textContent = e + ": " + (x / y) + "px"   
    } else {
        outputEL.textContent = e + ": " + (x / y) + ":1";
    }
    console.log(x / y);
}

function methodChange() {
    let e = document.getElementById("method").value;
    let i = document.getElementById("method").selectedIndex;
    console.log(i)
    //console.log(document.getElementById("method").value);
    //console.log(listofOptions[0]);
    console.log(e);
    //document.getElementById("slot 1").textContent = e;
    //document.getElementById("slot 2").textContent = i;
    outputEL.textContent = e + ": "
    if (i == 0) {
        document.getElementById("slot 1").textContent = listofOptions[1];
        document.getElementById("slot 2").textContent = listofOptions[2];
    } else if (i == 1){
        document.getElementById("slot 1").textContent = listofOptions[0];
        document.getElementById("slot 2").textContent = listofOptions[2];
    } else {
        document.getElementById("slot 1").textContent = listofOptions[0];
        document.getElementById("slot 2").textContent = listofOptions[1];
    }
}

