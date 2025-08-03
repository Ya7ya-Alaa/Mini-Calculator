    let num1 = document.querySelector("#num1");
    let num2 = document.querySelector("#num2");
    let add = document.querySelector("#add");
    let subtract = document.querySelector("#subtract");
    let multiply = document.querySelector("#multiply");
    let divide = document.querySelector("#divide");
    let displayResult = document.querySelector("#displayResult");
    

    add.addEventListener("click", function() {
        let number1 = parseInt(num1.value);
        let number2 = parseInt(num2.value);
        displayResult.innerHTML = addNums(number1, number2)
    })

    subtract.addEventListener("click", function() {
        let number1 = parseInt(num1.value);
        let number2 = parseInt(num2.value);
        displayResult.innerHTML = subtractNums(number1, number2)
    })

    multiply.addEventListener("click", function() {
        let number1 = parseInt(num1.value);
        let number2 = parseInt(num2.value);
        displayResult.innerHTML = multiplyNums(number1, number2)
    })

    divide.addEventListener("click", function() {
        let number1 = parseInt(num1.value);
        let number2 = parseInt(num2.value);
        displayResult.innerHTML = divideNums(number1, number2)
    })

    function addNums (a, b) {
        let sum = a + b;
        return sum;
    }

    function subtractNums (a, b) {
        let diff = a - b;
        return diff;
    }

    function multiplyNums (a, b) {
        let product = a * b;
        return product;
    }

    function divideNums (a, b) {
        let quotient = a / b;
        return quotient;
    }