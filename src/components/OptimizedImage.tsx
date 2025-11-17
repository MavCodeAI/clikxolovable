import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height,
  priority = false 
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate optimized URL for Unsplash images
  const getOptimizedUrl = (url: string) => {
    if (url.includes('unsplash.com')) {
      try {
        const u = new URL(url);
        if (width) u.searchParams.set('w', width.toString());
        if (height) u.searchParams.set('h', height.toString());
        u.searchParams.set('q', '80');
        u.searchParams.set('fm', 'webp');
        u.searchParams.set('fit', 'crop');
        return u.toString();
      } catch {
        const params = new URLSearchParams();
        if (width) params.set('w', width.toString());
        if (height) params.set('h', height.toString());
        params.set('q', '80');
        params.set('fm', 'webp');
        params.set('fit', 'crop');
        const sep = url.includes('?') ? '&' : '?';
        return `${url}${sep}${params.toString()}`;
      }
    }
    return url;
  };

  const optimizedSrc = getOptimizedUrl(src);

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
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
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
      />
    </div>
  );
};

export default OptimizedImage;
