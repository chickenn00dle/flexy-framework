window.onload = function() {
    console.log('Javascript Loaded');

    let html = document.querySelector("html").classList,
        body = document.querySelector("body").classList,
        slider = document.querySelector("#js-nav-slider").classList,        hbOuter = document.querySelector(".hamburger-outer"),
        hamburger = hbOuter.classList;

    hbOuter.addEventListener('click', function() {
        if (hamburger.contains('active')) {
            html.remove('lock');
            body.remove('lock');
            slider.remove('slide-in');
            hamburger.remove('active');
            slider.add('slide-out');
            setTimeout(function() {
                slider.add('hidden-mobile');
            }, 200);
        } else {
            slider.remove('slide-out');
            slider.remove('hidden-mobile');
            hamburger.add('active');
            html.add('lock');
            body.add('lock');
            slider.add('slide-in');
        }
    });
};
