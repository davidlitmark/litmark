
define([
    'backbone',
    'models/tweet'
], function (Backbone, TweetModel) {
    var TweetResultsList = Backbone.Collection.extend({
        model: TweetModel,
        url:"http://api.twitter.com/1/statuses/user_timeline.json?screen_name=davidlitmark&count=5&callback=?"
    });
    return new TweetResultsList();
});