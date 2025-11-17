import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Headphones } from "lucide-react";

interface PremadeASMRPromptsProps {
  onSelectPrompt: (prompt: string) => void;
}

const asmrPrompts = [
  {
    title: "Whispering Triggers",
    prompt: "Gentle ASMR whispers with soft triggers, relaxation sounds, and calming visuals in a quiet room",
    category: "Whispering",
  },
  {
    title: "Tapping & Scratching",
    prompt: "ASMR video with tapping sounds, scratching textures, and soothing background music in a peaceful environment",
    category: "Tapping",
  },
  {
    title: "Role Play Relaxation",
    prompt: "Gentle role play ASMR with soft speaking, role playing as a caring professional in a calming atmosphere",
    category: "Roleplay",
  },
  {
    title: "Binaural Mic Sounds",
    prompt: "Ultra-realistic binaural ASMR with microphone tapping, 3D audio effects, and immersive sound experiences",
    category: "Binaural",
  },
  {
    title: "Personal Attention",
    prompt: "Intimate ASMR experience with personal attention, close-up visuals, and individualized relaxation techniques",
    category: "Personal",
  },
  {
    title: "Sleep Aid Session",
    prompt: "Calming ASMR sleep aid with soft sounds, breathing exercises, and peaceful nighttime visuals for deep relaxation",
    category: "Sleep",
  },
  {
    title: "Scalp Massage",
    prompt: "Tender scalp massage ASMR with gentle touching sounds, finger movements, and blissfully relaxing head treatments",
    category: "Massage",
  },
  {
    title: "Mouth Sounds",
    prompt: "Authentic mouth sounds ASMR with various eating sounds, chewing, and satisfying oral texture demonstrations",
    category: "Mouth",
  },
];

export const PremadeASMRPrompts = ({ onSelectPrompt }: PremadeASMRPromptsProps) => {
  const categories = [...new Set(asmrPrompts.map(prompt => prompt.category))];

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg">
          <Headphones className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Premade ASMR Prompts</h3>
          <p className="text-sm text-muted-foreground">Quick start with popular ASMR themes</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge key={category} variant="outline" className="text-xs">
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {asmrPrompts.map((asmrPrompt, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto p-4 flex flex-col items-start gap-2 text-left hover:bg-accent/50 transition-colors"
            onClick={() => onSelectPrompt(asmrPrompt.prompt)}
          >
            <div className="flex items-center gap-2 w-full">
              <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="font-medium text-sm">{asmrPrompt.title}</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {asmrPrompt.category}
            </Badge>
            <p className="text-xs text-muted-foreground line-clamp-2 opacity-75">
              {asmrPrompt.prompt}
            </p>
          </Button>
        ))}
      </div>

      <div className="text-center text-xs text-muted-foreground">
        Click any prompt to use it in the generator
      </div>
    </Card>
  );
};
