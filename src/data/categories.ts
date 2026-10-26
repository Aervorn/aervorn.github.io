// Blog categories. To add one: add it here and give it a color in global.css.
import type { T } from '../i18n/config';

export const categories = {
  'home-automation': { label: { en: 'Home automation', fr: 'Domotique' } },
  macos: { label: { en: 'macOS', fr: 'macOS' } },
  'making-of': { label: { en: 'Making of', fr: 'Coulisses' } },
  dev: { label: { en: 'Dev', fr: 'Dev' } },
} satisfies Record<string, { label: T }>;

export type CategoryId = keyof typeof categories;
export const categoryIds = Object.keys(categories) as [CategoryId, ...CategoryId[]];
