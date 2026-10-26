import type { ImageMetadata } from 'astro';

/** Name of a glyph drawn by components/Glyph.astro */
export type GlyphName =
  | 'home' | 'star' | 'twins' | 'ghost' | 'echo' | 'ferry' | 'archive'
  | 'feed' | 'list' | 'article' | 'magnet' | 'filter' | 'chart' | 'offline' | 'sync' | 'keyboard';

/** One entry of the sidebar in the app window */
export interface AppSection {
  id: string;            // used in the URL: /navloom#twins
  title: string;         // sidebar label
  heading: string;       // title shown in the pane
  glyph: GlyphName;
  color: string;         // sidebar icon background
  screenshot?: ImageMetadata;
  screenshotAlt?: string;
  summary: string;
  points: string[];
  limits?: string[];
}

export interface App {
  slug: string;
  name: string;
  version: string;
  tagline: string;
  description: string;
  icon: string;
  screenshot: ImageMetadata;
  screenshotAlt: string;
  /** Accent pair used for glows, borders and buttons */
  accent: [string, string];
  features: { label: string; color: string }[];
  requirements: string;
  minMacOS: string;
  repo: string;
  sections: AppSection[];
  /** Optional compatibility table: first column = row label */
  compatibility?: { columns: string[]; rows: { label: string; cells: string[] }[]; notes?: string[] };
  /** Short facts shown under the page title */
  facts: { label: string; value: string }[];
  privacy: string;
}
