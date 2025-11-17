import { Spinner, SpinnerFullScreen } from "./spinner";
import { 
  Skeleton, 
  CardSkeleton, 
  ProfileSkeleton, 
  ProjectSkeleton, 
  NavbarSkeleton,
  HeroSkeleton 
} from "./skeleton-loader";

// Export all loading components from one place
export {
  // Spinners
  Spinner,
  SpinnerFullScreen,
  
  // Skeletons
  Skeleton,
  CardSkeleton,
  ProfileSkeleton,
  ProjectSkeleton,
  NavbarSkeleton,
  HeroSkeleton,
};

// Example usage components
export const LoadingButton = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <Spinner size="sm" />
    {children}
  </div>
);

export const LoadingCard = () => (
  <div className="space-y-4">
    <CardSkeleton />
  </div>
);

export const LoadingGrid = ({ count = 4 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

export const LoadingProjects = ({ count = 4 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {Array.from({ length: count }).map((_, i) => (
      <ProjectSkeleton key={i} />
    ))}
  </div>
);

export const LoadingTeam = ({ count = 2 }: { count?: number }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    {Array.from({ length: count }).map((_, i) => (
      <ProfileSkeleton key={i} />
    ))}
  </div>
);
