/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-06
 * Time: 19:40
 * To change this template use File | Settings | File Templates.
 */


var json = [
        {
            "date-gmt": "2011-05-30 20:12:00 GMT",
            "date": "Mon, 30 May 2011",
            "slug": "an-introduction-to-the-revealing-module-pattern",
            "title": "An Introduction to the Revealing Module Pattern",
            "ingress" : "The original module pattern is a great way to structure and organize JavaScript code. The pattern provides a tool for writing self-contained decoupled pieces of code, enforcing privacy to everything within the module that is not explicitly revealed. The module pattern is a combination of other patterns, some of which will be briefly touched on before we end up with the revealing module pattern",
            "text": "<p>The original module pattern is a great way to structure and organize JavaScript code. The pattern provides a tool for writing self-contained decoupled pieces of code, enforcing privacy to everything within the module that is not explicitly revealed. The module pattern is a combination of other patterns, some of which will be briefly touched on before we end up with the revealing module pattern; a variant of the original module pattern.</p>\n\n<p>The revealing module pattern:</p>\n<pre class=\"brush: js\">my.module = (function () {\n\n    var iAmAPrivateVariable,\n        iAmAPrivateMethod = function () {\n            // do awesome stuff\n        },\n        iAmAPrivateMethodNeverRevealed = function () {\n            // do really awesome stuff\n        };\n\n    return {\n        iAmAPublicVariable : iAmAPrivateVariable,\n        iAmAPublicMethod   : iAmAPrivateMethod\n    };\n\n}());\n</pre>\n<p>Now, let&#8217;s break this down piece by piece.</p>\n<p>First off, we need a namespace. It was omitted above for clarity. </p>\n<pre class=\"brush: js\">var my = window.my || {};\n</pre>\n<p>Each module is attached to the namespace, which is the ONLY global variable introduced. Global variables are EVIL!</p>\n<p>We then add a property to the namespace and reference a function expression. In this example the name of the module is module, but it can be just about anything.</p>\n<pre class=\"brush: js\">my.module = (function () {\n    console.log( \"I'm alive and kicking!\" )\n}());\n</pre>\n<p>Note the parenthesis surrounding the function expression and the pair of parenthesis directly following the closing gullwing. This pattern turns the function expression into an immediate function, also known as a self-executing function, and enables us to execute the function as soon as it is defined.</p>\n<p>JavaScript is function scoped, that is, everything declared within a function is private to that function and does not pollute the global namespace.</p>\n<pre class=\"brush: js\">my.module = (function () {\n\n    var iAmAPrivateVariable,\n        iAmAPrivateMethod = function () {\n            // do awesome stuff\n        };\n    \n}());\n</pre>\n<p>To expose part of our module, we declare the public variables and methods in the return clause. This is the original module pattern.</p>\n<pre class=\"brush: js\">my.module = (function () {\n\n    var iAmAPrivateVariable,\n        iAmAPrivateMethod = function () {\n            // do awesome stuff\n        };\n\n    return {\n        iAmAPublicVariable : \"\",\n        iAmAPublicMethod   : function () {\n            // do even more awesome stuff\n        }\n    };\n\n}());\n</pre>\n<p>When executed (immediately, that is) the my.module property is populated with the iAmAPublicVariable variable and the iAmAPublicMethod method. Everything else is still private and tucked away from the rest of the world.</p>\n<p>Combining the original module pattern (above) with the revelation pattern, which is all about having private methods and exposing them as public methods, we end up with the revealing module pattern. This pattern allows us to declare everything in the module as private and then explicitly reveal the private API in the return clause by referencing private variables and methods.</p>\n<pre class=\"brush: js\">my.module = (function () {\n\n    var iAmAPrivateVariable,\n        iAmAPrivateMethod = function () {\n            // do awesome stuff\n        },\n        iAmAPrivateMethodNeverRevealed = function () {\n            // do really awesome stuff\n        };\n\n    return {\n        iAmAPublicVariable : iAmAPrivateVariable,\n        iAmAPublicMethod   : iAmAPrivateMethod\n    };\n\n}());\n</pre>\n<p>That&#8217;s it for now. Happy coding!</p>",
            "tags": [
                "javascript",
                "pattern"
            ]
        }
    ];


window.App2 = {
    start: function() {
        new App2.BlogResultsView();
    }
};

App2.Templates = {
    post: function() {
        return $("#template-blog").html();
    }
};

App2.Post = Backbone.Model.extend({});

App2.BlogResultsList = Backbone.Collection.extend({
    model: App2.Post,
    url: 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=davidlitmark&count=5&callback=?'
});

App2.blogResults = new App2.BlogResultsList();

App2.BlogResultView = Backbone.View.extend({
    tagName: "article",
    initialize: function() {
        // todo: move this outside of the view? for perf?
        this.template = _.template(App2.Templates.post());
    },
    render: function() {
        var output = this.template(this.model.toJSON());
        $(this.el).html(output);
        return this;
    }
});

App2.BlogResultsView = Backbone.View.extend({
    el: "#blog",
    initialize: function() {
        _.bindAll(this, "addOne", "addAll");
        App2.blogResults.bind("reset", this.addAll);
        //App2.blogResults.fetch();
        App2.blogResults.reset(json);
    },
    addAll: function() {
        App2.blogResults.each(this.addOne);
    },
    addOne: function(model) {
        log("tjoho");
        var view = new App2.BlogResultView({model: model});
        this.$("div").append(view.render().el);
    }
});

//App2.start();
