import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, Crown, Zap, ArrowLeft } from "lucide-react";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      icon: Sparkles,
      features: [
        "3 videos per month",
        "720p quality",
        "Basic watermark",
        "Email support",
      ],
      cta: "Current Plan",
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      icon: Zap,
      features: [
        "50 videos per month",
        "1080p quality",
        "No watermark",
        "Priority support",
        "Custom styles",
      ],
      cta: "Upgrade to Pro",
      variant: "default" as const,
      popular: true,
    },
    {
      name: "Premium",
      price: "$49",
      period: "per month",
      icon: Crown,
      features: [
        "Unlimited videos",
        "4K quality",
        "No watermark",
        "24/7 priority support",
        "Custom styles",
        "API access",
        "Team collaboration",
      ],
      cta: "Upgrade to Premium",
      variant: "default" as const,
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground">
            Select the perfect plan for your video creation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={index}
                className={`relative p-8 backdrop-blur-sm bg-card/95 border-border/50 transition-all hover:shadow-premium hover:scale-105 ${
                  plan.popular ? "shadow-premium border-primary/50" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-glow">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-2xl mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.variant}
                  className="w-full"
                  size="lg"
                  onClick={() => navigate("/dashboard")}
                >
                  {plan.cta}
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 text-muted-foreground text-sm">
          <p>All plans include access to our AI video generation technology</p>
          <p>Cancel anytime • No hidden fees • Secure payments</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
