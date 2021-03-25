
function previousClick() {

  var currentImg = $(".active");

  if (currentImg.hasClass("start")) {

    var previousImg = $("img.end");
    currentImg.removeClass("active");
    previousImg.addClass("active");

  } else {

    var previousImg = currentImg.prev("img");
    currentImg.removeClass("active");
    previousImg.addClass("active");
  }
}

function nextClick() {

  var currentImg = $(".active");

  if (currentImg.hasClass("end")) {

    var nextImg = $("img.start");
    currentImg.removeClass("active");
    nextImg.addClass("active");

  } else {

    var nextImg = currentImg.next("img");
    currentImg.removeClass("active");
    nextImg.addClass("active");
  }
}
// ----------------BONUS---------------------------------------


function playPauseFun() {

  var audio = document.getElementById("audio");
  var playPause = document.getElementById("playPauseBTN");
  var stop = document.getElementById("stopMusicBTN");

  if(audio.paused ) {
    audio.play();
    playPauseBTN.innerHTML = "Pause &#9658";
  } else {
    audio.pause();
    playPauseBTN.innerHTML = "Play &#9658";
  }
}

function stopFun() {
  audio.pause();
  audio.currentTime = 0;
  stop.innerHTML = "Stop &#9658";
  playPauseBTN.innerHTML = "Stop &#9658";

}

// --------------END BONUS-----------------------------------------

function init () {
  $(".right-arrow").click(nextClick);
  $(".left-arrow").click(previousClick);
  $("#playPauseBTN").click(playPauseFun);
  $("#stopMusicBTN").click(stopFun);
}

$(document).ready(init);
