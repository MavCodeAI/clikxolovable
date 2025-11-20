import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean | "full";
  animate?: boolean;
}

export const Skeleton = ({
  className,
  width,
  height,
  rounded = false,
  animate = true
}: SkeletonProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-card via-card/50 to-card bg-size-200 animate-shimmer border border-border/20",
        {
          "animate-pulse": !animate,
          "rounded-lg": rounded === true,
          "rounded-full": rounded === "full",
        },
        className
      )}
      style={{
        width: width || undefined,
        height: height || undefined,
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
};

// Pre-built skeleton components for common UI patterns
export const SkeletonCard = ({ className }: { className?: string }) => (
  <div className={cn("p-6 space-y-4 border rounded-lg", className)}>
    <Skeleton height="24px" width="60%" />
    <Skeleton height="16px" width="100%" />
    <Skeleton height="16px" width="80%" />
    <Skeleton height="40px" width="120px" rounded />
  </div>
);

export const SkeletonAvatar = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <Skeleton
      className={cn(sizeClasses[size], "rounded-full")}
      rounded="full"
    />
  );
};

export const SkeletonButton = ({ className }: { className?: string }) => (
  <Skeleton height="40px" width="100px" rounded className={className} />
);

export const SkeletonParagraph = ({
  lines = 3,
  className
}: {
  lines?: number;
  className?: string;
}) => (
  <div className={cn("space-y-2", className)}>
    {Array.from({ length: lines }, (_, i) => (
      <Skeleton
        key={i}
        height="16px"
        width={`${100 - (i * 10)}%`}
      />
    ))}
  </div>
);

// Section skeleton for loading entire content areas
export const SkeletonSection = ({
  title = true,
  content = "paragraph",
  className
}: {
  title?: boolean;
  content?: "paragraph" | "cards" | "list";
  className?: string;
}) => (
  <div className={cn("space-y-6 py-12", className)}>
    {/* Title skeleton */}
    {title && (
      <div className="text-center space-y-4">
        <Skeleton height="32px" width="200px" className="mx-auto" />
        <Skeleton height="20px" width="300px" className="mx-auto" />
      </div>
    )}

    {/* Content area skeleton */}
    <div className="container mx-auto px-4">
      {content === "paragraph" && (
        <div className="max-w-3xl mx-auto space-y-4">
          <SkeletonParagraph lines={5} />
          <Skeleton height="48px" width="150px" rounded className="mt-8" />
        </div>
      )}

      {content === "cards" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }, (_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {content === "list" && (
        <div className="max-w-2xl mx-auto space-y-4">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="flex items-center space-x-4 p-4 border rounded-lg">
              <SkeletonAvatar size="sm" />
              <div className="flex-1 space-y-2">
                <Skeleton height="16px" width="120px" />
                <Skeleton height="14px" width="200px" />
              </div>
              <Skeleton width="80px" height="32px" rounded />
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

// Page-specific skeletons
export const NavbarSkeleton = () => (
  <div className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <Skeleton height="32px" width="120px" />
        <div className="hidden md:flex items-center gap-6">
          <Skeleton height="20px" width="60px" />
          <Skeleton height="20px" width="60px" />
          <Skeleton height="20px" width="60px" />
          <Skeleton height="20px" width="60px" />
        </div>
        <div className="md:hidden">
          <Skeleton height="32px" width="32px" />
        </div>
      </div>
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center px-4 py-20">
    <div className="text-center space-y-6 max-w-4xl mx-auto">
      <Skeleton height="48px" width="80%" className="mx-auto" />
      <Skeleton height="48px" width="60%" className="mx-auto" />
      <Skeleton height="24px" width="70%" className="mx-auto mt-8" />
      <div className="flex gap-4 justify-center mt-12">
        <Skeleton height="48px" width="150px" rounded />
        <Skeleton height="48px" width="150px" rounded />
      </div>
    </div>
  </div>
);

export const CardSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("p-6 space-y-4 border rounded-lg bg-card", className)}>
    <Skeleton height="48px" width="48px" rounded />
    <Skeleton height="24px" width="70%" />
    <Skeleton height="16px" width="100%" />
    <Skeleton height="16px" width="90%" />
    <Skeleton height="40px" width="120px" rounded className="mt-4" />
  </div>
);

export const ProfileSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("text-center space-y-4", className)}>
    <Skeleton height="200px" width="200px" rounded="full" className="mx-auto" />
    <Skeleton height="24px" width="150px" className="mx-auto" />
    <Skeleton height="18px" width="120px" className="mx-auto" />
    <div className="flex gap-3 justify-center mt-4">
      <Skeleton height="32px" width="32px" rounded="full" />
      <Skeleton height="32px" width="32px" rounded="full" />
      <Skeleton height="32px" width="32px" rounded="full" />
    </div>
  </div>
);

export const ProjectSkeleton = ({ className }: { className?: string }) => (
  <div className={cn("space-y-4", className)}>
    <Skeleton height="300px" width="100%" rounded />
    <Skeleton height="28px" width="70%" />
    <Skeleton height="16px" width="100%" />
    <Skeleton height="16px" width="90%" />
    <div className="flex gap-2 mt-4">
      <Skeleton height="24px" width="60px" rounded />
      <Skeleton height="24px" width="60px" rounded />
      <Skeleton height="24px" width="60px" rounded />
    </div>
  </div>
);
