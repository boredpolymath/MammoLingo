const VERSION='mammogram-explainer-v36';
const ASSETS=['./','./index.html','./404.html','./privacy.html','./terms.html','./styles.css','./app.js','./legal.js','./manifest.webmanifest','./icon.svg','./mammolingo-lockup.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== VERSION).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if(response.ok) caches.open(VERSION).then(cache => cache.put(event.request, response.clone()));
    return response;
  }).catch(() => event.request.mode === 'navigate' ? caches.match('./index.html') : Response.error())));
});
