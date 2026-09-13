const song = document.querySelector("#song");
const playBtn = document.querySelector("#playBtn");

let isPlaying = false;

playBtn.addEventListener("click", function () {

    if (!isPlaying) {

        song.play();

        playBtn.textContent = "❚❚";

        isPlaying = true;

    } else {

        song.pause();

        playBtn.textContent = "▶";

        isPlaying = false;
    }

});