const videoPlayer = document.querySelector('#jsVideoPlayer');
const video = document.querySelector('#jsVideo');

const controls = document.querySelector('#jsVideoControls');

const playBtn = document.querySelector('#jsPlayBtn');
const volumeBtn = document.querySelector('#jsVolumeBtn');
const fullScreenBtn = document.querySelector('#jsFullScreenBtn');

const volumeRange = document.querySelector('#jsVolume');
const currentTime = document.querySelector('#jsCurrentTime');
const totalTime = document.querySelector('#jsTotalTime');

const progressBar = document.querySelector('#jsProgressBar');
const progressBarContainer = document.querySelector('#jsProgressBarContainer');

const registerView = () => {
  const videoId = window.location.href.split('/videos/')[1];
  fetch(`/api/${videoId}/views`, {
    method: 'POST',
  });
};

function handlePlayBtnClick() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function handleVideoPlay() {
  playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

function handleVideoPause() {
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function handleVolumeBtnClick() {
  if (video.muted) {
    video.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    volumeRange.value = videoPlayer.volume;
  } else {
    video.muted = true;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    volumeRange.value = 0;
  }
}

function handleSpaceKeydown(event) {
  if (event.code === 'Space') {
    event.preventDefault();
    handlePlayBtnClick();
  }
}

function handleRangeDrag(event) {
  const value = event.target.value;
  video.volume = value;
  if (value >= 0.6) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else if (value >= 0.2) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
  } else {
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  fullScreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullScreenBtn.removeEventListener('click', exitFullScreen);
  fullScreenBtn.addEventListener('click', goFullScreen);
}

function goFullScreen() {
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.webkitRequestFullscreen) {
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.mozRequestFullscreen) {
    videoPlayer.mozRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) {
    videoPlayer.msRequestFullscreen();
  }
  fullScreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScreenBtn.removeEventListener('click', goFullScreen);
  fullScreenBtn.addEventListener('click', exitFullScreen);
}

function formatTime(totalSeconds) {
  const secondsNumber = parseInt(totalSeconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber % 3600) / 60);
  let seconds = secondsNumber % 60;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  if (hours === 0) return `${minutes}:${seconds}`;
  if (hours < 10) hours = `0${hours}`;
  return `${hours}:${minutes}:${seconds}`;
}

function getCurrentTime() {
  currentTime.innerHTML = formatTime(Math.floor(video.currentTime));
}

function setVideoTime() {
  currentTime.innerHTML = formatTime(Math.floor(video.currentTime));
  totalTime.innerHTML = formatTime(video.duration);
}

function handleEnded() {
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
  registerView();
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
  getCurrentTime();
}

function scrub(event) {
  const scrubTime =
    (event.offsetX / progressBarContainer.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

let hide = null;
function showControls() {
  if (hide) {
    clearTimeout(hide);
  }
  controls.classList.add('show');
  videoPlayer.style.cursor = 'default';
  hide = setTimeout(hideControls, 2000);
}

function hideControls() {
  controls.classList.remove('show');
  videoPlayer.style.cursor = 'none';
}

function init() {
  playBtn.addEventListener('click', handlePlayBtnClick);
  video.addEventListener('click', handlePlayBtnClick);
  document.addEventListener('keydown', handleSpaceKeydown);
  video.addEventListener('play', handleVideoPlay);
  video.addEventListener('pause', handleVideoPause);

  video.volume = volumeRange.value;
  volumeBtn.addEventListener('click', handleVolumeBtnClick);
  volumeRange.addEventListener('input', handleRangeDrag);

  fullScreenBtn.addEventListener('click', goFullScreen);

  video.addEventListener('loadedmetadata', setVideoTime);
  video.addEventListener('ended', handleEnded);
  video.addEventListener('timeupdate', handleProgress);

  let mousedown = false;
  progressBarContainer.addEventListener('click', scrub);
  progressBarContainer.addEventListener(
    'mousemove',
    (event) => mousedown && scrub(event)
  );
  progressBarContainer.addEventListener('mousedown', () => (mousedown = true));
  progressBarContainer.addEventListener('mouseup', () => (mousedown = false));

  videoPlayer.addEventListener('mousemove', showControls);
  videoPlayer.addEventListener('mouseleave', hideControls);
}

if (videoPlayer) {
  init();
}
