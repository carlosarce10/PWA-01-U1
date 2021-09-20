console.log("Hola desde js")

if (navigator.serviceWorker) {
    console.log("Sí entró")
    navigator.serviceWorker.register("/sw.js")
} else
    console.log("No compatible")