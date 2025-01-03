const urlParams = new URLSearchParams(window.location.search);
const uid = urlParams.get('uid');
const region = urlParams.get('region');

if (uid && region) {
  const iframeSrc = `https://profile-sand-mu.vercel.app/api?uid=${uid}&region=${region}&key=Another`;
  document.getElementById('apiIframe').src = iframeSrc;
} else {
  document.getElementById('apiIframe').style.display = 'none';
  document.getElementById('errorMessage').style.display = 'block';
}