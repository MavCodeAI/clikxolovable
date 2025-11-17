import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-accent/5">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-6 p-4 bg-primary/10 rounded-full w-fit mx-auto">
          <Home className="h-12 w-12 text-primary" />
        </div>
        <h1 className="mb-4 text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent font-exo2">404</h1>
        <p className="mb-6 text-xl text-muted-foreground font-poppins">
          Oops! Looks like this page took a wrong turn into the AI void.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="font-poppins"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="shadow-premium hover:shadow-glow transition-all font-poppins"
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
