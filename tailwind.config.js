import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

var require = createRequire(import.meta.url);
var module = { exports: {} };

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
});
