var active = 1;
var timeToFade = 0;

$("#tab-1").click(function(){
    if(active!=1){
        $("#body-"+active).fadeToggle(timeToFade, function(){
            $('#body-1').fadeToggle(timeToFade);
        });
        active = 1;
        $("#tab-"+active).addClass("active");
        removeActiveClasses(active);
    }
});

$("#tab-2").click(function(){
    if(active!=2){

        $("#body-"+active).fadeToggle(timeToFade, function(){
            $('#body-2').fadeToggle(timeToFade);
        });
        active = 2;
        $("#tab-"+active).addClass("active");
        removeActiveClasses(active);
    }
});

$("#tab-3").click(function(){
    if(active!=3){

        $("#body-"+active).fadeToggle(timeToFade, function(){
            $('#body-3').fadeToggle(timeToFade);
        });
        active = 3;
        $("#tab-"+active).addClass("active");
        removeActiveClasses(active);
    }
});

$("#tab-4").click(function(){
    if(active!=4){

        $("#body-"+active).fadeToggle(timeToFade, function(){
            $('#body-4').fadeToggle(timeToFade);
        });
        active = 4;
        $("#tab-"+active).addClass("active");
        removeActiveClasses(active);
    }
});


function removeActiveClasses(numTab){
    for(i = 1; i<5; i++){
        if(i!=numTab){
            $("#tab-"+i).removeClass("active");
        }
    }
}




// Animate the element's value from x to y:
$({someValue: 0}).animate({someValue: 9}, {
  duration: 500,
      easing:'swing', // can be anything
      step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $('#net-earnings').text(commaSeparateNumber(Math.round(this.someValue)));
      },
      complete: function(){
       $('#net-earnings').text("9.88");
   }
});

// Animate the element's value from x to y:
$({someValue: 0}).animate({someValue: 15}, {
  duration: 500,
      easing:'swing', // can be anything
      step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $('#gross').text(commaSeparateNumber(Math.round(this.someValue)));
      },
      complete: function(){
       $('#gross').text("15.20");
   }
});

// Animate the element's value from x to y:
$({someValue: 0}).animate({someValue: 15}, {
  duration: 500,
      easing:'swing', // can be anything
      step: function() { // called on every step
          // Update the element's text with rounded-up value:
          $('#fees').text(commaSeparateNumber(Math.round(this.someValue)));
      },
      complete: function(){
       $('#fees').text("5.32");
   }
});

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  }
  return (val+Math.random()).toFixed(2);
}

