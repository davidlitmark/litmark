/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-19
 * Time: 20:23
 * To change this template use File | Settings | File Templates.
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