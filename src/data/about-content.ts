import { LucideIcon, Briefcase, Users, Trophy, Clock, Globe, Mail, Phone, MapPin } from 'lucide-react';

export interface MissionVision {
  id: string;
  type: 'mission' | 'vision';
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

export interface Achievement {
  id: string;
  number: string;
  label: string;
  icon: LucideIcon;
  suffix?: string;
  gradient: string;
  delay: number;
}

export interface WhyChooseUs {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  delay: number;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  delay: number;
}

export const aboutContent = {
  hero: {
    title: "About ClikXo Studio",
    subtitle: "Crafting Digital Excellence Through Innovation & Expertise",
    description: "Founded in 2020, ClikXo Studio has emerged as Dubai's premier digital transformation partner, blending cutting-edge technology with creative brilliance to help businesses thrive in the modern digital landscape."
  },
  backstory: {
    title: "Our Journey",
    description: "What started as a passionate vision to bridge the gap between technology and creative design has evolved into Dubai's most trusted digital agency. Our team of expert developers, designers, and strategists has been at the forefront of digital innovation, delivering solutions that not only meet client expectations but exceed them.",
    highlights: [
      "Founded in 2020 with a vision for digital excellence",
      "Over 500+ successful projects completed globally",
      "Expert team of 50+ specialists across disciplines",
      "Serving clients in Dubai, UAE and internationally"
    ]
  }
};

export const missionVisionData: MissionVision[] = [
  {
    id: 'mission',
    type: 'mission',
    icon: Briefcase,
    title: 'Our Mission',
    description: 'To empower businesses of all sizes with transformative digital solutions that drive growth, enhance user experiences, and create lasting competitive advantages in the digital age.',
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0,
  },
  {
    id: 'vision',
    type: 'vision',
    icon: Globe,
    title: 'Our Vision',
    description: 'To be the leading force in digital innovation across the Middle East, recognized globally for our commitment to excellence, creativity, and measurable results.',
    gradient: 'from-purple-500 to-pink-500',
    delay: 200,
  }
];

export const achievementsData: Achievement[] = [
  {
    id: 'projects',
    number: '500+',
    label: 'Projects Completed',
    icon: Briefcase,
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0,
  },
  {
    id: 'clients',
    number: '98%',
    label: 'Client Satisfaction',
    icon: Users,
    suffix: '%',
    gradient: 'from-emerald-500 to-teal-500',
    delay: 150,
  },
  {
    id: 'awards',
    number: '25+',
    label: 'Awards Won',
    icon: Trophy,
    gradient: 'from-orange-500 to-red-500',
    delay: 300,
  },
  {
    id: 'experience',
    number: '4+',
    label: 'Years of Excellence',
    icon: Clock,
    gradient: 'from-indigo-500 to-purple-600',
    delay: 450,
  }
];

export const whyChooseUsData: WhyChooseUs[] = [
  {
    id: 'expertise',
    title: 'Proven Expertise',
    description: 'Our team combines years of industry experience with cutting-edge technological knowledge to deliver solutions that stand the test of time.',
    icon: Trophy,
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0,
  },
  {
    id: 'innovation',
    title: 'Future-Ready Innovation',
    description: 'We stay ahead of industry trends, implementing the latest technologies and methodologies to ensure your business remains competitive.',
    icon: Briefcase,
    gradient: 'from-purple-500 to-pink-500',
    delay: 150,
  },
  {
    id: 'support',
    title: '24/7 Support & Maintenance',
    description: 'Our commitment extends beyond project completion with ongoing support, updates, and maintenance to ensure your success continues.',
    icon: Users,
    gradient: 'from-emerald-500 to-teal-500',
    delay: 300,
  },
  {
    id: 'results',
    title: 'Measurable Results',
    description: 'Every project is designed with clear objectives and KPIs to ensure tangible results and maximum return on your investment.',
    icon: Trophy,
    gradient: 'from-orange-500 to-red-500',
    delay: 450,
  }
];

export const capabilitiesData: Capability[] = [
  {
    id: 'strategy',
    title: 'Digital Strategy',
    description: 'Strategic planning and consulting to align your digital initiatives with business goals.',
    icon: Briefcase,
    gradient: 'from-indigo-500 to-purple-500',
    delay: 0,
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that elevate brand experience and drive conversions.',
    icon: Trophy,
    gradient: 'from-pink-500 to-rose-500',
    delay: 150,
  },
  {
    id: 'development',
    title: 'Full-Stack Development',
    description: 'End-to-end development services from mobile apps to complex web applications.',
    icon: Clock,
    gradient: 'from-emerald-500 to-teal-500',
    delay: 300,
  }
];

export const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+971 44318653',
    href: 'tel:+97144318653',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@clikxo.com',
    href: 'mailto:info@clikxo.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dubai, UAE',
    href: '#contact',
  },
];
