const CACHE_NAME = 'daftar-khana-v1';
const urlsToCache = ['/DafterKhana/', '/DafterKhana/index.html', '/DafterKhana/logo.png', '/DafterKhana/favicon.ico'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
