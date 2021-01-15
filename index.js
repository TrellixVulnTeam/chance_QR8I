document.addEventListener("DOMContentLoaded", () => {
  var myVideo = document.getElementById("video");

  function playPause() {
    if (myVideo.paused) myVideo.play();
    else myVideo.pause();
  }

  console.log(document);

  playPause();
  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 500) {
      document.querySelector(".content__heading").innerHTML = "Chance";
    } else {
      document.querySelector(".content__heading").innerHTML =
        "The Sky Is The Limit";
    }
  });
});
