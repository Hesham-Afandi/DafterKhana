const C='daftar-khana-v1',A=['/index.html','/bg.jpg','/logo.png','/loader.png','/manifest.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const c=res.clone();caches.open(C).then(cache=>cache.put(e.request,c));return res}).catch(()=>caches.match('/index.html')))));