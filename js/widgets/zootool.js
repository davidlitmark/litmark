/**
 *  davidlitmark.com
 *  (c) 2011 David Litmark
 *  This content may be freely distributed under the MIT license.
 */

define( [
    'jquery'
], function ( $ ) {

    var d = document, t = 'script',
        zb = d.createElement( t ), s = d.getElementsByTagName( t )[0];

    zb.async = 1;
    zb.src = 'http://zootool.com/badge/davidlitmark/?count=10&size=75';
    s.parentNode.insertBefore( zb, s );

    $( "#whoami" ).before( '' +
        '<section id="zootool">' +
        '   <header><h2>Bookmarks</h2></header>' +
        '   <div class="entry-content"><div id="zootool-badge"> ' + zb + '</div></div>' +
        '</section>' );

} );
