// ==UserScript==
// @name         AutoCloseTheStrong
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  automatically closes torn profile pages if target is not a punchbag
// @author       WizardRubic
// @match        *.torn.com/profiles.php*
// @grant        window.close

// ==/UserScript==

(function() {
    'use strict';
    var isWeak = function(title) {
        // if hospital or travelling then return false as they're not attackable
        return title=="Punchbag";
    };
    var profileElement = (document.getElementsByClassName("content-wrapper")[0]);
    var callback = function(mutationsList) {
        console.log();
        // var title = document.getElementsByClassName("main-desc")[0].innerHTML;
        var title = document.getElementsByClassName("medium")[1].innerText;
        if(title!=undefined && !isWeak(title)) {
            window.close();
        }
    };
    var mutationConfig = { attributes: true, childList: true, subtree: true };
    var observer = new MutationObserver(callback);
    observer.observe(profileElement, mutationConfig);
})();