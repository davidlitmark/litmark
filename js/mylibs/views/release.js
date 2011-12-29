/**
 *  davidlitmark.com
 *  (c) 2011 David Litmark
 *  This content may be freely distributed under the MIT license.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/release.html'
], function ($, _, Backbone, ReleaseTemplate) {
    return Backbone.View.extend({
        tagName: "article",
        initialize: function() {
            this.template = _.template(ReleaseTemplate);
        },
        render: function() {
            var output = this.template(this.model.toJSON());
            $(this.el).html(output);
            return this;
        }
    });
});






