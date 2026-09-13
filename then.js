// =========================
// SONG
// =========================

const playBtn = document.querySelector("#playBtn");
const song = document.querySelector("#song");

playBtn.addEventListener("click", function () {

    if (song.paused) {

        song.play();

        playBtn.textContent = "❚❚";

    } else {

        song.pause();

        playBtn.textContent = "▶";

    }

});


// =========================
// CONTINUE
// =========================

const continueBtn = document.querySelector("#continueBtn");

continueBtn.addEventListener("click", function () {

    window.location.href = "page2.html";

});