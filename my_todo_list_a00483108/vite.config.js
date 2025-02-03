import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePWA from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',  // Automatically updates the service worker
            manifest: {
                name: 'My Todo App',
                short_name: 'Todo App',
                description: 'A simple Todo App',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: '/icons/todo-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/icons/todo-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: /\/.*/,
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'default-cache',
                            expiration: {
                                maxEntries: 50,
                                maxAgeSeconds: 86400,  // 24 hours
                            },
                        },
                    },
                ],
            },
            devOptions: {
                enabled: true, // Enable PWA in development mode
                type: 'module',
            },
        }),
    ],
});
