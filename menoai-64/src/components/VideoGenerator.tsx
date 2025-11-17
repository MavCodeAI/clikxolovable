import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Download, Share2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useVideoHistory } from "@/hooks/useVideoHistory";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface VideoGeneratorProps {
  onVideoGenerated?: (url?: string) => void;
  initialPrompt?: string;
}

export const VideoGenerator = ({ onVideoGenerated, initialPrompt }: VideoGeneratorProps) => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<{ url: string; prompt: string } | null>(null);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const { addToHistory } = useVideoHistory();

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    if (!user) return;
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();
    setProfile(data);
  };

  const generateVideo = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Prompt Required",
        description: "Please enter a description for your video.",
        variant: "destructive",
      });
      return;
    }

    // Check if user has reached limit
    if (user && profile) {
      if (profile.videos_generated >= profile.videos_limit) {
        toast({
          title: "Limit Reached",
          description: "You've reached your monthly video limit. Upgrade to create more!",
          variant: "destructive",
        });
        return;
      }
    }

    setIsGenerating(true);
    setProgress(0);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 500);

    try {
      console.log(`Fetching video for prompt: ${prompt}`);
      const response = await fetch(
        `https://yabes-api.pages.dev/api/ai/video/v1?prompt=${encodeURIComponent(prompt)}`
      );
      
      const data = await response.json();
      console.log("API Response:", data);

      if (data?.success && data?.url) {
        clearInterval(progressInterval);
        setProgress(100);
        
        setCurrentVideo({ url: data.url, prompt });
        addToHistory(prompt, data.url);
        
        // Save to database if user is logged in
        if (user) {
          await supabase.from("videos").insert({
            user_id: user.id,
            prompt,
            video_url: data.url,
          });
          
          // Update profile count
          await supabase
            .from("profiles")
            .update({ videos_generated: (profile?.videos_generated || 0) + 1 })
            .eq("id", user.id);
          
          await loadProfile();
        }
        
        onVideoGenerated?.();
        
        toast({
          title: "Video Generated!",
          description: "Your AI video is ready to watch.",
        });
      } else {
        throw new Error("Generation failed");
      }
    } catch (error) {
      console.error("Video generation error:", error);
      clearInterval(progressInterval);
      toast({
        title: "Generation Failed",
        description: "Generation failed. Try again later.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
      setTimeout(() => setProgress(0), 1000);
    }
  };

  const downloadVideo = async () => {
    if (!currentVideo) return;
    
    try {
      // Try direct download with fetch
      const response = await fetch(currentVideo.url, { mode: 'cors' });
      
      if (!response.ok) throw new Error('Fetch failed');
      
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `ai-video-${Date.now()}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
      
      toast({
        title: "Downloaded",
        description: "Your video has been downloaded successfully.",
      });
    } catch (error) {
      console.error("Download error:", error);
      
      // Fallback: Open video in new tab if CORS blocks download
      window.open(currentVideo.url, '_blank');
      
      toast({
        title: "Opening Video",
        description: "Video opened in new tab. Right-click to save.",
      });
    }
  };

  const shareVideo = () => {
    if (!currentVideo) return;
    navigator.clipboard.writeText(currentVideo.url);
    toast({
      title: "Link Copied",
      description: "Video link copied to clipboard!",
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="p-6 space-y-4">
        <div className="space-y-2">
          <label htmlFor="prompt" className="text-sm font-medium">
            Describe your video
          </label>
          <Textarea
            id="prompt"
            placeholder="A cyberpunk city at night..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isGenerating}
            className="min-h-[100px] resize-none"
          />
        </div>

        <Button
          onClick={generateVideo}
          disabled={isGenerating || !prompt.trim()}
          className="w-full"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating video...
            </>
          ) : (
            "Generate Video"
          )}
        </Button>

        {isGenerating && (
          <div className="space-y-2">
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground text-center">
              Creating your AI video... {progress}%
            </p>
          </div>
        )}
      </Card>

      {currentVideo && (
        <Card className="p-6 space-y-4">
          <div className="relative">
            <video
              src={currentVideo.url}
              controls
              className="w-full rounded-lg"
              controlsList="nodownload"
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
              Generated by AI Video Engine
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Prompt:</p>
              <p className="text-sm">{currentVideo.prompt}</p>
            </div>

            <div className="flex gap-2">
              <Button onClick={downloadVideo} variant="outline" className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button onClick={shareVideo} variant="outline" className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                Share Link
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Powered by AI Video Generator
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};
