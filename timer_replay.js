var time=1000;
var mm=0;
var ss=0;
var timeCurrent = 0;
var timeComplete = 60;
function toggleTimer() {
    setInterval(alertFunc, 30000);  
}
function alertFunc() {
   self.location="timer-on.html";
    }
var incrementTimer = function() {    
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
toggleTimer();
startTimer();