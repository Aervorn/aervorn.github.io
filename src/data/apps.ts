// The apps shown on the site. Add an entry here and it appears on the home page.
import type { ImageMetadata } from 'astro';
import navloomIcon from '../assets/apps/navloom-icon.svg?url';
import fluxIcon from '../assets/apps/flux-icon.svg?url';
import navloomHome from '../assets/apps/navloom-home.png';
import fluxHome from '../assets/apps/flux-home.jpg';

export interface App {
  slug: string;
  name: string;
  version: string;
  tagline: string;
  description: string;
  icon: string;
  screenshot: ImageMetadata;
  screenshotAlt: string;
  /** Accent pair used for the card glow, border and button */
  accent: [string, string];
  features: { label: string; color: string }[];
  requirements: string;
  repo: string;
}

export const apps: App[] = [
  {
    slug: 'navloom',
    name: 'Navloom',
    version: '0.1.1',
    tagline: 'Keep your browser bookmarks and tabs in shape.',
    description:
      'Brings back missing favicons, finds duplicates and dead links, copies bookmarks between browsers with their icons, and moves open tabs around. A backup comes before every change.',
    icon: navloomIcon,
    screenshot: navloomHome,
    screenshotAlt: 'Navloom home screen listing its tools',
    accent: ['#a78bfa', '#60a5fa'],
    features: [
      { label: 'FaviconSync', color: '#fb923c' },
      { label: 'Twins', color: '#60a5fa' },
      { label: 'Ghosts', color: '#4ade80' },
      { label: 'Echo', color: '#facc15' },
      { label: 'Ferry', color: '#a78bfa' },
    ],
    requirements: 'macOS 14.6+ · Chromium browsers',
    repo: 'https://github.com/Aervorn/MacOS_Navloom',
  },
  {
    slug: 'flux',
    name: 'Flux',
    version: '0.3.1',
    tagline: 'A simple, good-looking RSS reader.',
    description:
      'Add your feeds, browse them as a list or a grid, and read the full article right in the app. Similar stories from several sources are grouped, and your Macs stay in sync through iCloud Drive.',
    icon: fluxIcon,
    screenshot: fluxHome,
    screenshotAlt: 'Flux main window with a thumbnail grid and an open article',
    accent: ['#ff6a3d', '#ffb054'],
    features: [
      { label: 'Full articles', color: '#ff6a3d' },
      { label: 'Similar stories', color: '#ffb054' },
      { label: 'Offline reading', color: '#e8336b' },
      { label: 'iCloud sync', color: '#60a5fa' },
    ],
    requirements: 'macOS 14+ · RSS, Atom, JSON Feed',
    repo: 'https://github.com/Aervorn/MacOS_Flux',
  },
];
