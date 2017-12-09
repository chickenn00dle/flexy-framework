window.onload = function() {
    console.log('Javascript Loaded');

    let htmlClasses = document.querySelector("html").classList,
        bodyClasses = document.querySelector("body").classList,
        navLinksClasses = document.querySelector(".nav-links").classList,
        hbOuter = document.querySelector(".hamburger-outer"),
        hbOuterClasses = hbOuter.classList;

    hbOuter.addEventListener('click', function() {
        if (hbOuterClasses.contains('active')) {
            navLinksClasses.remove('slide-in');
            hbOuterClasses.remove('active');
            htmlClasses.remove('lock');
            bodyClasses.remove('lock');
            navLinksClasses.add('slide-out')
            setTimeout(function() {
                navLinksClasses.add('hidden-mobile');
            }, 200);
        } else {
            if (navLinksClasses.contains('hidden-mobile')) {
                navLinksClasses.remove('hidden-mobile');
            }
            navLinksClasses.remove('slide-out');
            hbOuterClasses.add('active');
            htmlClasses.add('lock');
            bodyClasses.add('lock');
            navLinksClasses.add('slide-in');
        }
    });
};
