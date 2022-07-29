var planetRing = $('#planet-ring'),
    centerX = planetRing.width()/2,
    centerY = planetRing.height()/2,
    angle = 0,
    radius = 250;

var carouselItems = $('.circle-carousel__item'), 
    totalItems = (carouselItems.length);
console.log(totalItems);
carouselItems.each(function(i, e) {
    var w2 = $(e).outerWidth(true)/2,
        h2 = $(e).outerHeight(true)/2,
        angle = 360/totalItems*i,
        x = Math.round(centerX+radius *  Math.sin(angle*Math.PI/180)),
        y = Math.round(centerY+radius * -Math.cos(angle*Math.PI/180));
    $(e).css({right:x-w2, top:y-h2});
});

var rotate = 360/totalItems
var rotated = rotate /4

// Setting initial state
$('#planet-ring').css('transform', 'rotate('+ rotate/4 +'deg)')
$('.circle-carousel__item div').css('transform', 'rotate('+ -rotate/4 +'deg)')
$('.active').prev().addClass('next-to-active')
$('.active').next().addClass('next-to-active') 
//$('#blade').css('background-image', 'url("' + $('.active').data('background') + '")')
//$('.mentor.' + $('.active').data('mentorid')).addClass('mentor--show')

$('.circle-carousel__item').click(function() {
console.log('helloooo');
	thisNum = $(this).data('num');
    currentNum = $('.active').data('num')

  numOfRotations = (thisNum - currentNum) 
  if (numOfRotations < -totalItems/2) {
  	numOfRotations += totalItems
  }
  if (numOfRotations > totalItems/2) {
  	numOfRotations -= totalItems
  }


  rotated += (rotate * numOfRotations)

  console.log('after rotated: ', rotated);
  $('#planet-ring').css('transform', 'rotate('+ rotated +'deg)')
  $('.circle-carousel__item div').css('transform', 'rotate('+ -rotated +'deg)')
  $('.circle-carousel__item').removeClass('active').removeClass('next-to-active');
  $('.mentor').removeClass('mentor--show')
  
  $(this).addClass('active')
  $('.active').prev().addClass('next-to-active')
  $('.active').next().addClass('next-to-active')

  slideChange();

  
  
});



$( "#next-to-prev" ).click(function() {

//    var $curr = ;
    
    // $('.active').prev().data('num').trigger('click');

    // console.log('yes clicked prev'+$curr)
  
    $('.active').prev().trigger('click');

});

 $( "#next-to-next" ).click(function() {

    $('.active').next().trigger('click');
//     console.log('yes clicked next')


 });



slideChange();

function slideChange() {
    

if ($('.active').data('num')=="1") {
    $('.yj-carousel-number > p').html("3");
    $('.yj-carousel-detail > h2').html("TRUCK");
    $('.yj-carousel-detail > h1').html("Battery");
    $('.yj-carousel-detail > p').html("Revolution in battery technology");
    
}
if ($('.active').data('num')=="2") {
    $('.yj-carousel-number > p').html("2");
    $('.yj-carousel-detail > h2').html("TRACTOR");
    $('.yj-carousel-detail > h1').html("Battery");
    $('.yj-carousel-detail > p').html("Revolution in battery technology");
    
}
if ($('.active').data('num')=="3") {
    $('.yj-carousel-number > p').html("1");
    $('.yj-carousel-detail > h2').html("CAR - SUV - LCV");
    $('.yj-carousel-detail > h1').html("Battery");
    $('.yj-carousel-detail > p').html("Revolution in battery technology");
    
}
if ($('.active').data('num')=="4") {
    $('.yj-carousel-number > p').html("4");
    $('.yj-carousel-detail > h2').html("AUTOMOTIVE LEAD PLATES FOR BATTER");
    $('.yj-carousel-detail > h1').html("Car tubular battery plates");
    $('.yj-carousel-detail > p').html("Revolution in battery technology");
    
}
if ($('.active').data('num')=="1") {
    $('.yj-carousel-number > p').html("3");
    $('.yj-carousel-detail > h2').html("TRUCK");
    $('.yj-carousel-detail > h1').html("Battery");
    $('.yj-carousel-detail > p').html("Revolution in battery technology");
    
}
if ($('.active').data('num')=="2") {
    $('.yj-carousel-number > p').html("2");
    $('.yj-carousel-detail > h2').html("TRACTOR");
    $('.yj-carousel-detail > h1').html("Battery");
    $('.yj-carousel-detail > p').html("Revolution in battery technology");
    
}
if ($('.active').data('num')=="3") {
    $('.yj-carousel-number > p').html("1");
    $('.yj-carousel-detail > h2').html("CAR - SUV - LCV");
    $('.yj-carousel-detail > h1').html("Battery");
    $('.yj-carousel-detail > p').html("Revolution in battery technology");
    
}
}
