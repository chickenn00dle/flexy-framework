var $;

$ = require('jquery');

$(function(){
    var Mustache = require('mustache');
});

$('.hamburger-outer').click(function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('html').removeClass('lock');
        $('body').removeClass('lock');
        $('.nav-links').addClass('slide-out').removeClass('slide-in').delay(3000).addClass('hidden-mobile').removeClass('slide-out');
    } else {
        $(this).addClass('active');
        $('html').addClass('lock');
        $('body').addClass('lock');
        $('.nav-links').removeClass('hidden-mobile').addClass('slide-in');
    }
});
