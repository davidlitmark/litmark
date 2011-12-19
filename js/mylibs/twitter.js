window.App = window.App || {};

App.Tweet = Backbone.Model.extend({
    getDate: function() {
        var dateArr = this.get("created_at").split(" ");
        return  dateArr[2] + " " + dateArr[1];
    },
    formatText: function() {
        var rawArr = this.get("text").split(" "),
            url,
            undefined,
            anchor,
            helpers = {
                beginsWith: function(str, find) {
                    return (str.indexOf(find) === 0);
                },
                getUrl: function(href, title) {
                    return "<a href='" + href + "'>" + title + "</a>";
                }
            };

        _.each(rawArr, function(item, index) {
            if (helpers.beginsWith(item, "http")) {
                url = item;
                anchor = item.substr(7);
            }
            else if (helpers.beginsWith(item, "@")) {
                url = "https://twitter.com/#!/" + item.substr(1);
                anchor = item;
            }
            else if (helpers.beginsWith(item, "#")) {
                url = "https://twitter.com/#!/search?q=%23" + item.substr(1);
                anchor = item;
            }

            if (!(_.isUndefined(url) && _.isUndefined(anchor))) {
                rawArr[index] = helpers.getUrl(url, anchor);
                url = anchor = undefined;
            }

        });
        return rawArr.join(" ");
    },
    initialize: function() {
        this.set({created_at: this.getDate()});
        this.set({text: this.formatText()});
    }
});

App.TweetResultsList = Backbone.Collection.extend({
    model: App.Tweet,
    url: "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=davidlitmark&count=5&callback=?"
});

App.tweetResults = new App.TweetResultsList();

App.TweetResultView = Backbone.View.extend({
    tagName: "li",
    initialize: function() {
        this.template = _.template(App.Templates.twitter());
    },
    render: function() {
        var output = this.template(this.model.toJSON());
        $(this.el).html(output);
        return this;
    }
});

App.TweetResultsView = Backbone.View.extend({
    el: "#tweets",
    initialize: function() {
        _.bindAll(this, "addOne", "addAll");
        App.tweetResults.bind('reset', this.addAll);
        App.tweetResults.fetch();
    },
    addAll: function() {
        App.tweetResults.each(this.addOne);
    },
    addOne: function(model) {
        var view = new App.TweetResultView({model: model});
        this.$("ul").append(view.render().el);
    }
});