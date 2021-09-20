/* console.log("SW hola mundo") */

self.addEventListener('install', (event)=> {
    console.log('SW: instalado')
})

self.addEventListener('activate', (event) => {
    console.log('SW: activo y controlando la app')
})

self.addEventListener('fetch', (event) => {
    console.log(event)
    if(event.request.url.includes('.jpeg')) {
        let newResp = fetch('/images/perro.jpeg');
        console.log('eres una imagen');
        event.respondWith(newResp);
    }

    if(event.request.url.includes('page.css')) {
        let newResponse = new Response(`body{
            background-color:black !important;
            color: red;
        }`,{
            headers: {
                'Content-Type':'text/css'
            }
        });
        event.respondWith(newResponse)
    }
})