/**
 *  davidlitmark.com
 *  (c) 2011 David Litmark
 *  This content may be freely distributed under the MIT license.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/release-latest.html',
    'collections/release'
], function ($, _, Backbone, ReleaseTemplate, ReleaseCollection) {

    return Backbone.View.extend({
        el: "#featurette",
        initialize: function() {
            this.template = _.template(ReleaseTemplate);
            var model = _.first(ReleaseCollection.models);
            this.render(model);
        },
        render: function(model) {
            var output = this.template(model.toJSON());
            $(this.el).find(".entry-content").html(output);
        }
    });
});