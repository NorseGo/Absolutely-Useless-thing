function PlaySound() {
    var sound = document.getElementById("audio");
    sound.play();
    setTimeout(function(){ location.href = 'index.html'; }, sound.duration * 1000);
}

function PlayDevet() {
    var sound = document.getElementById("audio");
    sound.play();
    setTimeout(function(){ location.href = 'devet.html'; }, sound.duration * 1000);
}

function PlayGamesite() {
    var sound = document.getElementById("audio");
    sound.play();
    setTimeout(function(){ location.href = 'gamesite.html'; }, sound.duration * 1000);
}