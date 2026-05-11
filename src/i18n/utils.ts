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
export type TranslationKey = keyof typeof es;

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return translations[lang][key] || translations.es[key];
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