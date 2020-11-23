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


















//https://p.scdn.co/mp3-preview/a3b5cf9da8473c959c6833e75404379db9226ba7?cid=774b29d4f13844c495f206cafdad9c86
//When Christmas Comes to Town
//Matthew Hall, Meagan Moore

//https://p.scdn.co/mp3-preview/ad04264bcbf286030f90895dacdc2af00e586c99?cid=774b29d4f13844c495f206cafdad9c86
//Spirit of the season
//Alan Silvestri

//https://p.scdn.co/mp3-preview/729371ac317464304d4ca3511653bbe866ac7cef?cid=774b29d4f13844c495f206cafdad9c86
//Suite from The Polar Express
//Alan Silvestri