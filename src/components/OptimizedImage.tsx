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
      const params = new URLSearchParams();
      if (width) params.append('w', width.toString());
      if (height) params.append('h', height.toString());
      params.append('q', '80');
      params.append('fm', 'webp');
      params.append('fit', 'crop');
      return `${url}&${params.toString()}`;
    }
    return url;
  };
  const optimizedSrc = getOptimizedUrl(src);
  return <div className={cn("relative overflow-hidden bg-muted", className)}>
      {!isLoaded && !hasError && <div className="absolute inset-0 animate-pulse bg-muted" />}
      
    </div>;
};
export default OptimizedImage;