// ==UserScript==
// @name        Copy Video Button
// @namespace   Violentmonkey Scripts
// @match       https://hubchicken.tk/
// @grant       none
// @version     1.0
// @author      Fexlar
// @description Adds a copy button to hubchicken to make sharing videos much easier
// ==/UserScript==

const newButton = document.createElement('button');

newButton.textContent = 'Copy Video';
newButton.addEventListener('click', () => {
    const video = document.getElementById('video-source');
    navigator.clipboard.writeText(video.src).then(() => {
      console.log('Content copied to clipboard');
    },() => {
      alert('Failed to copy video to clippboard, oopsies!')
    });
});

const mainDiv = document.getElementById('main');

mainDiv.appendChild(newButton);