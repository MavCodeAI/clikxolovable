import React, { useState, useRef, useEffect, useCallback, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton-loader';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  placeholder?: string;
  fallbackSrc?: string;
  className?: string;
  lazy?: boolean;
  priority?: boolean;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
  blurDataURL?: string;
}

// WebP support detection
const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('webp') > 0;
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  placeholder,
  fallbackSrc,
  className,
  lazy = true,
  priority = false,
  quality = 80,
  onLoad,
  onError,
  blurDataURL,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(fallbackSrc || src);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized source URL with quality parameter
  const getOptimizedSrc = useCallback((originalSrc: string, isWebPCheck = false): string => {
    const url = new URL(originalSrc, window.location.origin);

    // Add quality parameter
    if (quality < 100) {
      url.searchParams.set('q', quality.toString());
    }

    // Add format parameter if supported and enabled
    if (supportsWebP() && !isWebPCheck) {
      url.searchParams.set('fm', 'webp');
    }

    return url.toString();
  }, [quality]);

  useEffect(() => {
    if (priority && imgRef.current) {
      // Preload critical images
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = getOptimizedSrc(src);
      document.head.appendChild(preloadLink);

      // Set src after preload request
      setTimeout(() => {
        setCurrentSrc(getOptimizedSrc(src));
      }, 10);
    }
  }, [src, priority, getOptimizedSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);

    // Try fallback source if available
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    }

    onError?.();
  };

  if (hasError && !fallbackSrc) {
    return (
      <div
        className={cn(
          "bg-muted flex items-center justify-center text-muted-foreground text-sm",
          className
        )}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
        {...props}
      >
        <div className="text-center p-4">
          <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
          <p>Image failed to load</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Placeholder/Blur effect */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-muted"
          style={{
            backgroundImage: blurDataURL ? `url(${blurDataURL})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: blurDataURL ? 'blur(10px)' : undefined,
          }}
        />
      )}

      {/* Skeleton loader for better UX */}
      {!isLoaded && !blurDataURL && (
        <div className="absolute inset-2">
          <Skeleton className="w-full h-full" />
        </div>
      )}

      {/* Actual image */}
      <img
        ref={imgRef}
        src={priority ? currentSrc : getOptimizedSrc(currentSrc)}
        alt={alt}
        loading={priority ? 'eager' : (lazy ? 'lazy' : 'eager')}
        decoding="async"
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          aspectRatio: props.width && props.height ? `${props.width} / ${props.height}` : undefined,
        }}
        {...props}
      />

      {/* Progressive loading indicator */}
      {!isLoaded && !hasError && (
        <div className="absolute bottom-2 right-2 w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      )}
    </div>
  );
};

// Helper hook for image preloading
export const useImagePreloader = (src: string): boolean => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();

    const handleLoad = () => setIsLoaded(true);
    const handleError = () => setIsLoaded(false);

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    img.src = src;

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  return isLoaded;
};

// Background image component with performance optimizations
interface BackgroundImageProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt,
  className,
  children,
  priority = false,
}) => {
  const isLoaded = useImagePreloader(src);

  return (
    <div
      className={cn("relative", className)}
      style={{
        backgroundImage: isLoaded ? `url(${src})` : undefined,
      }}
      role="img"
      aria-label={alt}
    >
      {!isLoaded && (
        <div className="absolute inset-0">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      {children}
    </div>
  );
};

export default OptimizedImage;
