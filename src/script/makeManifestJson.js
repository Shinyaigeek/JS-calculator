const fs = require("fs")

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

fs.mkdir("./dist/img", () => {
  fs.writeFile("./dist/js-calc.webmanifest", manifest, err => {
    if (err) throw err;
  });
  fs.copyFile(
    "./src/script/img/js_calc-512x512.png",
    "./dist/img/js_calc-512x512.png",
    err => {
      if (err) throw err;
    }
  );
  fs.copyFile(
    "./src/script/img/js_calc-256x256.png",
    "./dist/img/js_calc-256x256.png",
    err => {
      if (err) throw err;
    }
  );
  fs.copyFile(
    "./src/script/img/js_calc-192x192.png",
    "./dist/img/js_calc-192x192.png",
    err => {
      if (err) throw err;
    }
  );
  fs.copyFile(
    "./src/script/img/js_calc-144x144.png",
    "./dist/img/js_calc-144x144.png",
    err => {
      if (err) throw err;
    }
  );
  fs.copyFile(
    "./src/script/img/js_calc-152x152.png",
    "./dist/img/js_calc-152x152.png",
    err => {
      if (err) throw err;
    }
  );
  fs.copyFile(
    "./src/script/img/js_calc-128x128.png",
    "./dist/img/js_calc-128x128.png",
    err => {
      if (err) throw err;
    }
  );
});
