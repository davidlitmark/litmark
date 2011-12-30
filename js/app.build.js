/**
 *  davidlitmark.com
 *  (c) 2011 David Litmark
 *  This content may be freely distributed under the MIT license.
 */

({
    appDir:  "../",
    baseUrl: "js",
    dir:     "../../release",
    paths:    {
        jquery:     'libs/jquery-1.7.1.min',
        underscore: 'libs/underscore-min',
        backbone:   'libs/backbone-optamd3-min',
        text:       'libs/require-text.min',
        order:      'libs/require-order.min'
    },
    optimize: "uglify",
    modules:  [
        {
            name: "main"
        }
    ]
})
