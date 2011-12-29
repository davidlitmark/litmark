/**
 *  davidlitmark.com
 *  (c) 2011 David Litmark
 *  This content may be freely distributed under the MIT license.
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
