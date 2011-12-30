/**
 *  davidlitmark.com
 *  (c) 2011 David Litmark
 *  This content may be freely distributed under the MIT license.
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