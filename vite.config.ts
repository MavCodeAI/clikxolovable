import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
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
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            // Animation library
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
            // Forms and validation
            if (id.includes('react-hook-form') || id.includes('zod') || id.includes('@hookform/resolvers')) {
              return 'form-validation';
            }
            // Icons
            if (id.includes('lucide-react')) {
              return 'icons';
            }
            // Charts and data visualization
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
            // Supabase
            if (id.includes('@supabase')) {
              return 'supabase';
            }
            // Date utilities
            if (id.includes('date-fns')) {
              return 'date-utils';
            }
            // Everything else
            return 'vendor';
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
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
