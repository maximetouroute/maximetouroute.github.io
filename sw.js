/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-2c81942551343b868b92.js"
  },
  {
    "url": "app-03fd6f19ef64ea6b21a7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9b9214a4bb96b487f9cf.js"
  },
  {
    "url": "index.html",
    "revision": "0c50af42080d48b0a4219b7616effa89"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6d3f2f38d64c869c9ccf70b2061a3e95"
  },
  {
    "url": "component---src-pages-index-js.8726514d27e96dd7a268.css"
  },
  {
    "url": "component---src-pages-index-js-50c46838e0b0218b67e0.js"
  },
  {
    "url": "0-639372c7f09faf73c439.js"
  },
  {
    "url": "static/d/928/path---index-6a9-zITwjaplJZXMVDaPTUpg5gVs.json",
    "revision": "a374162daca2f87cfa2c67ba43905664"
  },
  {
    "url": "component---src-pages-404-js.8e406f1a1fbb064c3f5b.css"
  },
  {
    "url": "component---src-pages-404-js-46d1aabb0c9eb5032832.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "1232d628d6982c99cf8053cba97bdb83"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});