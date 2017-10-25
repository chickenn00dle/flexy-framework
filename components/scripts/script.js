let $;

$ = require('jquery');

console.log('scripts ready');

$('.hamburger-outer').click(function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.nav-mobile').addClass('hidden').removeClass('slide-in');
    } else {
        $(this).addClass('active');
        $('.nav-mobile').removeClass('hidden').addClass('slide-in');
    }
});
