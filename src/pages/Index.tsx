import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";
import { lazy, Suspense, useEffect, useRef, useState } from "react";

// Lazy-load below-the-fold sections when they enter the viewport
const TrustedBrands = lazy(() => import("@/components/TrustedBrands"));
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Team = lazy(() => import("@/components/Team"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Contact = lazy(() => import("@/components/Contact"));

const Placeholder = ({ className }: { className?: string }) => (
  <div className={className ?? "min-h-[300px]"} aria-hidden="true" />
);

const LazyMount = ({
  children,
  rootMargin = "300px",
  minHeight = "min-h-[300px]",
}: {
  children: React.ReactNode;
  rootMargin?: string;
  minHeight?: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || mounted) return;
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [mounted, rootMargin]);

  return <div ref={ref}>{mounted ? children : <Placeholder className={minHeight} />}</div>;
};

const Index = () => {
  return (
    <>
      <SEO 
        title="Top Digital Agency in Dubai | Web & App Development | ClikXo"
        description="Dubai's leading digital solutions provider offering custom web development, mobile apps, and result-driven marketing strategies for UAE businesses."
        url="https://clikxo.com/"
        image="https://clikxo.com/og-image-dubai.jpg"
        alternateHreflangs={[{ hreflang: 'ar-AE', href: 'https://clikxo.com/ar' }]}
      />
      <StructuredData />
      <SkipToContent />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Suspense fallback={<Placeholder className="min-h-[200px]" />}> 
            <LazyMount rootMargin="400px" minHeight="min-h-[160px]">
              <TrustedBrands />
            </LazyMount>
          </Suspense>
          <Suspense fallback={<Placeholder className="min-h-[300px]" />}> 
            <LazyMount rootMargin="500px">
              <Services />
            </LazyMount>
          </Suspense>
          <Suspense fallback={<Placeholder className="min-h-[300px]" />}> 
            <LazyMount rootMargin="500px">
              <About />
            </LazyMount>
          </Suspense>
          <Suspense fallback={<Placeholder className="min-h-[300px]" />}> 
            <LazyMount rootMargin="500px">
              <Team />
            </LazyMount>
          </Suspense>
          <Suspense fallback={<Placeholder className="min-h-[300px]" />}> 
            <LazyMount rootMargin="500px">
              <Testimonials />
            </LazyMount>
          </Suspense>
          <Suspense fallback={<Placeholder className="min-h-[300px]" />}> 
            <LazyMount rootMargin="600px">
              <Portfolio />
            </LazyMount>
          </Suspense>
          <Suspense fallback={<Placeholder className="min-h-[300px]" />}> 
            <LazyMount rootMargin="700px">
              <Contact />
            </LazyMount>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
