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
  REACT: { name: 'React', class: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300', icon: React },
  NEXT: { name: 'Next.js', class: 'bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-200', icon: Next },
  TAILWIND: { name: 'Tailwind', class: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300', icon: Tailwind },
  EXPRESS: { name: 'Express', class: 'bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-200', icon: Express },
  TYPESCRIPT: { name: 'TypeScript', class: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', icon: Typescript },
  TYPEORM: { name: 'TypeORM', class: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300', icon: TypeORm },
  NESTJS: { name: 'NestJS', class: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300', icon: Nestjs },
};

export function getProjects(lang: 'es' | 'en') {
  const t = useTranslations(lang) as any;
  
  return {
    frontend: [
      {
        title: t('proj_fe_1_title'),
        description: t('proj_fe_1_desc'),
        tags: [TAGS.REACT, TAGS.NEXT, TAGS.TAILWIND],
        github: 'https://github.com/JosemAVSG/manu_portfolio',
        image: '/ManuPortfolio.webp',
      },
      {
        title: t('proj_fe_2_title'),
        description: t('proj_fe_2_desc'),
        tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.TYPESCRIPT],
        github: 'https://github.com/JosemAVSG/Sistema-de-inventario-Client',
        image: '/inventory.webp',
      },
    ],
    backend: [
      {
        title: t('proj_be_1_title'),
        description: t('proj_be_1_desc'),
        tags: [TAGS.NESTJS, TAGS.TYPEORM, TAGS.TYPESCRIPT],
        github: 'https://github.com/JosemAVSG/PM4-JosemAVSG',
        image: '/EcommerceApi.webp',
      },
      {
        title: t('proj_be_2_title'),
        description: t('proj_be_2_desc'),
        tags: [TAGS.EXPRESS, TAGS.TYPESCRIPT, TAGS.REACT],
        github: 'https://github.com/JosemAVSG/Sistema-de-Citas-PetCare',
        image: '/Petcare.webp',
      },
    ],
    devops: [
      {
        title: t('proj_dev_1_title'),
        description: t('proj_dev_1_desc'),
        tags: [
          { name: 'Docker', class: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', icon: null as any },
          { name: 'AWS', class: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300', icon: null as any },
          { name: 'CI/CD', class: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', icon: null as any },
        ],
        github: '#',
        image: '/EcommerceApi.webp',
      },
    ],
  };
}