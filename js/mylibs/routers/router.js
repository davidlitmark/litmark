/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-19
 * Time: 20:23
 * To change this template use File | Settings | File Templates.
 */


define([
    'backbone',
    'controllers/controller'
], function (Backbone, controller) {
    Router = Backbone.Router.extend({

        routes:{
            "":"defaultLayout",
            "!/releases":"previousReleasesLayout"
        },

        previousReleasesLayout:function () {
            controller.showPreviousReleases();
        },

        defaultLayout:function () {
            controller.showDefaultLayout();
        },

        initialize:function () {
            Backbone.history.start();
            controller.initApp();
        }
    });
    return Router;
});