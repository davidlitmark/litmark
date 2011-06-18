if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
        document.body.addEventListener('gesturestart', function() {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}


(function () {
    // read blog posts from tumblr
// very temporary code. TODO: Refactor into module
var tumblr = tumblr_api_read;
var latestPost = tumblr.posts[0];
var regularTitle = latestPost['regular-title'];
var url = latestPost.url;
var tag = latestPost.tags[0];
var regularBody = latestPost['regular-body'].substring(0, 300) + " ...";

//    function getTags(arr){
//        for(var i=0, j = arr.length; i<j;i++){
//            s += arr[i];
//        }
//    }

    // TODO: Add tags to blog posts
    //<p><b>' + tag + '</b></p>

$("#whoami").after('' +
        '<section id="blogpost">' +
        '   <header><h2>Featured Blog Post</h2></header>' +
        '   <div class="entry-content">' +
        '       <h3><a href="' + url + '" >' + regularTitle + '</a></h3><p>' + regularBody + '</p>' +
        '   </div>' +
        '</section>');
}());


// zootools
// TODO: Refactor!
// TODO: zb included twice below?
    (function(d, t) {
        var zb = d.createElement(t),s = d.getElementsByTagName(t)[0];
        zb.async = 1;
        zb.src = 'http://zootool.com/badge/davidlitmark/?count=10&size=75';
s.parentNode.insertBefore(zb, s);
        $("#tweets").after('' +
        '<section id="zootool">' +
        '   <header><h2>Most recent bookmarks</h2></header>' +
        '   <div class="entry-content"><div id="zootool-badge"> ' + zb + '</div></div>' +
        '</section>');
        
    }(document, 'script'));
