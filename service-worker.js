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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a25fee6c4608195ed294c67529d70d31"
  },
  {
    "url": "anna.html",
    "revision": "08ef0bbb114d1b8592555db8f5649519"
  },
  {
    "url": "assets/css/19.styles.7c9c158c.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/20.styles.05e3f966.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.1f087ce8.css",
    "revision": "aee98584e5c7ce28a97767fc74b964df"
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
    "url": "assets/js/0.566c6cad.js",
    "revision": "11289a5d8273f6e351a93e5e36fbbb82"
  },
  {
    "url": "assets/js/1.4f9833e7.js",
    "revision": "c55657a09dc735eaed4feae08dda14ff"
  },
  {
    "url": "assets/js/10.bd811473.js",
    "revision": "d5858aedb4baf5d080a9dea21fea8793"
  },
  {
    "url": "assets/js/11.2800f854.js",
    "revision": "49651524136c5035c48ee7dc5d7142bc"
  },
  {
    "url": "assets/js/12.7abb9f1b.js",
    "revision": "36396177e2a0fe848a69d1a66f58b24d"
  },
  {
    "url": "assets/js/13.f540a99a.js",
    "revision": "b52a7c5d62b4c28008082296a96adcab"
  },
  {
    "url": "assets/js/14.ce939aa5.js",
    "revision": "c54be7a4c5c679665009c27a37004d8a"
  },
  {
    "url": "assets/js/15.639a51b3.js",
    "revision": "811bc61c11445a078d41c2806d3053b4"
  },
  {
    "url": "assets/js/16.93d6cf79.js",
    "revision": "e0b35e42f7c56530b30ce9234689bbec"
  },
  {
    "url": "assets/js/17.3228254d.js",
    "revision": "b6cbdd5293bc45a421bbe6cf7062c1d9"
  },
  {
    "url": "assets/js/18.eeab8a16.js",
    "revision": "d56a3dece8e03e6260702eb5725f72e3"
  },
  {
    "url": "assets/js/19.7c9c158c.js",
    "revision": "0b95e81a9957673e68cd5c76a7e54603"
  },
  {
    "url": "assets/js/2.4abb2d0f.js",
    "revision": "4fb2a2f52a9673e4d6e378e74041efc2"
  },
  {
    "url": "assets/js/20.05e3f966.js",
    "revision": "4873179e1c5d26ab3cf9c7aaff8292fb"
  },
  {
    "url": "assets/js/3.66e38d50.js",
    "revision": "69aa9037aad90997296202e3b19a9639"
  },
  {
    "url": "assets/js/4.69202341.js",
    "revision": "7eb6c3d1151cb43ccff796d101065f5c"
  },
  {
    "url": "assets/js/5.405c165b.js",
    "revision": "7fe47519e1b26942b714363ba744fdff"
  },
  {
    "url": "assets/js/6.ab16275a.js",
    "revision": "f2543cdae1ed345d01dc7cd3a9bfb0b8"
  },
  {
    "url": "assets/js/7.5a2cbb12.js",
    "revision": "947091adc06d6bd4774103ab612c38e4"
  },
  {
    "url": "assets/js/8.e2d944f0.js",
    "revision": "f9adb18305ef5d2a8e8516a0850da15f"
  },
  {
    "url": "assets/js/9.2c52fcce.js",
    "revision": "57e032c8909733daf6d4f4b16702fdf1"
  },
  {
    "url": "assets/js/app.1f087ce8.js",
    "revision": "e01286cd5e4a7e926bb36d8a426d7402"
  },
  {
    "url": "audio.html",
    "revision": "79257fbeea60705573ec786d959f2649"
  },
  {
    "url": "bio.html",
    "revision": "4d4e773ca8a255c5b2941ce67d6c1739"
  },
  {
    "url": "git.html",
    "revision": "500201ccdf343ca2d1c23e9538af370e"
  },
  {
    "url": "googleform.html",
    "revision": "9c6bf12ac753e542c33b12f6068ff083"
  },
  {
    "url": "hackinthenorth3.html",
    "revision": "2ba9a6c0cfc77a852421f676f4e8a390"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "hint.html",
    "revision": "de66b2d2ea69ec936bdf4d31ef402051"
  },
  {
    "url": "hint2.html",
    "revision": "f59e2db38aea25f81053ddca2e559f63"
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
    "revision": "55c1b2ee6e4eebc04fa47edaf7fff29b"
  },
  {
    "url": "index.html",
    "revision": "0bb5effbd635c431af7ecd9634462cad"
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
    "revision": "446907010004dea14e565f5952992ffb"
  },
  {
    "url": "mljobs.html",
    "revision": "50fb5d549bb202309068a62d922f08d3"
  },
  {
    "url": "NotFound.html",
    "revision": "d6823de280cbb73d0e8050032e1dc625"
  },
  {
    "url": "nybles.html",
    "revision": "dda2d06f7da22ef6ece90fde6709a2c8"
  },
  {
    "url": "opencode.html",
    "revision": "788ba2cb8f40eda9d646cb774d2a8098"
  },
  {
    "url": "pelican.html",
    "revision": "a64be08557fc5398ab9ac095462ec393"
  },
  {
    "url": "python.html",
    "revision": "dd569b9750729376116bc3f2d3c76e5c"
  },
  {
    "url": "pytorch.html",
    "revision": "fbe5dd126b464c7c896da831524e4d22"
  },
  {
    "url": "tendermint.html",
    "revision": "f2e18d9b822a39ed91f8be3e0385b508"
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
