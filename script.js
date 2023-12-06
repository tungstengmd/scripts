console.log("The scripts are: the multiplier, the one that states your favourite colour, the name swapper, the little test I made, the weekly pay calculator, the address formatter, the Uber® fare calculator and my while loop test.")
startScript = window.prompt("Which script should be started? Answer with 1 to 9 respectively. Check the console for the script list.")
if (startScript == 1) {
    number1 = window.prompt("What number do you wish to multiply?") // he multiplies
    number2 = window.prompt("What are you multiplying it by?") // he goin ham
    alert("The answer is " + number1 * number2 + ".") //answer :woohoo:
} else if (startScript == 2) {
    colour = window.prompt("What's your favourite colour?")
    document.write("Your favourite colour is " + colour + ".") //literally obvious IT STATES A VARIABLE LOL
} else if (startScript == 3) {
    firstName = window.prompt("What's your first name?")
    lastName = window.prompt("What's your last name?")
    document.write(lastName + " " + firstName) //also obvious
} else if (startScript == 4) {
    alert("Hello! This is a text box. I think it's kinda neat.")
    prompts = window.prompt("is this cool?")
    if (prompts.toLowerCase == "yes") {
        alert("Thank you!")
    } else {
        window.prompt("How could this be improved?")
        alert("I will take note of that. (in other words it isn't stored anywhere :3)")
    }
} else if (startScript == 5) {
    hourlyRate = window.prompt("Input your hourly rate.")
    hoursWorked = window.prompt("Input how long you work.")
    alert("Your weekly pay is " + "£" + hourlyRate * hoursWorked + " per week.") //the multiplier reworded    
} else if (startScript == 6) {
    housenumber = window.prompt("Enter your house number.")
    street = window.prompt("Enter your street.")
    town = window.prompt("Enter your town.")
    town = town.charAt(0).toUpperCase + town.slice(1) //capitalises first letter
    house = housenumber + ", " + street + ", " + town
    alert("You live at " + house + ".")
} else if (startScript == 7) {
    const base = 1.10
    distance = parseFloat(window.prompt("How far is your journey?"))
    time = parseFloat(window.prompt("How long will it take?") * 0.1)
    fare = time + distance + base
    if (fare < 2.5) {
        console.error("PRICE TOO LOW; SWITCHING TO MINIMUM FARE...")
        alert("Your fare is £2.50")
    } else {
        alert("Your fare is £" + fare + "0.")
    }
} else if (startScript == 8) {
    random = Math.floor(Math.random() * 10)
    console.log("Shh! The number is " + random + ". Don't tell anyone!")
    guess = window.prompt("Guess my lucky number!")
    times = 1
    while (guess != random) {
        if (guess < random) {
            guess = window.prompt("Wrong! The answer is higher!")
            console.error("You suffer from a severe case of skill issue.")
        } else {
            guess = window.prompt("Wrong! The answer is lower!")
            console.error("You suffer from a severe case of skill issue.")
        }
        times++
    }
    alert("YIPPEEEEEEEEEEEEEEEEE!!!!!!!!!!!!!")
    console.log("The amount of tries needed for this to succeed were: " + times)
} else if (startScript == 9) {
    number = window.prompt("Gimme a number.")
    if (number % 2 == 0) { // the percent sign sends the remainder back with modulus
        alert("That's an even number or smth idk i forgor mdgkjbhdsmbj")
    } else if (number % 2 == 1) {
        alert("you are one silly oddball")
    }
}
// jamie for the love of god learn js