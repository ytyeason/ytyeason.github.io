self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.js',
       '/style.css',
       '/images/fox1.jpg',
       '/images/fox2.jpg',
       '/images/fox3.jpg',
       '/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
