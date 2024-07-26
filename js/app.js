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

let num1 = "";
let num2 = "";
let operator = "";
const numbers = "0123456789";
const operators = "/*+-";


const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".display");
const para = document.createElement("p");

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        if (numbers.includes(button.id) && operator === "") {
            display.textContent = "";
            num1 = num1.concat(button.id);
            para.textContent = num1;
            para.classList.add("number");
            display.appendChild(para);
        }else if (operators.includes(button.id) && num1 !== "") {
            operator = button.id;
            button.classList.add("active");
        }
    })
})
