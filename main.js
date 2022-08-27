let clicking = true

document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        event.preventDefault();
        clicking = false
    }
}

setInterval(function() {
    if (clicking) {
        if (nuts <= 0) {
            nuts = 1
        }
        nuts += nuts * 0.1
    }
}, 1000);

alert("Press space to stop 'autoclicking' :)")
