const recordPlayer = document.querySelector('#jsRecordPlayer');
const recordPreview = document.querySelector('#jsRecordPreview');
const recordBtn = document.querySelector('#jsRecordBtn');

let streamObject;
let videoRecorder;

const handleVideoData = (event) => {
  const videoFile = event.data;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(videoFile);
  link.download = 'recordedVideo.webm';
  document.body.appendChild(link);
  link.click();
};

const stopRecording = () => {
  videoRecorder.stop();
  recordBtn.removeEventListener('click', stopRecording);
  recordBtn.innerHTML = 'Start Recording';
  recordBtn.addEventListener('click', getVideo);
};

const startRecording = () => {
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener('dataavailable', handleVideoData);
  recordBtn.addEventListener('click', stopRecording);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 },
    });
    streamObject = stream;
    recordPreview.srcObject = stream;
    recordPreview.muted = true;
    recordPreview.play();
    recordBtn.innerHTML = 'Stop Recording';
    startRecording();
  } catch (err) {
    console.error(err);
    recordBtn.innerHTML = "Can't Record";
  } finally {
    recordBtn.removeEventListener('click', getVideo);
  }
};

function init() {
  recordBtn.addEventListener('click', getVideo);
}

if (recordPlayer) {
  init();
}
