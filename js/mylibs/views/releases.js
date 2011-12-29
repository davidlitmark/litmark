/**
 * Created by JetBrains WebStorm.
 * User: davidlitmark
 * Date: 2011-12-28
 * Time: 22:29
 * To change this template use File | Settings | File Templates.
 */

define( [
    'jquery',
    'underscore',
    'backbone',
    'collections/release',
    'views/release'
], function ( $, _, Backbone, ReleaseCollection, ReleaseView ) {

    var versionhistory = [
        {
            "release": 21,
            "items":   [
                {
                    "text": "We have routing! This is now a true <a href=\"http://en.wikipedia.org/wiki/Single-page_application\">single-page application</a>. The first modification using this is that the Version History section has been removed from the default view. Instead there's a link just below the What's New section that will render a version history view. Watch the url, it then contains a hashtag and is supported by the browser's history. Clicking on David Litmark takes you back to the default view. Pretty sweet!"
                }
            ]
        },
        {
            "release": 20,
            "items":   [

                {
                    "text": "The version history is now a fetched JSON object and both the What's New and the Version History - completed iterations sections are backbone views presenting this data"
                },
                {
                    "text": "Improved the mobile experience, by fixing the legibility and adjusting padding and margins. Mobile first. Always."
                },
                {
                    "text": "Removed the footer and the social buttons (for now)"
                },
                {
                    "text": "Dressed it all in a white costume. It's winter, after all."
                }
            ]
        },
        {
            "release": 19,
            "items":   [
                {
                    "text": "Replaced the twitter widget with my own, written using backbone.js"
                },
                {
                    "text": "Added a white semi-transparent background to the main container"
                },
                {
                    "text": "Added a line break to tidy things up. Can you find it?"
                }
            ]
        },
        {
            "release": 18,
            "items":   [
                {
                    "text": "Added responsiveness. Resize the browser and watch the center column."
                },
                {
                    "text": "Replaced MEgalopolis Extra with League Gothic, from <a href=\"http://www.theleagueofmoveabletype.com/\">the league of moveable type</a>"
                },
                {
                    "text": "Removed lettering.js and all the creative typography"
                },
                {
                    "text": "Removed the top navigation and ScrollSpy plugin"
                },
                {
                    "text": "Removed all the text shadows"
                }
            ]
        },
        {
            "release": 17,
            "items":   [
                {
                    "text": "Added the top navigation and ScrollSpy plugin from the the Bootstrap toolkit. The ScrollSpy auto activates navigation buttons by user's scroll position. Scroll the page and watch in action."
                },
                {
                    "text": "Added a padding to improve the experience on narrow screens (e.g iPhone)"
                },
                {
                    "text": "Modularized the {less} setup by using mixins and imports"
                },
                {
                    "text": "Renamed Sprint to release in the version history (this section). This will also be effective in the announcements tweets since I no longer will post build number, but release number."
                },
                {
                    "text": "Removed the build number from the version history"
                }
            ]
        },
        {
            "release": 16,
            "items":   [
                {
                    "text": "Replaced the 320 and Up boilerplate with the HTML5 boilerplate 2.0"
                },
                {
                    "text": "Introducing MEgalopolis Extra from <a href=\"http://www.smeltery.net/\">SMELTERY</a> as header font"
                },
                {
                    "text": "Added text-shadows to all headings, regardless of level"
                },
                {
                    "text": "Added circles in front of all unordered list items"
                },
                {
                    "text": "Removed the section Stuff to Consider"
                },
                {
                    "text": "Removed a bunch of styles. Back to basic. YAGNI-ish."
                }
            ]
        },
        {
            "release": 15,
            "items":   [
                {
                    "text": "Added a gradient background to all circles"
                },
                {
                    "text": "Added a text shadow to each version title"
                },
                {
                    "text": "Added a fading brush stroke background to each version title"
                },
                {
                    "text": "Nested a bunch of CSS rules"
                }
            ]
        },
        {
            "release": 14,
            "items":   [
                {
                    "text": "Transformed all the items in the version history section to circles with text on top"
                },
                {
                    "text": "Aligned the contents in the What's new, Version history and footer sections relative to the center"
                },
                {
                    "text": "Decreased the page width"
                },
                {
                    "text": "Rearranged the content"
                }
            ]
        },
        {
            "release": 13,
            "items":   [
                {
                    "text": "Added the What's new? section. This section includes all modifications to the latest release"
                },
                {
                    "text": "Added a browser disclaimer to the definition of done"
                },
                {
                    "text": "Reorganized the content flow"
                },
                {
                    "text": "Removed the table of contents"
                }
            ]
        },
        {
            "release": 12,
            "items":   [
                {
                    "text": "{less} is now used for generating all the CSS"
                },
                {
                    "text": "Increased the size of the title and centered it horizontally"
                },
                {
                    "text": "Added text shadows to headings"
                },
                {
                    "text": "Added rotation to all headings, just for the fun of it"
                },
                {
                    "text": "Replaced the leather with paper"
                },
                {
                    "text": "Updated humans TXT"
                }
            ]
        },
        {
            "release": 11,
            "items":   [
                {
                    "text": "Added the Pomodoro badge, linked to the Pomodoro Technique web site"
                },
                {
                    "text": "Added the WebStorm link logo, linked to the Jet Brain's WebStorm web site"
                },
                {
                    "text": "Added article elements where appropriate"
                },
                {
                    "text": "Added HTML5 link relationships"
                },
                {
                    "text": "Added XFN microformat to links"
                },
                {
                    "text": "Added WAI-ARIA roles"
                },
                {
                    "text": "Added typography styles for most of the headers. Experimental."
                },
                {
                    "text": "Added measurements for the modular scale to the CSS, based on the numbers 16 and 82"
                },
                {
                    "text": "Modified the body width to align to the grid"
                },
                {
                    "text": "Removed css transforms from sidenote in the \"The Process\" section"
                },
                {
                    "text": "Removed four columns layout from the The Idea section"
                },
                {
                    "text": "Decided not to write every update on the form \"A visitor ...\""
                }
            ]
        },
        {
            "release": 10,
            "items":   [
                {
                    "text": "A visitor can view my latest bookmarks"
                },
                {
                    "text": "A visitor can read my latest tweets"
                },
                {
                    "text": "A visitor can view a social media icon for zootool"
                }
            ]
        },
        {
            "release": 9,
            "items":   [
                {
                    "text": "A visitor can read an introduction to a featured blog post"
                },
                {
                    "text": "A visitor can navigate to the featured blog post by clicking on its title"
                },
                {
                    "text": "A visitor to the blog can sign in before posting comments"
                },
                {
                    "text": "A visitor to the blog can read social media reactions for a post from other services around the web"
                },
                {
                    "text": "A visitor to the blog can mention others users within a post"
                },
                {
                    "text": "A visitor to the blog can automatically reply by twitter when sharing replies to comments"
                }
            ]
        },
        {
            "release": 8,
            "items":   [
                {
                    "text": "A visitor can read blog posts at <a href=\"http://blog.davidlitmark.com\" rel=\"external\">blog.davidlitmark.com</a>"
                },
                {
                    "text": "A visitor to the blog can comment on posts (DISQUS)"
                },
                {
                    "text": "A visitor to the blog can read my latest tweets"
                },
                {
                    "text": "A visitor to the blog can subscribe to posts (FeedBurner)"
                },
                {
                    "text": "A visitor to the blog can read syntax highlighted JavaScript"
                },
                {
                    "text": "A visitor to the blog can experience a very basic design and layout based on the tumblr default theme (to be customized further)"
                },
                {
                    "text": "A visitor can click a link to the blog, both from the contents section and the who-am-i section"
                },
                {
                    "text": "A visitor can view a social media icon for tumblr"
                },
                {
                    "text": "A visitor can read <i>visitor</i> instead of <i>user</i> in the description of user stories (for clarification)"
                }
            ]
        },
        {
            "release": 7,
            "items":   [
                {
                    "text": "A visitor can experience a background texture reminiscent of leather (thnx <a href=\"http://twitter.com/karllofholm\" rel=\"external\">@karllofholm</a> for the tip)"
                },
                {
                    "text": "A visitor can experience columns, based on screen width (css3 columns and media queries)"
                },
                {
                    "text": "A visitor can experience rotated content (css3 transform)"
                }
            ]
        },
        {
            "release": 6,
            "items":   [
                {
                    "text": "A visitor can read headlines and text in web fonts PTSerifCaptionRegular and PTSerifRegular, respectively"
                },
                {
                    "text": "A visitor can navigate the page using a table of contents, linking to each section"
                },
                {
                    "text": "A visitor can experience a yellow tiled background texture, reminiscent of fabrics"
                },
                {
                    "text": "A visitor can view social media icons for linkedin and twitter"
                },
                {
                    "text": "A visitor can read an attribution to Komodo media, for the use of the social media icons (licensed under Creative Commons Attribution-Share Alike 3.0 Unported License)"
                }
            ]
        },
        {
            "release": 5,
            "items":   [
                {
                    "text": "A visitor can read headlines and text in web fonts Museo Sans and Museo, respectively (served from Typekit)"
                }
            ]
        },
        {
            "release": 4,
            "items":   [
                {
                    "text": "A visitor is served assets and layout styles progressively and only as they’re needed (Up)"
                },
                {
                    "text": "A visitor can experience a very basic design and layout based on the 320 and Up default styles (to be improved)"
                }
            ]
        },
        {
            "release": 3,
            "items":   [
                {
                    "text": "A visitor can find out about explored stuff (currently highlighted)"
                },
                {
                    "text": "A visitor is served optimized images"
                },
                {
                    "text": "A visitor can read user stories formulated according to the guidelines in <a href=\"http://www.amazon.com/User-Stories-Applied-Software-Development/dp/0321205685\" rel=\"external\">User Stories Applied</a>"
                }
            ]
        },
        {
            "release": 2,
            "items":   [
                {
                    "text": "A visitor can view the HTML5 logo"
                },
                {
                    "text": "A visitor can click a link to my LinkedIn profile"
                },
                {
                    "text": "A visitor can click a link to my twitter (follow me)"
                },
                {
                    "text": "A visitor can read a Definition of Done (DoD). Each sprint must fulfill the DoD prior to deployment"
                },
                {
                    "text": "A visitor can read the build number next to the sprint increment (for clarification)"
                },
                {
                    "text": "A visitor can read that the process now has more of a Kanban approach, rather than Scrum"
                },
                {
                    "text": "A visitor is served minified JavaScript"
                },
                {
                    "text": "A visitor is served minified CSS"
                }
            ]
        },
        {
            "release": 1,
            "items":   [
                {
                    "text": "A visitor can read an introduction on the purpose of the process"
                },
                {
                    "text": "A visitor can click a humans TXT logo and read the humans.txt file"
                },
                {
                    "text": "A visitor can find the source code on my github (github/davidlitmark)"
                },
                {
                    "text": "A visitor can experience a very basic design and layout (to be improved)"
                },
                {
                    "text": "An administrator can analyze the web traffic by using Google Analytics"
                }
            ]
        },
        {
            "release": 0,
            "items":   [
                {
                    "text": "The project is set up in Things"
                },
                {
                    "text": "A set of goals and requirements are produced"
                },
                {
                    "text": "The platform is decided upon"
                },
                {
                    "text": "A work / build workflow is established"
                },
                {
                    "text": "All domains are set up to point to one domain"
                },
                {
                    "text": "A product backlog is produced"
                }
            ]
        }
    ];

    var releases = Backbone.View.extend( {
        el:         "#completediterations",
        initialize: function () {
            _.bindAll( this, "addOne", "addAll" );
            ReleaseCollection.bind( "reset", this.addAll );
            ReleaseCollection.reset( versionhistory );
        },
        addAll:     function () {
            ReleaseCollection.each( this.addOne );
        },
        addOne:     function ( model ) {
            var view = new ReleaseView( {model: model} );
            this.$( ".entry-content" ).append( view.render().el );
        }
    } );
    return releases;
} );
