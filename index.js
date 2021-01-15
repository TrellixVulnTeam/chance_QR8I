document.addEventListener("DOMContentLoaded", () => {
  var myVideo = document.getElementById("video");
  const playBtn = document.querySelector("#play-btn");
  const playerLogo = document.querySelector("#player-logo");
  playerLogo.classList.add("first-load");

  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 500) {
      document.querySelector(".content__heading").innerHTML = "Chance";
    } else {
      document.querySelector(".content__heading").innerHTML =
        "The Sky Is The Limit";
    }
  });

  window.onscroll = function () {
    scrollFunction();
  };

  playBtn.addEventListener("click", () => {
    if (
      playerLogo.classList.contains("fa-play-circle") &&
      playerLogo.classList.contains("first-load")
    ) {
      playerLogo.classList.remove("fa-play-circle");
      playerLogo.classList.remove("first-load");
      playerLogo.classList.add("fa-pause-circle");
      myVideo.play();
    } else if (
      playerLogo.classList.contains("fa-play-circle") &&
      playerLogo.classList.contains("first-load") === false
    ) {
      playerLogo.classList.remove("fa-play-circle");
      playerLogo.classList.add("fa-pause-circle");
      myVideo.pause();
    } else {
      playerLogo.classList.remove("fa-pause-circle");
      playerLogo.classList.add("fa-play-circle");
      myVideo.play();
    }
  });

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      playBtn.style.display = "block";
    } else {
      playBtn.style.display = "none";
    }
  }
});
