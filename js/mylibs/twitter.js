//$(function () {

    // underscore template syntax
    _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g
    };

    window.App = {
        start: function() {
            new App.TweetResultsView();
        }
    };

    App.Templates = {
        twitter: function() {
            return "<p>{{ text }}</p><p class='date'>{{ created_at }}</p>";
        }
    }

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
        url: 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=davidlitmark&count=5&callback=?'
    });

    App.tweetResults = new App.TweetResultsList();

    App.TweetResultView = Backbone.View.extend({
        tagName: "li",
        initialize: function() {
            // todo: move this outside of the view? for perf?
            this.template = _.template(App.Templates.twitter());
            //this.template = _.template($("#twitter-template").html());
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
        addOne: function(tweet) {
            var view = new App.TweetResultView({model: tweet});
            this.$("ul").append(view.render().el);
        }
    });

    App.start();

//});