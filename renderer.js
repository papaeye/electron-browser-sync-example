/* jshint browser: true, node: true */
if (process.env.BROWSER_SYNC_CLIENT_URL) {
  const current = document.currentScript;
  const script = document.createElement('script');
  script.src = process.env.BROWSER_SYNC_CLIENT_URL;
  script.async = true;
  current.parentNode.insertBefore(script, current);
}
