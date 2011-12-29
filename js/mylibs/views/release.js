/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-25
 * Time: 14:43
 * To change this template use File | Settings | File Templates.
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






