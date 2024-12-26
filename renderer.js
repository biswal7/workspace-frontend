document.getElementById('addApp').addEventListener('click', () => {
    const input = document.getElementById('appUrl').value.trim();
    if (!input) {
        alert('Please enter a search query or URL!');
        return;
    }

    const workspace = document.getElementById('workspace');

    // Determine if the input is a URL or a search query
    let url;
    if (input.startsWith('http://') || input.startsWith('https://') || input.includes('.')) {
        // Treat input as a URL
        url = input.startsWith('http') ? input : `https://${input}`;
    } else {
        // Treat input as a search query and construct Google Search URL
        url = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
    }
    alert(url);

    // Create a new WebView for the URL or search query
    const webview = document.createElement('webview');
    webview.src = url;
    webview.style.width = '600px'; // Adjust for workspace layout
    webview.style.height = '700px';
    webview.style.border = '1px solid #ccc';
    webview.style.margin = '5px';

    // Append the WebView to the workspace
    workspace.appendChild(webview);
});
