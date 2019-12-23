const cacheName = "js-hitech-calc-v1";
const appShellFiles = [
  "/index.html",
  "/bundle.js",
  "/img/js_calc-512x512.png",
  "/img/js_calc-256x256.png",
  "/img/js_calc-192x912.png",
  "/img/js_calc-152x152.png",
  "/img/js_calc-144x144.png",
  "/img/js_calc-128x128.png"
];

self.addEventListener("install", function(e) {
  console.log('👷', 'install', e);
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[Service Worker] Caching all: app shell and content");
      return cache.addAll(appShellFiles).then(console.log).catch(console.log);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('👷', 'activate', event);
  console.log('[serviceworker]activate');
  return self.clients.claim();
});

self.addEventListener("fetch", function(e) {
  console.log('👷', 'fetch', e);
  console.log('[serviceworker]fetch');
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log("[Service Worker] Fetching resource: " + e.request.url);
      return (
        r ||
        fetch(e.request).then(function(response) {
          return caches.open(cacheName).then(function(cache) {
            console.log(
              "[Service Worker] Caching new resource: " + e.request.url
            );
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});

self.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
});
