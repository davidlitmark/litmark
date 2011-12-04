/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-11-28
 * Time: 20:05
 * To change this template use File | Settings | File Templates.
 */

describe("Tweets - as visible on the page", function() {

    var tweetCollection;

//    beforeEach(function(){
//        tweetCollection = new Tweets();
//        tweetCollection.fetch();
//    });

    it("should display FIVE tweets", function() {
        tweetCollection = new Tweets();
        tweetCollection.fetch();

        waitsFor(function() {
            return tweetCollection.length;
        }, "never completed", 2000);

        runs(function() {
            expect(tweetCollection.length).toEqual(5);
        });

    });

//    it("should display tweets from @davidlitmark only", function() {
//        // David Litmark
//    });
//
//    it("should display tweets in descending order", function() {
//        // 5,4,3 ... osv
//    });
//
//    it("should display the LATEST tweets posted", function() {
//        // timestamp
//    });
//
//    it("all these tweets should be rendered on the page", function() {
//        // dom
//    });

});

//describe("Tweet model: ", function() {
//
//    describe("When instantiated", function() {
//
//        it("it should exist", function() {
//            var tweet = new Tweet();
//            expect(tweet).toBeDefined();
//        });
//    });
//});
