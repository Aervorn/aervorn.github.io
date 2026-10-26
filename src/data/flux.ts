import type { App } from './types';
import icon from '../assets/apps/flux-icon.svg?url';
import home from '../assets/apps/flux-home.jpg';
import homeFr from '../assets/apps/flux-home-fr.jpg';
import list from '../assets/apps/flux-list.jpg';
import listFr from '../assets/apps/flux-list-fr.jpg';
import grid from '../assets/apps/flux-grid.jpg';
import gridFr from '../assets/apps/flux-grid-fr.jpg';
import similar from '../assets/apps/flux-similar.jpg';
import similarFr from '../assets/apps/flux-similar-fr.jpg';
import stats from '../assets/apps/flux-stats.jpg';
import statsFr from '../assets/apps/flux-stats-fr.jpg';
import settings from '../assets/apps/flux-settings.jpg';
import settingsFr from '../assets/apps/flux-settings-fr.jpg';
import filters from '../assets/apps/flux-filters.jpg';
import filtersFr from '../assets/apps/flux-filters-fr.jpg';

export const flux: App = {
  slug: 'flux',
  name: 'Flux',
  platform: 'mac',
  version: '0.3.1',
  tagline: { en: 'A simple, good-looking RSS reader.', fr: 'Un lecteur RSS simple et joli.' },
  description: {
    en: 'Add your feeds, browse them as a list or a grid, and read the full article right in the app. Similar stories from several sources are grouped, and your Macs stay in sync through iCloud Drive.',
    fr: 'Ajoutez vos flux, parcourez-les en liste ou en grille et lisez l’article complet directement dans l’appli. Les articles similaires de plusieurs sources sont regroupés, et vos Mac restent synchronisés via iCloud Drive.',
  },
  icon,
  screenshot: { en: home, fr: homeFr },
  screenshotAlt: {
    en: 'Flux main window with a thumbnail grid and an open article',
    fr: 'Fenêtre principale de Flux avec une grille de vignettes et un article ouvert',
  },
  accent: ['#ff6a3d', '#ffb054'],
  features: [
    { label: { en: 'Full articles', fr: 'Articles complets' }, color: '#ff6a3d' },
    { label: { en: 'Similar stories', fr: 'Articles similaires' }, color: '#ffb054' },
    { label: { en: 'Offline reading', fr: 'Lecture hors ligne' }, color: '#e8336b' },
    { label: { en: 'iCloud sync', fr: 'Synchro iCloud' }, color: '#60a5fa' },
  ],
  requirements: { en: 'macOS 14+ · RSS, Atom, JSON Feed', fr: 'macOS 14+ · RSS, Atom, JSON Feed' },
  minMacOS: 'macOS 14',
  repo: 'https://github.com/Aervorn/MacOS_Flux',
  facts: [
    { label: { en: 'Version', fr: 'Version' }, value: '0.3.1' },
    { label: { en: 'Requires', fr: 'Requiert' }, value: 'macOS 14' },
    { label: { en: 'Formats', fr: 'Formats' }, value: 'RSS · Atom · JSON' },
    { label: { en: 'Languages', fr: 'Langues' }, value: 'EN · FR' },
    { label: { en: 'License', fr: 'Licence' }, value: 'MIT' },
  ],
  privacy: {
    en: 'Flux collects nothing and sends nothing about you. Apart from the optional sync through your own iCloud Drive, it only talks to the sites you subscribe to.',
    fr: 'Flux ne collecte rien et n’envoie rien vous concernant. En dehors de la synchro facultative via votre propre iCloud Drive, il ne contacte que les sites auxquels vous êtes abonné.',
  },
  sections: [
    {
      id: 'overview',
      title: { en: 'Your feeds', fr: 'Vos flux' },
      heading: { en: 'Your feeds, your way', fr: 'Vos flux, à votre façon' },
      glyph: 'feed',
      color: '#ff6a3d',
      screenshot: { en: home, fr: homeFr },
      screenshotAlt: { en: 'Flux main window', fr: 'Fenêtre principale de Flux' },
      summary: {
        en: 'You add your feeds yourself: no directory, no account, no recommendations. Paste a feed or just a website address, and Flux finds the feed.',
        fr: 'Vous ajoutez vos flux vous-même : pas d’annuaire, pas de compte, pas de recommandations. Collez l’adresse d’un flux ou simplement d’un site, et Flux trouve le flux.',
      },
      points: {
        en: [
          'Folders with their own color, icon and unread count.',
          'Rename a feed when its name is too long; the original is kept.',
          'OPML import and export, to come from NetNewsWire, Reeder or Feedly.',
        ],
        fr: [
          'Des dossiers avec leur couleur, leur icône et leur nombre de non-lus.',
          'Renommez un flux au nom trop long ; le nom d’origine est conservé.',
          'Import et export OPML, pour venir de NetNewsWire, Reeder ou Feedly.',
        ],
      },
    },
    {
      id: 'browse',
      title: { en: 'Browsing', fr: 'Navigation' },
      heading: { en: 'A list you enjoy browsing', fr: 'Une liste agréable à parcourir' },
      glyph: 'list',
      color: '#f59e0b',
      screenshot: { en: list, fr: listFr },
      screenshotAlt: { en: 'Flux list view with thumbnails', fr: 'Vue liste de Flux avec vignettes' },
      summary: {
        en: 'Browse as a list with thumbnails and summaries, as a grid of images, or as full-width thumbnails where an article opens in place.',
        fr: 'Parcourez en liste avec vignettes et résumés, en grille d’images, ou en vignettes pleine largeur où l’article s’ouvre à la place.',
      },
      points: {
        en: [
          'Thumbnails from the feed, the article’s first image or the page preview.',
          'Search in the title and full text of the current view.',
          'Multiple selection to mark several articles at once.',
        ],
        fr: [
          'Vignettes tirées du flux, de la première image de l’article ou de l’aperçu de la page.',
          'Recherche dans le titre et le texte complet de la vue en cours.',
          'Sélection multiple pour marquer plusieurs articles d’un coup.',
        ],
      },
    },
    {
      id: 'reading',
      title: { en: 'Full articles', fr: 'Articles complets' },
      heading: { en: 'The full article, in the app', fr: 'L’article complet, dans l’appli' },
      glyph: 'article',
      color: '#e8336b',
      screenshot: { en: grid, fr: gridFr },
      screenshotAlt: { en: 'Flux full-width thumbnails with an open article', fr: 'Vignettes pleine largeur de Flux avec un article ouvert' },
      summary: {
        en: 'When a feed only gives an excerpt, Flux downloads the page and extracts the article with Readability, the engine behind Firefox’s Reader View.',
        fr: 'Quand un flux ne donne qu’un extrait, Flux télécharge la page et en extrait l’article avec Readability, le moteur du mode Lecture de Firefox.',
      },
      points: {
        en: [
          'Clean layout, light or dark, adjustable text size and width.',
          'One button switches between the feed version and the full article.',
        ],
        fr: [
          'Mise en page soignée, claire ou sombre, taille et largeur du texte réglables.',
          'Un bouton bascule entre la version du flux et l’article complet.',
        ],
      },
      limits: {
        en: ['Articles reserved for subscribers stay cut, since the site doesn’t serve the rest.'],
        fr: ['Les articles réservés aux abonnés restent coupés, puisque le site ne fournit pas la suite.'],
      },
    },
    {
      id: 'similar',
      title: { en: 'Similar stories', fr: 'Articles similaires' },
      heading: { en: 'Similar stories, grouped', fr: 'Les articles similaires, regroupés' },
      glyph: 'magnet',
      color: '#a855f7',
      screenshot: { en: similar, fr: similarFr },
      screenshotAlt: {
        en: 'An article grouped with the same story from other sources',
        fr: 'Un article regroupé avec le même sujet venant d’autres sources',
      },
      summary: {
        en: 'When several sources publish the same story within 48 hours, Flux shows it once with a “+N” badge, and lists the other sources in the article.',
        fr: 'Quand plusieurs sources publient le même sujet en moins de 48 heures, Flux ne l’affiche qu’une fois avec un badge « +N » et liste les autres sources dans l’article.',
      },
      points: {
        en: ['Titles compared word for word and in meaning, computed on your Mac.', 'Three sensitivity levels, or turned off.'],
        fr: ['Titres comparés mot à mot et par le sens, calculé sur votre Mac.', 'Trois niveaux de sensibilité, ou désactivé.'],
      },
      limits: {
        en: ['Grouping is never perfect: you can separate an article from its group.'],
        fr: ['Le regroupement n’est jamais parfait : vous pouvez séparer un article de son groupe.'],
      },
    },
    {
      id: 'filters',
      title: { en: 'Filters', fr: 'Filtres' },
      heading: { en: 'Keyword filters', fr: 'Filtres par mot-clé' },
      glyph: 'filter',
      color: '#ef4444',
      screenshot: { en: filters, fr: filtersFr },
      screenshotAlt: { en: 'Filter rules in Flux settings', fr: 'Règles de filtrage dans les réglages de Flux' },
      summary: {
        en: 'Rules hide articles, or mark them as read, by a keyword in their title. Case and accents are ignored.',
        fr: 'Des règles masquent les articles, ou les marquent comme lus, selon un mot-clé dans leur titre. La casse et les accents sont ignorés.',
      },
      points: {
        en: ['For all feeds or a single one, with a preview of how many articles a rule affects.', 'Favorites are never filtered.'],
        fr: ['Pour tous les flux ou un seul, avec un aperçu du nombre d’articles concernés.', 'Les favoris ne sont jamais filtrés.'],
      },
      limits: { en: ['Only the title is checked, not the article text.'], fr: ['Seul le titre est vérifié, pas le texte de l’article.'] },
    },
    {
      id: 'offline',
      title: { en: 'Offline & favorites', fr: 'Hors ligne et favoris' },
      heading: { en: 'Offline reading and favorites', fr: 'Lecture hors ligne et favoris' },
      glyph: 'offline',
      color: '#0ea5e9',
      screenshot: { en: settings, fr: settingsFr },
      screenshotAlt: { en: 'Reading settings in Flux', fr: 'Réglages de lecture de Flux' },
      summary: {
        en: 'Flux can download unread articles and favorites in full, images included, so you can read without a connection.',
        fr: 'Flux peut télécharger en entier les articles non lus et les favoris, images comprises, pour les lire sans connexion.',
      },
      points: {
        en: [
          'Favorites are archived permanently, even if the site deletes the article.',
          'Old read articles are cleaned up after a delay you choose.',
          'History of the articles you opened.',
        ],
        fr: [
          'Les favoris sont archivés définitivement, même si le site supprime l’article.',
          'Les anciens articles lus sont nettoyés après le délai de votre choix.',
          'Historique des articles ouverts.',
        ],
      },
    },
    {
      id: 'stats',
      title: { en: 'Statistics', fr: 'Statistiques' },
      heading: { en: 'Reading statistics', fr: 'Statistiques de lecture' },
      glyph: 'chart',
      color: '#22c55e',
      screenshot: { en: stats, fr: statsFr },
      screenshotAlt: { en: 'Reading statistics with a chart of articles read per day', fr: 'Statistiques de lecture avec un graphique des articles lus par jour' },
      summary: {
        en: 'Articles read, time spent reading, a chart per day and your most read sources, over 7 days to 12 months.',
        fr: 'Articles lus, temps de lecture, graphique par jour et sources les plus lues, sur 7 jours à 12 mois.',
      },
      points: { en: ['Everything is computed and kept on your Mac.'], fr: ['Tout est calculé et conservé sur votre Mac.'] },
    },
    {
      id: 'sync',
      title: { en: 'Sync', fr: 'Synchro' },
      heading: { en: 'Sync between Macs', fr: 'Synchro entre vos Mac' },
      glyph: 'sync',
      color: '#3b82f6',
      summary: {
        en: 'Turn on sync on each Mac to keep feeds, folders, names, filter rules, read articles and favorites in sync through your own iCloud Drive.',
        fr: 'Activez la synchro sur chaque Mac pour garder flux, dossiers, noms, règles de filtrage, articles lus et favoris synchronisés via votre propre iCloud Drive.',
      },
      points: {
        en: [
          'When something changed on both Macs, the most recent change wins, item by item.',
          'Settings, history, statistics and images stay local to each Mac.',
        ],
        fr: [
          'Quand un élément a changé sur les deux Mac, la modification la plus récente l’emporte, élément par élément.',
          'Réglages, historique, statistiques et images restent propres à chaque Mac.',
        ],
      },
      limits: {
        en: ['iCloud Drive must be turned on; changes usually arrive within a minute.'],
        fr: ['iCloud Drive doit être activé ; les changements arrivent en général en moins d’une minute.'],
      },
    },
    {
      id: 'keyboard',
      title: { en: 'Shortcuts', fr: 'Raccourcis' },
      heading: { en: 'Keyboard shortcuts, Reeder style', fr: 'Raccourcis clavier façon Reeder' },
      glyph: 'keyboard',
      color: '#64748b',
      summary: { en: 'Read your feeds without touching the mouse.', fr: 'Lisez vos flux sans toucher à la souris.' },
      points: {
        en: [
          'j / k: next / previous article · Space: scroll, then next article',
          'm: read / unread · s: favorite · b: open in browser',
          '⌘R: refresh · ⇧⌘K: mark all as read · ⌘+ / ⌘−: text size',
        ],
        fr: [
          'j / k : article suivant / précédent · Espace : défiler, puis article suivant',
          'm : lu / non lu · s : favori · b : ouvrir dans le navigateur',
          '⌘R : actualiser · ⇧⌘K : tout marquer comme lu · ⌘+ / ⌘− : taille du texte',
        ],
      },
    },
  ],
};
