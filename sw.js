const CACHE_NAME = 'tvmalaysia-v3'; // update version bila ada perubahan
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/js/anti_copy.js',
];

// Install: cache essential files
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
});

// Activate: delete old versions
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});

// Fetch: smart runtime cache + exclude live stream
self.addEventListener('fetch', event => {
  const req = event.request;

  // ❌ Skip if not GET or matches stream/video patterns
  const url = req.url;
  if (
    req.method !== 'GET' ||
    url.endsWith('.m3u8') ||
    url.endsWith('.mpd') ||
    url.endsWith('.ts') ||
    url.includes('/stream') ||
    url.includes('.php?id=') ||
    url.includes('/live/') ||
    url.includes('dp.sooka.my') ||
    url.includes('tvmalaysia.website') // kalau guna proxy video
  ) {
    return; // bypass caching
  }

  event.respondWith(
    caches.match(req).then(cachedRes => {
      if (cachedRes) return cachedRes;

      return fetch(req).then(fetchRes => {
        const resClone = fetchRes.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, resClone));
        return fetchRes;
      }).catch(() => {
        return caches.match('/offline.html'); // optional fallback
      });
    })
  );
});
