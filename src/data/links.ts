// Categories and license tags of the Links page (src/content/links).
import type { T } from '../i18n/config';

export const linkCategories = {
  'self-hosted': { label: { en: 'self-hosted', fr: 'self-hosted' }, color: 'var(--navloom)' },
  network: { label: { en: 'network', fr: 'réseau' }, color: 'var(--teal)' },
  macos: { label: { en: 'macOS', fr: 'macOS' }, color: 'var(--flux)' },
  security: { label: { en: 'security', fr: 'sécurité' }, color: 'var(--navloom-2)' },
  dev: { label: { en: 'dev', fr: 'dev' }, color: 'var(--flux-2)' },
} satisfies Record<string, { label: T; color: string }>;

export const linkTags = {
  'open-source': { label: { en: 'Open-Source', fr: 'Open-Source' }, color: '#2dd4bf' },
  free: { label: { en: 'Free', fr: 'Gratuit' }, color: '#a78bfa' },
  freemium: { label: { en: 'Freemium', fr: 'Freemium' }, color: '#ffb054' },
  commercial: { label: { en: 'Commercial', fr: 'Commercial' }, color: '#ff6a3d' },
  subscription: { label: { en: 'Subscription', fr: 'Abonnement' }, color: '#ff6a3d' },
  'self-hosted': { label: { en: 'Self-hosted', fr: 'Self-hosted' }, color: '#60a5fa' },
} satisfies Record<string, { label: T; color: string }>;

export type LinkCategory = keyof typeof linkCategories;
export type LinkTag = keyof typeof linkTags;
export const linkCategoryIds = Object.keys(linkCategories) as [LinkCategory, ...LinkCategory[]];
export const linkTagIds = Object.keys(linkTags) as [LinkTag, ...LinkTag[]];
