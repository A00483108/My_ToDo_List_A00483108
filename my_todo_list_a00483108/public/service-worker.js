// This is a simple example of a service worker for caching assets
const CACHE_NAME = 'my-todo-list-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/vite.svg',
    '/static/js/bundle.js', // Adjust based on your build process
    '/static/css/main.css', // Adjust based on your build process
];

// Installing the service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetching resources from the cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Activating the service worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
