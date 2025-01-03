let debounceTimer;

// Function to toggle popup visibility
function togglePopup() {
    const popup = document.getElementById('popup');
    const isVisible = popup.style.display === 'flex';
    popup.style.display = isVisible ? 'none' : 'flex';

    // If the popup is opened, change the button text to "Close Popup"
    const button = document.getElementById('popupButton');
    button.textContent = isVisible ? '+' : '×';  // Change the button text to "X" when the popup is open
}

// Check if the UID is a valid 10 or 11 digit number and enable the Fetch button
function checkUIDValidity() {
    const uid = document.getElementById('uidTextarea').value;
    const region = document.getElementById('regionSelect').value;
    const fetchButton = document.getElementById('fetchButton');

    // Check if the UID is a 10 or 11 digit number
    const isValidUID = /^\d{10,11}$/.test(uid);

    if (isValidUID && region) {
        // If valid UID and region selected, show the "Fetch" button
        fetchButton.style.display = 'block';
    } else {
        // Otherwise, hide the "Fetch" button
        fetchButton.style.display = 'none';
    }
}

// Load iframe content based on UID and Region
function loadResults() {
    const uid = document.getElementById('uidTextarea').value;
    const region = document.getElementById('regionSelect').value;

    if (uid && region) {
        const apiUrl = `https://profile-sand-mu.vercel.app/api?uid=${uid}&region=${region}&key=Another`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const formattedJSON = JSON.stringify(data, null, 4);

                const iframe = document.getElementById('apiIframe');
                const iframeDocument = iframe.contentWindow.document;

                iframeDocument.open();
                iframeDocument.write(`
                    <html>
                        <head>
                            <style>
                                body {
                                    color: #333333;
                                    background-color: #f9f9f9;
                                    font-family: 'Courier New', monospace;
                                    white-space: pre-wrap;
                                }
                            </style>
                        </head>
                        <body>
                            <pre>${formattedJSON}</pre>
                        </body>
                    </html>
                `);
                iframeDocument.close();

                // Close popup and show iframe
                document.getElementById('popup').style.display = 'none';
                iframe.style.display = 'block';
                document.getElementById('popupButton').textContent = '+'; // Reset button text
                document.getElementById('fetchButton').style.display = 'none'; // Hide Fetch button after use
            });
    }
}

// Automatically pre-fill from URL parameters and load iframe
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('uid');
    const region = urlParams.get('region');

    if (uid) {
        document.getElementById('uidTextarea').value = uid;
    }
    if (region) {
        document.getElementById('regionSelect').value = region;
    }

    // Check UID and region validity on page load
    checkUIDValidity();
});
