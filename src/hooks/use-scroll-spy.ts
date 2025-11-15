import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, activeSection, offset]);

  return activeSection;
};

export default useScrollSpy;
