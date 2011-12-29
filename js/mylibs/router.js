/**
 *  davidlitmark.com
 *  (c) 2011 David Litmark
 *  This content may be freely distributed under the MIT license.
 */

window.App = window.App || {};

App.Controller = {
    initApp: function() {
        new App.TweetResultsView;
        new App.VersionsResultsView;
        new App.LatestVersionView;
    },

    showPreviousReleases: function() {
        $("section").hide();
        $("#completediterations").show();
    },

    showDefaultLayout: function() {
        $("section").show();
        $("#completediterations, #side-images").hide();

    }
};

App.Router = Backbone.Router.extend({
    routes: {
        "": "defaultLayout",
        "!/releases": "previousReleasesLayout"
    },

    previousReleasesLayout: function() {
        App.Controller.showPreviousReleases();
    },

    defaultLayout: function() {
        App.Controller.showDefaultLayout();
    },

    initialize: function() {
        App.Controller.initApp();
    }
});

