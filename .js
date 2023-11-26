console.warn("WARNING: This might break sooooo idk :3")//well it IS broken, only on vscode for some god forsaken reason
random1 = Math.floor(Math.random()*12)+1
random2 = Math.floor(Math.random()*12)+1
answer = random1 * random2
tries = 1
guess = window.prompt("What is " + random1 + " * " + random2 +"?")
while (guess!=answer) {
    alert("Wrong!")
    tries++
    random1 = Math.floor(Math.random()*12)+1
    random2 = Math.floor(Math.random()*12)+1
    answer = random1 * random2
    guess = window.prompt("What is " + random1 + " * " + random2 +"?")
}
console.log("Took: "  + tries + " attempts")