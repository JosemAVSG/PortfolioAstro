import es from './es.json';
import en from './en.json';

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const translations = {
  es,
  en,
} as const;

export type Lang = keyof typeof languages;
export type TranslationKey = (keyof typeof es) | string;

// First professional role (Alcaldía de Caripe, Feb 2021). Evaluated at build time.
const CAREER_START = new Date(2021, 1, 1);

export function yearsOfExperience(now: Date = new Date()): number {
  const months = (now.getFullYear() - CAREER_START.getFullYear()) * 12 + (now.getMonth() - CAREER_START.getMonth());
  return Math.max(0, Math.floor(months / 12));
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    const dict = translations[lang] as Record<string, string>;
    const fallback = translations.es as Record<string, string>;
    const value = dict[key] || fallback[key] || key;
    return value.replace('{years}', String(yearsOfExperience()));
  };
}

export function getLang(request: Request): Lang {
  // 1. Primero: cookies (del LangToggle)
  const cookies = Object.fromEntries(
    request.headers.get('cookie')?.split('; ').map(c => c.split('=')) || []
  );
  
  if (cookies['lang'] === 'es' || cookies['lang'] === 'en') {
    return cookies['lang'];
  }

  // 2. Segundo: Accept-Language header del navegador
  const acceptLang = request.headers.get('accept-language');
  if (acceptLang?.startsWith('en')) {
    return 'en';
  }

  // 3. Default
  return 'es';
}