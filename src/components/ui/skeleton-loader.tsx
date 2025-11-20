import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted/50",
        className
      )}
    />
  );
};

export const CardSkeleton = () => {
  return (
    <div className="bg-card border-2 border-border rounded-xl p-8 space-y-4">
      <Skeleton className="h-16 w-16 rounded-xl" />
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-20 w-full" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
    </div>
  );
};

export const ProfileSkeleton = () => {
  return (
    <div className="bg-card rounded-2xl p-6 border border-border space-y-4">
      <div className="flex flex-col items-center gap-4">
        <Skeleton className="w-24 h-24 rounded-full" />
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-16 w-full" />
        <div className="flex gap-3">
          <Skeleton className="w-5 h-5 rounded-full" />
          <Skeleton className="w-5 h-5 rounded-full" />
          <Skeleton className="w-5 h-5 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const ProjectSkeleton = () => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-5 w-2/3" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const NavbarSkeleton = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Skeleton className="h-10 w-32" />
          <div className="hidden md:flex items-center gap-6">
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-10 w-32 rounded-full" />
          </div>
          <Skeleton className="md:hidden h-8 w-8" />
        </div>
      </div>
    </nav>
  );
};

export const HeroSkeleton = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-hero-bg via-background to-hero-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Skeleton className="h-12 w-48 mx-auto rounded-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-16 w-3/4 mx-auto" />
          <Skeleton className="h-24 w-2/3 mx-auto" />
          <div className="flex justify-center gap-4 pt-4">
            <Skeleton className="h-14 w-48 rounded-full" />
            <Skeleton className="h-14 w-48 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
