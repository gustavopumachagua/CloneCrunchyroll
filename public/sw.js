const CACHE_NAME = "anime-app-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/Logo.svg",
  "/manifest.json",
  "/manifest.webmanifest",
  "/perfil_logo.png",
  "/dist/assets/index.css",
  "/dist/assets/index.js",
  "/sw.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Intentando almacenar en caché los archivos...");
      return Promise.all(
        urlsToCache.map((url) =>
          cache.add(url).catch((error) => {
            console.error(`Error al almacenar ${url} en la caché:`, error);
          })
        )
      );
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log("Eliminando caché antigua:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.url.includes("api.jikan.moe")) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return fetch(request)
          .then((response) => {
            if (response.ok) {
              cache.put(request, response.clone());
            }
            return response;
          })
          .catch(() => {
            return cache.match(request);
          });
      })
    );
  } else {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request);
      })
    );
  }
});
