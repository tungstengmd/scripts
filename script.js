console.warn(`What are you doing around here?`);
let startScript = window.prompt(`Which script should be started? Answer with 1 to 11 respectively. The scripts are: the multiplier, the one that states your favourite colour, the name swapper, the little test I made, the weekly pay calculator, the address formatter, the Uber® fare calculator, my while loop test, the number detector, the time table reciter and the calculator.`);
switch (startScript) {
    case `1`: {
        let number1 = window.prompt(`What number do you wish to multiply?`);
        let number2 = window.prompt(`What are you multiplying it by?`);
        alert(`The answer is ${number1 * number2}.`);
        break;
}
    case `2`: {
        let colour = window.prompt(`What's your favourite colour?`);
        document.write(`Your favourite colour is ${colour}.`);
        break;
}
    case `3`: {
        let firstName = window.prompt(`What's your first name?`);
        let lastName = window.prompt(`What's your last name?`);
        document.write(`${lastName} ${firstName}`);
        break;
}
    case `4`: { //this was an if statement test
        alert(`Hello! This is a text box. I think it's kinda neat.`);
        window.prompt(`is this cool?`);
        window.prompt(`How could this be improved?`);
        alert(`I will take note of that. (in other words it isn't stored anywhere :3)`);
        break;
}
    case `5`: {
        let hourlyRate = window.prompt(`Input your hourly rate.`);
        let hoursWorked = window.prompt(`Input how long you work.`);
        alert(`Your weekly pay is £${hourlyRate * hoursWorked} per week.`);
        break;
}
    case `6`: {
        let housenumber = window.prompt(`Enter your house number.`);
        let street = window.prompt(`Enter your street.`);
        let town = window.prompt(`Enter your town.`);
        town = town.charAt(0).toUpperCase + town.slice(1); //capitalises first letter by slicing it off and replacing it
        let house = housenumber + `, ` + street + `, ` + town;
        alert(`You live at ${house}.`);
        break;
}
    case `7`: {
        let distance = parseFloat(window.prompt(`How far is your journey?`));
        let time = parseFloat(window.prompt(`How long will it take?`) * 0.1);
        let fare = time + distance + 1.1;
        if (fare < 2.5) {
            console.error(`PRICE TOO LOW; SWITCHING TO MINIMUM FARE...`);
            alert(`Your fare is £2.50`);
        } else {
            alert(`Your fare is £${fare.toFixed(1)}0.`);
        }
        break;
}
    case `8`: {
        let random = Math.floor(Math.random() * 10);
        console.log(`Shh! The number is ${random}. Don't tell anyone!`);
        let guess = window.prompt(`Guess my lucky number!`);
        let times = 1;
        while (guess != random) {
            if (guess < random) {
                guess = window.prompt(`Wrong! The answer is higher!`);
            } else {
                guess = window.prompt(`Wrong! The answer is lower!`);
            }
            times++;
            console.error(`You suffer from a severe case of skill issue.`);
        }
        alert(`YIPPEEEEEEEEEEEEEEEEE!!!!!!!!!!!!!`);
        console.log(`The amount of tries needed for this to succeed were: ${times}`);
        break;
}
    case `9`: {
        let number = window.prompt(`Gimme a number.`);
        if (number % 2 == 0) { //the percent sign sends the remainder back with modulus
            alert(`That's an even number or smth idk i forgor mdgkjbhdsmbj :3`);
        } else if (number % 2 == 1) { //omg line 69 :O
            alert(`You are one silly oddball. Or are you, perhaps, an odd sphere? *vsauce theme plays*`);
        }
        break;
}
    case `10`: {
        let table = window.prompt(`Which times table?`);
        for (let num = 0; num <= 12; num++) {
            let answer = num * table
          document.write(`${parseInt(num)}x${parseInt(table)}=${answer}\n`);
        }
        break;
}
    case `11`: {
        let func = parseInt(window.prompt(`What function shall be performed? Answer from 1 to 4. The functions are addition, subtraction, division and multiplication.`));
        let num1 = parseInt(window.prompt(`What is the first number?`));
        let num2 = parseInt(window.prompt(`What is the second number?`));
          if (func == 1) {
            alert(`${num1} + ${num2} = ${num1+num2}`);
          } else if (func == 2) {
            alert(`${num1} - ${num2} = ${num1-num2}`);
          } else if (func == 3) {
            alert(`${num1} / ${num2} = ${num1/num2}`);
          } else if (func == 4) {
            alert(`${num1} * ${num2} = ${num1*num2}`);
          }
          break;
}
    default:
        alert(`You need to pick one. Let's try again, shall we?`);
        location.reload(); //do i need to elaborate?
}
//TODO: add more scripts
//jamie for the love of god learn js
//ngl this code makes me want to kiss boys :3
