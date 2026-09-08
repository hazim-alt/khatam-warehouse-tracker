// Minimal service worker — required by Chrome/Android to treat this site as an
// installable app (full icon, no browser badge, true standalone launch) instead
// of a plain bookmark shortcut. It does not cache anything; it just passes
// every request straight through to the network.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
