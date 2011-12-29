/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-28
 * Time: 21:49
 * To change this template use File | Settings | File Templates.
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