const CACHE_NAME = 'sp-geofisica-v1';
const assets = [
  './',
  './index.html',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

// Instalar y guardar en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responder desde la caché si no hay internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
