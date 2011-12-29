/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-27
 * Time: 23:10
 * To change this template use File | Settings | File Templates.
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


