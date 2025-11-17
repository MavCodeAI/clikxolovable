import { LucideIcon, Code, Smartphone, Palette, TrendingUp, Globe, Search, Megaphone, Zap } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  icon: LucideIcon;
  features: string[];
  gradient: string;
  delay: number;
}

export const servicesData: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom web applications built with modern technologies and responsive design for optimal performance.',
    fullDescription: 'Transform your business vision into powerful, scalable web applications. We specialize in modern web technologies including React, Next.js, and Node.js, delivering high-performance solutions that drive real results and user engagement.',
    iconName: 'code',
    icon: Code,
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'API Development',
      'Performance Optimization'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0,
  },
  {
    id: 'app-development',
    title: 'App Development',
    shortDescription: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    fullDescription: 'Create engaging mobile experiences that your customers love. Our team develops native iOS and Android apps, as well as cross-platform solutions using React Native, ensuring seamless performance across all devices.',
    iconName: 'smartphone',
    icon: Smartphone,
    features: [
      'Native iOS/Android Apps',
      'Cross-Platform Solutions',
      'App Store Optimization',
      'UI/UX Design',
      'Maintenance & Support'
    ],
    gradient: 'from-purple-500 to-pink-500',
    delay: 150,
  },
  {
    id: 'graphics-design',
    title: 'Graphics Design',
    shortDescription: 'Professional branding, logos, and marketing materials designed to make your business stand out.',
    fullDescription: 'Elevate your brand identity with stunning visual design. From logos and brand guidelines to marketing materials and social media graphics, we create cohesive visual experiences that capture your brand essence and connect with your audience.',
    iconName: 'palette',
    icon: Palette,
    features: [
      'Logo & Brand Identity',
      'Marketing Materials',
      'Social Media Graphics',
      'Print Design',
      'Brand Guidelines'
    ],
    gradient: 'from-orange-500 to-red-500',
    delay: 300,
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Data-driven marketing strategies to increase visibility and drive growth for your business online.',
    fullDescription: 'Accelerate your business growth with comprehensive digital marketing strategies. Our data-driven approach combines SEO, content marketing, social media, and paid advertising to maximize your online presence and ROI.',
    iconName: 'trending-up',
    icon: TrendingUp,
    features: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Strategy',
      'Paid Advertising',
      'Analytics & Reporting'
    ],
    gradient: 'from-emerald-500 to-teal-500',
    delay: 450,
  },
  {
    id: 'seo-optimization',
    title: 'SEO & Analytics',
    shortDescription: 'Advanced search engine optimization and data analytics to boost your online visibility and track performance.',
    fullDescription: 'Dominate search rankings and understand your audience better. Our SEO experts and data analysts work together to optimize your online presence, improve search rankings, and provide actionable insights through comprehensive analytics.',
    iconName: 'search',
    icon: Search,
    features: [
      'Technical SEO',
      'Local SEO',
      'Google Analytics',
      'Performance Tracking',
      'Monthly Reporting'
    ],
    gradient: 'from-indigo-500 to-blue-600',
    delay: 600,
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    shortDescription: 'Strategic social media management and content creation to build your brand presence and engage your audience.',
    fullDescription: 'Build meaningful connections with your audience across social platforms. We manage your social media presence, create engaging content, run targeted campaigns, and analyze performance to help you grow your brand and drive engagement.',
    iconName: 'megaphone',
    icon: Megaphone,
    features: [
      'Content Creation',
      'Social Strategy',
      'Community Management',
      'Paid Social Ads',
      'Engagement Analytics'
    ],
    gradient: 'from-pink-500 to-rose-500',
    delay: 750,
  }
];

export const additionalServices = [
  {
    title: 'Performance Marketing',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-600'
  },
  {
    title: 'E-commerce Solutions',
    icon: Globe,
    gradient: 'from-green-500 to-emerald-600'
  }
];
