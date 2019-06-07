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

