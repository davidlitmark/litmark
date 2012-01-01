// from h5bp -> script.js
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}

//// todo: how do I use modernizr w. require?
//jQuery("document").ready(function($) {
//
//    if (Modernizr.mq('only screen and (min-width: 768px)')) {
//        $("#tweets").prependTo(".col-b");
//    }
//
//});

require.config( {
    baseUrl: 'js',
    paths:   {
        jquery:     'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        underscore: 'libs/underscore-min',
        backbone:   'libs/backbone-optamd3-min',
        text:       'libs/require-text.min',
        order:      'libs/require-order.min'
    }
} );

require( [
    'order!underscore',
    'order!backbone',
    'order!routers/router'
], function ( _, Backbone, Router ) {

        _.templateSettings = {
            interpolate: /\{\{(.+?)\}\}/g,
            evaluate:    /<%(.+?)%>/g
        };

        new Router();
    }
);