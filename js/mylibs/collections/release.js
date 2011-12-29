/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-25
 * Time: 14:42
 * To change this template use File | Settings | File Templates.
 */

define([
    'backbone',
    'models/release'
], function (Backbone, ReleaseModel) {
    var ReleaseCollection = Backbone.Collection.extend({
        model: ReleaseModel
    });

    return new ReleaseCollection();
//    results.comparator = function(version) {
//        // inverse sort
//        return version.get("release") * -1;
//    };

});