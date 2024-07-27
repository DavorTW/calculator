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
    if (operator == '+') {
        return add(num1, num2);        
    }
    if (operator == "-") {
        return substract(num1, num2);
    }
    if (operator == "*") {
        return multiply(num1, num2);
    }
    if (operator == "/") {
        return divide(num1, num2);
    }
}

let num1 = "";
let num2 = "";
let operator = "";
let result = "";
const numbers = "0123456789";
const operators = "/*+-";


const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const para = document.createElement("p");
let currentOperator;

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        if (numbers.includes(button.id) && operator === "") {
            display.textContent = "";
            num1 = num1.concat(button.id);
            para.textContent = num1;
            para.classList.add("number");
            display.appendChild(para);
        }else if (operators.includes(button.id) && num1 !== "") {
            if (currentOperator) {
                currentOperator.classList.remove("active");
                currentOperator = null;
            }
            operator = button.id;
            currentOperator = button;
            button.classList.add("active");
        }else if(numbers.includes(button.id) && operator !== ""){
            display.textContent = "";
            num2 = num2.concat(button.id);
            para.textContent = num2;
            para.classList.add("number");
            display.appendChild(para);
        }else if (button.id === "equal" && num1 !== "" & num2 !== "") {
            if (currentOperator) {
                currentOperator.classList.remove("active");
                currentOperator = null;
            }
            display.textContent = "";
            num1 = Number(num1);
            num2 = Number(num2);
            result = operate(num1, num2, operator);
            result = String(result);
            para.textContent = result;
            para.classList.add("number");
            display.appendChild(para);
            num1 = "";
            num2 = "";
            operator = "";
        }
    })
})


