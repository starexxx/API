const query = window.location.search.substring(1);
const [uid, region] = query.split('/');

const iframe = document.getElementById('apiIframe');
const errorOutput = document.getElementById('errorOutput');

if (uid && region) {
  iframe.src = `https://profile-sand-mu.vercel.app/api?uid=${uid}&region=${region}&key=Another`;
  iframe.style.display = 'block';
} else 
  
  const errorResponse = {
    error: "Invalid or missing parameters",
    requiredFormat: "https://starexxx.github.io/API/?UID/Region",
    example: "https://starexxx.github.io/API/?4411457393/ind"
  };

  errorOutput.textContent = JSON.stringify(errorResponse, null, 2);
  errorOutput.style.display = 'block';
}
