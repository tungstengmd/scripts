var random = Math.floor(Math.random()*10) 
console.log("Shh! The number is " + random + ". Don't tell anyone!")
guess = window.prompt("Guess my lucky number!")
times = 1
while (guess!=random) {
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