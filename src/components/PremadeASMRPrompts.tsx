import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Headphones, Shuffle } from "lucide-react";

interface PremadeASMRPromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

const asmrPrompts = [
  // Nature & Environment (expanded)
  "Calming ocean waves with seashells and gentle breeze sounds",
  "Crisp autumn leaves rustling in a peaceful forest clearing",
  "Soft rain drops falling on crystal clear lake surface",
  "Wind chimes melody with nature background ambiance",
  "Mountain stream flowing over smooth river stones",
  "Pine forest whispers with distant echoes",
  "Desert sand dunes shifting in golden hour light",
  "Frozen ice cracking on winter lake surface",
  "Jungle waterfall cascading down moss-covered rocks",
  "Volcanic lava bubbles rising through molten rock",

  // Objects & Textures (expanded)
  "Glass tapping with crystal bowls producing soothing tones",
  "Silk fabric folding and unfolding with gentle sounds",
  "Velvet material brushing against smooth surfaces",
  "Ceramic pottery being molded with relaxing motions",
  "Paper page turning with crisp and satisfying sounds",
  "Metal wind chimes creating harmonic resonances",
  "Wooden xylophone keys being played gently",
  "Rubber bubbles popping in slow motion",
  "Feather-light foam expanding in water",
  "Glistening mercury droplets merging together",

  // Abstract & Atmospheric (expanded)
  "Cosmic nebula clouds swirling in deep space environment",
  "Crystal formations growing in mystical cave chambers",
  "Aurora borealis dancing across starry night skies",
  "Snow flakes gently falling on mountain peaks",
  "Fireplace embers crackling with warm ambient glow",
  "Galaxy spirals rotating in infinite space",
  "Meteor showers streaking through velvet sky",
  "Solar flares erupting from star surfaces",
  "Quantum particles dancing in microscopic world",
  "Fractal patterns unfolding in mathematical beauty",
  "Oil droplets spreading on water surface",
  "Magnetic fields visualized as flowing waves",
  "Time crystals pulsing with rhythmic light",
  "Holographic projections materializing in air",
  "Sound waves visualized as rippling energy",
  "Light refraction through prism creating rainbows",
  "Fibonacci spirals growing in golden ratio",
  "Tesla coil electrical discharges arcing",
  "Ferrofluid spikes responding to magnets",
  "Silicon circuits processing digital information"
];

export const PremadeASMRPrompts = ({ onSelectPrompt }: PremadeASMRPromptsProps) => {
  const [currentPrompts, setCurrentPrompts] = useState<string[]>([]);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    // Initialize with random 6 prompts
    const shuffled = [...asmrPrompts].sort(() => 0.5 - Math.random());
    setCurrentPrompts(shuffled.slice(0, 6));

    // Rotate prompts every 8 seconds
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        const shuffled = [...asmrPrompts].sort(() => 0.5 - Math.random());
        setCurrentPrompts(shuffled.slice(0, 6));
        setIsRotating(false);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleShuffle = () => {
    setIsRotating(true);
    setTimeout(() => {
      const shuffled = [...asmrPrompts].sort(() => 0.5 - Math.random());
      setCurrentPrompts(shuffled.slice(0, 6));
      setIsRotating(false);
    }, 500);
  };

  return (
    <Card className="p-4 space-y-3 border-2 border-dashed border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Headphones className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Quick ASMR Ideas</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleShuffle}
          className="h-6 w-6 p-0 opacity-70 hover:opacity-100"
        >
          <Shuffle className={`h-3 w-3 transition-transform ${isRotating ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 transition-opacity duration-500 ${isRotating ? 'opacity-50' : 'opacity-100'}`}>
        {currentPrompts.map((prompt, index) => (
          <Button
            key={`${prompt}-${index}`}
            variant="outline"
            size="sm"
            className="h-auto p-2 text-xs text-left justify-start hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            onClick={() => onSelectPrompt(prompt)}
          >
            <Sparkles className="h-3 w-3 mr-2 text-primary/60 flex-shrink-0" />
            <span className="line-clamp-2 leading-tight">{prompt}</span>
          </Button>
        ))}
      </div>

      <div className="text-center">
        <Badge variant="secondary" className="text-xs px-2 py-0.5">
          Auto-rotating • Click any to use
        </Badge>
      </div>
    </Card>
  );
};
