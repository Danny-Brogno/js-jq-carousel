
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
  $(".right-arrow").click(nextClick);
  $(".left-arrow").click(previousClick);
}

$(document).ready(init);
