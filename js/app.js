function add(num1,num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 === 0){
        return "You can't divide by 0 you donkey";
    }
    return num1 / num2;
}

function operate(num1, num2, operator){
    if (operator === '+') {
        add(num1, num2);        
    }
    if (operator === "-") {
        substract(num1, num2);
    }
    if (operator === "*") {
        multiply(num1, num2);
    }
    if (operator === "/") {
        divide(num1, num2);
    }
}

let num1;
let num2;
let operator;

