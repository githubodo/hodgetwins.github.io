const CACHE_NAME = 'tvmalaysia-v5'; // update version bila edit
const EXCLUDE_STREAM_KEYWORDS = [
  '.m3u8', '.mpd', '.ts', '.php?id=', '/stream', '/live/', 'dp.sooka.my', 'streamproxy'
];

// ✅ Auto-cache everything (except stream)
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll([
      '/', '/index.html', '/favicon.ico', '/js/anti_copy.js'
      // tak perlu list semua — nanti cache waktu runtime
    ]))
  );
});

// 🧹 Cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});

// ⚡ Smart cache everything except live stream
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = req.url;

  // ❌ Skip stream content
  if (
    req.method !== 'GET' ||
    EXCLUDE_STREAM_KEYWORDS.some(keyword => url.includes(keyword))
  ) {
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;

      return fetch(req).then(res => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, resClone));
        return res;
      }).catch(() => caches.match('/offline.html')); // optional fallback
    })
  );
});