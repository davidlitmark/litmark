/**
 *  davidlitmark.com
 *  (c) 2011 David Litmark
 *  This content may be freely distributed under the MIT license.
 */

define( [
    'backbone',
    'controllers/controller'
], function ( Backbone, Controller ) {
    var Router = Backbone.Router.extend( {

        routes: {
            "":           "defaultLayout",
            "!/releases": "previousReleasesLayout"
        },

        previousReleasesLayout: function () {
            Controller.showPreviousReleases();
        },

        defaultLayout: function () {
            Controller.showDefaultLayout();
        },

        initialize: function () {
            Backbone.history.start();
            Controller.initApp();
        }
    } );
    return Router;
} );