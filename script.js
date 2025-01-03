
let debounceTimer;

function togglePopup() {
    const popup = document.getElementById('popup');
    const isVisible = popup.style.display === 'flex';
    popup.style.display = isVisible ? 'none' : 'flex';

    const button = document.getElementById('popupButton');
    button.textContent = isVisible ? '+' : '×';
}

function checkUIDValidity() {
    const uid = document.getElementById('uidTextarea').value;
    const region = document.getElementById('regionSelect').value;
    const fetchButton = document.getElementById('fetchButton');

    const isValidUID = /^\d{10,11}$/.test(uid);

    if (isValidUID && region) {
        fetchButton.style.display = 'block';
    } else {
        fetchButton.style.display = 'none';
    }
}

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
                iframeDocument.write(\`
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
                            <pre>\${formattedJSON}</pre>
                        </body>
                    </html>
                \`);
                iframeDocument.close();

                document.getElementById('popup').style.display = 'none';
                iframe.style.display = 'block';
                document.getElementById('popupButton').textContent = '+';
                document.getElementById('fetchButton').style.display = 'none';
            });
    }
}

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

    checkUIDValidity();
});
