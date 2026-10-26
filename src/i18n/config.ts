// Languages of the site. English lives at /, French at /fr/.
export const languages = { en: 'English', fr: 'Français' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const langs = Object.keys(languages) as Lang[];

/** A text in every language */
export type T<V = string> = Record<Lang, V>;

/** Language of a URL: /fr/… is French, everything else English */
export function langFromPath(pathname: string): Lang {
  return pathname === '/fr' || pathname.startsWith('/fr/') ? 'fr' : 'en';
}

/** Path of a page in a language: localePath('fr', '/blog') → '/fr/blog' */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** Same page in the other language, by swapping the /fr prefix */
export function switchLangPath(pathname: string, to: Lang): string {
  const base = pathname.replace(/^\/fr(?=\/|$)/, '') || '/';
  return localePath(to, base);
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
