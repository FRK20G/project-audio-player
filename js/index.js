const audio = document.querySelector('#player');
const playBtn = document.querySelector('#play');
const pauseBtn = document.querySelector('#pause');
const backwardBtn = document.querySelector('#backward');
const forwardBtn = document.querySelector('#forward');
const progressBar = document.querySelector('#progressBar');

function togglePlayAndPause() {
    playBtn.classList.toggle('hide');
    pauseBtn.classList.toggle('hide');
}

playBtn.addEventListener('click', () => {
    audio.play();

    togglePlayAndPause();
});

pauseBtn.addEventListener('click', () => {
    audio.pause();

    togglePlayAndPause();
});

forwardBtn.addEventListener('click', () => {
    if (!audio.paused) {
        audio.currentTime = parseInt(audio.currentTime + 10);
    }
});

backwardBtn.addEventListener('click', () => {
    if (!audio.paused) {
        audio.currentTime = parseInt(audio.currentTime - 10);
    }
});

audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${percent}%`;
});