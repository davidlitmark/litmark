if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
        document.body.addEventListener('gesturestart', function() {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}


//// zootools
//// TODO: Refactor!
//// TODO: zb included twice below?
(function(d, t) {
    var zb = d.createElement(t),s = d.getElementsByTagName(t)[0];
    zb.async = 1;
    zb.src = 'http://zootool.com/badge/davidlitmark/?count=10&size=75';
    s.parentNode.insertBefore(zb, s);
    $("#tweets").after('' +
        '<section id="zootool">' +
        '   <header><h2>Most Recent Bookmarks</h2></header>' +
        '   <div class="entry-content"><div id="zootool-badge"> ' + zb + '</div></div>' +
        '</section>');

}(document, 'script'));


jQuery(document).ready(function() {

//lettering - headers
    $('#theidea h2, #theprocess h2').lettering('words').children('.word1').lettering();
    $('#dod h2, #stuff h2, #whoami h2, #tweets h2, #zootool h2, #completediterations h2').lettering('words');

// what's new
    $("#featurette .entry-content")
        .load("index.html #completediterations article:eq(0) ul", function() {
        });


    /**
     * Bootstrap toolkit
     */
    $('#topbar').scrollSpy();

});






