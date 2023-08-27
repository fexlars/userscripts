// ==UserScript==
// @name        Copy Video Button
// @namespace   Violentmonkey Scripts
// @match       https://hubchicken.tk/
// @grant       none
// @version     1.0
// @author      Fexlar
// @description 8/27/2023, 1:37:30 AM
// ==/UserScript==

// Step 1: Create a new button element
const newButton = document.createElement('input');

// Step 2: Set attributes for the button
newButton.id = "video-button"
newButton.type = "button"
newButton.value = 'Copy Video';
newButton.addEventListener('click', () => {
    const video = document.getElementById('video-source');
    navigator.clipboard.writeText(video.src).then(() => {
      console.log('Content copied to clipboard');
    },() => {
      alert('Failed to copy video to clippboard, oopsies!')
    });
});

// Step 3: Find the div element with the ID 'main'
const mainDiv = document.getElementById('main');

// Step 4: Append the new button to the div element
mainDiv.appendChild(newButton);
