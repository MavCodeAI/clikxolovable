import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height,
  priority = false,
  sizes,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate optimized URL for Unsplash images with better compression
  const getOptimizedUrl = (url: string, w?: number, h?: number) => {
    if (url.includes('unsplash.com')) {
      try {
        const u = new URL(url);
        if (w) u.searchParams.set('w', Math.min(w, 1200).toString()); // Cap max width for performance
        if (h) u.searchParams.set('h', Math.min(h, 1200).toString());
        u.searchParams.set('q', '75'); // Reduced quality for better compression
        u.searchParams.set('fm', 'webp');
        u.searchParams.set('fit', 'crop');
        u.searchParams.set('auto', 'format');
        u.searchParams.set('cs', 'tinysrgb'); // Better compression
        return u.toString();
      } catch {
        const params = new URLSearchParams();
        if (w) params.set('w', Math.min(w, 1200).toString());
        if (h) params.set('h', Math.min(h, 1200).toString());
        params.set('q', '75');
        params.set('fm', 'webp');
        params.set('fit', 'crop');
        params.set('auto', 'format');
        params.set('cs', 'tinysrgb');
        const sep = url.includes('?') ? '&' : '?';
        return `${url}${sep}${params.toString()}`;
      }
    }
    return url;
  };

  const optimizedSrc = getOptimizedUrl(src, width, height);

  const defaultSizes = sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  const srcSet = (() => {
    if (!src.includes('unsplash.com')) return undefined;
    const candidates = [320, 480, 640, 768, 1024, 1280];
    return candidates
      .map(w => `${getOptimizedUrl(src, w, height)} ${w}w`)
      .join(', ');
  })();

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)} style={{ contentVisibility: 'auto' }}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-muted" />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        sizes={srcSet ? defaultSizes : undefined}
        srcSet={srcSet}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
