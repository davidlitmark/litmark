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
    $("#whoami").before('' +
        '<section id="zootool">' +
        '   <header><h2>Bookmarks</h2></header>' +
        '   <div class="entry-content"><div id="zootool-badge"> ' + zb + '</div></div>' +
        '</section>');
}(document, 'script'));

// underscore template syntax
_.templateSettings = {
    interpolate : /\{\{(.+?)\}\}/g,
    evaluate: /<%(.+?)%>/g
};


//// todo: improve!
//jQuery("document").ready(function($) {
//
//    if (Modernizr.mq('only screen and (min-width: 768px)')) {
//        $("#tweets").prependTo(".col-b");
//    }
//
//});


window.App = window.App || {};

App.start = function() {
    new App.TweetResultsView();
    new App.VersionsResultsView();
    new App.LatestVersionView();
};

App.Templates = {
    twitter: function() {
        return "<p>{{ text }}</p><p class='date'>{{ created_at }}</p>";
    },
    versionhistory: function() {
        return "<header><h3>Release {{ release }}</h3></header><ul><% _.each(items,function(item){ %><li>{{ item.text }}</li><% }); %></ul>";
    },
    latestversion: function() {
        return "<ul><% _.each(items,function(item){ %><li>{{ item.text }}</li><% }); %></ul>";
    }
};

App.start();


