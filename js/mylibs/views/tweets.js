/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-25
 * Time: 14:27
 * To change this template use File | Settings | File Templates.
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


