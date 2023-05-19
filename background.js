// Listen for messages sent from other parts of the extension.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.command === 'fetchSummary') {
        // Make the API request here, then send a response.
        // This is where you would put your server interaction logic or direct OpenAI API call.
        // For the sake of simplicity, this example doesn't actually make a request.
        sendResponse({ summary: 'This is the summary.' });
    }
});
