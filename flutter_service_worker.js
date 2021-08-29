'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1aca1a92b68ca63d046d04eb09ee11d3",
"assets/assets/airplane.png": "fc599f65f077fd10e7035b18f91915cd",
"assets/assets/androidStudio.jpg": "6ef13ebee8a833b8651cc9561e08523e",
"assets/assets/art.jpg": "f5f8a19510f03ed1d52a8ed4c14430f4",
"assets/assets/audio.png": "3cba05c6df1b2e13ce7e2c9e12cb40a8",
"assets/assets/battery.png": "2d1164fbc599c21d36e2486f266ced07",
"assets/assets/bin0.png": "7c8abb11aeb62c8c7c6fa53efaaa45c3",
"assets/assets/bluetooth.png": "98c10d20d5a7da31bb427068482b2503",
"assets/assets/chrome.png": "518b7ed152bbfbc735191831a44fe3ee",
"assets/assets/Desktop.png": "8cce6362d9018d928e863b8c6ca502e2",
"assets/assets/doc.png": "b80b5bc67e24e752cb77bf4daf34883f",
"assets/assets/edge.png": "bd39ae5b1551fabfc65f3dcc053a35ff",
"assets/assets/explorer%2520(1).png": "a81fc305954b3eb3ca18f55cb1db37a6",
"assets/assets/explorer.png": "a81fc305954b3eb3ca18f55cb1db37a6",
"assets/assets/facebook.png": "87e2de9c3536d686a96f394dfb9fa87c",
"assets/assets/feed.png": "9b45b58cfa5d28c950e6d52b75531e23",
"assets/assets/git.png": "a29dc3691124638b000809a7696281d5",
"assets/assets/home.png": "79405150006c06cc40510912b0b5c3b4",
"assets/assets/nearshare.png": "9e5f574df47ba1389e60cab05a8b683a",
"assets/assets/nightmode.png": "5a290413495ee2c1f9d1d4317aa90557",
"assets/assets/paint.png": "76c6cf5216a9226338977db2991ef6f6",
"assets/assets/power.png": "831c579709f4761e4ab7053fcf4176ec",
"assets/assets/ppt.png": "44078eb91d391f62d3dd21f836929e0a",
"assets/assets/project.png": "04d93639900e53feb9f8f8257425006b",
"assets/assets/ps.png": "6793474b36b8348d9f3494324f553bf0",
"assets/assets/saver.png": "13b3a007782e9fd7f968e62c8ce13d3f",
"assets/assets/search.png": "e525929fcfd084554ce3c3488ed15f80",
"assets/assets/settings.png": "9c50914c137a22cbf36b25bb3e9d6213",
"assets/assets/sidepane.png": "9a5f408f631abc2ca3ab79fa7a481caf",
"assets/assets/spotify.png": "73b5b5660e6dd4e8a465186248f9b70d",
"assets/assets/store.png": "c1e7a0a0bb02ea56a9b6ea3823130cbd",
"assets/assets/tiktok.png": "a966225a5e4566fd625ca048e3ddef1d",
"assets/assets/user.png": "57d1a4c70a4bb0678ac004a2088a0b51",
"assets/assets/userDir.png": "2c492867e291df314c1e164882715568",
"assets/assets/vlc-player.png": "9e2b46107d2326320a47dbaf6e424947",
"assets/assets/vs.png": "952fbeb1c31aceced77b116dd1ff0ed0",
"assets/assets/wallpaper.jpg": "e3dcab4a32594c810f766221dea7e970",
"assets/assets/weather.png": "2c5926b1a46dfeed2cc80266cabc4efa",
"assets/assets/widget.png": "05d7cd2336b3ad215f2592a2c03db81b",
"assets/assets/wifi.png": "359c5d6b177adb7ca12246e69d8acfc2",
"assets/assets/word.png": "d313b934754b66affdb564ca8c46b253",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b950ad22a8f8e316d74093845f21f3b4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1d9e8bb4a82e321ec6f3677b99fb5682",
"/": "1d9e8bb4a82e321ec6f3677b99fb5682",
"main.dart.js": "f6021a071501356d9bca5445479ac51c",
"manifest.json": "20f594d91c40a3fc3a688621887264d2",
"version.json": "6cc797bafef5e868c8828dc4642ef684"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
