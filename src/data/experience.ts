import { useTranslations } from '../i18n/utils';

export function getExperience(lang: 'es' | 'en') {
  const t = useTranslations(lang) as any;
  
  return [
    {
      period: 'Sep 2024 - Actual',
      role: t('exp_role_agrimanager'),
      company: 'Agrimanager',
      contract: t('exp_contract_services'),
      location: 'Medellín, Colombia',
      highlights: [t('exp_hl_agrimanager_1'), t('exp_hl_agrimanager_2'), t('exp_hl_agrimanager_3')],
      type: 'work',
      tags: ['React', 'TypeScript', 'Zustand', 'REST APIs', 'Git'],
    },
    {
      period: 'Sep 2024 - Actual',
      role: t('exp_role_astrolle'),
      company: 'Astrolle (USA)',
      contract: t('exp_contract_services'),
      location: 'Miami, USA',
      highlights: [t('exp_hl_astrolle_1'), t('exp_hl_astrolle_2'), t('exp_hl_astrolle_3')],
      type: 'work',
      tags: ['React', 'TypeScript', 'Micro Frontends', 'REST APIs'],
    },
    {
      period: 'Feb 2023 - Sep 2024',
      role: t('exp_role_abc'),
      company: 'ABC Accesorios',
      location: 'Cali, Colombia',
      description: t('exp_desc_abc'),
      type: 'work',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN'],
    },
    {
      period: 'Feb 2021 - Feb 2023',
      role: t('exp_role_alcaldia'),
      company: 'Alcaldía de Caripe',
      location: 'Monagas, Venezuela',
      description: t('exp_desc_alcaldia'),
      type: 'work',
      tags: ['Java', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    },
  ];
}