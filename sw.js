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
    "url": "webpack-runtime-679b273be9966c5f5939.js"
  },
  {
    "url": "app-1bad22d7f5ef025a37e7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c716c4754ba067361457.js"
  },
  {
    "url": "index.html",
    "revision": "0164a64cef8cbd33dfd5ab3b34ed9aff"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3d01bd2f10882719b9dad2a595409573"
  },
  {
    "url": "component---src-pages-index-js.c72bcd6013a55e6bc170.css"
  },
  {
    "url": "component---src-pages-index-js-e4758ed1337052095cd3.js"
  },
  {
    "url": "0-302c9092dae4a39f3475.js"
  },
  {
    "url": "static/d/928/path---index-6a9-zITwjaplJZXMVDaPTUpg5gVs.json",
    "revision": "a374162daca2f87cfa2c67ba43905664"
  },
  {
    "url": "component---src-pages-404-js.ee79070b701835c85433.css"
  },
  {
    "url": "component---src-pages-404-js-d3fb99ee7511fb49b6f3.js"
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