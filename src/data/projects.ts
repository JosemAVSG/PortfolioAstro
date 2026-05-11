import { useTranslations } from '../i18n/utils';
import type { TechTag } from '../types/molecules';
import React from '../icons/React.astro';
import Next from '../icons/Next.astro';
import Tailwind from '../icons/Tailwind.astro';
import Express from '../icons/Express.astro';
import Typescript from '../icons/Typescript.astro';
import TypeORm from '../icons/TypeORm.astro';
import Nestjs from '../icons/Nestjs.astro';

const TAGS: Record<string, TechTag> = {
  REACT: { name: 'React', class: 'bg-[#003159] text-white', icon: React },
  NEXT: { name: 'Next.js', class: 'bg-black text-white', icon: Next },
  TAILWIND: { name: 'Tailwindcss', class: 'bg-[#003159] text-white', icon: Tailwind },
  EXPRESS: { name: 'Express', class: 'bg-black text-white', icon: Express },
  TYPESCRIPT: { name: 'Typescript', class: 'bg-white/10', icon: Typescript },
  TYPEORM: { name: 'TypeORM', class: 'bg-white/10', icon: TypeORm },
  NESTJS: { name: 'Nestjs', class: 'bg-white/10', icon: Nestjs },
};

export function getProjects(lang: 'es' | 'en') {
  const t = useTranslations(lang) as any;
  
  return [
    {
      title: 'Portfolio',
      description: t('proj_portfolio_desc'),
      tags: [TAGS.REACT, TAGS.NEXT, TAGS.TAILWIND],
      github: 'https://github.com/JosemAVSG/manu_portfolio',
      link: '',
      image: '/ManuPortfolio.webp',
    },
    {
      title: 'Sistema de Gestión de Citas',
      description: t('proj_citas_desc'),
      tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.EXPRESS],
      github: 'https://github.com/JosemAVSG/Sistema-de-Citas-PetCare',
      link: 'https://sistema-de-citas-pet-care.vercel.app',
      image: '/Petcare.webp',
    },
    {
      title: 'Sistema de Inventario',
      description: t('proj_inventario_desc'),
      tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.EXPRESS],
      github: 'https://github.com/JosemAVSG/Sistema-de-inventario-Client',
      link: 'https://sistema-de-inventario-client.vercel.app/',
      image: '/inventory.webp',
    },
    {
      title: 'E-commerce Backend',
      description: t('proj_ecommerce_desc'),
      tags: [TAGS.TYPEORM, TAGS.TYPESCRIPT, TAGS.NESTJS],
      github: 'https://github.com/JosemAVSG/PM4-JosemAVSG',
      link: 'https://nest-demo-latest-plw3.onrender.com/api',
      image: '/EcommerceApi.webp',
    },
  ];
}