import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2, Instagram } from 'lucide-react';

// Declare global gtag function for SEO analytics
declare global {
  function gtag(...args: any[]): void;
}

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  hashtags?: string[];
  className?: string;
}

const SocialShare = ({
  url = window.location.href,
  title = document.title,
  description = "Check out ClikXo Studio - Web Development, Graphics Design & Digital Marketing services in Dubai, UAE",
  image = '/og-image.jpg',
  hashtags = ['ClikXo', 'WebDevelopment', 'DigitalMarketing', 'Dubai'],
  className = ""
}: SocialShareProps) => {

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      {/* Native Share API for mobile devices */}
      {navigator.share && (
        <Button
          onClick={handleNativeShare}
          variant="outline"
          size="sm"
          className="bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-700 hover:text-gray-800 transition-all duration-200"
          aria-label="Share"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      )}
    </div>
  );
};

export default SocialShare;
