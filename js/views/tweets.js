/**
 *  davidlitmark.com
 *  (c) 2011 David Litmark
 *  This content may be freely distributed under the MIT license.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'collections/tweets',
    'views/tweet'
],
    function ($, _, Backbone, tweetCollection, tweetView) {

        var TweetResultsView = Backbone.View.extend({
            el:"#tweets",
            initialize:function () {
                _.bindAll(this, "addOne", "addAll");
                tweetCollection.bind('reset', this.addAll);
                tweetCollection.fetch();
            },
            addAll:function () {
                tweetCollection.each(this.addOne);
            },
            addOne:function (model) {
                var view = new tweetView({model:model});
                this.$("ul").append(view.render().el);
            }
        });
        return TweetResultsView;
    });


