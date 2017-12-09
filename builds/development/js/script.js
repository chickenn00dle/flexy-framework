(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])