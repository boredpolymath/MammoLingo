const VERSION='mammogram-explainer-v32';
const ASSETS=['./','./index.html','./404.html','./privacy.html','./terms.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg','./mammolingo-lockup.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== VERSION).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => { if(event.request.method !== 'GET') return; event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => { const copy=response.clone(); if(new URL(event.request.url).origin===location.origin) caches.open(VERSION).then(cache => cache.put(event.request,copy)); return response; }).catch(() => caches.match('./index.html')))); });
