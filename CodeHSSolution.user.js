// ==UserScript==
// @name         CodeHS Solution Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Gets the solution for every single project inside of CodeHS.
// @author       fexlar
// @match        https://codehs.com/student/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    const url = window.location.href;

    function formatCodeString(codeString) {
        // Replace escaped characters with their respective values
        const formattedCode = codeString
            .replace(/\\n/g, '\n') // Replace '\n' with line breaks
            .replace(/&quot;/g, '"') // Replace '&quot;' with double quotes
            .replace(/&gt;/g, '>') // Replace '&gt;' with '>'
            .replace(/&lt;/g, '<'); // Replace '&lt;' with '<'

        return formattedCode;
    }

    const button = document.createElement("button");
    button.className = "btn btn-cs btn-main";
    button.style = "position: absolute; top: 0; left: 0; z-index: 9999;";
    button.onclick = function() {
        fetch(window.location.href)
            .then(response => response.text())
            .then(html => {
                const tempElement = document.createElement('div');
                tempElement.innerHTML = html;

                const pageSpecificJson = JSON.parse(tempElement.querySelector('#page-specific').textContent);
                const code = pageSpecificJson.solutionCode["default.js"];
                // console.log(formatCodeString(code));

                navigator.clipboard.writeText(formatCodeString(code));
                alert("Solution copied to clipboard!");
            })
            .catch(error => console.error('Error fetching page:', error));
    }

    const text = document.createTextNode("Get Solution");
    button.appendChild(text);
    document.body.appendChild(button);
})();
