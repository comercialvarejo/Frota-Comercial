// Service worker mínimo: só permite instalar o app na tela inicial.
// Não guarda nada em cache, então os dados sempre vêm do servidor.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
