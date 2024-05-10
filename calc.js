func = parseInt(prompt("What function shall be performed? Answer from 1 to 4. The functions are addition, subtraction, division and multiplication."));
number1 = parseInt(prompt("What is the first number?"));
number2 = parseInt(prompt("What is the second number?"));
if (func == 1) {
    alert(`${number1} + ${number2} = ${number1+number2}`);
} else if (func == 2) {
    alert(`${number1} - ${number2} = ${number1-number2}`);
} else if (func == 3) {
    alert(`${number1} / ${number2} = ${number1/number2}`);
} else {
    alert(`${number1} * ${number2} = ${number1*number2}`);
}