// const continueBtn = document.querySelector("#continueBtn");

// continueBtn.addEventListener("click", function () {

//     window.location.href = "page2.html";

// });
// new

// const continueBtn = document.querySelector("#continueBtn");

// continueBtn.addEventListener("click", function () {

//     window.location.href = "and.html";

// });

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

 const continueBtn = document.querySelector("#continueBtn");

 continueBtn.addEventListener("click", function () {

  window.location.href = "and.html";

 });