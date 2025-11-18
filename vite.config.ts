import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Critical CSS inliner plugin for production builds
    {
      name: 'critical-css',
      generateBundle(options: any, bundle: any) {
        if (mode === 'production') {
          const criticalCssPath = path.resolve(__dirname, 'src/components/ui/critical.css');
          if (fs.existsSync(criticalCssPath)) {
            const criticalCss = fs.readFileSync(criticalCssPath, 'utf-8');
            // Read the HTML file
            const htmlPath = path.resolve(__dirname, 'index.html');
            let htmlContent = fs.readFileSync(htmlPath, 'utf-8');

            // Find the placeholder style block and replace it with critical CSS
            const criticalStylePlaceholder = /<!-- Critical CSS for faster rendering -->[\s\S]*?<\/style>/;
            const inlinedCriticalCss = `<style>${criticalCss}</style>`;

            htmlContent = htmlContent.replace(criticalStylePlaceholder, inlinedCriticalCss);

            // Update the bundle with the modified HTML
            const htmlAsset = bundle['index.html'];
            if (htmlAsset && htmlAsset.type === 'asset') {
              htmlAsset.source = htmlContent;
            }
          }
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // React ecosystem - core, keep small
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core';
            }
            if (id.includes('react-router-dom')) {
              return 'react-router';
            }
            // Animation library - defer completely
            if (id.includes('framer-motion')) {
              return 'animation';
            }
            // Icons - very lazy load
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // Charts - only load when needed
            if (id.includes('recharts')) {
              return 'charts';
            }
            // Forms - defer
            if (id.includes('react-hook-form') || id.includes('zod')) {
              return 'forms';
            }
            // Query management - small, keep separate
            if (id.includes('@tanstack/react-query')) {
              return 'query';
            }
            // Supabase - defer as much as possible
            if (id.includes('@supabase')) {
              return 'db';
            }
            // UI components - split by usage frequency
            if (id.includes('@radix-ui')) {
              return 'ui-components';
            }
            // All other vendor code
            return 'vendor';
          }
          // Application chunks - split by priority
          if (id.includes('src/pages/services/')) {
            return 'service-pages';
          }
          if (id.includes('src/pages/') && !id.includes('Index') && !id.includes('services')) {
            return 'other-pages';
          }
          if (id.includes('src/components/ui/')) {
            return 'ui';
          }
          if (id.includes('src/components/') &&
              !id.includes('Hero') &&
              !id.includes('Navbar') &&
              !id.includes('Footer')) {
            return 'components';
          }
        },
      },
    },
    // Enhanced minification and optimization
    minify: 'esbuild',
    cssMinify: 'esbuild',
    drop: ['console', 'debugger'],
    sourcemap: false,
    target: 'esnext',
    cssCodeSplit: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    // Optimize asset handling
    assetsInlineLimit: 4096, // Inline small files
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
