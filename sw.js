// Service worker minimo: su unico proposito es cumplir el requisito tecnico
// que necesita el navegador para ofrecer "Agregar a pantalla de inicio".
// No cachea nada de forma agresiva a proposito, para que la app siempre
// muestre datos frescos de la planilla en vez de una version guardada vieja.

self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // Passthrough: deja que todas las peticiones vayan directo a la red.
});
