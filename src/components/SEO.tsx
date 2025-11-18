import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  alternateHreflangs?: Array<{ hreflang: string; href: string }>;
}

const SEO = ({
  title = "ClikXo Studio | Web Development, Graphics Design & Digital Marketing | Dubai, UAE",
  description = "ClikXo Studio offers professional Web Development, Graphics Design, and Digital Marketing services in Dubai, UAE. Transform your business with our creative and tech solutions.",
  image = "/og-image.jpg",
  url = "https://clikxo.com",
  type = "website",
  alternateHreflangs = []
}: SEOProps) => {
  const fullTitle = title === "ClikXo Studio | Web Development, Graphics Design & Digital Marketing | Dubai, UAE" ? title : `${title} | ClikXo Studio`;

  // URL encode for social media sharing
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(fullTitle);
  const encodedDesc = encodeURIComponent(description);
  const encodedImage = encodeURIComponent(image.startsWith('http') ? image : `https://clikxo.com${image}`);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* LinkedIn Sharing Meta Tags */}
      <meta property="og:site_name" content="ClikXo Studio" />
      <meta property="article:author" content="ClikXo Studio" />
      <meta property="article:publisher" content="https://www.linkedin.com/company/clikxo-studio" />

      {/* Pinterest Rich Pins - Enhanced for SEO Backlinks */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="pinterest-rich-pin" content="true" />

      {/* Social Media Backlinks for SEO */}
      <link rel="canonical" href={url} />

      {/* Pinterest Board Links - SEO Backlinks */}
      <link rel="alternate" href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedDesc}&title=${encodedTitle}`} type="text/html" title="Pin on Pinterest" />

      {/* LinkedIn Sharing URLs - SEO Backlinks */}
      <link rel="alternate" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDesc}`} type="text/html" title="Share on LinkedIn" />

      {/* Schema.org Social Sharing Links */}
      <meta property="article:section" content="Business" />
      <meta property="article:tag" content="Web Development" />
      <meta property="article:tag" content="Digital Marketing" />
      <meta property="article:tag" content="Graphic Design" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {alternateHreflangs.map((alt) => (
        <link key={alt.hreflang} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
      ))}
    </Helmet>
  );
};

export default SEO;
