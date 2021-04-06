// ==UserScript==
// @name         Paste Cookies
// @version      0.1
// @description  Copy cookie from clipboard to the document
// @author       Sen(senkumar.v@kaplan.com)
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    navigator.clipboard.readText().then(text => {
      const cookies = JSON.parse(JSON.parse(text));
      console.log(cookies);
      cookies.forEach(function (arr) {
          document.cookie = arr[0] + '=' + arr[1];
      });
    });
})();