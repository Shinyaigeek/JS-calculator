const fs = require("fs");

const manifest = `{
    "name": "JSハイテク電卓",
    "short_name": "JSC",
    "icons": [{
      "src": "/img/js_calc-128x128.png",
        "sizes": "128x128",
        "type": "image/png"
      }, {
        "src": "/img/js_calc-144x144.png",
        "sizes": "144x144",
        "type": "image/png"
      }, {
        "src": "/img/js_calc-152x152.png",
        "sizes": "152x152",
        "type": "image/png"
      }, {
        "src": "/img/js_calc-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      }, {
        "src": "/img/js_calc-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      }, {
        "src": "/img/js_calc-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }],
    "start_url": "/index.html",
    "display": "standalone",
    "background_color": "#3E4EB8",
    "theme_color": "#2F3BA2"
  }`;

const serviceworker = `
const cacheName = "js-hitech-calc-v1";
const appShellFiles = [
  "./index.html",
  "./bundle.js",
  "./img/js_calc-512x512.png",
  "./img/js_calc-256x256.png",
  "./img/js_calc-192x912.png",
  "./img/js_calc-152x152.png",
  "./img/js_calc-144x144.png",
  "./img/js_calc-128x28.png"
];

self.addEventListener("install", function(e) {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[Service Worker] Caching all: app shell and content");
      return cache.addAll(appShellFiles);
    })
  );
});

self.addEventListener("fetch", function(e) {
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
`;

fs.mkdir("./public", () => {
  fs.mkdir("./public/img", () => {
    fs.writeFile("./public/js-calc.webmanifest", manifest, err => {
      if (err) throw err;
    });
    fs.writeFile("./public/serviceworker.js", serviceworker, err => {
      if (err) throw err;
    });
    fs.copyFile(
      "./src/script/img/js_calc-512x512.png",
      "./public/img/js_calc-512x512.png",
      err => {
        if (err) throw err;
      }
    );
    fs.copyFile(
      "./src/script/img/js_calc-256x256.png",
      "./public/img/js_calc-256x256.png",
      err => {
        if (err) throw err;
      }
    );
    fs.copyFile(
      "./src/script/img/js_calc-192x192.png",
      "./public/img/js_calc-192x192.png",
      err => {
        if (err) throw err;
      }
    );
    fs.copyFile(
      "./src/script/img/js_calc-144x144.png",
      "./public/img/js_calc-144x144.png",
      err => {
        if (err) throw err;
      }
    );
    fs.copyFile(
      "./src/script/img/js_calc-152x152.png",
      "./public/img/js_calc-152x152.png",
      err => {
        if (err) throw err;
      }
    );
    fs.copyFile(
      "./src/script/img/js_calc-128x128.png",
      "./public/img/js_calc-128x128.png",
      err => {
        if (err) throw err;
      }
    );
  });
});
