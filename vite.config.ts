import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          post1: path.resolve(__dirname, 'electric-vs-gas-cars.html'),
          post2: path.resolve(__dirname, 'top-sports-cars-2026.html'),
          post3: path.resolve(__dirname, 'classic-car-restoration-guide.html'),
          post4: path.resolve(__dirname, 'best-suvs-for-families.html'),
          post5: path.resolve(__dirname, 'future-of-hydrogen-cars.html'),
          post6: path.resolve(__dirname, 'track-day-prep-for-beginners.html'),
          post7: path.resolve(__dirname, 'manual-vs-automatic-transmission.html'),
          post8: path.resolve(__dirname, 'car-maintenance-checklist.html'),
          post9: path.resolve(__dirname, 'supercars-vs-hypercars.html'),
          post10: path.resolve(__dirname, 'off-road-4x4-overlanding-guide.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
