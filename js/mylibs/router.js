/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-19
 * Time: 20:23
 * To change this template use File | Settings | File Templates.
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

