document.write ("Hello World!")
var mood
mood = window.prompt("How are you?")
var reason = window.prompt("Why are you feeling" + mood + "?")
if (mood.toLowerCase == "sad" || mood.toLowerCase == "angry") {
    alert("damn, sucks to suck HAHAHAHAHAHA")
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
} else if (mood.toLowerCase == "happy") {
    alert("YAY YIPPEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
}