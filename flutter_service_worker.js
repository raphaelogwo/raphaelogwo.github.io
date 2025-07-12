'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "453c9579c0af716b5eedacba555b3f2c",
"version.json": "83dd4ce5a93bd9f0a8af134baa7b6cd5",
"index.html": "2f2591a1462fa8c179a29201d23a6602",
"/": "2f2591a1462fa8c179a29201d23a6602",
"main.dart.js": "c0eee1639c4806585d327fd7df9d1b87",
"flutter.js": "baab3b6ad5e74e3f0d43d96274f5fba9",
"favicon.png": "42b783568eb076c3174d03d82ecd9318",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e713fc2f7f0f09301cd5e0b3f763ee7a",
"assets/AssetManifest.json": "b23639dc55551d39b9b3f9c26a018a18",
"assets/NOTICES": "ba728b6f03d2a3481b1c20a8a1dd5e25",
"assets/FontManifest.json": "c7fdd0766f4781e4b65f2a1393399ae3",
"assets/AssetManifest.bin.json": "e74a7745768b685d8e3c8a58426f7d75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "edfe37d9390322856e27167852b6abdb",
"assets/fonts/trebuchet.ttf": "54e1c73dfe6eedcd3ba28ea086cdaa53",
"assets/fonts/Montserrat-Bold.ttf": "d3085f686df272f9e1a267cc69b2d24f",
"assets/fonts/Montserrat-Regular.ttf": "b87689f37dfb5c51719210e4d96a34a2",
"assets/fonts/MaterialIcons-Regular.otf": "61e355b7f097ad649eb267bbfa2dbcfc",
"assets/fonts/Montserrat-Italic.ttf": "5a669c0a71801494df35130ab2f55295",
"assets/assets/Lady-teacher.png": "79db747718508f0f90471e15ac8de1d8",
"assets/assets/IMG_7340.jpg": "cda808b1813cbb1db1618f8d01ec7b33",
"assets/assets/Outreach.jpeg": "e07a916c7ef7d517b04918d077c56663",
"assets/assets/IMG_7344.jpg": "dd6c1aa0ccd6e3960e0bd865cda7e32d",
"assets/assets/ceopassport.jpeg": "41a94bbbc1db2877046f281cbdb65feb",
"assets/assets/videos/drot1.mp4": "fb57dffe9cad4e163ba01618f3923f6d",
"assets/assets/Ustudg.jpeg": "9aa5a4002843e10028ed7cbc1098b873",
"assets/assets/Picture3.jpeg": "de3609adbb43ebc87ba1944daa95df05",
"assets/assets/Picture2.jpeg": "f44022739c6b0a2dfabccb236c6e2dd0",
"assets/assets/IMG_7339.jpg": "c443b67580d0a3cf0cf7d90b6a8f1659",
"assets/assets/Picture1.jpg": "49ff5cce9ab0efb2b884485204c9dfca",
"assets/assets/african_village_children-min.jpg": "cea93b285322babc6b819fcadcd371a2",
"assets/assets/eoflogo.jpg": "6b2b9ce866278b435b94dcb5254d725c",
"canvaskit/skwasm.js": "37fdb662bbaa915adeee8461576d69d7",
"canvaskit/skwasm_heavy.js": "f5c1413d222bc68856296fc97ac9fec0",
"canvaskit/skwasm.js.symbols": "c259d0523dd2a12504b8e4a79fac58e2",
"canvaskit/canvaskit.js.symbols": "2c3db1934a292cfd50461d786bcd1af5",
"canvaskit/skwasm_heavy.js.symbols": "1672d99de27795c2f5633eb4e102923d",
"canvaskit/skwasm.wasm": "e4c14dd94c91efe290443501d6f794a6",
"canvaskit/chromium/canvaskit.js.symbols": "1fc268aa3ba393a5c656dd9a5a15ef4e",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "ca285670b5b9ea1089902d7c9da32bd5",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "caa99ba2940e4a5ed1411a8283a94809",
"canvaskit/skwasm_heavy.wasm": "5375f071fa111dac4638c8f94f3db63a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
