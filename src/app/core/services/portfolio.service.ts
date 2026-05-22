import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  percentage: number;
  icon?: string;
}

export interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description?: string;
  type: 'work' | 'education';
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface PricingPlan {
  tier: string;
  tagline: string;
  price: string;
  unit: string;
  features: string[];
  isFeatured?: boolean;
}

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getSkills(): Skill[] {
    return [
      { name: 'Angular', percentage: 92, icon: 'fa-brands fa-angular' },
      { name: 'Javascript', percentage: 95, icon: 'fa-brands fa-js' },
      { name: 'MongoDB', percentage: 94, icon: 'fa-solid fa-database' },
      { name: 'NodeJs', percentage: 90, icon: 'fa-brands fa-node-js' },
      { name: 'SQL', percentage: 90, icon: 'fa-solid fa-table' },
      { name: 'Typescript', percentage: 85, icon: 'fa-solid fa-code' },
    ];
  }

  getExperience(): TimelineItem[] {
    return [
      {
        title: 'Associate Frontend Developer',
        company: 'Artem HealthTech',
        period: '2024 — Present',
        description: 'Working on production-level Angular applications, implementing OTP-based authentication, optimizing with RxJS operators (finalize, takeUntil), and contributing to client-facing websites.',
        type: 'work'
      },
      {
        title: 'Frontend Developer Intern',
        company: 'Artem HealthTech',
        period: '2023 — 2024',
        description: 'Contributed to building responsive interfaces, developed secure authentication features, and improved frontend performance across multiple projects.',
        type: 'work'
      }
    ];
  }

  getEducation(): TimelineItem[] {
    return [
      {
        title: 'Bachelor of Technology (BTech) in Information & Communication Technology',
        company: 'Pandit Deendayal Energy University',
        period: '2020 — 2024',
        description: 'Graduated with focus on web technologies, software engineering, and computer networks.',
        type: 'education'
      }
    ];
  }

  getServices(): Service[] {
    return [
      {
        title: 'Frontend Development',
        description: 'Building responsive, scalable, and modern web applications using Angular, JavaScript, HTML, SCSS, and Bootstrap.',
        icon: 'fa-solid fa-laptop-code'
      },
      {
        title: 'FullStack Web Development',
        description: 'Developing full-stack applications using MongoDB, Express.js, Angular, and Node.js — from front-end design to back-end functionality.',
        icon: 'fa-solid fa-layer-group'
      },
      {
        title: 'Responsive Web Design',
        description: 'Creating fully responsive websites optimized for desktop, tablet, and mobile devices.',
        icon: 'fa-solid fa-mobile-screen'
      },
      {
        title: 'AI Integration',
        description: 'Helping businesses add smart features like AI chatbots and automated systems to improve customer interaction.',
        icon: 'fa-solid fa-robot'
      },
      {
        title: 'Website Optimization',
        description: 'Improving performance, reducing unnecessary API calls, and optimizing frontend architecture for faster load times.',
        icon: 'fa-solid fa-gauge-high'
      },
      {
        title: 'Ongoing Support & Updates',
        description: 'Providing support for improving, updating, and maintaining websites after development.',
        icon: 'fa-solid fa-headset'
      },
      {
        title: 'Custom Web Solutions',
        description: 'Developing custom features and pages based on client requirements to make their website unique and functional.',
        icon: 'fa-solid fa-wand-magic-sparkles'
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        title: 'The Grand Spice Website',
        image: 'assets/images/projects/grand-spice.png',
        tags: ['Angular'],
      },
      {
        title: 'Premium Interior Website',
        image: 'assets/images/projects/premium-interior.png',
        tags: ['Angular'],
      },
      {
        title: 'Full Stack Website',
        image: 'assets/images/projects/fullstack.png',
        tags: ['Angular', 'NodeJs', 'MongoDB'],
      }
    ];
  }

  getPricingPlans(): PricingPlan[] {
    return [
      {
        tier: 'Basic',
        tagline: 'Have design ready to build? or small budget',
        price: '$8',
        unit: '/ hours',
        features: [
          'Basic Functionality',
          'Mobile Responsive Layout',
          '2 Revisions',
          'Work in business days, no weekend.',
          'Pages: 5'
        ],
        isFeatured: false
      },
      {
        tier: 'Premium',
        tagline: "Not have any design? Leave it's for me",
        price: '$15',
        unit: '/ hours',
        features: [
          'FullStack Web Application',
          'Authentication & OTP Features',
          'Database Integration',
          'Admin Dashboard',
          'Performance Optimization',
          'Priority Support',
          'Pages: 10+'
        ],
        isFeatured: true
      }
    ];
  }
}
