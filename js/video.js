const video = document.querySelector("#myVideo");
const btnPlay = document.querySelector("#play");
const btnMute = document.querySelector("#mute");
const btnPrev = document.querySelector("#prev");
const btnNext = document.querySelector("#next");

const playList = ["video1", "video2", "video3"];

let index = 2;

function videoPlay() {
  if (video.paused) {
    video.play();
    btnPlay.innerText = "Pause";
  } else {
    video.pause();
    btnPlay.innerText = "Play";
  }
}

function videoMute() {
  if (video.muted) {
    video.muted = false;
    btnMute.innerText = "Mute";
  } else {
    video.muted = true;
    btnMute.innerText = "UnMute";
  }
}

function videoPrev() {
  console.log(index);
  if (index !== 0) {
    index--;
  } else {
    index = playList.length - 1;
  }
  console.log(playList[index]);
  video.src = `videos/${playList[index]}.mp4`;
}

function videoNext() {
  console.log(index);
  if (index < playList.length - 1) {
    index++;
  } else {
    index = 0;
  }
  console.log(playList[index]);
  video.src = `videos/${playList[index]}.mp4`;
}

