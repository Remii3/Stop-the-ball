$('.start').click(function(){
    $('.kropka').addClass('str');
    $('.kropka').removeClass('stp');
})

$('.stop').click(function(){
    $('.kropka').addClass('stp');
})

$('.reset').click(function(){
    $('.kropka').removeClass('str');
    $('.kropka').removeClass('stp');
    $('.kropka').removeClass('moderate');
    $('.kropka').removeClass('impossible');
    $('.kropka').addClass('default')
})

$('.dif1').click(function(){
    $('.kropka').removeClass('moderate');
    $('.kropka').removeClass('impossible');
    $('.kropka').addClass('default');
    $('.kropka').removeClass('str');
    $('.kropka').removeClass('stp');
})

$('.dif2').click(function(){
    $('.kropka').removeClass('default');
    $('.kropka').removeClass('impossible');
    $('.kropka').addClass('moderate');
    $('.kropka').removeClass('str');
    $('.kropka').removeClass('stp');
})

$('.dif3').click(function(){
    $('.kropka').removeClass('moderate');
    $('.kropka').removeClass('default');
    $('.kropka').addClass('impossible');
    $('.kropka').removeClass('str');
    $('.kropka').removeClass('stp');
})

$('.menuSideButton').click(function(){
    $('.menuSideButton').toggleClass('lefto');
    $('nav').toggleClass('lefto2')
})

$('.themeButton').click(function(){
    $('body').toggleClass('newColorBody');
    $('.stripe1').toggleClass('newColorStrip1');
    $('.stripe2').toggleClass('newColorStripe2');
    $('.stripe3').toggleClass('newColorStripe3');
    $('.kropka').toggleClass('newColorKropka');
    $('.menuSide').toggleClass('newColorMenu');
    $('.menuBottom').toggleClass('newColorMenu');
    $('.dif1').toggleClass('newColorButtons');
    $('.dif2').toggleClass('newColorButtons');
    $('.dif3').toggleClass('newColorButtons');
    $('.start').toggleClass('newColorButtons');
    $('.stop').toggleClass('newColorButtons');
    $('.reset').toggleClass('newColorButtons');
    $('i').toggleClass('ikonka')
})


