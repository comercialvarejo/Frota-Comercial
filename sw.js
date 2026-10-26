// Service worker mínimo: só permite instalar o app na tela inicial.
// Não guarda nada em cache. Ao ativar, apaga caches antigos de versões anteriores.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (ks) { return Promise.all(ks.map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.clients.claim(); })
  );
});
self.addEventListener('fetch', function () {});
