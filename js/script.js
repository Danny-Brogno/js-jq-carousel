
function previousClick() {

  var currentImg = $(".active");
  var previousImg = currentImg.prev("img");

  currentImg.removeClass("active");
  previousImg.addClass("active");
}

function nextClick() {

  var currentImg = $(".active");
  var nextImg = currentImg.next("img");

  currentImg.removeClass("active");
  nextImg.addClass("active");
}

function init () {
  $(".right-arrow").click(nextClick);
  $(".left-arrow").click(previousClick);
}

$(document).ready(init);
