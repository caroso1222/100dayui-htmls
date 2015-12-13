var count = 30;
var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
var days = 11;
var hours = 21;
var minutes = 24;
var seconds = 18;

var cs_secs = 8;
var cs_mins = 48;
var cs_hours = 1;

var isPaused = false;

function timer() {
    //Current session counter
    if(!isPaused){
        cs_secs = (cs_secs + 1)%60;
        if(cs_secs == 0){
            cs_mins = (cs_mins + 1)%60;
            if(cs_mins == 0){
                cs_hours = (cs_hours + 1)%24;
            }
        }
    }

    //Adds 0's before unit numbers
    tempString = cs_secs;
    if(cs_secs<10){
        tempString = "0"+cs_secs;
    }
    $("#cs_secs").html(tempString);

    tempString = cs_mins;
    if(cs_mins<10){
        tempString = "0"+cs_mins;
    }
    $("#cs_mins").html(tempString);

    $("#cs_hours").html(cs_hours);

    //General counter
    if(!isPaused){
        seconds = (seconds + 1)%60;
        if(seconds == 0){
            minutes = (minutes + 1)%60;
            if(minutes == 0){
                hours = (hours + 1)%24;
                if(hours == 0){
                    days = days + 1;
                }
            }
        }
    }
    
    //Adds 0's before unit numbers
    tempString = seconds;
    if(seconds<10){
        tempString = "0"+seconds;
    }
    $("#seconds").html(tempString);

    tempString = minutes;
    if(minutes<10){
        tempString = "0"+minutes;
    }
    $("#minutes").html(tempString);

    tempString = hours;
    if(hours<10){
        tempString = "0"+hours;
    }
    $("#hours").html(tempString);

    tempString = days;
    if(days<10){
        tempString = "0"+days;
    }
    $("#days").html(tempString);
}

$("#pause").click(function(){
    showPlay();
    isPaused = !isPaused;
});

$("#play").click(function(){
    showPause();
    isPaused = !isPaused;
});

$("#stop").click(function(){
    isPaused = true;
    cs_secs = 0;
    cs_mins = 0;
    cs_hours = 0;
    $("#cs_secs").html("00");
    $("#cs_mins").html("00");
    $("#cs_hours").html(0);
    showPlay();
});

function showPlay(){
    $("#pause").css("padding-left","19px");
    $("#pause").css("opacity","0");
    $("#play").css("padding-left","19px");
    $("#play").css("opacity","0.3");
}

function showPause(){
    $("#play").css("padding-left","0px");
    $("#play").css("opacity","0");
    $("#pause").css("padding-left","0");
    $("#pause").css("opacity","0.3");
}