/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-25
 * Time: 14:42
 * To change this template use File | Settings | File Templates.
 */

window.App = window.App || {};

App.VersionsResultsList = Backbone.Collection.extend({
    model: App.Versioninfo
});

App.VersionsResults = new App.VersionsResultsList();

App.VersionsResults.comparator = function(version) {
    // inverse sort
    return version.get("release") * -1;
};
