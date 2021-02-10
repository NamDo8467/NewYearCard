let up = document.querySelector("#up");
let muted = document.querySelector("#muted");
let button2 = document.querySelector("#button2")
const audio = document.querySelector(".audio");

up.style.display = "inline";
muted.style.display = "none";

button2.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.5;
    audio.play();
    muted.style.display = "inline";
    up.style.display = "none";
  } else {
    audio.pause();
    up.style.display = "inline";
    muted.style.display = "none";
    
  }

});
