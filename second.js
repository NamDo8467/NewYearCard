const audio = new Audio();
audio = document.querySelector(".audio");
window.addEventListener("DOMContentLoaded", event => {
    //const audio1 = document.querySelector(".audio");
    audio.volume = 0.5;
    audio.play();
  });
