
let b1 = document.querySelector("#plus");
let b2 = document.querySelector("#minus");
let b3 = document.querySelector("#multiplier");
let b4 = document.querySelector("#divider");


function plus() {
    let inputOne = document.querySelector('#inputOne').value;
    let inputTwo = document.querySelector('#inputTwo').value;
    if (inputOne && inputTwo) {
        document.querySelector("#result").value = parseFloat(inputOne) + parseFloat(inputTwo);
    }else{
        document.querySelector("#result").value = "error";
    }

}

function moin(x, y) {
    let inputOne = document.querySelector('#inputOne').value;
    let inputTwo = document.querySelector('#inputTwo').value;
    if (inputOne && inputTwo) {
        document.querySelector("#result").value = parseFloat(inputOne) - parseFloat(inputTwo);
    }else{
        document.querySelector("#result").value = "error";
    }
}

function mult(x, y) {
    let inputOne = document.querySelector('#inputOne').value;
    let inputTwo = document.querySelector('#inputTwo').value;
    if (inputOne && inputTwo) {
        document.querySelector("#result").value = parseFloat(inputOne) * parseFloat(inputTwo);
    }else{
        document.querySelector("#result").value = "error";
    }
}

function divi(x, y) {
    let inputOne = document.querySelector('#inputOne').value;
    let inputTwo = document.querySelector('#inputTwo').value;
    if (inputOne && inputTwo) {
        document.querySelector("#result").value = parseFloat(inputOne) / parseFloat(inputTwo);
    }else{
        document.querySelector("#result").value = "error";
    }
}


b1.addEventListener("click", function () {
    plus()
});
b2.addEventListener("click", function () {
    moin()
});
b3.addEventListener("click", function () {
    mult()
});
b4.addEventListener("click", function () {
    divi()
});




