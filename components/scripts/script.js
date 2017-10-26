var $;

$ = require('jquery');

$('.hamburger-outer').click(function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.nav-links').addClass('slide-out').removeClass('slide-in').delay(3000).addClass('hidden-mobile').removeClass('slide-out');
    } else {
        $(this).addClass('active');
        $('.nav-links').removeClass('hidden-mobile').addClass('slide-in');
    }
});
