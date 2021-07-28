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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d008593fc1a34e79c37e21e178df01b7"
  },
  {
    "url": "anna.html",
    "revision": "9d320490193161514c46eac8d65a2774"
  },
  {
    "url": "assets/css/0.styles.d25e21d4.css",
    "revision": "4b54b396fd537dee65530c82306d13e2"
  },
  {
    "url": "assets/img/1.0edda4fa.jpg",
    "revision": "0edda4fa77717322ef650a5d689bf26d"
  },
  {
    "url": "assets/img/2.0500063e.jpg",
    "revision": "0500063e0c50af34d23f02bafb775500"
  },
  {
    "url": "assets/img/3.48b6d738.png",
    "revision": "48b6d73891d60580ece9e4f9170d57de"
  },
  {
    "url": "assets/img/4.ee42e5fa.jpg",
    "revision": "ee42e5fa7490af816407d9a1402ba097"
  },
  {
    "url": "assets/img/hint.32782980.jpg",
    "revision": "3278298048c93fa429ee50bc6e174ec1"
  },
  {
    "url": "assets/img/hint2.016ed6c9.jpg",
    "revision": "016ed6c9e652eb10275ab9eb044bc063"
  },
  {
    "url": "assets/img/image15.36cd4e95.png",
    "revision": "36cd4e955c42ede068540792fb7dc863"
  },
  {
    "url": "assets/img/image16.773f826e.png",
    "revision": "773f826e727d68f73c6e50e4a6e70ab5"
  },
  {
    "url": "assets/img/image6.72a2a914.png",
    "revision": "72a2a91463c67984e63a809870d1dbff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.66f5e789.js",
    "revision": "8ce68d8e951b2f7902240b89f4a2feed"
  },
  {
    "url": "assets/js/11.4714ffea.js",
    "revision": "8dfec2ffc91770d5ab01fc5d413b90f9"
  },
  {
    "url": "assets/js/12.4cbba138.js",
    "revision": "46753534a7ba4faf1ca5b4e6bf96f238"
  },
  {
    "url": "assets/js/13.4c975be5.js",
    "revision": "f78ffbb7279245dde7bba51201eb0f87"
  },
  {
    "url": "assets/js/14.40d27422.js",
    "revision": "2f93f9873e96513ef6fc7aa1495fd2b7"
  },
  {
    "url": "assets/js/15.01484cc2.js",
    "revision": "a0b517f9de6d45b7b8c05109271991c7"
  },
  {
    "url": "assets/js/16.096791dc.js",
    "revision": "80601e5099a5cf7499221ac32bb04470"
  },
  {
    "url": "assets/js/17.22a4175d.js",
    "revision": "280af24439c163f33c6003443b4e263f"
  },
  {
    "url": "assets/js/18.07fea249.js",
    "revision": "6a3c595cb6610c4c4b32deef4efa4aab"
  },
  {
    "url": "assets/js/19.37edee47.js",
    "revision": "267146aa79ffcf5f01769021737fceba"
  },
  {
    "url": "assets/js/2.5c6c86be.js",
    "revision": "db32c110a3c936247a6ef4100896ff87"
  },
  {
    "url": "assets/js/20.a79c3968.js",
    "revision": "b752c73a9eb1c7cc3905526ba706ea7c"
  },
  {
    "url": "assets/js/21.42e52586.js",
    "revision": "278f4f90fbb3e54a07e771017f2292d7"
  },
  {
    "url": "assets/js/22.d663116c.js",
    "revision": "8588a161f8fc722f6d6516b38703f7f8"
  },
  {
    "url": "assets/js/3.188a7812.js",
    "revision": "e03f579e46c777b92b634d3898ee436a"
  },
  {
    "url": "assets/js/4.84efff4f.js",
    "revision": "695a34a7f39d1af93bd908f8fe11461a"
  },
  {
    "url": "assets/js/5.8b65b554.js",
    "revision": "693404a12b8eceaba23891053ef84d06"
  },
  {
    "url": "assets/js/6.e0113abd.js",
    "revision": "ab183a8da404702202d1ebf689a225a7"
  },
  {
    "url": "assets/js/7.1a613d1d.js",
    "revision": "7a9a3d3298e82ec23393e91bd278277b"
  },
  {
    "url": "assets/js/8.961307ef.js",
    "revision": "8e02376b6324e313a741fe050ca0c24a"
  },
  {
    "url": "assets/js/9.5cf1895c.js",
    "revision": "6e822440302428207a18d13ef05caf8b"
  },
  {
    "url": "assets/js/app.fbf2b762.js",
    "revision": "d9a79a09ea6bab988260b33e27da1085"
  },
  {
    "url": "audio.html",
    "revision": "ef62a5525910c1fd14ea934c8c3cfeec"
  },
  {
    "url": "bio.html",
    "revision": "6fa9bc884441c95e1f09ca391e609c26"
  },
  {
    "url": "git.html",
    "revision": "e960cc44734513afb918fec4c2cb4a17"
  },
  {
    "url": "googleform.html",
    "revision": "b22b553af8175f22cb419985ddc1af49"
  },
  {
    "url": "hackinthenorth3.html",
    "revision": "9675bbee67086aae834854910046ff5b"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "hint.html",
    "revision": "4ab9f0cca1fe3097011c91f46512e49b"
  },
  {
    "url": "hint2.html",
    "revision": "049e7c491247c4784976dcd340a054ed"
  },
  {
    "url": "icon.png",
    "revision": "85be8e2f217d53c214b59553b9fd0e3f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "iiitahacks.html",
    "revision": "06a91a113ba658c4e0a1786bd205504d"
  },
  {
    "url": "index.html",
    "revision": "9e5ca0c817f0a384c475435285f99979"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "manjaroDeepin.html",
    "revision": "4d531dcb3419ea81d7c09e6719458e96"
  },
  {
    "url": "mljobs.html",
    "revision": "9b369bf882bc3dfdc2a5d6c8b4f8e2a3"
  },
  {
    "url": "NotFound.html",
    "revision": "c7771a887ce799141b111d309bc93170"
  },
  {
    "url": "nybles.html",
    "revision": "01940e11add7e61e86a068859b0db861"
  },
  {
    "url": "opencode.html",
    "revision": "5366c16a4f9a6019a85e6a0f59f2da27"
  },
  {
    "url": "pelican.html",
    "revision": "2cf176c3cabfc076c7bef3d7c199be9d"
  },
  {
    "url": "python.html",
    "revision": "a4c2f086b8170bfe5e41d4f038665ef2"
  },
  {
    "url": "pytorch.html",
    "revision": "13ba07d605283dee0297a4e3d54c49d4"
  },
  {
    "url": "tendermint.html",
    "revision": "77901d43324b9b03181f623929df4db0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
