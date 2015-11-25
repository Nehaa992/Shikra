var width;
var mm=0;
var ss=0;
var time=1000;
var timeCurrent = 0;
var timeComplete = 60;

var incrementTimer = function() {
    width = $("#fill").width();
    var oneSecondWidth = $("#progress").innerWidth()/3600;
    var newWidth = width + oneSecondWidth;
    $("#fill").width(newWidth);
    
    if( timeCurrent == timeComplete)
        {
            self.location="Timer_restart.html";
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

