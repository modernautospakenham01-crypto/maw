document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.querySelector(".mobile-toggle");
    const menu = document.querySelector(".menu");

    if(toggle && menu){
        toggle.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    }



    // video

    document.addEventListener("DOMContentLoaded", function () {

    const video = document.getElementById("heroVideo");
    const playBtn = document.getElementById("playBtn");

    playBtn.addEventListener("click", function (e) {
        e.preventDefault();
        video.play();
    });

    video.addEventListener("play", function () {
        playBtn.classList.add("hide");
    });

    video.addEventListener("pause", function () {
        playBtn.classList.remove("hide");
    });

    video.addEventListener("ended", function () {
        playBtn.classList.remove("hide");
    });

});
