'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1e1d82cd6c5c4e8ec3f852fbc6355704",
".git/config": "488d054b35f10f9fcc0144d3f373e2e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "0fdb2fb85aada6f799855d1413add7eb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b84f32f89235bb9909b4ff0b598d512f",
".git/logs/refs/heads/main": "697421a9e3bbd664c503ef21dfde2f87",
".git/logs/refs/remotes/origin/main": "bd663fe261e5642b94c29306a3e91051",
".git/objects/04/ebcccfaffdf84246c844455f5277b58bbb4a32": "fab12178b1800396655cc6e532b3ec21",
".git/objects/05/b9031e45595499811cd8d01a6ceff226855958": "37cb17e9678d73107567782d90a18c17",
".git/objects/0b/acde7cd753763d0ba2030a1fd66a0714ad0adb": "76d46ea87085c8f5cc400c6bd147dffc",
".git/objects/1a/1b87870555b7694dd896d81a62f97a3e4216b5": "f40686e52e84a2c25b3e7ce38fb06231",
".git/objects/1d/2e9d9c3c21aab422c77cf59a49132230a514e5": "9f13a173e5315bcfb7d5abf98d7e6d82",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/1f/8b711afe30d9838a895c88133e02f5c58ae0ee": "e1f55ff51f05b7181c75ed7eac653f37",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/88833122cb8ad5228f80b614799cfa131b4310": "cb19f5c9f23a391f72ac43246cba7b1a",
".git/objects/29/94bdc07aba0723630fd34ed4d677f0836d844d": "e498a1f753d2c97a0305df3bc6b78159",
".git/objects/2a/c6eded0075cb84375a192d7f2472383c31cf6a": "ec4d10c714b67a065ed8b5737c2ba2ea",
".git/objects/2d/9b6b4669fb2ae14a5c03fa10dffdb6caf3defc": "1ab9cd5b4d9ad2447e3173acb1f99b44",
".git/objects/30/45ad6955391e62da39da96a16203bb118fa79f": "d36001f8220e81a5cbe8620f2efe10f4",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/f84fd8857f831852a79087c706f54183ba486c": "20f8abd726c1662a0e455e493d025213",
".git/objects/34/de1141a87db730ee18589a65c9dd3705d16f55": "a4911d7acb4989b23cebe08f930ea520",
".git/objects/3c/b47ff174dbc399b0e235e7d2f9e976a774d365": "669638f5c1909a8a2e850dd0df757db2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/8e9b5fd321db9254bb81362f5a2b6e4c0a40fb": "893a6d50e460cf76aac9c21e4f66d4e7",
".git/objects/4d/aeb3f168c48aae5e16c0025813a479afea7606": "0d27d7c2bc46704eda1dfcb8acf68838",
".git/objects/4e/c4779b601ce9627ca475d06cd5c68d4fc03ea4": "5de97bd16267ece074ab3469fbda8331",
".git/objects/4f/a2ddb108201f140c8587b6d40e1beb252f2830": "5810cf70a59dc1fdebfdce2aadbec567",
".git/objects/5f/b789646fa72b278cf2a71af267f62e46280150": "2f3d36315ac09201bd44bcfa7eed4f9a",
".git/objects/61/614281298389a59daeb31754baeb4e9fc315d8": "9fab7988a33901644bf5f804e1d51ba6",
".git/objects/65/69fdd746fc35ff5c45bac8430d6052244ccc50": "4da0b01a26405ddb9de85b979f37f125",
".git/objects/6b/c660e86692164bfb5c68ea411b3ee5582ef236": "07970ffa42dd7eab13a20a3f74d7fd42",
".git/objects/6f/10a69c7c19a820b4bc10cb5831dfb7326f5c5c": "850d64a0495b3737568cf8c124ef66fd",
".git/objects/70/bca5a0d484dfad28b397998ed29521c846b185": "6491cef4e3be8f6ed78e961b8a830bd2",
".git/objects/72/59d32581192622d261fee3f4ea51933559b9bb": "d4698997865b9248cca8f7bf0526463c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/2b2939aca6d6f794b3b3346961e4ec56c90c9b": "f9e7453014b911675de9ed4021da6f52",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/8346f2c8524f5f670921c1d48d0fd8393d0d86": "2f4347ee9fe2009fe4a97097b2c5b275",
".git/objects/91/656f1f4bbed9f12876a380832d2d11074e4f90": "f6a30a2c5a32a707002238716ab7d165",
".git/objects/93/73d086b6563306b5f9d05af27b0f24e92e7e95": "ffe925283da9eb797061e740af0003a5",
".git/objects/94/7ee2dc55b78388a8230c3356128d131572dc0b": "0fe50c3a3165c1c5dbe5f08e8346c8ce",
".git/objects/96/9124f69edb595b03958ad47d8e4f13619e1bac": "b200b3cd909a1d3183f4ebe84349ca05",
".git/objects/97/d9b5abf781cafa6677c5224f1ef24bf67be281": "368d5ffe643fc0fb3545634f8f593a29",
".git/objects/9b/ed6fa8ec4d36ae4c2a2480f7db36bc4311b623": "7685bf9011fa6c7825be890d67858538",
".git/objects/9d/83fc9ae49da7c782d2600a0ffd3503aa3739f7": "354cb3080d4afdba1cad90f5707131be",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/10ededc7cfa6922f76b1610cfad665985b0478": "45a5aa893142b0c2892e3af8b261afb3",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/1f832f9419a6a4a27f466efdf77584ea3483a8": "bf957845b31f68e94ee2ee368cceab67",
".git/objects/b1/09ffb7a08b8f6311e0384e147064efec52cfd6": "fef1e784cb4cf6af7c117e62e7ab820b",
".git/objects/b5/3e82d5fcdbb41035f09629f4e6e6ef1a415076": "176a33f12459a59cd3b16e73356969ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/5665d4b5a4824a88c7d83b459d1a56e152688c": "325be15c0e43bc5e2a53b99aa066d047",
".git/objects/be/0d92bf5f3c84acfdfc89a4d170233952a08662": "1c44c638af1751997f18f5be062b07b9",
".git/objects/be/bbb5b704d634846ee7c3914314fe05108c4cc2": "6f8a666ce83de3a2f3e789d1b2cdee3d",
".git/objects/c6/7083110a9b91f04b4a9a0c08449bc1a6a3f043": "8bbb3ea26637d3bf15adfd83f53f5e53",
".git/objects/d1/e5615ae7967db3142e7bea2605795d766d453b": "a2b90cbe2dd725767c5f4e881e4002c0",
".git/objects/d7/ffd2fefc74ee9c8301e299ff0bab73c52ca19f": "eff159f700e3e20cd95eccce4484bf7e",
".git/objects/d8/9112ed18ee95133e8b0ad2da41d18067f8fda7": "e86f6154b35142ddf01de91c661c7587",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/aab702cec3c10cde8f78e29e0a91513778223d": "c4797a5e12334811ce86e2952fb6ab3c",
".git/objects/ec/cb318ea89d4d9e5477709d931a5d1fece56d5b": "275c4f16db71a2d953bd8f2aac962ab2",
".git/objects/ed/1bda40cae682b816a0b2d656c92c67d8ed22e6": "a863d5700984813f64593c3543b0645e",
".git/objects/f2/2b8a922cc078628f5cde84b2b7917a018607de": "e53a4ec583cdf3441b9f8264543786bd",
".git/objects/f5/52cf0a0e5f114d76fd60452b4ab3774e871017": "d6ed3b39dd7c8fb0acb3b183c7e3af2f",
".git/objects/f8/4e5ee80e62e2703e53c622b8cd687c2796a496": "f4944cba134366ffa72affc3f3ea9169",
".git/objects/f9/f120b01c5909c015bcbecf0f82b67ac2ced4ca": "be67f98cc0799dc21a774241fe7761d8",
".git/objects/fc/10b90aa4034c967e541ab368bec2368412d2ec": "d79eecb799ee899cd864389a374f9765",
".git/refs/heads/main": "b0b040e90fc3959f44e7b12c0672a403",
".git/refs/remotes/origin/main": "b0b040e90fc3959f44e7b12c0672a403",
"assets/AssetManifest.json": "ee667aa201209c4f28088fade0f22c73",
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
"assets/assets/photopea.png": "64fe29587d8da31cdabd707b2b31898b",
"assets/assets/power.png": "831c579709f4761e4ab7053fcf4176ec",
"assets/assets/ppt.png": "44078eb91d391f62d3dd21f836929e0a",
"assets/assets/project.png": "04d93639900e53feb9f8f8257425006b",
"assets/assets/ps.png": "6793474b36b8348d9f3494324f553bf0",
"assets/assets/saver.png": "13b3a007782e9fd7f968e62c8ce13d3f",
"assets/assets/search.png": "e525929fcfd084554ce3c3488ed15f80",
"assets/assets/settings.png": "9c50914c137a22cbf36b25bb3e9d6213",
"assets/assets/sidepane.png": "9a5f408f631abc2ca3ab79fa7a481caf",
"assets/assets/snakeio.jpg": "7ee41a11684d6e7bdddb804848598f3a",
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
"index.html": "f7e7bb74a18c0163c801b3ae38b56bd4",
"/": "f7e7bb74a18c0163c801b3ae38b56bd4",
"main.dart.js": "e1a9f7ef3abc4d533ee4172bcf8b4b27",
"manifest.json": "20f594d91c40a3fc3a688621887264d2",
"README.md": "5c16d6b725d176afb8c7ee8a99d58c57",
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
