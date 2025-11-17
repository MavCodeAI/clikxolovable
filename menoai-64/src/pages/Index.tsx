import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sparkles, Video, Zap, Crown, Share2, ArrowRight, Bot, Play, Sparkles as Sparks, Palette } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between font-poppins">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary to-primary-glow rounded-xl shadow-glow">
              <Bot className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Fynix</h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button onClick={() => navigate("/auth")}>
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 text-center font-exo2">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              <Bot className="h-4 w-4" />
              Free AI Video Generation
            </div>

            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Fynix – Create Unlimited AI Videos for Free
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-poppins">
              "Create Unlimited AI Videos for Free" – Transform your ideas into professional videos in seconds.
              No limits, no subscriptions, completely free for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                onClick={() => navigate("/auth")}
                className="text-lg shadow-premium hover:shadow-glow transition-all font-poppins"
              >
                Create Your Free Video Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 font-poppins">
          <div className="text-center mb-16 font-exo2">
            <h2 className="text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-muted-foreground">Unlimited creativity at your fingertips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-premium transition-all text-center">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit mb-4 mx-auto">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-exo2">Unlimited AI Video Generation</h3>
              <p className="text-sm text-muted-foreground">
                No restrictions – create as many videos as you want
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-premium transition-all text-center">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit mb-4 mx-auto">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-exo2">Instant Results</h3>
              <p className="text-sm text-muted-foreground">
                Videos ready in seconds, not hours of editing
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-premium transition-all text-center">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit mb-4 mx-auto">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-exo2">Templates & Styles</h3>
              <p className="text-sm text-muted-foreground">
                Professional visuals with advanced AI effects
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-premium transition-all text-center">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit mb-4 mx-auto">
                <Crown className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-exo2">No Payment Required</h3>
              <p className="text-sm text-muted-foreground">
                Completely free for everyone – no credit card needed
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-premium transition-all text-center">
              <div className="p-4 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl w-fit mb-4 mx-auto">
                <Share2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-exo2">Easy Sharing</h3>
              <p className="text-sm text-muted-foreground">
                Download and share on social media instantly
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary-glow/10 border border-primary/20 font-poppins">
            <h2 className="text-4xl font-bold mb-4 font-exo2">Ready to Create Amazing Videos?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of creators making unlimited AI videos for free
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/auth")}
              className="shadow-premium hover:shadow-glow transition-all text-lg font-poppins"
            >
              Start Generating Unlimited Videos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-8 text-center space-y-2">
          <p className="text-sm text-muted-foreground">© 2025 Fynix. Create unlimited AI videos for free.</p>
          <p className="text-xs text-muted-foreground">No credit card required – absolutely free for now.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
