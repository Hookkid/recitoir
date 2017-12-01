import { precacheStaticAssets, removeUnusedCaches, ALL_CACHES, ALL_CACHES_LIST } from './sw/caches';

self.addEventListener('install', event => {
  console.log('install');
});

self.addEventListener('activate', event => {
  event.waitUntil(
    removeUnusedCaches(ALL_CACHES_LIST));
});

  
self.addEventListener('push', event => {
  console.log('push');
});