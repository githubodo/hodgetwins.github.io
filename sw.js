importScripts('/config.js'); // Import token safely

// Domain yang Service Worker akan tangkap
const SOOKA_HOST = "sooka.my";

// Event intercept setiap fetch
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);

    // Kalau request bukan pergi ke domain sooka → jangan kacau
    if (!url.hostname.includes(SOOKA_HOST)) {
        return;
    }

    // Build request baru dengan Authorization injected
    const modifiedHeaders = new Headers(event.request.headers);
    modifiedHeaders.set("Authorization", "Bearer " + self.SOOKA_TOKEN);

    const newRequest = new Request(event.request, {
        headers: modifiedHeaders,
        mode: "cors",
        credentials: "omit"
    });

    event.respondWith(fetch(newRequest));
});
