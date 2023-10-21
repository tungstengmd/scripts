var startScript
startScript = window.prompt("Which script should be started? The calculator, the one that states your favourite colour, the name swapper, the little test I made or the weekly pay calculator? Answer with 1, 2, 3, 4 and 5 respectively.")
if (startScript == 1) {
    var number1
    number1 = window.prompt("What number do you wish to multiply?")
    var number2
    number2 = window.prompt("What are you multiplying it by?")
    document.write("The answer is " + number1 * number2 + ".")
} else if (startScript == 2) {
    var colour
    colour = window.prompt("What's your favourite colour?")
    document.write("Your favourite colour is " + colour + ".")
} else if (startScript == 3) {
    var firstName
    firstName = window.prompt("What's your first name?")
    var lastName
    lastName = window.prompt("What's your last name?")
    document.write(lastName + " " + firstName)
} else if (startScript == 4) {
    var prompts
    alert("Hello! This is a text box. I think it's kinda neat.")
    prompts = window.prompt("is this cool?")
    if (prompts.toLowerCase == "yes") {
        alert("Thank you!")
    } else {
        window.prompt("How could this be improved?")
        alert("I will take note of that.")
    }
} else if (startScript == 5) {
    var hourlyRate
    hourlyRate = window.prompt("Input your hourly rate.")
    var hoursWorked
    hoursWorked = window.prompt("Input how long you work.")
    alert("Your weekly pay is " + "£" + hourlyRate * hoursWorked + " per week. Have a nice day!")
}