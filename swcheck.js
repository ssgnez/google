self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.url.indexOf('swprobe') >= 0) {
    e.respondWith(new Response('SW_CONTROLLED_OK', { headers: { 'content-type': 'text/plain' } }));
  }
});
