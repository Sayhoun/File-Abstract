// Load the file
document.getElementById('fileInput').addEventListener('change', function selectedFileChanged() {
    if (this.files.length === 0) {
        console.log('No file selected.');
        return;
    }

    let file = this.files[0];
    
    // Now you can do whatever you want with this file
    // For instance, you can read its content with a FileReader
    const reader = new FileReader();
    reader.onload = function fileReadCompleted() {
        // when the reader is done, the content is in reader.result.
        document.getElementById('document').value = reader.result;
    };
    reader.readAsText(file); // read as text format
});

document.getElementById('summarize-button').addEventListener('click', async () => {
    // Get the user's API key, summarization options, document, etc.
    const apiKey = document.getElementById('api-key').value;
    const summarizationOption = document.querySelector('input[name="summarization-option"]:checked').value;
    const documentText = document.getElementById('document').value;

    // Check if any of the required fields are empty
    if (!apiKey || !summarizationOption || !documentText) {
        alert("Please fill out all fields before proceeding.");
        return;
    }

    // Prepare the request body
    const data = {
        'prompt': documentText,
        'max_tokens': 350  // You can set this to an appropriate value based on your requirements.
    };

    // Make a POST request to the OpenAI API
    try {
        const response = await fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo-0301/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(data)
        });

        const jsonResponse = await response.json();

        // Handle the response according to your needs
        if (response.ok) {
            // Successful API call
            // Display the summarized document
            document.getElementById('summary').textContent = jsonResponse.choices[0].text;
            // Basic cost calculation: estimated_words * max_tokens_per_word * cost_per_token
            let estimated_words = documentText.split(' ').length;
            let max_tokens_per_word = 4; // Maximum number of tokens that can represent a word in English for GPT-3 and GPT-4.
            let cost_per_token = 0.06 / 1000; // This is the cost for GPT-4 8K context completion, replace it with the actual cost per token for the model you are using
            let cost = estimated_words * max_tokens_per_word * cost_per_token;
            alert(`Estimated maximum cost: $${cost.toFixed(2)}`);
        } else {
            // Error occurred
            // Display error message
            document.getElementById('error').textContent = jsonResponse.error.message;
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Send the selected text to the background script
document.getElementById('summarize-button').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { command: 'getSelectedText' }, (response) => {
            console.log(response.selectedText);
        });
    });
});
