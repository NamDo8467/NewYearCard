let audio = new Audio();
audio = document.querySelector(".audio");
let button = document.querySelector(".btn");
button.addEventListener('click', () => {
  audio.volume = 0.5;
  audio.play();
})
