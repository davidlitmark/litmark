/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-26
 * Time: 22:48
 * To change this template use File | Settings | File Templates.
 */

define([
    'jquery',
    'underscore',
    'views/tweets'
], function ($, _, Tweets) {

    var controller = {

        initApp:function () {
            new Tweets();
//                new App.VersionsResultsView;
//                new App.LatestVersionView;
        },

        showPreviousReleases:function () {
            $("section").hide();
            $("#completediterations").show();
        },

        showDefaultLayout:function () {
            $("section").show();
            $("#completediterations, #side-images").hide();
        },

        init:function () {

//            new Router();
            new Tweets();
            //new App.VersionsResultsView;
            //new App.LatestVersionView;
        }
    };

    return controller;
});