import { cn } from "@/lib/utils";

// Enhanced spinner with better animations
interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "default" | "dots" | "pulse";
}

const sizeClasses = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-3",
  lg: "w-10 h-10 border-4",
  xl: "w-12 h-12 border-4",
};

export const Spinner = ({ size = "md", className, variant = "default" }: SpinnerProps) => {
  if (variant === "dots") {
    return (
      <div className={cn("flex space-x-1 items-center", className)} role="status" aria-label="Loading">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={cn(sizeClasses[size], "bg-primary rounded-full animate-pulse")} role="status" aria-label="Loading">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-primary border-t-transparent",
        sizeClasses[size],
        "shadow-lg shadow-primary/20",
        className
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

// Enhanced full screen loading with skeleton animation
export const SpinnerFullScreen = ({ message = "Loading experience..." }: { message?: string }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-md flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6 p-8 rounded-2xl border border-border/50 bg-card/50 shadow-2xl">
        {/* Animated logo/indicator */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-orange-glow to-primary animate-spin opacity-20"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-orange-glow animate-pulse"></div>
          <div className="absolute inset-4 rounded-full bg-background animate-ping"></div>
        </div>

        {/* Loading spinner */}
        <Spinner size="md" variant="dots" />

        {/* Loading message */}
        <div className="text-center space-y-2">
          <p className="text-xl font-bold text-primary animate-pulse">{message}</p>
          <p className="text-sm text-muted-foreground">Please wait while we prepare your experience</p>
        </div>

        {/* Progress indicator - appears after 2 seconds */}
        <div className="w-48 h-1 bg-border rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-orange-glow rounded-full animate-pulse" style={{
            animation: 'loading-bar 2s ease-in-out infinite',
            backgroundSize: '200% 100%'
          }}></div>
        </div>
      </div>

      <style>{`
        @keyframes loading-bar {
          0% { width: 0%; background-position: 200% 0; }
          50% { width: 100%; background-position: 100% 0; }
          100% { width: 0%; background-position: 0 0; }
        }
      `}</style>
    </div>
  );
};
