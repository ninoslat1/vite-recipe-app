if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const a=e=>n(e,s),f={module:{uri:s},exports:o,require:a};i[s]=Promise.all(c.map((e=>f[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-MowIUsEY.js",revision:null},{url:"index.html",revision:"004545df4d21e8d06ec062588e24cb94"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon-16x16.png",revision:"9a18771ccc7fd90a1c4940d0a91c1603"},{url:"favicon-32x32.png",revision:"1899934b1cf269dad0007bca8c4de90f"},{url:"apple-touch-icon.png",revision:"38b8af5168af614e3b6b00ccb3bb0038"},{url:"pwa-144x144.png",revision:"8e12b198473fea126e89cf6fcfcea71e"},{url:"pwa-192x192.png",revision:"ca42db7a67e6eb03499b1137ba9e5b21"},{url:"pwa-512x512.png",revision:"f17c54fe3b6c2f1c31842187bb8e2fea"},{url:"pwa-maskable-192x192.png",revision:"17d6ac146525437656eea4cdf8e6aec4"},{url:"pwa-maskable-512x512.png",revision:"eab5e7a8feb31e946e9fe7b3afc8d282"},{url:"manifest.webmanifest",revision:"a797e8cbc7c0890b1f1236e22c2feddd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
