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
            // React ecosystem - defer loading
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            // Animation library - load after main content
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            // UI components (split larger packages)
            if (id.includes('@radix-ui/react-dialog') || id.includes('@radix-ui/react-dropdown-menu')) {
              return 'ui-dialog';
            }
            if (id.includes('@radix-ui/react-accordion') || id.includes('@radix-ui/react-tabs')) {
              return 'ui-layout';
            }
            if (id.includes('@radix-ui')) {
              return 'ui-components';
            }
            // Forms and validation - defer
            if (id.includes('react-hook-form') || id.includes('zod') || id.includes('@hookform/resolvers')) {
              return 'form-validation';
            }
            // Icons - lazy load
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // Charts and data visualization - very lazy
            if (id.includes('recharts')) {
              return 'charts';
            }
            // Query management
            if (id.includes('@tanstack/react-query')) {
              return 'query';
            }
            // Theme management
            if (id.includes('next-themes')) {
              return 'theme';
            }
            // Supabase - defer database operations
            if (id.includes('@supabase')) {
              return 'supabase';
            }
            // Everything else goes to vendor
            return 'vendor';
          }
          // Split large app chunks to prevent main thread blocking
          if (id.includes('src/pages/') && !id.includes('Index')) {
            return 'pages';
          }
          if (id.includes('src/components/') && !id.includes('Hero') && !id.includes('Navbar')) {
            return 'components';
          }
        },
      },
    },
    minify: 'esbuild',
    drop: ['console', 'debugger'],
    sourcemap: false,
    target: 'esnext',
    cssCodeSplit: true,
    reportCompressedSize: true,
    // Optimize chunk size limits for better caching
    chunkSizeWarningLimit: 600,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
