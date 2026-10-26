import type { App } from './types';
import icon from '../assets/apps/flux-icon.svg?url';
import home from '../assets/apps/flux-home.jpg';
import list from '../assets/apps/flux-list.jpg';
import grid from '../assets/apps/flux-grid.jpg';
import similar from '../assets/apps/flux-similar.jpg';
import stats from '../assets/apps/flux-stats.jpg';
import settings from '../assets/apps/flux-settings.jpg';
import filters from '../assets/apps/flux-filters.jpg';

export const flux: App = {
  slug: 'flux',
  name: 'Flux',
  version: '0.3.1',
  tagline: 'A simple, good-looking RSS reader.',
  description:
    'Add your feeds, browse them as a list or a grid, and read the full article right in the app. Similar stories from several sources are grouped, and your Macs stay in sync through iCloud Drive.',
  icon,
  screenshot: home,
  screenshotAlt: 'Flux main window with a thumbnail grid and an open article',
  accent: ['#ff6a3d', '#ffb054'],
  features: [
    { label: 'Full articles', color: '#ff6a3d' },
    { label: 'Similar stories', color: '#ffb054' },
    { label: 'Offline reading', color: '#e8336b' },
    { label: 'iCloud sync', color: '#60a5fa' },
  ],
  requirements: 'macOS 14+ · RSS, Atom, JSON Feed',
  minMacOS: 'macOS 14',
  repo: 'https://github.com/Aervorn/MacOS_Flux',
  facts: [
    { label: 'Version', value: '0.3.1' },
    { label: 'Requires', value: 'macOS 14' },
    { label: 'Formats', value: 'RSS · Atom · JSON' },
    { label: 'Languages', value: 'EN · FR' },
    { label: 'License', value: 'MIT' },
  ],
  privacy:
    'Flux collects nothing and sends nothing about you. Apart from the optional sync through your own iCloud Drive, it only talks to the sites you subscribe to.',
  sections: [
    {
      id: 'overview',
      title: 'Your feeds',
      heading: 'Your feeds, your way',
      glyph: 'feed',
      color: '#ff6a3d',
      screenshot: home,
      screenshotAlt: 'Flux main window',
      summary:
        'You add your feeds yourself: no directory, no account, no recommendations. Paste a feed or just a website address, and Flux finds the feed.',
      points: [
        'Folders with their own color, icon and unread count.',
        'Rename a feed when its name is too long; the original is kept.',
        'OPML import and export, to come from NetNewsWire, Reeder or Feedly.',
      ],
    },
    {
      id: 'browse',
      title: 'Browsing',
      heading: 'A list you enjoy browsing',
      glyph: 'list',
      color: '#f59e0b',
      screenshot: list,
      screenshotAlt: 'Flux list view with thumbnails',
      summary:
        'Browse as a list with thumbnails and summaries, as a grid of images, or as full-width thumbnails where an article opens in place.',
      points: [
        'Thumbnails from the feed, the article’s first image or the page preview.',
        'Search in the title and full text of the current view.',
        'Multiple selection to mark several articles at once.',
      ],
    },
    {
      id: 'reading',
      title: 'Full articles',
      heading: 'The full article, in the app',
      glyph: 'article',
      color: '#e8336b',
      screenshot: grid,
      screenshotAlt: 'Flux full-width thumbnails with an open article',
      summary:
        'When a feed only gives an excerpt, Flux downloads the page and extracts the article with Readability, the engine behind Firefox’s Reader View.',
      points: [
        'Clean layout, light or dark, adjustable text size and width.',
        'One button switches between the feed version and the full article.',
      ],
      limits: [
        'Articles reserved for subscribers stay cut, since the site doesn’t serve the rest.',
      ],
    },
    {
      id: 'similar',
      title: 'Similar stories',
      heading: 'Similar stories, grouped',
      glyph: 'magnet',
      color: '#a855f7',
      screenshot: similar,
      screenshotAlt: 'An article grouped with the same story from other sources',
      summary:
        'When several sources publish the same story within 48 hours, Flux shows it once with a “+N” badge, and lists the other sources in the article.',
      points: [
        'Titles compared word for word and in meaning, computed on your Mac.',
        'Three sensitivity levels, or turned off.',
      ],
      limits: ['Grouping is never perfect: you can separate an article from its group.'],
    },
    {
      id: 'filters',
      title: 'Filters',
      heading: 'Keyword filters',
      glyph: 'filter',
      color: '#ef4444',
      screenshot: filters,
      screenshotAlt: 'Filter rules in Flux settings',
      summary:
        'Rules hide articles, or mark them as read, by a keyword in their title. Case and accents are ignored.',
      points: [
        'For all feeds or a single one, with a preview of how many articles a rule affects.',
        'Favorites are never filtered.',
      ],
      limits: ['Only the title is checked, not the article text.'],
    },
    {
      id: 'offline',
      title: 'Offline & favorites',
      heading: 'Offline reading and favorites',
      glyph: 'offline',
      color: '#0ea5e9',
      screenshot: settings,
      screenshotAlt: 'Reading settings in Flux',
      summary:
        'Flux can download unread articles and favorites in full, images included, so you can read without a connection.',
      points: [
        'Favorites are archived permanently, even if the site deletes the article.',
        'Old read articles are cleaned up after a delay you choose.',
        'History of the articles you opened.',
      ],
    },
    {
      id: 'stats',
      title: 'Statistics',
      heading: 'Reading statistics',
      glyph: 'chart',
      color: '#22c55e',
      screenshot: stats,
      screenshotAlt: 'Reading statistics with a chart of articles read per day',
      summary:
        'Articles read, time spent reading, a chart per day and your most read sources, over 7 days to 12 months.',
      points: ['Everything is computed and kept on your Mac.'],
    },
    {
      id: 'sync',
      title: 'Sync',
      heading: 'Sync between Macs',
      glyph: 'sync',
      color: '#3b82f6',
      summary:
        'Turn on sync on each Mac to keep feeds, folders, names, filter rules, read articles and favorites in sync through your own iCloud Drive.',
      points: [
        'When something changed on both Macs, the most recent change wins, item by item.',
        'Settings, history, statistics and images stay local to each Mac.',
      ],
      limits: ['iCloud Drive must be turned on; changes usually arrive within a minute.'],
    },
    {
      id: 'keyboard',
      title: 'Shortcuts',
      heading: 'Keyboard shortcuts, Reeder style',
      glyph: 'keyboard',
      color: '#64748b',
      summary: 'Read your feeds without touching the mouse.',
      points: [
        'j / k: next / previous article · Space: scroll, then next article',
        'm: read / unread · s: favorite · b: open in browser',
        '⌘R: refresh · ⇧⌘K: mark all as read · ⌘+ / ⌘−: text size',
      ],
    },
  ],
};
