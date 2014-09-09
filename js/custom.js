var main = function() {
  //console.log("hello");
  //$(".sickaf-weather").animate();

  //$(".sickaf-timebomb").animate();

  //Google around for "Staggering Fade Animations"
  //http://jsbin.com/idizi/1562/edit
  //http://stackoverflow.com/questions/1981645/stagger-jquery-animations
  //http://jsfiddle.net/jtbowden/ykbgT/

  // Previous attempts

  // $('.sickaf-header').fadeIn(500,'easeIn').css({opacity:0,'margin-top':'150%'}).animate({opacity:1,'margin-top':'0'});

  // $('.sickaf-timebomb').delay(25).fadeIn('fast',$(this)).css({opacity:0,'margin-top':'150%'}).animate({opacity:1,'margin-top':'0%'});
  // $('.sickaf-weather').delay(50).fadeIn('fast',$(this)).css({opacity:0,'margin-top':'150%'}).animate({opacity:1,'margin-top':'0%'});


  // $('.sickaf-header').fadeIn(100,'easeIn').css({opacity:0,'margin-top':'25%'}).animate({opacity:1,'margin-top':'0'});

  // $('.sickaf-timebomb').delay(50).fadeIn(100,'easeIn').css({opacity:0,'margin-top':'25%'}).animate({opacity:1,'margin-top':'0%'});
  // $('.sickaf-weather').delay(125).fadeIn(100,'easeIn').css({opacity:0,'margin-top':'25%'}).animate({opacity:1,'margin-top':'0%'});

  // End pervious attempts

  $('.sickaf-header').animate({opacity:1,'margin-top':'0'});

  $('.sickaf-timebomb').delay(50).animate({opacity:1,'margin-top':'0'});
  $('.sickaf-weather').delay(125).animate({opacity:1,'margin-top':'0'});

};

$(document).ready(main);