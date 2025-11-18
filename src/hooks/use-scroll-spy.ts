import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + offset;
      const currentSection = sectionIds.find((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const { offsetTop, offsetHeight } = element;
        return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
      });

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveSection(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, activeSection, offset]);

  return activeSection;
};

export default useScrollSpy;
