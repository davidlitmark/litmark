/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-26
 * Time: 22:39
 * To change this template use File | Settings | File Templates.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/tweet.html'
], function ($, _, Backbone, tweetTemplate) {

    var TweetResultView = Backbone.View.extend({
        tagName:"li",
        initialize:function () {
            this.template = _.template(tweetTemplate);
        },
        render:function () {
            var output = this.template(this.model.toJSON());
            $(this.el).html(output);
            return this;
        }
    });

    return TweetResultView;
});
