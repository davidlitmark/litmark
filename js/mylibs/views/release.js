/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-25
 * Time: 14:43
 * To change this template use File | Settings | File Templates.
 */

window.App = window.App || {};

App.VersionsResultView = Backbone.View.extend({
    tagName: "article",
    initialize: function() {
        this.template = _.template(App.Templates.versionhistory());
    },
    render: function() {
        var output = this.template(this.model.toJSON());
        $(this.el).html(output);
        return this;
    }
});

App.VersionsResultItemView = Backbone.View.extend({
    tagName: "li",
    initialize: function() {
        this.template = _.template(App.Templates.versionhistoryitem());
    },
    render: function() {
        var output = this.template(this.model.toJSON());
        $(this.el).html(output);
        return this;
    }
});

App.VersionsResultsView = Backbone.View.extend({
    el: "#completediterations",
    initialize: function() {
        _.bindAll(this, "addOne", "addAll");
        App.VersionsResults.bind("reset", this.addAll);
        App.VersionsResults.reset(versionhistory);
    },
    addAll: function() {
        App.VersionsResults.each(this.addOne);
    },
    addOne: function(model) {
        var view = new App.VersionsResultView({model: model});
        this.$(".entry-content").append(view.render().el);
    }
});

App.LatestVersionView = Backbone.View.extend({
    el: "#featurette",
    initialize: function() {
        this.template = _.template(App.Templates.latestversion());
        var model = _.first(App.VersionsResults.models);
        this.render(model);
    },
    render: function(model) {
        var output = this.template(model.toJSON());
        $(this.el).find(".entry-content").html(output);
    }
});
