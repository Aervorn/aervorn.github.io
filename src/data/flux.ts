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
import settings from '../assets/apps/flux-settings.jpg';
import settingsFr from '../assets/apps/flux-settings-fr.jpg';
import filters from '../assets/apps/flux-filters.jpg';
import filtersFr from '../assets/apps/flux-filters-fr.jpg';
import stats from '../assets/apps/flux-stats.jpg';
import statsFr from '../assets/apps/flux-stats-fr.jpg';

export const flux: App = {
  slug: 'flux',
  name: 'Flux',
  platform: 'mac',
  version: '0.8.0',
  released: '2026-11-24T21:49+01:00',
  selfUpdating: false,
  tagline: { en: 'A simple, good-looking RSS reader.', fr: 'Un lecteur RSS simple et joli.' },
  description: {
    en: 'Add your feeds, browse them as a list or a grid, and read the full article right in the app. Similar stories from several sources are grouped, favorites can be tagged, everything can be prepared for offline reading, and your Macs stay in sync and backed up through iCloud Drive.',
    fr: 'Ajoutez vos flux, parcourez-les en liste ou en grille et lisez l’article complet directement dans l’appli. Les articles similaires de plusieurs sources sont regroupés, les favoris peuvent recevoir des tags, tout peut être préparé pour la lecture hors ligne, et vos Mac restent synchronisés et sauvegardés via iCloud Drive.',
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
    { label: { en: 'Light & dark', fr: 'Clair et sombre' }, color: '#e8336b' },
    { label: { en: 'Tags', fr: 'Tags' }, color: '#a855f7' },
    { label: { en: 'Offline reading', fr: 'Lecture hors ligne' }, color: '#0ea5e9' },
    { label: { en: 'Reading statistics', fr: 'Statistiques de lecture' }, color: '#22c55e' },
    { label: { en: 'iCloud sync & backup', fr: 'Synchro et sauvegarde iCloud' }, color: '#60a5fa' },
  ],
  requirements: { en: 'macOS 14+ · RSS, Atom, JSON Feed', fr: 'macOS 14+ · RSS, Atom, JSON Feed' },
  minMacOS: 'macOS 14',
  repo: 'https://github.com/Aervorn/MacOS_Flux',
  facts: [
    { label: { en: 'Version', fr: 'Version' }, value: '0.8.0' },
    { label: { en: 'Requires', fr: 'Requiert' }, value: 'macOS 14' },
    { label: { en: 'Formats', fr: 'Formats' }, value: 'RSS · Atom · JSON' },
    { label: { en: 'Languages', fr: 'Langues' }, value: 'EN · FR' },
    { label: { en: 'License', fr: 'Licence' }, value: 'MIT' },
  ],
  privacy: {
    en: 'Flux collects nothing and sends nothing about you. Apart from the optional sync through your own iCloud Drive and the check for a new version on GitHub, it only talks to the sites you subscribe to.',
    fr: 'Flux ne collecte rien et n’envoie rien vous concernant. En dehors de la synchro facultative via votre propre iCloud Drive et de la recherche d’une nouvelle version sur GitHub, il ne contacte que les sites auxquels vous êtes abonné.',
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
          'Folders with their own unread count, and each site’s favicon next to its feed.',
          'Rename a feed when its name is too long; the original is kept.',
          'Change a feed’s address without losing its articles.',
          'OPML import and export, to come from NetNewsWire, Reeder or Feedly.',
          'Resizable panels; the window remembers its size and position.',
        ],
        fr: [
          'Des dossiers avec leur nombre de non-lus, et le favicon de chaque site à côté de son flux.',
          'Renommez un flux au nom trop long ; le nom d’origine est conservé.',
          'Changez l’adresse d’un flux sans perdre ses articles.',
          'Import et export OPML, pour venir de NetNewsWire, Reeder ou Feedly.',
          'Panneaux redimensionnables ; la fenêtre retient sa taille et sa position.',
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
        en: 'Browse as a list with thumbnails and summaries, as a grid of cards that adapts to the window, or as a full-width grid where an article opens in place.',
        fr: 'Parcourez en liste avec vignettes et résumés, en grille de cartes qui s’adapte à la fenêtre, ou en grille pleine largeur où l’article s’ouvre à la place.',
      },
      points: {
        en: [
          'Thumbnails from the feed, the article’s first image or the page preview.',
          'Search in the title and text of the current view.',
          'Light and dark themes, and a choice of fonts for the interface and the articles.',
          'Hide read articles with one button in the toolbar.',
          'Select several articles with ⌘-click or ⇧-click and act on them at once.',
        ],
        fr: [
          'Vignettes tirées du flux, de la première image de l’article ou de l’aperçu de la page.',
          'Recherche dans le titre et le texte de la vue en cours.',
          'Thèmes clair et sombre, et un choix de polices pour l’interface et les articles.',
          'Masquez les articles lus d’un clic dans la barre d’outils.',
          'Sélectionnez plusieurs articles avec ⌘-clic ou ⇧-clic et agissez sur eux d’un coup.',
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
          'Print an article or export it as PDF from the toolbar.',
        ],
        fr: [
          'Mise en page soignée, claire ou sombre, taille et largeur du texte réglables.',
          'Un bouton bascule entre la version du flux et l’article complet.',
          'Imprimez un article ou exportez-le en PDF depuis la barre d’outils.',
        ],
      },
      limits: {
        en: ['Articles reserved for subscribers stay cut, since the site doesn’t serve the rest.', 'Embedded videos are removed from the article; only their link remains.'],
        fr: ['Les articles réservés aux abonnés restent coupés, puisque le site ne fournit pas la suite.', 'Les vidéos intégrées sont retirées de l’article ; seul leur lien reste.'],
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
        en: ['Titles compared word by word and by meaning, with Apple’s language models, computed on your Mac.', 'Three sensitivity levels, or turned off.'],
        fr: ['Titres comparés mot à mot et par le sens, avec les modèles de langue d’Apple, calculé sur votre Mac.', 'Trois niveaux de sensibilité, ou désactivé.'],
      },
      limits: {
        en: ['Grouping is never perfect: you can separate an article from its group.', 'The meaning comparison needs the language model of the title’s language on your Mac (French and English work).'],
        fr: ['Le regroupement n’est jamais parfait : vous pouvez séparer un article de son groupe.', 'La comparaison par le sens demande le modèle de la langue du titre sur votre Mac (le français et l’anglais fonctionnent).'],
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
        en: ['For all feeds or only the ones you check, with a preview of how many articles a rule affects.', 'Favorites are never filtered.'],
        fr: ['Pour tous les flux ou seulement ceux que vous cochez, avec un aperçu du nombre d’articles concernés.', 'Les favoris ne sont jamais filtrés.'],
      },
      limits: { en: ['Only the title is checked, not the article text.'], fr: ['Seul le titre est vérifié, pas le texte de l’article.'] },
    },
    {
      id: 'favorites',
      title: { en: 'Favorites & tags', fr: 'Favoris et tags' },
      heading: { en: 'Favorites, tags and history', fr: 'Favoris, tags et historique' },
      glyph: 'tag',
      color: '#0ea5e9',
      screenshot: { en: settings, fr: settingsFr },
      screenshotAlt: { en: 'Reading settings in Flux', fr: 'Réglages de lecture de Flux' },
      summary: {
        en: 'Keep what matters: favorites are never deleted, tags sort them, and the history brings back what you opened.',
        fr: 'Gardez l’essentiel : les favoris ne sont jamais supprimés, les tags les rangent, et l’historique retrouve ce que vous avez ouvert.',
      },
      points: {
        en: [
          'Tags to organize your favorites, listed in the sidebar.',
          'Favorites are archived: their images and full text are kept apart and never cleaned up.',
          'History of the articles you opened, most recent first.',
          'Mark articles as read right away, after a few seconds or never.',
          'Old read articles are cleaned up after a delay you choose; favorites are kept.',
        ],
        fr: [
          'Des tags pour ranger vos favoris, listés dans la barre latérale.',
          'Les favoris sont archivés : leurs images et leur texte complet sont conservés à part et jamais nettoyés.',
          'Historique des articles ouverts, du plus récent au plus ancien.',
          'Marquez les articles comme lus tout de suite, après quelques secondes ou jamais.',
          'Les anciens articles lus sont nettoyés après le délai de votre choix ; les favoris sont conservés.',
        ],
      },
      limits: {
        en: ['An archived favorite only has what Flux could download when you added it.'],
        fr: ['Un favori archivé n’a que ce que Flux a pu télécharger à son ajout.'],
      },
    },
    {
      id: 'offline',
      title: { en: 'Offline', fr: 'Hors ligne' },
      heading: { en: 'Offline reading', fr: 'Lecture hors ligne' },
      glyph: 'offline',
      color: '#14b8a6',
      summary: {
        en: 'After each refresh, Flux downloads the full text and the images of your unread articles and favorites, so you can read them without a connection.',
        fr: 'Après chaque actualisation, Flux télécharge le texte complet et les images de vos articles non lus et de vos favoris, pour les lire sans connexion.',
      },
      points: {
        en: [
          'An image cache that stays under the size you choose, from 250 MB to 5 GB.',
          'An “Offline” badge in the toolbar, and a refresh as soon as the connection is back.',
        ],
        fr: [
          'Un cache d’images qui reste sous la taille choisie, de 250 Mo à 5 Go.',
          'Une pastille « Hors ligne » dans la barre d’outils, et une actualisation dès le retour de la connexion.',
        ],
      },
      limits: {
        en: ['Up to 400 articles are prepared; articles reserved for subscribers stay as the feed provides them.'],
        fr: ['400 articles au plus sont préparés ; les articles réservés aux abonnés restent tels que le flux les fournit.'],
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
      title: { en: 'iCloud', fr: 'iCloud' },
      heading: { en: 'Sync and backup with iCloud Drive', fr: 'Synchro et sauvegarde avec iCloud Drive' },
      glyph: 'sync',
      color: '#3b82f6',
      summary: {
        en: 'Turn on sync on each Mac to keep feeds, folders, names, filter rules, read articles, favorites and tags in sync through your own iCloud Drive.',
        fr: 'Activez la synchro sur chaque Mac pour garder flux, dossiers, noms, règles de filtrage, articles lus, favoris et tags synchronisés via votre propre iCloud Drive.',
      },
      points: {
        en: [
          'When something changed on both Macs, the most recent change wins, item by item.',
          'Daily backup of everything in iCloud Drive, restorable in one click; deleting something never touches backups already made.',
          'Settings, history and images stay local to each Mac.',
        ],
        fr: [
          'Quand un élément a changé sur les deux Mac, la modification la plus récente l’emporte, élément par élément.',
          'Sauvegarde quotidienne complète dans iCloud Drive, restaurable en un clic ; supprimer quelque chose ne touche jamais les sauvegardes déjà faites.',
          'Réglages, historique et images restent propres à chaque Mac.',
        ],
      },
      limits: {
        en: ['iCloud Drive must be turned on; changes usually arrive within a minute.', 'Backups from the former Swift version can’t be restored; import its data instead.'],
        fr: ['iCloud Drive doit être activé ; les changements arrivent en général en moins d’une minute.', 'Les sauvegardes de l’ancienne version Swift ne se restaurent pas ; importez plutôt ses données.'],
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
          'J / K: next / previous article · Space: scroll, then next article',
          'M: read / unread · S: favorite · B: open in browser',
          '⌘R: refresh · ⇧⌘K: mark all as read · ⌥⌘S: statistics · ⌘+ / ⌘−: text size',
        ],
        fr: [
          'J / K : article suivant / précédent · Espace : défiler, puis article suivant',
          'M : lu / non lu · S : favori · B : ouvrir dans le navigateur',
          '⌘R : actualiser · ⇧⌘K : tout marquer comme lu · ⌥⌘S : statistiques · ⌘+ / ⌘− : taille du texte',
        ],
      },
    },
  ],
};
