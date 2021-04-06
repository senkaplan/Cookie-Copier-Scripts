// ==UserScript==
// @name         Copy Cookies
// @version      0.1
// @description  Copy cookies to the clipboard as a stringified json.
// @author       Sen(senkumar.v@kaplan.com)
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var cookieData = document.cookie.split(';').map(function(c) {
    var i = c.indexOf('=');
        return [c.substring(0, i), c.substring(i + 1)];
    });
    navigator.clipboard.writeText(JSON.stringify(JSON.stringify(cookieData)));
})();