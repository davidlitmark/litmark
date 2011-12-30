/**
 *  davidlitmark.com
 *  (c) 2011 David Litmark
 *  This content may be freely distributed under the MIT license.
 */


// from plugins.js

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.


// from script.js

if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelectorAll('meta[name="viewport"]')[0];
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}

//// zootools
//// TODO: Refactor!
//// TODO: zb included twice below?
/*(function (d, t) {
 var zb = d.createElement(t), s = d.getElementsByTagName(t)[0];
 zb.async = 1;
 zb.src = 'http://zootool.com/badge/davidlitmark/?count=10&size=75';
 s.parentNode.insertBefore(zb, s);
 $("#whoami").before('' +
 '<section id="zootool">' +
 '   <header><h2>Bookmarks</h2></header>' +
 '   <div class="entry-content"><div id="zootool-badge"> ' + zb + '</div></div>' +
 '</section>');
 }(document, 'script'));*/

// underscore template syntax
/*
 _.templateSettings = {
 interpolate:/\{\{(.+?)\}\}/g,
 evaluate:/<%(.+?)%>/g
 };
 */


//// todo: improve!
//jQuery("document").ready(function($) {
//
//    if (Modernizr.mq('only screen and (min-width: 768px)')) {
//        $("#tweets").prependTo(".col-b");
//    }
//
//});

// require js
require.config( {
    baseUrl: 'js',
    paths:   {
        jquery:     'libs/jquery-1.7.1.min',
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


