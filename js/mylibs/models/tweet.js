/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-25
 * Time: 14:27
 * To change this template use File | Settings | File Templates.
 */

window.App = window.App || {};

define(['underscore', 'backbone'], function (_, Backbone) {
    App.Tweet = Backbone.Model.extend({
        getDate:function () {
            var dateArr = this.get("created_at").split(" ");
            return  dateArr[2] + " " + dateArr[1];
        },
        formatText:function () {
            var rawArr = this.get("text").split(" "),
                url,
                undefined,
                anchor,
                helpers = {
                    beginsWith:function (str, find) {
                        return (str.indexOf(find) === 0);
                    },
                    getUrl:function (href, title) {
                        return "<a href='" + href + "'>" + title + "</a>";
                    }
                };

            _.each(rawArr, function (item, index) {
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
        initialize:function () {
            this.set({created_at:this.getDate()});
            this.set({text:this.formatText()});
        }
    });
});