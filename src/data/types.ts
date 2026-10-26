import type { ImageMetadata } from 'astro';
import type { T } from '../i18n/config';

/** Name of a glyph drawn by components/Glyph.astro */
export type GlyphName =
  | 'home' | 'star' | 'twins' | 'ghost' | 'echo' | 'ferry' | 'archive'
  | 'feed' | 'list' | 'article' | 'magnet' | 'filter' | 'chart' | 'offline' | 'sync' | 'keyboard';

/** One entry of the sidebar in the app window */
export interface AppSection {
  id: string;            // used in the URL: /navloom#twins
  title: T;              // sidebar label
  heading: T;            // title shown in the pane
  glyph: GlyphName;
  color: string;         // sidebar icon background
  screenshot?: T<ImageMetadata>;
  screenshotAlt?: T;
  summary: T;
  points: T<string[]>;
  limits?: T<string[]>;
}

export interface App {
  slug: string;
  name: string;
  /** Where it runs: a Mac app (DMG download) or a self-hosted tool (Docker) */
  platform: 'mac' | 'server';
  version: string;
  tagline: T;
  description: T;
  icon: string;
  screenshot: T<ImageMetadata>;
  screenshotAlt: T;
  /** Accent pair used for glows, borders and buttons */
  accent: [string, string];
  /** Text color on accent-colored buttons (default white) */
  onAccent?: string;
  features: { label: T; color: string }[];
  requirements: T;
  /** Shown above the compatibility table, e.g. 'macOS 14.6' */
  minMacOS?: string;
  repo: string;
  sections: AppSection[];
  /** Optional compatibility table: cells are 'yes', 'no', or 'yes¹' with a note mark */
  compatibility?: { columns: string[]; rows: { label: string; cells: string[] }[]; notes?: T<string[]> };
  /** Short facts shown under the page title */
  facts: { label: T; value: string }[];
  privacy: T;
}
