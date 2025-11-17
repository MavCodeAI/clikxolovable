import { useState, useEffect } from 'react';

export interface VideoHistoryItem {
  id: string;
  prompt: string;
  url: string;
  timestamp: number;
}

const STORAGE_KEY = 'ai-video-history';
const MAX_HISTORY = 3;

export const useVideoHistory = () => {
  const [history, setHistory] = useState<VideoHistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setHistory(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse video history:', error);
      }
    }
  }, []);

  const addToHistory = (prompt: string, url: string) => {
    const newItem: VideoHistoryItem = {
      id: Date.now().toString(),
      prompt,
      url,
      timestamp: Date.now(),
    };

    const updatedHistory = [newItem, ...history].slice(0, MAX_HISTORY);
    setHistory(updatedHistory);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return { history, addToHistory, clearHistory };
};
