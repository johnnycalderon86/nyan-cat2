var seconds = 10;

function myMove() {
    var elem = document.getElementById("nyan");
    var pos = 0;
    var id = setInterval(frame, 10);
    document.querySelector("#nyan").style.display = "block";
    
    function frame() {
        if (pos >= 100) {
            clearInterval(id);
        } else {
            pos += 0.2;
            elem.style.top = pos + '%';
            elem.style.left = pos + '%';
        }
    }

}

//visible not visible background

var elembg = document.getElementById("backgroundnyan");
var elembtn = document.getElementById("button");

function hideBackground() {
    elembg.style.display = "none";
    elembtn.style.display = "block";
}


function showBackground() {
    elembg.style.display = "block";
    elembtn.style.display = "none";
    setTimeout(hideBackground, 10000);
}
var x = document.getElementById("nyansong");

function playAudio (){
    x.play();
    setTimeout(pauseAudio, 10000);
}

function pauseAudio (){
    x.pause();
}