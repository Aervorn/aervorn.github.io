import type { App } from './types';
import icon from '../assets/apps/navloom-icon.svg?url';
import home from '../assets/apps/navloom-home.png';
import faviconsync from '../assets/apps/navloom-faviconsync.png';
import twins from '../assets/apps/navloom-twins.png';
import ghosts from '../assets/apps/navloom-ghosts.png';
import echo from '../assets/apps/navloom-echo.png';
import ferry from '../assets/apps/navloom-ferry.png';
import backups from '../assets/apps/navloom-backups.png';

export const navloom: App = {
  slug: 'navloom',
  name: 'Navloom',
  version: '0.1.1',
  tagline: 'Keep your browser bookmarks and tabs in shape.',
  description:
    'Brings back missing favicons, finds duplicates and dead links, copies bookmarks between browsers with their icons, and moves open tabs around. A backup comes before every change.',
  icon,
  screenshot: home,
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
  minMacOS: 'macOS 14.6',
  repo: 'https://github.com/Aervorn/MacOS_Navloom',
  facts: [
    { label: 'Version', value: '0.1.1' },
    { label: 'Requires', value: 'macOS 14.6' },
    { label: 'Tools', value: '5' },
    { label: 'Languages', value: 'EN · FR' },
    { label: 'License', value: 'MIT' },
  ],
  privacy:
    'Navloom collects nothing and sends nothing about you. The only network requests are those of FaviconSync and Ghosts, sent straight to the websites of your own bookmarks.',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      heading: 'A small toolbox for your bookmarks',
      glyph: 'home',
      color: '#0a84ff',
      screenshot: home,
      screenshotAlt: 'Navloom home screen',
      summary:
        'Navloom works on the files of your Chromium browsers, right on your Mac. Pick a browser and a profile, run an analysis, review the results, then decide what to change.',
      points: [
        'Analyses never change anything: you always review before writing.',
        'Every write is preceded by a backup you can restore in one click.',
        'Native SwiftUI interface, in English and French.',
      ],
    },
    {
      id: 'faviconsync',
      title: 'FaviconSync',
      heading: 'Bring back missing favicons',
      glyph: 'star',
      color: '#fb923c',
      screenshot: faviconsync,
      screenshotAlt: 'FaviconSync results sorted into fetched, no favicon and failures',
      summary:
        'After switching browsers or importing bookmarks, many end up without an icon. FaviconSync finds them, fetches the icons from the websites and writes them into the browser’s icon database.',
      points: [
        'Results sorted into fetched, no favicon (the site has none) and failures, with the reason for each.',
        'Tries favicon.ico first, then the icons declared in the page.',
        'Exports a text report.',
      ],
      limits: [
        'The browser must be fully closed (⌘Q) to write.',
        'Sites that need a sign-in, or declare their icon only through JavaScript, stay without an icon.',
      ],
    },
    {
      id: 'twins',
      title: 'Twins',
      heading: 'Find duplicate bookmarks',
      glyph: 'twins',
      color: '#3b82f6',
      screenshot: twins,
      screenshotAlt: 'Twins grouping bookmarks with the same URL',
      summary: 'Twins groups the bookmarks that point to exactly the same URL and deletes the copies you check.',
      points: [
        'One copy of each group always stays: you can’t delete them all by mistake.',
        'A shortcut keeps the first bookmark of each group and checks the others.',
      ],
      limits: [
        'The browser must be closed and its bookmark sync turned off, or it brings deleted bookmarks back.',
        'URLs that differ slightly (http/https, www, trailing /) are not duplicates.',
      ],
    },
    {
      id: 'ghosts',
      title: 'Ghosts',
      heading: 'Spot dead links',
      glyph: 'ghost',
      color: '#22c55e',
      screenshot: ghosts,
      screenshotAlt: 'Ghosts listing dead, to check and redirected bookmarks',
      summary:
        'Ghosts checks whether each bookmark still responds and sorts the problems into dead, to check and redirected.',
      points: [
        'Dead: page not found (404/410) or domain gone.',
        'To check: timeout, server error, invalid certificate.',
        'Double-click a result to open it, then delete the ones you check.',
      ],
      limits: [
        'Some sites answer “not found” to visitors who aren’t signed in: always check before deleting.',
      ],
    },
    {
      id: 'echo',
      title: 'Echo',
      heading: 'Copy bookmarks between browsers',
      glyph: 'echo',
      color: '#eab308',
      screenshot: echo,
      screenshotAlt: 'Echo comparing a source and a target browser',
      summary:
        'Browsers import each other’s bookmarks but often lose their icons. Echo copies the bookmarks of a source browser into a target browser, icons included.',
      points: [
        'Add missing: the target keeps everything, only missing bookmarks are added.',
        'Full copy: the target becomes identical to the source.',
        'Choose which URL variants count as identical (http/https, www, parameters).',
      ],
      limits: [
        'One source and one target at a time; the target must be closed with sync turned off to write.',
      ],
    },
    {
      id: 'ferry',
      title: 'Ferry',
      heading: 'Move open tabs around',
      glyph: 'ferry',
      color: '#8b5cf6',
      screenshot: ferry,
      screenshotAlt: 'Ferry listing the open tabs of several browsers',
      summary:
        'Ferry gathers the open tabs of all your running browsers in one list, by browser, window, profile and workspace, and reopens the ones you check in another browser.',
      points: [
        'Keeps the window layout, or puts everything in a single window.',
        'Optionally closes the originals, only once their copy is found in the target.',
        'Private windows are hidden by default.',
      ],
      limits: [
        'Workspaces can’t be recreated in the target: each one opens in its own window.',
        'macOS asks you to allow Navloom to control each browser the first time.',
      ],
    },
    {
      id: 'backups',
      title: 'Backups',
      heading: 'A backup before every change',
      glyph: 'archive',
      color: '#14b8a6',
      screenshot: backups,
      screenshotAlt: 'Backups screen listing backups by tool',
      summary:
        'Every write is preceded by a backup of the file it modifies. The Backups screen lists them by tool and restores any of them in one click.',
      points: [
        'The current state is itself backed up before a restore.',
        'Old backups are cleaned up automatically and go to the Trash, never deleted outright.',
      ],
    },
  ],
  compatibility: {
    columns: ['FaviconSync', 'Twins', 'Ghosts', 'Echo', 'Ferry'],
    rows: [
      { label: 'Chrome · Beta · Canary', cells: ['yes', 'yes¹', 'yes¹', 'yes', 'yes'] },
      { label: 'Edge · Beta · Dev · Canary', cells: ['yes', 'yes', 'yes', 'yes', 'yes'] },
      { label: 'Brave · Beta · Nightly', cells: ['yes', 'yes', 'yes', 'yes', 'yes'] },
      { label: 'Vivaldi · Snapshot', cells: ['yes', 'yes', 'yes', 'yes', 'yes'] },
      { label: 'Opera · Developer · GX · Air', cells: ['yes', 'yes', 'yes', 'yes', 'yes'] },
      { label: 'Chromium', cells: ['yes', 'yes', 'yes', 'yes', 'yes'] },
      { label: 'Arc, Safari, Firefox', cells: ['no', 'no', 'no', 'no', 'no'] },
    ],
    notes: [
      '¹ Bookmarks saved in your Google Account are shown but can’t be deleted from Navloom.',
      'Chrome, Edge and Brave need Full Disk Access to appear in Navloom.',
    ],
  },
};
