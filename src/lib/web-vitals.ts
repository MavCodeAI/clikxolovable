import { onCLS, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Report Web Vitals metrics
 * In production, you can send these to your analytics service
 */
function reportMetric(metric: Metric) {
  const { name, value, rating, id } = metric;
  
  // Console log in development
  if (import.meta.env.MODE === 'development') {
    console.log(`[Web Vitals] ${name}:`, {
      value: Math.round(value),
      rating,
      id,
    });
  }

  // In production, send to analytics
  // Example: Send to Google Analytics
  if (import.meta.env.MODE === 'production' && window.gtag) {
    window.gtag('event', name, {
      value: Math.round(value),
      metric_id: id,
      metric_value: value,
      metric_rating: rating,
    });
  }

  // You can also send to other services like:
  // - Vercel Analytics
  // - CloudFlare Analytics
  // - Custom analytics endpoint
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   body: JSON.stringify({ name, value, rating, id }),
  // });
}

/**
 * Initialize Web Vitals monitoring
 * Tracks: CLS, FCP, LCP, TTFB, INP
 */
export function initWebVitals() {
  onCLS(reportMetric);  // Cumulative Layout Shift
  onFCP(reportMetric);  // First Contentful Paint
  onLCP(reportMetric);  // Largest Contentful Paint
  onTTFB(reportMetric); // Time to First Byte
  onINP(reportMetric);  // Interaction to Next Paint (replaces deprecated FID)
}
