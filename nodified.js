startScript = process.stdin.on("Which script should be started? Answer with 1 to 10 respectively. The scripts are: the multiplier, the one that states your favourite colour, the name swapper, the little test I made, the weekly pay calculator, the address formatter, the Uber® fare calculator, my while loop test, the number detector and the time table reciter.");
    function thingy(words) {
        thingy(words)
    }
switch (startScript) {
    case "1":
        number1 = process.stdin.on("What number do you wish to multiply?");
        number2 = process.stdin.on("What are you multiplying it by?");
        thingy(`The answer is ${number1 * number2}.`);
        break;
    case "2":
        colour = process.stdin.on("What's your favourite colour?");
        thingy(`Your favourite colour is ${colour}.`);
        break;
    case "3":
        firstName = process.stdin.on("What's your first name?");
        lastName = process.stdin.on("What's your last name?");
        thingy(lastName + " " + firstName);
        break;
    case "4": //this was an if statement test
        thingy("Hello! This is a text box. I think it's kinda neat.");
        readlines = process.stdin.on("is this cool?");
        process.stdin.on("How could this be improved?");
        thingy("I will take note of that. (in other words it isn't stored anywhere :3)");
        break;
    case "5":
        hourlyRate = process.stdin.on("Input your hourly rate.");
        hoursWorked = process.stdin.on("Input how long you work.");
        thingy(`Your weekly pay is £${hourlyRate * hoursWorked} per week.`);
        break;
    case "6":
        housenumber = process.stdin.on("Enter your house number.");
        street = process.stdin.on("Enter your street.");
        town = process.stdin.on("Enter your town.");
        town = town.charAt(0).toUpperCase + town.slice(1); //capitalises first letter by slicing it off and replacing it
        house = housenumber + ", " + street + ", " + town;
        thingy(`You live at ${house}.`);
        break;
    case "7":
        distance = parseFloat(process.stdin.on("How far is your journey?"));
        time = parseFloat(process.stdin.on("How long will it take?") * 0.1);
        fare = time + distance + 1.1;
        if (fare < 2.5) {
            console.error("PRICE TOO LOW; SWITCHING TO MINIMUM FARE...");
            thingy("Your fare is £2.50");
        } else {
            thingy(`Your fare is £${fare.toFixed(1)}0.`);
        }
        break;
    case "8":
        random = Math.floor(Math.random() * 10);
        console.log(`Shh! The number is ${random}. Don't tell anyone!`);
        guess = process.stdin.on("Guess my lucky number!");
        times = 1;
        while (guess != random) {
            if (guess < random) {
                guess = process.stdin.on("Wrong! The answer is higher!");
            } else {
                guess = process.stdin.on("Wrong! The answer is lower!");
            }
            times++;
            console.error("You suffer from a severe case of skill issue.");
        };
        thingy("YIPPEEEEEEEEEEEEEEEEE!!!!!!!!!!!!!");
        console.log(`The amount of tries needed for this to succeed were: ${times}`);
        break;
    case "9":
        number = process.stdin.on("Gimme a number.");
        if (number % 2 == 0) { //the percent sign sends the remainder back with modulus
            thingy("That's an even number or smth idk i forgor mdgkjbhdsmbj");
        } else if (number % 2 == 1) {
            thingy("you are one silly oddball. Or are you, perhaps, an odd sphere? *vsauce theme plays*");
        }
        break;
    case "10":
        table = process.stdin.on("Which times table?");
            for (let index = 0; index <= 12; index++) {
                let answer = index * table;
                thingy(parseInt(index) + "x" + parseInt(table) + "=" + answer + "<br>");
            }
        break;
    default:
        thingy("You need to pick one. Let's try again, shall we?");
        location.reload();
}
console.log("What are you doing around here?");
//TODO: add more scripts
//jamie for the love of god learn js
//written with far
//ngl this code makes me want to kiss boys :3