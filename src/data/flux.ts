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
import filters from '../assets/apps/flux-filters.jpg';
import filtersFr from '../assets/apps/flux-filters-fr.jpg';
import sync from '../assets/apps/flux-sync.jpg';
import syncFr from '../assets/apps/flux-sync-fr.jpg';
import stats from '../assets/apps/flux-stats.jpg';
import statsFr from '../assets/apps/flux-stats-fr.jpg';

export const flux: App = {
  slug: 'flux',
  name: 'Flux',
  platform: 'mac',
  version: '0.9.0',
  released: '2026-11-27T16:19+01:00',
  selfUpdating: false,
  tagline: { en: 'A simple, good-looking RSS reader.', fr: 'Un lecteur RSS simple et joli.' },
  description: {
    en: 'Add your feeds, start from a daily briefing, browse them as a list or a grid, and read the full article right in the app, with an on-device summary if you like. Get notified of what matters to you. Similar stories from several sources are grouped, favorites can be tagged, everything can be prepared for offline reading, and your Macs stay in sync and backed up through iCloud Drive.',
    fr: 'Ajoutez vos flux, partez d’un point du jour, parcourez-les en liste ou en grille et lisez l’article complet directement dans l’appli, avec un résumé calculé sur votre Mac si vous le souhaitez. Soyez prévenu de ce qui vous intéresse. Les articles similaires de plusieurs sources sont regroupés, les favoris peuvent recevoir des tags, tout peut être préparé pour la lecture hors ligne, et vos Mac restent synchronisés et sauvegardés via iCloud Drive.',
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
    { label: { en: 'Seven themes', fr: 'Sept thèmes' }, color: '#e8336b' },
    { label: { en: 'Notifications', fr: 'Notifications' }, color: '#f97316' },
    { label: { en: 'AI summaries', fr: 'Résumés par IA' }, color: '#8b5cf6' },
    { label: { en: 'Tags', fr: 'Tags' }, color: '#a855f7' },
    { label: { en: 'Offline reading', fr: 'Lecture hors ligne' }, color: '#0ea5e9' },
    { label: { en: 'Reading statistics', fr: 'Statistiques de lecture' }, color: '#22c55e' },
    { label: { en: 'iCloud sync & backup', fr: 'Synchro et sauvegarde iCloud' }, color: '#60a5fa' },
  ],
  requirements: { en: 'macOS 14+ · RSS, Atom, JSON Feed', fr: 'macOS 14+ · RSS, Atom, JSON Feed' },
  minMacOS: 'macOS 14',
  repo: 'https://github.com/Aervorn/MacOS_Flux',
  facts: [
    { label: { en: 'Version', fr: 'Version' }, value: '0.9.0' },
    { label: { en: 'Requires', fr: 'Requiert' }, value: 'macOS 14' },
    { label: { en: 'Formats', fr: 'Formats' }, value: 'RSS · Atom · JSON' },
    { label: { en: 'Languages', fr: 'Langues' }, value: 'EN · FR' },
    { label: { en: 'License', fr: 'Licence' }, value: 'MIT' },
  ],
  privacy: {
    en: 'Flux collects nothing and sends nothing about you; summaries are computed on your Mac. Apart from the optional sync through your own iCloud Drive and the check for a new version on GitHub, it only talks to the sites you subscribe to.',
    fr: 'Flux ne collecte rien et n’envoie rien vous concernant ; les résumés sont calculés sur votre Mac. En dehors de la synchro facultative via votre propre iCloud Drive et de la recherche d’une nouvelle version sur GitHub, il ne contacte que les sites auxquels vous êtes abonné.',
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
          'Folders with their own unread count, their own icon and color, and each site’s favicon next to its feed. Drag a feed onto a folder.',
          'Rename a feed when its name is too long; the original is kept.',
          'A warning badge flags a feed that couldn’t be refreshed; hover it for the reason.',
          'Change a feed’s address without losing its articles, on all your Macs.',
          'OPML import and export, to come from NetNewsWire, Reeder or Feedly.',
          'Resizable panels; the window remembers its size and position.',
        ],
        fr: [
          'Des dossiers avec leur nombre de non-lus, leur icône et leur couleur, et le favicon de chaque site à côté de son flux. Glissez un flux sur un dossier.',
          'Renommez un flux au nom trop long ; le nom d’origine est conservé.',
          'Une pastille d’avertissement signale un flux qui n’a pas pu être actualisé ; survolez-la pour connaître la raison.',
          'Changez l’adresse d’un flux sans perdre ses articles, sur tous vos Mac.',
          'Import et export OPML, pour venir de NetNewsWire, Reeder ou Feedly.',
          'Panneaux redimensionnables ; la fenêtre retient sa taille et sa position.',
        ],
      },
    },
    {
      id: 'home',
      title: { en: 'Home', fr: 'Accueil' },
      heading: { en: 'A briefing, and notifications', fr: 'Un point du jour, et des notifications' },
      glyph: 'home',
      color: '#f97316',
      summary: {
        en: 'Flux opens on a briefing: today’s figures, the stories covered by several of your sources, your smart folders and the unread articles of the last 24 hours.',
        fr: 'Flux s’ouvre sur un point du jour : les chiffres du jour, les sujets repris par plusieurs de vos sources, vos dossiers intelligents et les non-lus des dernières 24 heures.',
      },
      points: {
        en: [
          'Notifications of new articles, from all feeds or only the folders, feeds, smart folders and keywords you choose.',
          'Refreshing happens in the background; an option keeps Flux in the menu bar when its window is closed.',
          'Clicking a notification opens the article.',
        ],
        fr: [
          'Des notifications des nouveaux articles, de tous les flux ou seulement des dossiers, flux, dossiers intelligents et mots-clés choisis.',
          'L’actualisation se fait en arrière-plan ; une option garde Flux dans la barre des menus quand sa fenêtre est fermée.',
          'Un clic sur une notification ouvre l’article.',
        ],
      },
      limits: {
        en: ['No notification while Flux is in front, unless you ask for it; notification settings are specific to each Mac.'],
        fr: ['Pas de notification quand Flux est au premier plan, sauf si vous le demandez ; les réglages de notification sont propres à chaque Mac.'],
      },
    },
    {
      id: 'ai',
      title: { en: 'Summaries', fr: 'Résumés' },
      heading: { en: 'Summaries with Apple Intelligence', fr: 'Résumés par Apple Intelligence' },
      glyph: 'sparkle',
      color: '#8b5cf6',
      summary: {
        en: 'One button sums an article up in a few bullet points, with Apple’s model computed on your Mac: nothing leaves it.',
        fr: 'Un bouton résume un article en quelques points, avec le modèle d’Apple calculé sur votre Mac : rien n’en sort.',
      },
      points: {
        en: ['On demand, or automatically for every article you open.', 'In the language of the interface, French or English.'],
        fr: ['À la demande, ou automatiquement pour chaque article ouvert.', 'Dans la langue de l’interface, français ou anglais.'],
      },
      limits: {
        en: ['Requires macOS 26 and an Apple silicon Mac with Apple Intelligence turned on.', 'Only the start of long articles is summarized, and a summary can contain mistakes.'],
        fr: ['Demande macOS 26 et un Mac Apple Silicon avec Apple Intelligence activée.', 'Seul le début des longs articles est résumé, et un résumé peut contenir des erreurs.'],
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
          'Search the current view in the title, the text or both, and choose 0 to 4 summary lines in the list.',
          'Seven themes (light, sepia, dawn, dark, pure black, Nord, forest), day and night themes in automatic mode, an accent color, and a choice of fonts.',
          'Hide read articles with one button in the toolbar.',
          'Select several articles with ⌘-click or ⇧-click and act on them at once.',
        ],
        fr: [
          'Vignettes tirées du flux, de la première image de l’article ou de l’aperçu de la page.',
          'Recherche dans le titre, le texte ou les deux pour la vue en cours, et de 0 à 4 lignes de résumé dans la liste.',
          'Sept thèmes (clair, sépia, aube, sombre, noir pur, Nord, forêt), thèmes de jour et de nuit en automatique, une couleur d’accent et un choix de polices.',
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
          'Print an article or save it straight to a PDF file from the toolbar.',
        ],
        fr: [
          'Mise en page soignée, claire ou sombre, taille et largeur du texte réglables.',
          'Un bouton bascule entre la version du flux et l’article complet.',
          'Imprimez un article ou enregistrez-le directement en PDF depuis la barre d’outils.',
        ],
      },
      limits: {
        en: ['Articles reserved for subscribers stay cut, since the site doesn’t serve the rest.', 'YouTube, Vimeo and Dailymotion videos only load when you click them; other players are removed, only their link remains.'],
        fr: ['Les articles réservés aux abonnés restent coupés, puisque le site ne fournit pas la suite.', 'Les vidéos YouTube, Vimeo et Dailymotion ne se chargent qu’au clic ; les autres lecteurs sont retirés, seul leur lien reste.'],
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
        en: 'Rules hide articles, or mark them as read, by a keyword in their title; smart folders gather them by keywords. Case and accents are ignored.',
        fr: 'Des règles masquent les articles, ou les marquent comme lus, selon un mot-clé dans leur titre ; les dossiers intelligents les regroupent par mots-clés. La casse et les accents sont ignorés.',
      },
      points: {
        en: ['For all feeds or only the ones you check, with a preview of how many articles a rule affects.', 'Favorites are never filtered.', 'Smart folders gather articles by keywords: they leave their feed but stay in All and Unread.'],
        fr: ['Pour tous les flux ou seulement ceux que vous cochez, avec un aperçu du nombre d’articles concernés.', 'Les favoris ne sont jamais filtrés.', 'Les dossiers intelligents regroupent les articles par mots-clés : ils quittent leur flux mais restent dans Tous et Non lus.'],
      },
      limits: { en: ['Only the title is checked, not the article text.'], fr: ['Seul le titre est vérifié, pas le texte de l’article.'] },
    },
    {
      id: 'favorites',
      title: { en: 'Favorites & tags', fr: 'Favoris et tags' },
      heading: { en: 'Favorites, tags and history', fr: 'Favoris, tags et historique' },
      glyph: 'tag',
      color: '#0ea5e9',
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
      screenshot: { en: sync, fr: syncFr },
      screenshotAlt: { en: 'Sync settings in Flux', fr: 'Réglages de synchro de Flux' },
      summary: {
        en: 'Turn on sync on each Mac to keep feeds, folders, names, filter rules, smart folders, read articles, favorites and tags in sync through your own iCloud Drive.',
        fr: 'Activez la synchro sur chaque Mac pour garder flux, dossiers, noms, règles de filtrage, dossiers intelligents, articles lus, favoris et tags synchronisés via votre propre iCloud Drive.',
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
        en: ['iCloud Drive must be turned on; changes usually arrive within a minute.', 'Backups from the former Swift version can’t be restored; import its data instead.', 'Since 0.8.5 the sync format changed: update Flux on all your Macs.'],
        fr: ['iCloud Drive doit être activé ; les changements arrivent en général en moins d’une minute.', 'Les sauvegardes de l’ancienne version Swift ne se restaurent pas ; importez plutôt ses données.', 'Depuis la 0.8.5, le format de synchro a changé : mettez Flux à jour sur tous vos Mac.'],
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
