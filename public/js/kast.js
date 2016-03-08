/*!
 * Kast - Extraordinary SHOUTcast HTML5 Radio Player for jQuery - Material Design
 * Copyright: 2015-2016 Manar Kamel (manarkamel.github.io)
 */


/* Custom Kast ResetCSS
============================================ */

.kast-recss,
div.kast-recss p, /* heavy for wp widgets */
.kast-recss i,
.kast-recss ul,
.kast-recss li {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    line-height: inherit;
    list-style: none;
    width: auto;
    height: auto;
    background: transparent
}


/* Icon font
========================================== */

@font-face {
    font-family: 'kast-mdi';
    src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');
    font-weight: normal;
    font-style: normal;
}

.kast-recss .kast-mdi {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'kast-mdi' !important;
    display: inline-block;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: inherit;
    font-size: 30px;
    cursor: pointer;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

i.kast-mdi-volume-high:before {
    content: "\e904";
}

i.kast-mdi-volume-off:before {
    content: "\e905";
}

i.kast-mdi-album:before {
    content: "\e900";
}

i.kast-mdi-chevron-down:before {
    content: "\e901";
}

i.kast-mdi-pause:before {
    content: "\e902";
}

i.kast-mdi-play:before {
    content: "\e903";
}


/* Themes.css
========================================== */

.kast-light {
    background-color: #fafafa
}

.kast-light #kast-top,
.kast-light #kast-play {
    background-color: #fff
}

.kast-light.kast-transparent .kast-top-content,
.kast-light.kast-colored .kast-default-art #kast-linear {
    background-image: linear-gradient(180deg, transparent, rgba(255, 255, 255, .24));
    display: block
}

.kast-light.kast-colored .kast-top-content {
    background-color: #f5f5f5
}

.kast-light.kast-colored.kast-colors-dynamic.kast-minimized .kast-top-content {
    background-color: transparent
}

.kast-light #kast-bar {
    background-color: rgba(255, 255, 255, .3)
}

.kast-light #kast-bar i:hover {
    background-color: rgba(255, 255, 255, .1)
}

.kast-light #kast-bottom>p {
    color: rgba(0, 0, 0, .38)
}

.kast-light .kast-p-title,
.kast-light #kast-top,
.kast-light #kast-bar i,
.kast-light #kast-np-title,
.kast-light #kast-play {
    color: rgba(0, 0, 0, .87)
}

.kast-light .kast-p-artist,
.kast-light .kast-p-art,
.kast-light #kast-bar,
.kast-light #kast-np-artist {
    color: rgba(0, 0, 0, .54)
}

.kast-dark {
    background-color: #303030
}

.kast-dark #kast-top,
.kast-dark #kast-play {
    background-color: #424242
}

.kast-dark.kast-transparent .kast-top-content,
.kast-dark.kast-colored .kast-default-art #kast-linear {
    background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, .16));
    display: block
}

.kast-dark.kast-colored .kast-top-content {
    background-color: #212121
}

.kast-dark.kast-colored.kast-colors-dynamic.kast-minimized .kast-top-content {
    background-color: transparent
}

.kast-dark #kast-bar {
    background-color: rgba(0, 0, 0, .2)
}

.kast-dark #kast-bar i:hover {
    background-color: rgba(0, 0, 0, .1)
}

.kast-dark #kast-bottom>p {
    color: rgba(255, 255, 255, .30)
}

.kast-dark .kast-p-title,
.kast-dark #kast-top,
.kast-dark #kast-bar i,
.kast-dark #kast-np-title,
.kast-dark #kast-play {
    color: #ffffff
}

.kast-dark .kast-p-artist,
.kast-dark .kast-p-art,
.kast-dark #kast-bar,
.kast-dark #kast-np-artist {
    color: rgba(255, 255, 255, .70)
}


/* Colors.css: Material Design colors
========================================== */


/* transparent/dynamic - minimized - Light theme */

.kast-minimized.kast-transparent.kast-light .kast-top-content #kast-np-title,
.kast-minimized.kast-transparent.kast-light #kast-bar i,
.kast-minimized.kast-transparent.kast-light #kast-play,
#kast.kast-minimized.kast-transparent.kast-light #kast-bar.kast-primary-dark i {
    color: rgba(0, 0, 0, .87)
}


/* yes primary dark, that's true */

.kast-minimized.kast-transparent.kast-light .kast-top-content #kast-np-artist {
    color: rgba(0, 0, 0, .54)
}


/* transparent/dynamic - minimized - Dark theme */

.kast-minimized.kast-transparent.kast-dark .kast-top-content #kast-np-title,
.kast-minimized.kast-transparent.kast-dark #kast-bar i,
.kast-minimized.kast-transparent.kast-dark #kast-play,
#kast.kast-minimized.kast-transparent.kast-dark #kast-bar.kast-primary-light i {
    color: #fff
}


/* yes primary light, that's true */

.kast-minimized.kast-transparent.kast-dark .kast-top-content #kast-np-artist {
    color: rgba(255, 255, 255, .7)
}


/* colored - minimized - Dark contrast */

#kast.kast-minimized.kast-colored .kast-top-content.kast-primary-dark + #kast-play {
    color: rgba(0, 0, 0, .87)
}


/* colored - minimized - Light contrast */

#kast.kast-minimized.kast-colored .kast-top-content.kast-primary-light + #kast-play {
    color: #fff
}


/* Dynamic - Dark contrast */

.kast-top-content.kast-primary-dark #kast-np-title,
#kast-play.kast-accent-dark,
#kast-bar.kast-primary-dark i {
    color: rgba(0, 0, 0, .87)
}

.kast-top-content.kast-primary-dark #kast-np-artist,
#kast-bar.kast-primary-dark {
    color: rgba(0, 0, 0, .54)
}


/* Dynamic - Light contrast */

.kast-top-content.kast-primary-light #kast-np-title,
#kast-play.kast-accent-light,
#kast-bar.kast-primary-light i {
    color: #fff
}

.kast-top-content.kast-primary-light #kast-np-artist,
#kast-bar.kast-primary-light {
    color: rgba(255, 255, 255, .7)
}


/* Red - Light text */

.kast-primary-red #kast-top,
.kast-accent-red #kast-play,
.kast-primary-red.kast-colored .kast-top-content {
    background-color: #F44336;
    color: #fff
}

.kast-primary-red #kast-bar {
    background: rgba(0, 0, 0, .2)
}

.kast-primary-red #kast-bar i:hover {
    background: rgba(0, 0, 0, .1)
}

.kast-primary-red #kast-np-artist,
.kast-primary-red #kast-bar {
    color: rgba(255, 255, 255, .7)
}

.kast-primary-red #kast-bar i,
.kast-primary-red #kast-np-title,
.kast-primary-red.kast-minimized:not(.kast-ultra) #kast-play {
    color: #fff
}


/* Pink - Light text */

.kast-primary-pink #kast-top,
.kast-accent-pink #kast-play,
.kast-primary-pink.kast-colored .kast-top-content {
    background-color: #E91E63;
    color: #fff
}

.kast-primary-pink #kast-bar {
    background: rgba(0, 0, 0, .2)
}

.kast-primary-pink #kast-bar i:hover {
    background: rgba(0, 0, 0, .1)
}

.kast-primary-pink #kast-np-artist,
.kast-primary-pink #kast-bar {
    color: rgba(255, 255, 255, .7)
}

.kast-primary-pink #kast-bar i,
.kast-primary-pink #kast-np-title,
.kast-primary-pink.kast-minimized:not(.kast-ultra) #kast-play {
    color: #fff
}


/* Purple - Light text */

.kast-primary-purple #kast-top,
.kast-accent-purple #kast-play,
.kast-primary-purple.kast-colored .kast-top-content {
    background-color: #9C27B0;
    color: #fff
}

.kast-primary-purple #kast-bar {
    background: rgba(0, 0, 0, .2)
}

.kast-primary-purple #kast-bar i:hover {
    background: rgba(0, 0, 0, .1)
}

.kast-primary-purple #kast-np-artist,
.kast-primary-purple #kast-bar {
    color: rgba(255, 255, 255, .7)
}

.kast-primary-purple #kast-bar i,
.kast-primary-purple #kast-np-title,
.kast-primary-purple.kast-minimized:not(.kast-ultra) #kast-play {
    color: #fff
}


/* Deep Purple - Light text */

.kast-primary-deeppurple #kast-top,
.kast-accent-deeppurple #kast-play,
.kast-primary-deeppurple.kast-colored .kast-top-content {
    background-color: #673AB7;
    color: #fff
}

.kast-primary-deeppurple #kast-bar {
    background: rgba(0, 0, 0, .2)
}

.kast-primary-deeppurple #kast-bar i:hover {
    background: rgba(0, 0, 0, .1)
}

.kast-primary-deeppurple #kast-np-artist,
.kast-primary-deeppurple #kast-bar {
    color: rgba(255, 255, 255, .7)
}

.kast-primary-deeppurple #kast-bar i,
.kast-primary-deeppurple #kast-np-title,
.kast-primary-deeppurple.kast-minimized:not(.kast-ultra) #kast-play {
    color: #fff
}


/* Indigo - Light text */

.kast-primary-indigo #kast-top,
.kast-accent-indigo #kast-play,
.kast-primary-indigo.kast-colored .kast-top-content {
    background-color: #3F51B5;
    color: #fff
}

.kast-primary-indigo #kast-bar {
    background: rgba(0, 0, 0, .2)
}

.kast-primary-indigo #kast-bar i:hover {
    background: rgba(0, 0, 0, .1)
}

.kast-primary-indigo #kast-np-artist,
.kast-primary-indigo #kast-bar {
    color: rgba(255, 255, 255, .7)
}

.kast-primary-indigo #kast-bar i,
.kast-primary-indigo #kast-np-title,
.kast-primary-indigo.kast-minimized:not(.kast-ultra) #kast-play {
    color: #fff
}


/* Blue - Light text */

.kast-primary-blue #kast-top,
.kast-accent-blue #kast-play,
.kast-primary-blue.kast-colored .kast-top-content {
    background-color: #2196F3;
    color: #fff
}

.kast-primary-blue #kast-bar {
    background: rgba(0, 0, 0, .2)
}

.kast-primary-blue #kast-bar i:hover {
    background: rgba(0, 0, 0, .1)
}

.kast-primary-blue #kast-np-artist,
.kast-primary-blue #kast-bar {
    color: rgba(255, 255, 255, .7)
}

.kast-primary-blue #kast-bar i,
.kast-primary-blue #kast-np-title,
.kast-primary-blue.kast-minimized:not(.kast-ultra) #kast-play {
    color: #fff
}


/* Light Blue - Dark text */

.kast-primary-lightblue #kast-top,
.kast-accent-lightblue #kast-play,
.kast-primary-lightblue.kast-colored .kast-top-content {
    background-color: #03A9F4;
    color: rgba(0, 0, 0, .87)
}

.kast-primary-lightblue #kast-bar {
    background: rgba(255, 255, 255, .3)
}

.kast-primary-lightblue #kast-bar i:hover {
    background: rgba(255, 255, 255, .1)
}

.kast-primary-lightblue #kast-np-artist,
.kast-primary-lightblue #kast-bar {
    color: rgba(0, 0, 0, .54)
}

.kast-primary-lightblue #kast-bar i,
.kast-primary-lightblue #kast-np-title,
.kast-primary-lightblue.kast-minimized:not(.kast-ultra) #kast-play {
    color: rgba(0, 0, 0, .87)
}


/* Cyan - Dark text */

.kast-primary-cyan #kast-top,
.kast-accent-cyan #kast-play,
.kast-primary-cyan.kast-colored .kast-top-content {
    background-color: #00BCD4;
    color: rgba(0, 0, 0, .87)
}

.kast-primary-cyan #kast-bar {
    background: rgba(255, 255, 255, .3)
}

.kast-primary-cyan #kast-bar i:hover {
    background: rgba(255, 255, 255, .1)
}

.kast-primary-cyan #kast-np-artist,
.kast-primary-cyan #kast-bar {
    color: rgba(0, 0, 0, .54)
}

.kast-primary-cyan #kast-bar i,
.kast-primary-cyan #kast-np-title,
.kast-primary-cyan.kast-minimized:not(.kast-ultra) #kast-play {
    color: rgba(0, 0, 0, .87)
}


/* Teal - Light text */

.kast-primary-teal #kast-top,
.kast-accent-teal #kast-play,
.kast-primary-teal.kast-colored .kast-top-content {
    background-color: #009688;
    color: #fff
}

.kast-primary-teal #kast-bar {
    background: rgba(0, 0, 0, .2)
}

.kast-primary-teal #kast-bar i:hover {
    background: rgba(0, 0, 0, .1)
}

.kast-primary-teal #kast-np-artist,
.kast-primary-teal #kast-bar {
    color: rgba(255, 255, 255, .7)
}

.kast-primary-teal #kast-bar i,
.kast-primary-teal #kast-np-title,
.kast-primary-teal.kast-minimized:not(.kast-ultra) #kast-play {
    color: #fff
}


/* Green - Dark text */

.kast-primary-green #kast-top,
.kast-accent-green #kast-play,
.kast-primary-green.kast-colored .kast-top-content {
    background-color: #4CAF50;
    color: rgba(0, 0, 0, .87)
}

.kast-primary-green #kast-bar {
    background: rgba(255, 255, 255, .3)
}

.kast-primary-green #kast-bar i:hover {
    background: rgba(255, 255, 255, .1)
}

.kast-primary-green #kast-np-artist,
.kast-primary-green #kast-bar {
    color: rgba(0, 0, 0, .54)
}

.kast-primary-green #kast-bar i,
.kast-primary-green #kast-np-title,
.kast-primary-green.kast-minimized:not(.kast-ultra) #kast-play {
    color: rgba(0, 0, 0, .87)
}


/* Light Green - Dark text */

.kast-primary-lightgreen #kast-top,
.kast-accent-lightgreen #kast-play,
.kast-primary-lightgreen.kast-colored .kast-top-content {
    background-color: #8BC34A;
    color: rgba(0, 0, 0, .87)
}

.kast-primary-lightgreen #kast-bar {
    background: rgba(255, 255, 255, .3)
}

.kast-primary-lightgreen #kast-bar i:hover {
    background: rgba(255, 255, 255, .1)
}

.kast-primary-lightgreen #kast-np-artist,
.kast-primary-lightgreen #kast-bar {
    color: rgba(0, 0, 0, .54)
}

.kast-primary-lightgreen #kast-bar i,
.kast-primary-lightgreen #kast-np-title,
.kast-primary-lightgreen.kast-minimized:not(.kast-ultra) #kast-play {
    color: rgba(0, 0, 0, .87)
}


/* Lime - Dark text */

.kast-primary-lime #kast-top,
.kast-accent-lime #kast-play,
.kast-primary-lime.kast-colored .kast-top-content {
    background-color: #CDDC39;
    color: rgba(0, 0, 0, .87)
}

.kast-primary-lime #kast-np-artist,
.kast-primary-lime #kast-bar {
    color: rgba(0, 0, 0, .54)
}

.kast-primary-lime #kast-bar i,
.kast-primary-lime #kast-np-title,
.kast-primary-lime.kast-minimized:not(.kast-ultra) #kast-play {
    color: rgba(0, 0, 0, .87)
}


/* Yellow - Dark text */

.kast-primary-yellow #kast-top,
.kast-accent-yellow #kast-play,
.kast-primary-yellow.kast-colored .kast-top-content {
    background-color: #FFEB3B;
    color: rgba(0, 0, 0, .87)
}

.kast-primary-yellow #kast-bar {
    background: rgba(255, 255, 255, .3)
}

.kast-primary-yellow #kast-bar i:hover {
    background: rgba(255, 255, 255, .1)
}

.kast-primary-yellow #kast-np-artist,
.kast-primary-yellow #kast-bar {
    color: rgba(0, 0, 0, .54)
}

.kast-primary-yellow #kast-bar i,
.kast-primary-yellow #kast-np-title,
.kast-primary-yellow.kast-minimized:not(.kast-ultra) #kast-play {
    color: rgba(0, 0, 0, .87)
}


/* Amber - Dark text */

.kast-primary-amber #kast-top,
.kast-accent-amber #kast-play,
.kast-primary-amber.kast-colored .kast-top-content {
    background-color: #FFC107;
    color: rgba(0, 0, 0, .87)
}

.kast-primary-amber #kast-bar {
    background: rgba(255, 255, 255, .3)
}

.kast-primary-amber #kast-bar i:hover {
    background: rgba(255, 255, 255, .1)
}

.kast-primary-amber #kast-np-artist,
.kast-primary-amber #kast-bar {
    color: rgba(0, 0, 0, .54)
}

.kast-primary-amber #kast-bar i,
.kast-primary-amber #kast-np-title,
.kast-primary-amber.kast-minimized:not(.kast-ultra) #kast-play {
    color: rgba(0, 0, 0, .87)
}


/* Orange - Dark text */

.kast-primary-orange #kast-top,
.kast-accent-orange #kast-play,
.kast-primary-orange.kast-colored .kast-top-content {
    background-color: #FF9800;
    color: rgba(0, 0, 0, .87)
}

.kast-primary-orange #kast-bar {
    background: rgba(255, 255, 255, .3)
}

.kast-primary-orange #kast-bar i:hover {
    background: rgba(255, 255, 255, .1)
}

.kast-primary-orange #kast-np-artist,
.kast-primary-orange #kast-bar {
    color: rgba(0, 0, 0, .54)
}

.kast-primary-orange #kast-bar i,
.kast-primary-orange #kast-np-title,
.kast-primary-orange.kast-minimized:not(.kast-ultra) #kast-play {
    color: rgba(0, 0, 0, .87)
}


/* Deep Orange - Light text */

.kast-primary-deeporange #kast-top,
.kast-accent-deeporange #kast-play,
.kast-primary-deeporange.kast-colored .kast-top-content {
    background-color: #FF5722;
    color: #fff
}

.kast-primary-deeporange #kast-bar {
    background: rgba(0, 0, 0, .2)
}

.kast-primary-deeporange #kast-bar i:hover {
    background: rgba(0, 0, 0, .1)
}

.kast-primary-deeporange #kast-np-artist,
.kast-primary-deeporange #kast-bar {
    color: rgba(255, 255, 255, .7)
}

.kast-primary-deeporange #kast-bar i,
.kast-primary-deeporange #kast-np-title,
.kast-primary-deeporange.kast-minimized:not(.kast-ultra) #kast-play {
    color: #fff
}


/* Brown - Light text */

.kast-primary-brown #kast-top,
.kast-accent-brown #kast-play,
.kast-primary-brown.kast-colored .kast-top-content {
    background-color: #795548;
    color: #fff
}

.kast-primary-brown #kast-bar {
    background: rgba(0, 0, 0, .2)
}

.kast-primary-brown #kast-bar i:hover {
    background: rgba(0, 0, 0, .1)
}

.kast-primary-brown #kast-np-artist,
.kast-primary-brown #kast-bar {
    color: rgba(255, 255, 255, .7)
}

.kast-primary-brown #kast-bar i,
.kast-primary-brown #kast-np-title,
.kast-primary-brown.kast-minimized:not(.kast-ultra) #kast-play {
    color: #fff
}


/* Grey - Dark text */

.kast-primary-grey #kast-top,
.kast-accent-grey #kast-play,
.kast-primary-grey.kast-colored .kast-top-content {
    background-color: #9E9E9E;
    color: rgba(0, 0, 0, .87)
}

.kast-primary-grey #kast-bar {
    background: rgba(255, 255, 255, .3)
}

.kast-primary-grey #kast-bar i:hover {
    background: rgba(255, 255, 255, .1)
}

.kast-primary-grey #kast-np-artist,
.kast-primary-grey #kast-bar {
    color: rgba(0, 0, 0, .54)
}

.kast-primary-grey #kast-bar i,
.kast-primary-grey #kast-np-title,
.kast-primary-grey.kast-minimized:not(.kast-ultra) #kast-play {
    color: rgba(0, 0, 0, .87)
}


/* Blue Grey - Light text */

.kast-primary-bluegrey #kast-top,
.kast-accent-bluegrey #kast-play,
.kast-primary-bluegrey.kast-colored .kast-top-content {
    background-color: #607D8B;
    color: #fff
}

.kast-primary-bluegrey #kast-bar {
    background: rgba(0, 0, 0, .2)
}

.kast-primary-bluegrey #kast-bar i:hover {
    background: rgba(0, 0, 0, .1)
}

.kast-primary-bluegrey #kast-np-artist,
.kast-primary-bluegrey #kast-bar {
    color: rgba(255, 255, 255, .7)
}

.kast-primary-bluegrey #kast-bar i,
.kast-primary-bluegrey #kast-np-title,
.kast-primary-bluegrey.kast-minimized:not(.kast-ultra) #kast-play {
    color: #fff
}


/* Black - Light text */

.kast-primary-black #kast-top,
.kast-accent-black #kast-play,
.kast-primary-black.kast-colored .kast-top-content {
    background-color: #000;
    color: #fff
}

.kast-primary-black #kast-bar {
    background: rgba(0, 0, 0, .2)
}

.kast-primary-black #kast-bar i:hover {
    background: rgba(0, 0, 0, .1)
}

.kast-primary-black #kast-np-artist,
.kast-primary-black #kast-bar {
    color: rgba(255, 255, 255, .7)
}

.kast-primary-black #kast-bar i,
.kast-primary-black #kast-np-title,
.kast-primary-black.kast-minimized:not(.kast-ultra) #kast-play {
    color: #fff
}


/* White - Dark text */

.kast-primary-white #kast-top,
.kast-accent-white #kast-play,
.kast-primary-white.kast-colored .kast-top-content {
    background-color: #fff;
    color: rgba(0, 0, 0, .87)
}

.kast-primary-white #kast-bar {
    background: rgba(255, 255, 255, .3)
}

.kast-primary-white #kast-bar i:hover {
    background: rgba(255, 255, 255, .1)
}

.kast-primary-white #kast-np-artist,
.kast-primary-white #kast-bar {
    color: rgba(0, 0, 0, .54)
}

.kast-primary-white #kast-bar i,
.kast-primary-white #kast-np-title,
.kast-primary-white.kast-minimized:not(.kast-ultra) #kast-play {
    color: rgba(0, 0, 0, .87)
}


/* Carolina - Light text */

.kast-primary-carolina #kast-top,
.kast-accent-carolina #kast-play,
.kast-primary-carolina.kast-colored .kast-top-content {
    background-color: #547591;
    color: #fff
}

.kast-primary-carolina #kast-bar {
    background: rgba(0, 0, 0, .2)
}

.kast-primary-carolina #kast-bar i:hover {
    background: rgba(0, 0, 0, .1)
}

.kast-primary-carolina #kast-np-artist,
.kast-primary-carolina #kast-bar {
    color: rgba(255, 255, 255, .7)
}

.kast-primary-carolina #kast-bar i,
.kast-primary-carolina #kast-np-title,
.kast-primary-carolina.kast-minimized:not(.kast-ultra) #kast-play {
    color: #fff
}


/* UI.css: transparent and colored
 * Extra: current ui without played list
========================================== */

.kast-colored #kast-bottom {
    margin-top: 90px
}

.kast-colored .kast-top-content {
    bottom: -90px;
    background-image: none
}

#kast.kast-colored.kast-current {
    height: 470px
}

#kast.kast-transparent.kast-current {
    height: 380px
}

.kast-transparent.kast-current #kast-play {
    bottom: 20px
}


/* Main
============================================ */

.kast-clearfix:before,
.kast-clearfix:after {
    content: "";
    display: table
}

.kast-clearfix:after {
    clear: both
}


/* Box: kast-player
============================================ */

#kast {
    font-size: 14px;
    line-height: 1.4;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    width: 380px;
    height: 570px;
    max-width: 100%;
    max-height: 100%;
    position: fixed;
    bottom: 0;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 9999;
/*  border-radius: 2px; */
    -webkit-animation: kastright .5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation: kastright .5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    will-change: height, box-shadow
}

#kast.kast-custom-container {
    position: relative
}

#kast.kast-left {
    -webkit-animation: kastleft .5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation: kastleft .5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@-webkit-keyframes kastright {
    0% {
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translateY(570px) translateX(380px) scale(.3);
    }
    100% {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0) translateX(0) scale(1);
        transform: translateY(0) translateX(0) scale(1);
    }
}

@keyframes kastright {
    0% {
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translateY(570px) translateX(380px) scale(.3);
    }
    100% {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0) translateX(0) scale(1);
        transform: translateY(0) translateX(0) scale(1);
    }
}

@-webkit-keyframes kastleft {
    0% {
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translateY(570px) translateX(-380px) scale(.3);
        transform: translateY(570px) translateX(-380px) scale(.3);
    }
    100% {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0) translateX(0) scale(1);
        transform: translateY(0) translateX(0) scale(1);
    }
}

@keyframes kastleft {
    0% {
        opacity: 0;
        visibility: hidden;
        -webkit-transform: translateY(570px) translateX(-380px) scale(.3);
        transform: translateY(570px) translateX(-380px) scale(.3);
    }
    100% {
        opacity: 1;
        visibility: visible;
        -webkit-transform: translateY(0) translateX(0) scale(1);
        transform: translateY(0) translateX(0) scale(1);
    }
}

#kast.kast-minimized {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 10px 0 rgba(0, 0, 0, 0.16);
}

#kast.kast-right {
    right: 0;
}

#kast.kast-left {
    left: 0;
}

#kast-wrapper {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
/*  border-radius: 2px */
}

#kast-wrapper::-webkit-scrollbar {
    display: none
}


/* kast-bar
============================================ */

#kast-bar {
    height: 30px;
    line-height: 30px;
    text-align: right;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    width: 100%;
/*  border-radius: 2px 2px 0 0; */
    -webkit-transition: background .28s cubic-bezier(0.4, 0, 0.2, 1);
    transition: background .28s cubic-bezier(0.4, 0, 0.2, 1)
}

#kast-bar.kast-primary-light {
    background: rgba(0, 0, 0, .2)
}

#kast-bar.kast-primary-dark {
    background: rgba(255, 255, 255, .3)
}

#kast.kast-offline #kast-bar {
    background: #E53935
}

#kast-bar i {
    text-align: center;
    width: 30px;
    font-size: 24px;
    color: #ffffff
}

#kast-bar p {
    float: left;
    padding-left: 10px;
    width: 80%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left
}

#kast-bar .kast-offline-status,
#kast.kast-offline #kast-bar p {
    display: none
}

#kast.kast-offline #kast-bar p.kast-offline-status {
    display: block
}

#kast-bar.kast-primary-light i:hover {
    background: rgba(0, 0, 0, .1);
}

#kast-bar.kast-primary-dark i:hover {
    background: rgba(255, 255, 255, .1);
}


/* Top
============================================ */

#kast-top {
    width: 380px;
    height: 380px;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    text-align: center;
    background-position: 50% 50%;
    background-size: cover;
/*  border-radius: 2px 2px 0 0; */
    will-change: height
}

#kast-top .kast-album-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%
}

#kast-top .kast-mdi-album {
    display: none;
    font-size: 240px;
    line-height: 380px;
    will-change: font-size
}

#kast .kast-mdi-album {
    cursor: default
}

#kast-top.kast-default-art .kast-mdi-album {
    display: inline-block
}

.kast-top-content {
    background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .16));
    height: 90px;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    text-align: left;
    line-height: 1.4;
    will-change: bottom
}

.kast-current .kast-top-content {
/*  border-radius: 0 0 2px 2px */
}

#kast-nowplaying {
    padding-left: 20px;
    will-change: padding-left
}

#kast-linear {
    width: 100%;
    height: 90px;
    position: absolute;
    top: -90px;
    display: none;
}

#kast-np-title {
    font-size: 22px;
    padding-top: 18px;
    will-change: padding-top
}

#kast-np-artist {
    font-size: 16px;
}

#kast-np-title,
#kast-np-artist {
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.kast-not-full-statusbar.kast-minimized #kast-np-title,
.kast-not-full-statusbar.kast-minimized #kast-np-artist {
    width: 85%
}

#kast-play {
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius: 50%;
    line-height: 60px;
    position: absolute;
    z-index: 1;
    bottom: -30px;
    right: 100px;
    margin-right: -80px;
    /* prevent weird transitions */
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .26), 0 2px 10px 0 rgba(0, 0, 0, .16);
    background: #fff;
    color: rgba(0, 0, 0, .87);
/*
    -webkit-transition: all .28s cubic-bezier(0.4, 0, 0.2, 1) .28s;
    transition: all .28s cubic-bezier(0.4, 0, 0.2, 1) .28s;
*/
    will-change: bottom, right, margin-right, box-shadow
}

#kast-play:active {
    transition-delay: 0s;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);
}
#kast-play:hover {
    transition-delay: 0s;
}

#kast-play i {
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    opacity: 0;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);

    -webkit-transition: width .28s cubic-bezier(0.4, 0, 0.2, 1) .28s, transform .28s cubic-bezier(0.4, 0, 0.2, 1), opacity .28s cubic-bezier(0.4, 0, 0.2, 1);
    transition: width .28s cubic-bezier(0.4, 0, 0.2, 1) .28s, transform .28s cubic-bezier(0.4, 0, 0.2, 1), opacity .28s cubic-bezier(0.4, 0, 0.2, 1);
}

#kast-play.kast-paused .kast-mdi-play,
#kast-play.kast-playing .kast-mdi-pause {
    opacity: 1;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}


/* Bottom
============================================ */

#kast-bottom {
    font-size: 17px;
    padding: 20px 20px 0 20px
}

#kast-bottom>p {
    padding-bottom: 20px;
}

#kast-bottom .kast-p-title {
    font-size: 19px
}

#kast-bottom .kast-p-artist,
#kast-bottom .kast-p-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 240px;
    max-width: 100%
}

#kast-bottom li {
    float: left;
    width: 100%;
    height: 50px;
    margin-bottom: 20px
}

#kast-bottom li div {
    float: left
}

#kast-bottom .kast-p-info {
    width: 70%
}


/* played: test
========================================== */

.kast-p-art {
    background-size: cover;
    background-position: 50% 50%;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-right: 20px;
}

.kast-p-art i.kast-mdi {
    display: none;
}

.kast-p-art.kast-p-default-art i.kast-mdi {
    display: inline-block
}


/* Minimized + transitions
========================================== */

#kast,
#kast-bar i,
#kast-top,
#kast-top .kast-mdi-album,
.kast-top-content,
#kast-nowplaying,
.kast-top-content p,
#kast-bottom,
#kast-bottom p,
#kast-bottom li,
#kast-bottom div,
#kast-bottom i {
    -webkit-transition: all .28s cubic-bezier(0.4, 0, 0.2, 1);
    transition: all .28s cubic-bezier(0.4, 0, 0.2, 1)
}

#kast-bottom p,
#kast-bottom div,
#kast-bottom i {
    transition-delay: .56s
}


#kast.kast-maximized,
.kast-maximized #kast-top,
.kast-maximized .kast-mdi-album,
.kast-minimized #kast-play,
.kast-minimized #kast-play i {
    transition-delay: 0s
}
#kast.kast-minimized,
.kast-minimized #kast-top,
.kast-minimized .kast-mdi-album,
.kast-minimized .kast-top-content,
.kast-maximized #kast-nowplaying {
    transition-delay: .28s
}

.kast-minimized #kast-nowplaying {
    transition-delay: 0s
}


#kast.kast-minimized,
#kast.kast-current.kast-minimized {
    height: 80px
}

.kast-minimized #kast-top,
.kast-minimized #kast-bottom,
.kast-minimized #kast-bottom li,
.kast-minimized #kast-bottom p,
.kast-minimized #kast-bottom i,
.kast-minimized #kast-bottom div,
.kast-minimized #kast-bar p {
    height: 0;
    margin: 0px;
    padding: 0px;
    opacity: 0;
    font-size: 0;
    visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.kast-minimized #kast-top {
    opacity: 1;
    visibility: visible;
}

.kast-minimized #kast-bottom p,
.kast-minimized #kast-bottom i {
    height: auto
}

.kast-minimized #kast-bar {
    background: transparent;
    width: 60px
}

.kast-minimized #kast-minmax {
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
}

.kast-minimized #kast-play,
.kast-minimized.kast-current #kast-play {
    bottom: -80px;
    right: 100%;
    margin-right: -80px;
    box-shadow: none;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.kast-minimized:not(.kast-ultra) #kast-play,
.kast-minimized.kast-current:not(.kast-ultra) #kast-play {
    background-color: transparent !important;
    /* Better than .css() */
    border-radius: 0;
    width: 80px;
    height: 80px;
    line-height: 80px;
}

.kast-minimized #kast-top .kast-mdi-album {
    font-size: 0px;
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

.kast-minimized #kast-nowplaying {
    height: 80px;
    padding-left: 80px
}

.kast-minimized #kast-np-title {
    padding-top: 13px
}

.kast-minimized #kast-play i {
    width: 80px;
    transform: scale(0)
}

.kast-minimized .kast-top-content {
    height: 80px;
    bottom: -80px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
/*  border-radius: 2px; */
}

.kast-minimized.kast-transparent .kast-top-content {
    background-image: none;
}


/* Ultra mode
========================================== */

#kast.kast-minimized.kast-ultra {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    bottom: 15px;
/*
    -webkit-transition: all .28s cubic-bezier(0.4, 0, 0.2, 1);
    transition: all .28s cubic-bezier(0.4, 0, 0.2, 1);
*/
}

.kast-dark.kast-ultra,
.kast-light.kast-ultra {
    background-color: transparent
}

#kast.kast-ultra.kast-right {
    right: 15px
}

#kast.kast-ultra.kast-left {
    left: 15px
}

#kast.kast-minimized.kast-ultra:active {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);
}

.kast-ultra #kast-wrapper {
    padding-right: 0
}

.kast-ultra #kast-top-content,
.kast-ultra .kast-album-wrapper {
    display: none
}

.kast-ultra #kast-top {
    max-width: 100%
}

.kast-ultra #kast-nowplaying {
    height: 60px
}

#kast.kast-ultra #kast-play {
    bottom: -60px;
    margin-right: -60px;
}

#kast.kast-ultra #kast-play i {
    width: 60px
}


/* Media Queries for Desktops & others
======================================== */

@media only screen and (min-width:381px) {
    #kast-wrapper {
        width: calc(100% + 18px)
    }
}

@media only print {
    #kast {
        display: none
    }
}
