/**
 *  davidlitmark.com
 *  (c) 2011 David Litmark
 *  This content may be freely distributed under the MIT license.
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