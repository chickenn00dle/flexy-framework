let $;

$ = require('jquery');

console.log('scripts ready');

$('.hamburger-outer').click(function() {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
});
