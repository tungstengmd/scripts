var x = Math.floor(Math.random()*10)
console.log("Shh! The number is " + x + ". Don't tell anyone!")
var y = 0
var times = 0
while (y!=x) {
    y = window.prompt("Guess my lucky number!")
    times++
} alert("The amount of tries needed for this to succeed were: " + times)