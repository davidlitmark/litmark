/**
 *  davidlitmark.com
 *  (c) 2011 David Litmark
 *  This content may be freely distributed under the MIT license.
 */

// require js
require.config({
    baseUrl:'js/mylibs',
    paths:{
        jquery:'../libs/jquery-1.7.min',
        underscore:'../libs/underscore-min',
        backbone:'../libs/backbone-optamd3',
        text:'../libs/require-text.min',
        order:'../libs/require-order.min'
    }
});

require([
    'order!underscore',
    'order!backbone',
    'order!routers/router'
], function (_, Backbone, Router) {

        _.templateSettings = {
            interpolate:/\{\{(.+?)\}\}/g,
            evaluate:/<%(.+?)%>/g
        };

        new Router();
    }
);


