
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



function init () {
  $(".right-arrow").click(nextClick, scottishMusic);
  $(".left-arrow").click(previousClick);
}

$(document).ready(init);


function scottishMusic(){

  $('document').ready(function () {

    $('.right-arrow').click(function () {

        var audio = {};
        audio["walk"] = new Audio();
        audio["walk"].src = "http://www.rangde.org/static/bell-ring-01.mp3"
        audio["walk"].addEventListener('load', function () {
          audio["walk"].play();
        })
  })
});
