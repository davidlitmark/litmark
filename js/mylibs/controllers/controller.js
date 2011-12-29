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
    'views/tweets',
    'views/releases',
    'views/release-latest'
], function ($, _, Tweets, Releases, LatestRelease) {

    var controller = {

        initApp:function () {
            new Tweets();
            new Releases();
            new LatestRelease();
        },

        showPreviousReleases:function () {
            $("section").hide();
            $("#completediterations").show();
        },

        showDefaultLayout:function () {
            $("section").show();
            $("#completediterations, #side-images").hide();
        }
    };

    return controller;
});