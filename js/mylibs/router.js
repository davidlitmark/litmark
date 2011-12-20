/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-19
 * Time: 20:23
 * To change this template use File | Settings | File Templates.
 */

window.App = window.App || {};

App.Router = Backbone.Router.extend({
    routes: {
        "!/testing": "showVersionHistory"
    },

    showVersionHistory: function() {
        log("hello");
    },

    initialize: function() {
        new App.TweetResultsView;
        new App.VersionsResultsView;
        new App.LatestVersionView;
    }
});