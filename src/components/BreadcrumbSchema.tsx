import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BreadcrumbSchema = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://clikxo.com/"
      },
      ...pathnames.map((pathname, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' '),
        "item": `https://clikxo.com/${pathnames.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  // Only show breadcrumbs if we're not on homepage
  if (pathnames.length === 0) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbList)}
      </script>
    </Helmet>
  );
};

export default BreadcrumbSchema;
