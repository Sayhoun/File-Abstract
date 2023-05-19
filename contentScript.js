// This script runs in the context of the web page and can interact with the DOM.

function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection && document.selection.type !== 'Control') {
        return document.selection.createRange().text;
    }
    return '';
}

// Listen for messages from the popup or background.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.command === 'getSelectedText') {
        sendResponse({ selectedText: getSelectedText() });
    }
});
