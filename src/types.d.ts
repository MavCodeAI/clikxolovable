// Global Type Definitions for ClikXo Studio

// Extend Window interface for custom properties
declare global {
  interface Window {
    // Add any window properties your app needs
    __REDUX_DEVTOOLS_EXTENSION__?: any;
    __REACT_QUERY_DEHYDRATE__?: boolean;
  }
}

// Environment Variables
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly VITE_SUPABASE_URL: string;
    readonly VITE_SUPABASE_ANON_KEY: string;
    readonly VITE_SUPABASE_PROJECT_ID: string;
  }
}

// Component Props Extensions
declare module 'react' {
  interface ComponentProps {
    children?: ReactNode;
  }
}

// CSS Module declarations (if using CSS modules)
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Image imports
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const ReactComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export { ReactComponent };
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

export {};
