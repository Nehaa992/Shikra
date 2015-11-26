var width;
var mm=0;
var ss=0;
var time=1000;
var timeCurrent = 0;
var timeComplete = 3600;

var incrementTimer = function() {
    if (timeCurrent%10==0) {
        width = $("#fill").width();
        var oneSecondWidth = $("#progress").innerWidth()/360;
        var newWidth = width + oneSecondWidth;
        $("#fill").width(newWidth);
    }
    if( timeCurrent == timeComplete)
        {
            self.location="Time-to-walk.html";
        }
    
    ss=ss+1;
    if(ss<10)
    {
        document.getElementById("sec").innerHTML ="0"+ ss;
    }
    else
    {
        document.getElementById("sec").innerHTML = ss;
    }
    if(ss==60) 
    {
        ss= 0;
        document.getElementById("sec").innerHTML = ss;
        mm=mm+1;
        if(mm<10)
        {
            var x = document.getElementById("min").innerHTML ="0"+ mm;
        }
        else
        {
            var x = document.getElementById("min").innerHTML = mm;
        }
    }
    timeCurrent += 1;
}

var timer;

var startTimer = function() {
    timer = setInterval(incrementTimer, time);
}

startTimer();

var stopTimer = function() {
    clearInterval(timer);
}

var toggleTimer = function(){
    var image = document.getElementById('pause');
    if (image.src.match("play.png")) {
        image.src = "pause.png";
        startTimer();
    } else {
        image.src = "play.png";
        stopTimer();        
    }
}


document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);


function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}