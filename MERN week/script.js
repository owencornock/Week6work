let firstNumber = 0
let operator = ""
let flag=true
let screenRef=document.getElementById("scrn")
function digit(ref) {
    if (flag==true)
    if (ref.value == "0") {
        if (screenRef.value != "") {
            screenRef.value += ref.value
        }
    } else {
        screenRef.value=""
        screenRef.value += ref.value
        flag==true
    }
}

function operations(sign) {
    firstNumber = parseInt(screenRef.value)
    operator = sign
    document.getElementById("scrn").value = ""
}

function showResults() {
    let secondNumber = parseInt(screenRef.value)
    switch (operator) {
        case "+": screenRef.value = firstNumber + secondNumber;
            break;
        case "-": screenRef.value = firstNumber - secondNumber;
            break;
        case "x": screenRef.value = firstNumber * secondNumber;
            break;
        case "/": screenRef.value = firstNumber / secondNumber;
            break;
    }
    flag==false
}

function clearScreen() {
    screenRef.value = ""
}