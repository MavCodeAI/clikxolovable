import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useVideoHistory } from "@/hooks/useVideoHistory";

export const VideoHistory = () => {
  const { history, clearHistory } = useVideoHistory();

  if (history.length === 0) return null;

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Videos</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearHistory}
          className="text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Clear
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {history.map((item) => (
          <div key={item.id} className="space-y-2">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              <video
                src={item.url}
                className="w-full h-full object-cover"
                muted
              />
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {item.prompt}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};
