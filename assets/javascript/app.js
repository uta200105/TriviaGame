$(document).ready(function()
{
// Start

$("#start").onclick(function()
{
$("p").prepend("You will be given a randorm number at the beginning of the game. There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score. You win the game by matching your total score to the random number. You lose the game if your total score goes above the random number. The value of each crystal is hidden from you until you click on it. Each time the game starts, the game will change the values of each crystal.");
},
function()
{
$("p").html('');
})
window.onload = function() {
    $("#start").on("click", timer.start);
};
});

var intervalId;
var clockRunning = false;

// Timer
var timer = {

  time: 0,

  reset: function() {

    timer.time = 0;
    $("#timer").text("00:00");
    $("#results").text("");
    alert("Nice!")
  },
  start: function() {

    if (!clockRunning) {
      intervalId = setInterval(timer.count, 60);
      clockRunning = true;
    }
  },
  stop: function() {

    clearInterval(intervalId);
    clockRunning = false;
  },
  results: function() {

    var converted = timer.timeConverter(timer.time);

    $("#results").append("<p>correct " + );
  },
  count: function() {
    timer.time++;
    $("#timer").text(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
      alert("Times Up!")
    }
    return minutes + ":" + seconds;
  }
};
});