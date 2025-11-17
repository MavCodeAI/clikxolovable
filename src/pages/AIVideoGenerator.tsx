import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { PremadeASMRPrompts } from "@/components/PremadeASMRPrompts";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Download, Share2, Loader2, VideoIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useVideoHistory } from "@/hooks/useVideoHistory";
import { useAuth } from "@/hooks/useAuth";

const AIVideoGenerator = () => {
  const { user } = useAuth();
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<{ url: string; prompt: string } | null>(null);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const { addToHistory } = useVideoHistory();

  const generateVideo = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Prompt Required",
        description: "Please enter a description for your video.",
        variant: "destructive",
      });
      return;
    }

    // GA4 tracking
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'click_to_fynix', {
        event_category: 'ai_video_generator',
        event_label: 'generate_video',
      });
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

    // GA4 tracking
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'click_to_fynix', {
        event_category: 'ai_video_generator',
        event_label: 'download_video',
      });
    }

    toast({
      title: "Downloading...",
      description: "Trying advanced download methods...",
    });

    // Method 0: Service Worker Intercept (Most Advanced)
    try {
      if ('serviceWorker' in navigator && 'caches' in window) {
        // Try to create a temporary service worker for download
        const swUrl = URL.createObjectURL(new Blob([`
          self.addEventListener('fetch', event => {
            const url = '${currentVideo.url}';
            if (event.request.url.includes(url)) {
              event.respondWith(
                fetch(event.request).then(response => {
                  if (response.status === 200) {
                    const headers = new Headers(response.headers);
                    headers.set('Content-Disposition', 'attachment; filename="ai-video-${Date.now()}.mp4"');
                    return new Response(response.body, {
                      status: response.status,
                      statusText: response.statusText,
                      headers: headers
                    });
                  }
                  return response;
                })
              );
            }
          });
        `], { type: 'application/javascript' }));

        const registration = await navigator.serviceWorker.register(swUrl, { scope: '/' });
        await navigator.serviceWorker.ready;

        const link = document.createElement("a");
        link.href = currentVideo.url;
        link.download = `ai-video-${Date.now()}.mp4`;
        link.click();

        toast({
          title: "Advanced Download Started",
          description: "Service Worker method - check your downloads folder!",
        });
        return;
      }
    } catch (error) {
      console.log("Service Worker method failed:", error);
    }

    // Method 1: File System Access API (Chrome/Edge Advanced)
    try {
      if ('showSaveFilePicker' in window) {
        const response = await fetch(currentVideo.url, {
          method: 'GET',
          credentials: 'include',
          mode: 'cors'
        });

        if (response.ok) {
          const blob = await response.blob();
          const fileHandle = await (window as any).showSaveFilePicker({
            suggestedName: `ai-video-${Date.now()}.mp4`,
            types: [{
              description: 'Video File',
              accept: { 'video/mp4': ['.mp4'] }
            }]
          });

          const writable = await fileHandle.createWritable();
          await writable.write(blob);
          await writable.close();

          toast({
            title: "Saved with File System API",
            description: "Video saved using advanced browser API!",
          });
          return;
        }
      }
    } catch (error) {
      console.log("File System Access API failed:", error);
    }

    // Method 2: Web Share API with download intent
    try {
      if ('share' in navigator && 'canShare' in navigator) {
        const response = await fetch(currentVideo.url);
        const blob = await response.blob();
        const file = new File([blob], `ai-video-${Date.now()}.mp4`, { type: 'video/mp4' });

        if ((navigator as any).canShare({ files: [file] })) {
          await (navigator as any).share({
            title: 'AI Generated Video',
            text: 'Downloaded from Digital Offshores',
            files: [file]
          });

          toast({
            title: "Shared",
            description: "Video shared/saved using Web Share API!",
          });
          return;
        }
      }
    } catch (error) {
      console.log("Web Share API failed:", error);
    }

    // Method 3: Canvas + Media Recording (Advanced Video Handling)
    try {
      const video = document.querySelector('video') as HTMLVideoElement;
      if (video && video.readyState >= 2) { // HAVE_CURRENT_DATA or better
        const stream = (video as any).captureStream?.() || (video as any).mozCaptureStream?.();
        if (stream) {
          const recorder = new MediaRecorder(stream, {
            mimeType: 'video/webm;codecs=vp9'
          });

          const chunks: BlobPart[] = [];
          recorder.ondataavailable = (e: BlobEvent) => {
            if (e.data.size > 0) chunks.push(e.data);
          };

          recorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = `ai-video-${Date.now()}.webm`;
            link.click();

            setTimeout(() => URL.revokeObjectURL(url), 1000);

            toast({
              title: "Recorded & Downloaded",
              description: "Video recorded using MediaRecorder API!",
            });
          };

          recorder.start();
          video.currentTime = 0;
          video.play();

          // Stop recording after video ends
          video.onended = () => recorder.stop();
          await new Promise(resolve => setTimeout(resolve, 100)); // Brief delay
          return;
        }
      }
    } catch (error) {
      console.log("MediaRecorder method failed:", error);
    }

    // Method 4: Direct download link with download attribute
    try {
      const link = document.createElement("a");
      link.href = currentVideo.url;
      link.download = `ai-video-${Date.now()}.mp4`;
      link.style.display = 'none';
      link.target = '_blank'; // Try opening first
      document.body.appendChild(link);
      link.click();

      // Try download attribute separately
      const downloadLink = document.createElement("a");
      downloadLink.href = currentVideo.url + (currentVideo.url.includes('?') ? '&' : '?') + 'download=1';
      downloadLink.download = `ai-video-${Date.now()}.mp4`;
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      document.body.removeChild(link);

      toast({
        title: "Download Attempted",
        description: "Multiple download methods initiated - check browser downloads!",
      });
      return;
    } catch (error) {
      console.log("Direct download failed:", error);
    }

    // Method 5: XMLHttpRequest with advanced options
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', currentVideo.url, true);
      xhr.responseType = 'blob';
      xhr.withCredentials = true;

      xhr.onload = function() {
        if (xhr.status === 200) {
          const blob = xhr.response;
          const blobUrl = URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = `ai-video-${Date.now()}.mp4`;
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          setTimeout(() => URL.revokeObjectURL(blobUrl), 100);

          toast({
            title: "Downloaded via XMLHttpRequest",
            description: "Advanced XMLHttpRequest method succeeded!",
          });
        }
      };

      xhr.onerror = function() {
        console.log("XMLHttpRequest failed, trying fallback");
        advancedFallback();
      };

      xhr.send();
      return;
    } catch (error) {
      console.log("XMLHttpRequest failed:", error);
    }

    // Advanced Fallback: Multiple attempts
    function advancedFallback() {
      // Try programmatic right-click simulation (advanced)
      try {
        const video = document.querySelector('video') as HTMLVideoElement;
        if (video) {
          // Simulate context menu
          const event = new MouseEvent('contextmenu', {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: video.offsetLeft + video.offsetWidth / 2,
            clientY: video.offsetTop + video.offsetHeight / 2
          });

          video.dispatchEvent(event);

          // Try to trigger save
          setTimeout(() => {
            // Create hidden iframe for download
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = currentVideo.url + (currentVideo.url.includes('?') ? '&' : '?') + 'dl=1&force_download=1';
            document.body.appendChild(iframe);

            setTimeout(() => document.body.removeChild(iframe), 5000);

            toast({
              title: "Advanced Methods Applied",
              description: "Multiple download techniques initiated - check your downloads!",
            });
          }, 500);
          return;
        }
      } catch (error) {
        console.log("Advanced fallback failed:", error);
      }

      // Final ultimate fallback
      const link = document.createElement("a");
      link.href = currentVideo.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      // Try multiple openings
      document.body.appendChild(link);
      link.click();

      // Additional attempt with different attributes
      const secondLink = document.createElement("a");
      secondLink.href = currentVideo.url;
      secondLink.target = '_blank';
      secondLink.download = `ai-video-${Date.now()}.mp4`;
      document.body.appendChild(secondLink);
      secondLink.click();

      document.body.removeChild(link);
      document.body.removeChild(secondLink);

      toast({
        title: "Video Opened (Ultimate Fallback)",
        description: "Video opened in new tab. Right-click and 'Save video as' or press Ctrl+S to download.",
      });
    }

    // If all methods fail, use advanced fallback
    advancedFallback();
  };

  const shareVideo = () => {
    if (!currentVideo) return;

    // GA4 tracking
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'click_to_fynix', {
        event_category: 'ai_video_generator',
        event_label: 'share_video',
      });
    }

    navigator.clipboard.writeText(currentVideo.url);
    toast({
      title: "Link Copied",
      description: "Video link copied to clipboard!",
    });
  };

  const handleSelectPrompt = (selectedPrompt: string) => {
    setPrompt(selectedPrompt);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="bg-gradient-to-br from-background via-background to-accent/5 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              <VideoIcon className="h-4 w-4" />
              AI Video Generation
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Try Fynix — Unlimited AI Video Generation for Free
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your ideas into professional videos in seconds. No limits, no subscriptions, completely free.
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto space-y-6">
            <Card className="p-6 space-y-4">
              <div className="space-y-2">
                <label htmlFor="prompt" className="text-sm font-medium">
                  Describe your video
                </label>
                <Textarea
                  id="prompt"
                  placeholder="A cyberpunk city at night with flying cars..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  disabled={isGenerating}
                  className="min-h-[120px] resize-none"
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
                  <>
                    <VideoIcon className="mr-2 h-4 w-4" />
                    Generate Video
                  </>
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

            <PremadeASMRPrompts onSelectPrompt={handleSelectPrompt} />

            {currentVideo && (
              <Card className="p-6 space-y-4">
                <div className="relative">
                  <video
                    src={currentVideo.url}
                    controls
                    className="w-full rounded-lg shadow-lg"
                    controlsList="nodownload"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                    Powered by Fynix AI
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Prompt:</p>
                    <p className="text-sm">{currentVideo.prompt}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button onClick={downloadVideo} variant="outline" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Download Video
                    </Button>
                    <Button onClick={shareVideo} variant="outline" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Link
                    </Button>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    Generated by Fynix AI Video Engine
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AIVideoGenerator;
