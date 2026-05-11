import { useTranslations } from '../i18n/utils';

export function getExperience(lang: 'es' | 'en') {
  const t = useTranslations(lang) as any;
  
  return [
    {
      year: '2024 - Actual',
      title: 'Frontend Developer Junior',
      company: 'Agrimanager S.A.S',
      description: t('exp_frontend_desc'),
      href: 'https://www.linkedin.com/company/agrimanagerco/mycompany',
    },
    {
      year: '2024 - Actual',
      title: 'Full Stack Teaching Assistant',
      company: 'Henrry Bootcamp',
      description: t('exp_ta_desc'),
      href: '#',
    },
    {
      year: '2023 - 2024',
      title: 'Técnico en Reparación',
      company: 'ABC Accesorios',
      description: t('exp_tech_desc'),
      href: '#',
    },
    {
      year: '2019 - 2023',
      title: 'IT Analyst',
      company: 'Alcaldía del Municipio Caripe',
      description: t('exp_it_desc'),
      href: '#',
    },
  ];
}