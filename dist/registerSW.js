if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/vite-recipe-app/sw.js', { scope: '/vite-recipe-app/' })})}