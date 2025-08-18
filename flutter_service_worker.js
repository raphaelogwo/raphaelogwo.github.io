'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4df18145354369682ca429cf53a398fa",
"version.json": "83dd4ce5a93bd9f0a8af134baa7b6cd5",
"index.html": "2f2591a1462fa8c179a29201d23a6602",
"/": "2f2591a1462fa8c179a29201d23a6602",
"main.dart.js": "f218624321e1774212bea4dff535a908",
"flutter.js": "baab3b6ad5e74e3f0d43d96274f5fba9",
"favicon.png": "42b783568eb076c3174d03d82ecd9318",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e713fc2f7f0f09301cd5e0b3f763ee7a",
".git/config": "e9e87428cbf8f62665a2b050dce86079",
".git/objects/69/54ccc630ac178801f7548b8d622062ae9d7154": "af7de7605b7f68661d5d8ad1ef9373df",
".git/objects/3d/85b1c4b4c67a72e2229542287afe69abcf8d8b": "fb6055f3a1c05c923564c3c334e0b4b0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/3db678eb71f2146ec8b663240b4a71dbb0d3b3": "3b2fc0618f5df8bbbf89d35504ab4356",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5b/3c3fdc03d67a5e2321ce54d4d33a78992b60a7": "40cc1a279022adb42660fa22fcaa3198",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/d1a3bc270521d2afa40b86f1c8a8dc71e5f297": "470c560f744b6fc1c8c878e7fed68046",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c3f63b5e2ed99fc7b5e93f5efdf0410d",
".git/logs/refs/heads/main": "a64cb341d25f66ce7781268a009c16c9",
".git/logs/refs/remotes/origin/main": "64128468da7a94c57f2592f902dbb901",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "eeec9ad5cc2509499e24dfec139c8ad6",
".git/refs/remotes/origin/main": "eeec9ad5cc2509499e24dfec139c8ad6",
".git/index": "5042ae875b92b556a7b36e7c0e6edd48",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "fbb5ab39a415ca18b3c1be52726d637b",
"assets/NOTICES": "6bf438236d01a4b30ffad6a1c8146e97",
"assets/FontManifest.json": "c7fdd0766f4781e4b65f2a1393399ae3",
"assets/AssetManifest.bin.json": "8c53bee9e7f76db9dbeb9861cd7d30a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "57b91532a703cabe607dbcdf0227a66a",
"assets/fonts/trebuchet.ttf": "54e1c73dfe6eedcd3ba28ea086cdaa53",
"assets/fonts/Montserrat-Bold.ttf": "d3085f686df272f9e1a267cc69b2d24f",
"assets/fonts/Montserrat-Regular.ttf": "b87689f37dfb5c51719210e4d96a34a2",
"assets/fonts/MaterialIcons-Regular.otf": "61e355b7f097ad649eb267bbfa2dbcfc",
"assets/fonts/Montserrat-Italic.ttf": "5a669c0a71801494df35130ab2f55295",
"assets/assets/womenwing.JPG": "d24d483798335baefb77a12492a63243",
"assets/assets/outreachph.jpeg": "7e1732d55aaa76f5c9152fd1bf35bb1a",
"assets/assets/Lady-teacher.png": "79db747718508f0f90471e15ac8de1d8",
"assets/assets/IMG_7340.jpg": "cda808b1813cbb1db1618f8d01ec7b33",
"assets/assets/addressw25.JPG": "6d3ce739cf1a27987b56a1ac2cbd27b1",
"assets/assets/Outreach.jpeg": "e07a916c7ef7d517b04918d077c56663",
"assets/assets/ugwaecst.jpeg": "2bf3c3ffb1c9f1d5885c2132ac057d99",
"assets/assets/IMG_7344.jpg": "dd6c1aa0ccd6e3960e0bd865cda7e32d",
"assets/assets/addressw22.JPG": "6d6c2f3371bca4e658114167d232bc83",
"assets/assets/outreachph2.jpeg": "a8cc995b3c57cc4791bb1977527565aa",
"assets/assets/ceopassport.jpeg": "41a94bbbc1db2877046f281cbdb65feb",
"assets/assets/widowsreach225.JPG": "905092710ebe4b37677799ed80bf3769",
"assets/assets/char20outreach.jpeg": "f5db9436f153ca8866a150961a5d63ad",
"assets/assets/char20address.jpeg": "0d216624e0efdb9db746350e6e8f0e09",
"assets/assets/ijeoma.jpg": "00d45613cb16d88487cf8bef9e143898",
"assets/assets/widowsreach25.JPG": "4b56635f7e5031dfa2b399c98fbe6018",
"assets/assets/videos/dancew.MP4": "b3f7d1dc5f3d309b548a4291dd164f55",
"assets/assets/videos/giftloads.MP4": "1e1b6bc0e2c9703e8c4977095963a0d0",
"assets/assets/videos/drot1.mp4": "fb57dffe9cad4e163ba01618f3923f6d",
"assets/assets/videos/arrival.MP4": "657dc1ea58f65c4026e4bd747351bb9a",
"assets/assets/videos/giftsharing.MP4": "28fc7779ac38cba487c9b5ea8b1d60fe",
"assets/assets/Ustudg.jpeg": "9aa5a4002843e10028ed7cbc1098b873",
"assets/assets/ugo.jpg": "cfde5ce53e26f9e54469a3bb89686f35",
"assets/assets/Picture3.jpeg": "de3609adbb43ebc87ba1944daa95df05",
"assets/assets/womenf2.JPG": "ab6a79fc503331a6c371fd67e61322c7",
"assets/assets/Picture2.jpeg": "f44022739c6b0a2dfabccb236c6e2dd0",
"assets/assets/IMG_7339.jpg": "c443b67580d0a3cf0cf7d90b6a8f1659",
"assets/assets/Picture1.jpg": "49ff5cce9ab0efb2b884485204c9dfca",
"assets/assets/uglabst.jpeg": "ffb5c4b6cf2060333a6914520cdf8ddf",
"assets/assets/african_village_children-min.jpg": "cea93b285322babc6b819fcadcd371a2",
"assets/assets/EMMA.JPG": "f105cc69dabef52c2187d11061167298",
"assets/assets/char20start.jpeg": "53a67ffa9ed8905f12794671cc5ba5f9",
"assets/assets/eoflogo.png": "c043ecd3e2f9110de2080bad67d18cd3",
"assets/assets/amaka.jpg": "b548f4874e99f092b4f39078fd9a0825",
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
