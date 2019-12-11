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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/main-styles.css",
    "revision": "6c6ce3f9bf687f258e6d33d6235b0ad4"
  },
  {
    "url": "fonts/lato-v16-latin-700.eot",
    "revision": "f9203469f750b4284c62aa49f9496cb0"
  },
  {
    "url": "fonts/lato-v16-latin-700.svg",
    "revision": "596223f7bff9598c852e949e9d2b1aa0"
  },
  {
    "url": "fonts/lato-v16-latin-700.ttf",
    "revision": "fe7d53e4cac8f5b946a9e25f004efc8c"
  },
  {
    "url": "fonts/lato-v16-latin-700.woff",
    "revision": "874b8e7bc7e8d1507b50f56bc6c9b536"
  },
  {
    "url": "fonts/lato-v16-latin-700.woff2",
    "revision": "1efbd38aa76ddae2580fedf378276333"
  },
  {
    "url": "fonts/lato-v16-latin-700italic.eot",
    "revision": "2121d6d839bb564bfcb3436cf0479404"
  },
  {
    "url": "fonts/lato-v16-latin-700italic.svg",
    "revision": "a1a6510b0398db3f6bd04abd3c2dfcb8"
  },
  {
    "url": "fonts/lato-v16-latin-700italic.ttf",
    "revision": "46f216822d85521ec99c2a3e165dcddb"
  },
  {
    "url": "fonts/lato-v16-latin-700italic.woff",
    "revision": "9e9a574493d4cd2fa62380f376461941"
  },
  {
    "url": "fonts/lato-v16-latin-700italic.woff2",
    "revision": "5ce0990b59e1ed40e05327f625a24c4a"
  },
  {
    "url": "fonts/lato-v16-latin-900.eot",
    "revision": "d8f0e90eb7c30f7f7780d6136080fb61"
  },
  {
    "url": "fonts/lato-v16-latin-900.svg",
    "revision": "7dfa12661560a957c573a5eff295e819"
  },
  {
    "url": "fonts/lato-v16-latin-900.ttf",
    "revision": "e7d596b2432d63fedce4e621b130d72f"
  },
  {
    "url": "fonts/lato-v16-latin-900.woff",
    "revision": "a82ff6ac9208656f9a21a65dfacbcae3"
  },
  {
    "url": "fonts/lato-v16-latin-900.woff2",
    "revision": "947e87c53b5765bfc8982613ccd789e9"
  },
  {
    "url": "fonts/lato-v16-latin-regular.eot",
    "revision": "056a373d808ada4f12a2d6538e88823c"
  },
  {
    "url": "fonts/lato-v16-latin-regular.svg",
    "revision": "9087e4a6aceecc9b2914823044951a3a"
  },
  {
    "url": "fonts/lato-v16-latin-regular.ttf",
    "revision": "d1d5e30aa8bb081cad8f409f27861672"
  },
  {
    "url": "fonts/lato-v16-latin-regular.woff",
    "revision": "b8ee546acd6cc0c49f42ad3d48ef244f"
  },
  {
    "url": "fonts/lato-v16-latin-regular.woff2",
    "revision": "b4d2c4c39853ee244272c04999b230ba"
  },
  {
    "url": "gulpfile.js",
    "revision": "ec9e6448c92b30122115797120ba5f10"
  },
  {
    "url": "images/slides/electricity-token-chart.jpg",
    "revision": "1b9cf729f578d793f10a996751c73310"
  },
  {
    "url": "images/slides/hela-budget-chart.jpg",
    "revision": "f04b8fc6dcd0fb696b4a8f1728b8bfab"
  },
  {
    "url": "images/static/contacts-graphic.svg",
    "revision": "a66be542e59e1e84316a6f966c89a5ef"
  },
  {
    "url": "images/static/costs-icon.svg",
    "revision": "e4b6873fd664ca2ad3c1fb0f655e8cf4"
  },
  {
    "url": "images/static/curve-bottom.svg",
    "revision": "1c2e886d67e6e03f7f223f2c60bf4baa"
  },
  {
    "url": "images/static/decision-icon.svg",
    "revision": "76b38aa314effd244b2d21dfe4ecbe22"
  },
  {
    "url": "images/static/email-icon.svg",
    "revision": "fe7bf1f03d1a5df02f1c9ac1ae6fd50e"
  },
  {
    "url": "images/static/general-icons/email-icon.svg",
    "revision": "fe7bf1f03d1a5df02f1c9ac1ae6fd50e"
  },
  {
    "url": "images/static/general-icons/left-arrow-icon.svg",
    "revision": "3248c2c79fa0de5796eb1bb700394f77"
  },
  {
    "url": "images/static/general-icons/linkedin-icon.svg",
    "revision": "9f12c01cd4b9314f6e371d5a243f364e"
  },
  {
    "url": "images/static/general-icons/phone-icon.svg",
    "revision": "4a7c22803f65a53e6f71f4e0d2b18083"
  },
  {
    "url": "images/static/general-icons/right-arrow-icon.svg",
    "revision": "16c77ef884161efc625e361ddae56c2d"
  },
  {
    "url": "images/static/general-icons/twitter-icon.svg",
    "revision": "971883f7139fe1260dcdafcd2570af6d"
  },
  {
    "url": "images/static/introduction-graphic.svg",
    "revision": "3ee73b196f04fec2f419cc685426f349"
  },
  {
    "url": "images/static/maintenance-graphic.svg",
    "revision": "ff6fffb40eb2d4f9b3158445434ba723"
  },
  {
    "url": "images/static/phone-icon.svg",
    "revision": "4a7c22803f65a53e6f71f4e0d2b18083"
  },
  {
    "url": "images/static/site-icons/safari-pinned-tab.svg",
    "revision": "5b5204c0d6a8d1320470394bdc01733a"
  },
  {
    "url": "images/static/TDF-logo.svg",
    "revision": "4f07b37400d94c6c0f3530e94253cbe5"
  },
  {
    "url": "images/static/twitter-icon.svg",
    "revision": "971883f7139fe1260dcdafcd2570af6d"
  },
  {
    "url": "images/static/understand-icon.svg",
    "revision": "372076e2a3cfcab30e33f4c6f086debc"
  },
  {
    "url": "index.html",
    "revision": "66310f8f1364303327d191337de55a3c"
  },
  {
    "url": "js/all-js-min.js",
    "revision": "23467fcbd2271bb9e51ad24dc2f52aa6"
  },
  {
    "url": "maintenance-mode.html",
    "revision": "fe295289f076ec0a9171c351e3ca9571"
  },
  {
    "url": "manifest.json",
    "revision": "2778ca5af66ba95ba76cfff13a5ac6e5"
  },
  {
    "url": "package-lock.json",
    "revision": "18ea9097b1a3938609ad89d123cc235c"
  },
  {
    "url": "package.json",
    "revision": "c1ff6a8e7effae214bc8af2c4ec19503"
  },
  {
    "url": "particlesjs-config-1.json",
    "revision": "0e2da7f08b61140bd2e11dd82008712c"
  },
  {
    "url": "src/fonts/lato-v16-latin-700.eot",
    "revision": "f9203469f750b4284c62aa49f9496cb0"
  },
  {
    "url": "src/fonts/lato-v16-latin-700.svg",
    "revision": "596223f7bff9598c852e949e9d2b1aa0"
  },
  {
    "url": "src/fonts/lato-v16-latin-700.ttf",
    "revision": "fe7d53e4cac8f5b946a9e25f004efc8c"
  },
  {
    "url": "src/fonts/lato-v16-latin-700.woff",
    "revision": "874b8e7bc7e8d1507b50f56bc6c9b536"
  },
  {
    "url": "src/fonts/lato-v16-latin-700.woff2",
    "revision": "1efbd38aa76ddae2580fedf378276333"
  },
  {
    "url": "src/fonts/lato-v16-latin-700italic.eot",
    "revision": "2121d6d839bb564bfcb3436cf0479404"
  },
  {
    "url": "src/fonts/lato-v16-latin-700italic.svg",
    "revision": "a1a6510b0398db3f6bd04abd3c2dfcb8"
  },
  {
    "url": "src/fonts/lato-v16-latin-700italic.ttf",
    "revision": "46f216822d85521ec99c2a3e165dcddb"
  },
  {
    "url": "src/fonts/lato-v16-latin-700italic.woff",
    "revision": "9e9a574493d4cd2fa62380f376461941"
  },
  {
    "url": "src/fonts/lato-v16-latin-700italic.woff2",
    "revision": "5ce0990b59e1ed40e05327f625a24c4a"
  },
  {
    "url": "src/fonts/lato-v16-latin-900.eot",
    "revision": "d8f0e90eb7c30f7f7780d6136080fb61"
  },
  {
    "url": "src/fonts/lato-v16-latin-900.svg",
    "revision": "7dfa12661560a957c573a5eff295e819"
  },
  {
    "url": "src/fonts/lato-v16-latin-900.ttf",
    "revision": "e7d596b2432d63fedce4e621b130d72f"
  },
  {
    "url": "src/fonts/lato-v16-latin-900.woff",
    "revision": "a82ff6ac9208656f9a21a65dfacbcae3"
  },
  {
    "url": "src/fonts/lato-v16-latin-900.woff2",
    "revision": "947e87c53b5765bfc8982613ccd789e9"
  },
  {
    "url": "src/fonts/lato-v16-latin-regular.eot",
    "revision": "056a373d808ada4f12a2d6538e88823c"
  },
  {
    "url": "src/fonts/lato-v16-latin-regular.svg",
    "revision": "9087e4a6aceecc9b2914823044951a3a"
  },
  {
    "url": "src/fonts/lato-v16-latin-regular.ttf",
    "revision": "d1d5e30aa8bb081cad8f409f27861672"
  },
  {
    "url": "src/fonts/lato-v16-latin-regular.woff",
    "revision": "b8ee546acd6cc0c49f42ad3d48ef244f"
  },
  {
    "url": "src/fonts/lato-v16-latin-regular.woff2",
    "revision": "b4d2c4c39853ee244272c04999b230ba"
  },
  {
    "url": "src/images/slides/electricity-token-chart.jpg",
    "revision": "b8204e7a7d32162757119c81ef916e06"
  },
  {
    "url": "src/images/slides/hela-budget-chart.jpg",
    "revision": "6555b6d698608110094ce6d696251df4"
  },
  {
    "url": "src/images/static/contacts-graphic.svg",
    "revision": "a66be542e59e1e84316a6f966c89a5ef"
  },
  {
    "url": "src/images/static/costs-icon.svg",
    "revision": "e4b6873fd664ca2ad3c1fb0f655e8cf4"
  },
  {
    "url": "src/images/static/curve-bottom.svg",
    "revision": "1c2e886d67e6e03f7f223f2c60bf4baa"
  },
  {
    "url": "src/images/static/decision-icon.svg",
    "revision": "76b38aa314effd244b2d21dfe4ecbe22"
  },
  {
    "url": "src/images/static/general-icons/email-icon.svg",
    "revision": "fe7bf1f03d1a5df02f1c9ac1ae6fd50e"
  },
  {
    "url": "src/images/static/general-icons/left-arrow-icon.svg",
    "revision": "3248c2c79fa0de5796eb1bb700394f77"
  },
  {
    "url": "src/images/static/general-icons/linkedin-icon.svg",
    "revision": "9f12c01cd4b9314f6e371d5a243f364e"
  },
  {
    "url": "src/images/static/general-icons/phone-icon.svg",
    "revision": "4a7c22803f65a53e6f71f4e0d2b18083"
  },
  {
    "url": "src/images/static/general-icons/right-arrow-icon.svg",
    "revision": "16c77ef884161efc625e361ddae56c2d"
  },
  {
    "url": "src/images/static/general-icons/twitter-icon.svg",
    "revision": "971883f7139fe1260dcdafcd2570af6d"
  },
  {
    "url": "src/images/static/introduction-graphic.svg",
    "revision": "3ee73b196f04fec2f419cc685426f349"
  },
  {
    "url": "src/images/static/maintenance-graphic.svg",
    "revision": "ff6fffb40eb2d4f9b3158445434ba723"
  },
  {
    "url": "src/images/static/site-icons/safari-pinned-tab.svg",
    "revision": "5b5204c0d6a8d1320470394bdc01733a"
  },
  {
    "url": "src/images/static/TDF-logo.svg",
    "revision": "4f07b37400d94c6c0f3530e94253cbe5"
  },
  {
    "url": "src/images/static/understand-icon.svg",
    "revision": "372076e2a3cfcab30e33f4c6f086debc"
  },
  {
    "url": "src/index.html",
    "revision": "22d38f9e1459e4ccd22abe1d8b2ad510"
  },
  {
    "url": "src/js/active-state.js",
    "revision": "c3d1fb9d91a4e76c03e7f1e5b790b981"
  },
  {
    "url": "src/js/glider.js",
    "revision": "011d8e3bdbc49f56aeea885620f177d1"
  },
  {
    "url": "src/js/particles.js",
    "revision": "beb24a9637d76d7eba7d1a93582844bb"
  },
  {
    "url": "src/js/ScrollMagic.js",
    "revision": "a128367ccff11da7bb34e40834b03e93"
  },
  {
    "url": "src/js/scrollMagic/debug.addIndicators.js",
    "revision": "dca465208bd319b871b77cc862fc95b8"
  },
  {
    "url": "src/js/scrollMagic/ScrollMagic.js",
    "revision": "e7300291d1f4fd9118330d42875c0630"
  },
  {
    "url": "src/js/scrollMagic/TweenMax.min.js",
    "revision": "e6215c2a4e1cbb3c67bc41dff7105e45"
  },
  {
    "url": "src/js/smooth-scroll.polyfills.js",
    "revision": "8db72a95beb24caeb6e3054c81c25896"
  },
  {
    "url": "src/js/sticky-nav.js",
    "revision": "53656da4ee12a2492a190fa765b22e9d"
  },
  {
    "url": "src/style-guide.html",
    "revision": "0c17ba8bc6381ff2a28300f89f920bb7"
  },
  {
    "url": "src/terms-and-privacy.html",
    "revision": "15c70093ad1aab4ba8e775277efc70bb"
  },
  {
    "url": "src/under-maintenance.html",
    "revision": "055f7620ea1fe9ebd183baa01412d0ae"
  },
  {
    "url": "style-guide.html",
    "revision": "c763b8b34f4012fb58ec4af9ad93514b"
  },
  {
    "url": "terms-and-privacy.html",
    "revision": "5e6c725a7646dbe2299b3dab292fb7a1"
  },
  {
    "url": "under-maintenance.html",
    "revision": "51367c54f38dae03bd59f025d033602c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
