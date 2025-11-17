import { HeroSkeleton, NavbarSkeleton } from "@/components/ui/skeleton-loader";

const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarSkeleton />
      <HeroSkeleton />
    </div>
  );
};

export default LoadingPage;
