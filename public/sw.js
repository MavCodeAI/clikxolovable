const CACHE_NAME = 'clikxo-static-v1';
const ASSET_CACHE = 'clikxo-assets-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(['/']))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => ![CACHE_NAME, ASSET_CACHE].includes(k)).map((k) => caches.delete(k))
    ))
  );
  self.clients.claim();
});

// Simple routing: navigation requests network-first, assets stale-while-revalidate
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin
  if (url.origin !== self.location.origin) return;

  // Navigation: network-first
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('/'))
    );
    return;
  }

  // Assets: images, scripts, styles
  if (/\.(?:js|css|png|jpg|jpeg|gif|svg|webp|woff2?)$/i.test(url.pathname)) {
    event.respondWith(
      caches.open(ASSET_CACHE).then((cache) =>
        fetch(req)
          .then((res) => {
            cache.put(req, res.clone());
            return res;
          })
          .catch(() => cache.match(req))
      )
    );
  }
});
