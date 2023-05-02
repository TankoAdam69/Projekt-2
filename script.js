function playvideo() {
    v = document.getElementById("videoz");
    v.play()
    setTimeout(playvideo, 3000);
}