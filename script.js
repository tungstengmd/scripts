log("What are you doing around here?");
startScript = prompt("Which script should be started? Answer with 1 to 11 respectively. The scripts are: the multiplier, the one that states your favourite colour, the name swapper, the little test I made, the weekly pay calculator, the address formatter, the Uber® fare calculator, my while loop test, the number detector, the time table reciter and the calculator.");
switch (startScript) {
    case "1":
        number1 = prompt("What number do you wish to multiply?");
        number2 = prompt("What are you multiplying it by?");
        alert(`The answer is ${number1 * number2}.`);
        break;
    case "2":
        colour = prompt("What's your favourite colour?");
        document.write(`Your favourite colour is ${colour}.`);
        break;
    case "3":
        firstName = prompt("What's your first name?");
        lastName = prompt("What's your last name?");
        document.write(`${lastName} ${firstName}`);
        break;
    case "4": //this was an if statement test
        alert("Hello! This is a text box. I think it's kinda neat.");
        prompts = prompt("is this cool?");
        prompt("How could this be improved?");
        alert("I will take note of that. (in other words it isn't stored anywhere :3)");
        break;
    case "5":
        hourlyRate = prompt("Input your hourly rate.");
        hoursWorked = prompt("Input how long you work.");
        alert(`Your weekly pay is £${hourlyRate * hoursWorked} per week.`);
        break;
    case "6":
        housenumber = prompt("Enter your house number.");
        street = prompt("Enter your street.");
        town = prompt("Enter your town.");
        town = town.charAt(0).toUpperCase + town.slice(1); //capitalises first letter by slicing it off and replacing it
        house = housenumber + ", " + street + ", " + town;
        alert(`You live at ${house}.`);
        break;
    case "7":
        distance = parseFloat(prompt("How far is your journey?"));
        time = parseFloat(prompt("How long will it take?") * 0.1);
        fare = time + distance + 1.1;
        if (fare < 2.5) {
            error("PRICE TOO LOW; SWITCHING TO MINIMUM FARE...");
            alert("Your fare is £2.50");
        } else {
            alert(`Your fare is £${fare.toFixed(1)}0.`);
        }
        break;
    case "8":
        random = Math.floor(Math.random() * 10);
        log(`Shh! The number is ${random}. Don't tell anyone!`);
        guess = prompt("Guess my lucky number!");
        times = 1;
        while (guess != random) {
            if (guess < random) {
                guess = prompt("Wrong! The answer is higher!");
            } else {
                guess = prompt("Wrong! The answer is lower!");
            }
            times++;
            error("You suffer from a severe case of skill issue.");
        }
        alert("YIPPEEEEEEEEEEEEEEEEE!!!!!!!!!!!!!");
        log(`The amount of tries needed for this to succeed were: ${times}`);
        break;
    case "9":
        number = prompt("Gimme a number.");
        if (number % 2 == 0) { //the percent sign sends the remainder back with modulus
            alert("That's an even number or smth idk i forgor mdgkjbhdsmbj");
        } else if (number % 2 == 1) {
            alert("You are one silly oddball. Or are you, perhaps, an odd sphere? *vsauce theme plays*"); //omg line 69 :O
        }
        break;
    case "10":
        table = prompt("Which times table?");
        for (let num = 0; num <= 12; num++) {
            let answer = num * table;
            document.write(`${parseInt(num)}x${parseInt(table)}=${answer}`);
        }
        break;
    case "11":
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
        break;
    default:
        alert("You need to pick one. Let's try again, shall we?");
        location.reload();
}
//TODO: add more scripts
//jamie for the love of god learn js
//written with far
//ngl this code makes me want to kiss boys :3