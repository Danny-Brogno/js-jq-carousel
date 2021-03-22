
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
// var audio = document.getElementById("audio");
// var playPause = document.getElementById("playPauseBTN");
// var count = 0;
//
// function playPauseFun() {
//
//   if( count == 0) {
//     count = 1;
//     audio.play();
//     playPause.innerHTML = "Pause &#9658";
//   } else {
//     count = 0;
//     audio.pause();
//     playPause.innerHTML = "Play &#9658";
//   }
// }
//
// function stopFun() {
//
//   playPauseFun();
//   audio.playPauseFun();
//   audio.currentTime = 0;
//   stop.innerHTML = "Play &#9658";
// }

// --------------END BONUS-----------------------------------------

function init () {
  $(".right-arrow").click(nextClick);
  $(".left-arrow").click(previousClick);
}

$(document).ready(init);
