import type { App } from './types';
import icon from '../assets/apps/navloom-icon.svg?url';
import home from '../assets/apps/navloom-home.png';
import homeFr from '../assets/apps/navloom-home-fr.png';
import faviconsync from '../assets/apps/navloom-faviconsync.png';
import faviconsyncFr from '../assets/apps/navloom-faviconsync-fr.png';
import twins from '../assets/apps/navloom-twins.png';
import twinsFr from '../assets/apps/navloom-twins-fr.png';
import ghosts from '../assets/apps/navloom-ghosts.png';
import ghostsFr from '../assets/apps/navloom-ghosts-fr.png';
import echo from '../assets/apps/navloom-echo.png';
import echoFr from '../assets/apps/navloom-echo-fr.png';
import ferry from '../assets/apps/navloom-ferry.png';
import ferryFr from '../assets/apps/navloom-ferry-fr.png';
import backups from '../assets/apps/navloom-backups.png';
import backupsFr from '../assets/apps/navloom-backups-fr.png';

export const navloom: App = {
  slug: 'navloom',
  name: 'Navloom',
  platform: 'mac',
  version: '0.1.1',
  tagline: {
    en: 'Keep your browser bookmarks and tabs in shape.',
    fr: 'Gardez vos favoris et vos onglets en ordre.',
  },
  description: {
    en: 'Brings back missing favicons, finds duplicates and dead links, copies bookmarks between browsers with their icons, and moves open tabs around. A backup comes before every change.',
    fr: 'Récupère les favicons manquants, trouve les doublons et les liens morts, copie les favoris d’un navigateur à l’autre avec leurs icônes et déplace les onglets ouverts. Une sauvegarde précède chaque modification.',
  },
  icon,
  screenshot: { en: home, fr: homeFr },
  screenshotAlt: { en: 'Navloom home screen listing its tools', fr: 'Accueil de Navloom avec la liste de ses outils' },
  accent: ['#a78bfa', '#60a5fa'],
  features: [
    { label: { en: 'FaviconSync', fr: 'FaviconSync' }, color: '#fb923c' },
    { label: { en: 'Twins', fr: 'Twins' }, color: '#60a5fa' },
    { label: { en: 'Ghosts', fr: 'Ghosts' }, color: '#4ade80' },
    { label: { en: 'Echo', fr: 'Echo' }, color: '#facc15' },
    { label: { en: 'Ferry', fr: 'Ferry' }, color: '#a78bfa' },
  ],
  requirements: { en: 'macOS 14.6+ · Chromium browsers', fr: 'macOS 14.6+ · navigateurs Chromium' },
  minMacOS: 'macOS 14.6',
  repo: 'https://github.com/Aervorn/MacOS_Navloom',
  facts: [
    { label: { en: 'Version', fr: 'Version' }, value: '0.1.1' },
    { label: { en: 'Requires', fr: 'Requiert' }, value: 'macOS 14.6' },
    { label: { en: 'Tools', fr: 'Outils' }, value: '5' },
    { label: { en: 'Languages', fr: 'Langues' }, value: 'EN · FR' },
    { label: { en: 'License', fr: 'Licence' }, value: 'MIT' },
  ],
  privacy: {
    en: 'Navloom collects nothing and sends nothing about you. The only network requests are those of FaviconSync and Ghosts, sent straight to the websites of your own bookmarks.',
    fr: 'Navloom ne collecte rien et n’envoie rien vous concernant. Les seules requêtes réseau sont celles de FaviconSync et Ghosts, envoyées directement aux sites de vos propres favoris.',
  },
  sections: [
    {
      id: 'overview',
      title: { en: 'Overview', fr: 'Aperçu' },
      heading: { en: 'A small toolbox for your bookmarks', fr: 'Une petite boîte à outils pour vos favoris' },
      glyph: 'home',
      color: '#0a84ff',
      screenshot: { en: home, fr: homeFr },
      screenshotAlt: { en: 'Navloom home screen', fr: 'Accueil de Navloom' },
      summary: {
        en: 'Navloom works on the files of your Chromium browsers, right on your Mac. Pick a browser and a profile, run an analysis, review the results, then decide what to change.',
        fr: 'Navloom travaille sur les fichiers de vos navigateurs Chromium, directement sur votre Mac. Choisissez un navigateur et un profil, lancez une analyse, vérifiez les résultats, puis décidez de ce qu’il faut modifier.',
      },
      points: {
        en: [
          'Analyses never change anything: you always review before writing.',
          'Every write is preceded by a backup you can restore in one click.',
          'Native SwiftUI interface, in English and French.',
        ],
        fr: [
          'Une analyse ne modifie jamais rien : vous vérifiez toujours avant d’écrire.',
          'Chaque écriture est précédée d’une sauvegarde, restaurable en un clic.',
          'Interface native en SwiftUI, en français et en anglais.',
        ],
      },
    },
    {
      id: 'faviconsync',
      title: { en: 'FaviconSync', fr: 'FaviconSync' },
      heading: { en: 'Bring back missing favicons', fr: 'Récupérer les favicons manquants' },
      glyph: 'star',
      color: '#fb923c',
      screenshot: { en: faviconsync, fr: faviconsyncFr },
      screenshotAlt: {
        en: 'FaviconSync results sorted into fetched, no favicon and failures',
        fr: 'Résultats de FaviconSync classés en récupérés, sans favicon et échecs',
      },
      summary: {
        en: 'After switching browsers or importing bookmarks, many end up without an icon. FaviconSync finds them, fetches the icons from the websites and writes them into the browser’s icon database.',
        fr: 'Après un changement de navigateur ou un import, beaucoup de favoris se retrouvent sans icône. FaviconSync les repère, récupère les icônes sur les sites et les écrit dans la base d’icônes du navigateur.',
      },
      points: {
        en: [
          'Results sorted into fetched, no favicon (the site has none) and failures, with the reason for each.',
          'Tries favicon.ico first, then the icons declared in the page.',
          'Exports a text report.',
        ],
        fr: [
          'Résultats classés en récupérés, sans favicon (le site n’en a pas) et échecs, avec la raison de chacun.',
          'Essaie d’abord favicon.ico, puis les icônes déclarées dans la page.',
          'Export d’un rapport texte.',
        ],
      },
      limits: {
        en: [
          'The browser must be fully closed (⌘Q) to write.',
          'Sites that need a sign-in, or declare their icon only through JavaScript, stay without an icon.',
        ],
        fr: [
          'Le navigateur doit être complètement fermé (⌘Q) pour écrire.',
          'Les sites qui demandent une connexion, ou qui déclarent leur icône uniquement en JavaScript, restent sans icône.',
        ],
      },
    },
    {
      id: 'twins',
      title: { en: 'Twins', fr: 'Twins' },
      heading: { en: 'Find duplicate bookmarks', fr: 'Trouver les favoris en double' },
      glyph: 'twins',
      color: '#3b82f6',
      screenshot: { en: twins, fr: twinsFr },
      screenshotAlt: { en: 'Twins grouping bookmarks with the same URL', fr: 'Twins regroupant les favoris de même adresse' },
      summary: {
        en: 'Twins groups the bookmarks that point to exactly the same URL and deletes the copies you check.',
        fr: 'Twins regroupe les favoris qui pointent exactement vers la même adresse et supprime les copies que vous cochez.',
      },
      points: {
        en: [
          'One copy of each group always stays: you can’t delete them all by mistake.',
          'A shortcut keeps the first bookmark of each group and checks the others.',
        ],
        fr: [
          'Une copie de chaque groupe reste toujours : impossible de tout supprimer par erreur.',
          'Un raccourci garde le premier favori de chaque groupe et coche les autres.',
        ],
      },
      limits: {
        en: [
          'The browser must be closed and its bookmark sync turned off, or it brings deleted bookmarks back.',
          'URLs that differ slightly (http/https, www, trailing /) are not duplicates.',
        ],
        fr: [
          'Le navigateur doit être fermé et la synchro des favoris désactivée, sinon il remet les favoris supprimés.',
          'Les adresses légèrement différentes (http/https, www, / final) ne sont pas des doublons.',
        ],
      },
    },
    {
      id: 'ghosts',
      title: { en: 'Ghosts', fr: 'Ghosts' },
      heading: { en: 'Spot dead links', fr: 'Repérer les liens morts' },
      glyph: 'ghost',
      color: '#22c55e',
      screenshot: { en: ghosts, fr: ghostsFr },
      screenshotAlt: {
        en: 'Ghosts listing dead, to check and redirected bookmarks',
        fr: 'Ghosts listant les favoris morts, à vérifier et redirigés',
      },
      summary: {
        en: 'Ghosts checks whether each bookmark still responds and sorts the problems into dead, to check and redirected.',
        fr: 'Ghosts vérifie que chaque favori répond encore et classe les problèmes en morts, à vérifier et redirigés.',
      },
      points: {
        en: [
          'Dead: page not found (404/410) or domain gone.',
          'To check: timeout, server error, invalid certificate.',
          'Double-click a result to open it, then delete the ones you check.',
        ],
        fr: [
          'Morts : page introuvable (404/410) ou domaine disparu.',
          'À vérifier : délai dépassé, erreur serveur, certificat invalide.',
          'Double-cliquez sur un résultat pour l’ouvrir, puis supprimez ceux que vous cochez.',
        ],
      },
      limits: {
        en: ['Some sites answer “not found” to visitors who aren’t signed in: always check before deleting.'],
        fr: ['Certains sites répondent « introuvable » aux visiteurs non connectés : vérifiez toujours avant de supprimer.'],
      },
    },
    {
      id: 'echo',
      title: { en: 'Echo', fr: 'Echo' },
      heading: { en: 'Copy bookmarks between browsers', fr: 'Copier les favoris entre navigateurs' },
      glyph: 'echo',
      color: '#eab308',
      screenshot: { en: echo, fr: echoFr },
      screenshotAlt: { en: 'Echo comparing a source and a target browser', fr: 'Echo comparant un navigateur source et un navigateur cible' },
      summary: {
        en: 'Browsers import each other’s bookmarks but often lose their icons. Echo copies the bookmarks of a source browser into a target browser, icons included.',
        fr: 'Les navigateurs importent les favoris des autres, mais perdent souvent leurs icônes. Echo copie les favoris d’un navigateur source vers un navigateur cible, icônes comprises.',
      },
      points: {
        en: [
          'Add missing: the target keeps everything, only missing bookmarks are added.',
          'Full copy: the target becomes identical to the source.',
          'Choose which URL variants count as identical (http/https, www, parameters).',
        ],
        fr: [
          'Ajout des manquants : la cible garde tout, seuls les favoris absents sont ajoutés.',
          'Copie complète : la cible devient identique à la source.',
          'Choisissez les variantes d’adresse à considérer comme identiques (http/https, www, paramètres).',
        ],
      },
      limits: {
        en: ['One source and one target at a time; the target must be closed with sync turned off to write.'],
        fr: ['Une source et une cible à la fois ; pour écrire, la cible doit être fermée et sa synchro désactivée.'],
      },
    },
    {
      id: 'ferry',
      title: { en: 'Ferry', fr: 'Ferry' },
      heading: { en: 'Move open tabs around', fr: 'Déplacer les onglets ouverts' },
      glyph: 'ferry',
      color: '#8b5cf6',
      screenshot: { en: ferry, fr: ferryFr },
      screenshotAlt: { en: 'Ferry listing the open tabs of several browsers', fr: 'Ferry listant les onglets ouverts de plusieurs navigateurs' },
      summary: {
        en: 'Ferry gathers the open tabs of all your running browsers in one list, by browser, window, profile and workspace, and reopens the ones you check in another browser.',
        fr: 'Ferry rassemble les onglets ouverts de tous vos navigateurs dans une seule liste, par navigateur, fenêtre, profil et espace, et rouvre ceux que vous cochez dans un autre navigateur.',
      },
      points: {
        en: [
          'Keeps the window layout, or puts everything in a single window.',
          'Optionally closes the originals, only once their copy is found in the target.',
          'Private windows are hidden by default.',
        ],
        fr: [
          'Garde la disposition des fenêtres, ou regroupe tout dans une seule fenêtre.',
          'Peut fermer les originaux, uniquement une fois leur copie trouvée dans la cible.',
          'Les fenêtres privées sont masquées par défaut.',
        ],
      },
      limits: {
        en: [
          'Workspaces can’t be recreated in the target: each one opens in its own window.',
          'macOS asks you to allow Navloom to control each browser the first time.',
        ],
        fr: [
          'Les espaces ne peuvent pas être recréés dans la cible : chacun s’ouvre dans sa propre fenêtre.',
          'La première fois, macOS vous demande d’autoriser Navloom à contrôler chaque navigateur.',
        ],
      },
    },
    {
      id: 'backups',
      title: { en: 'Backups', fr: 'Sauvegardes' },
      heading: { en: 'A backup before every change', fr: 'Une sauvegarde avant chaque modification' },
      glyph: 'archive',
      color: '#14b8a6',
      screenshot: { en: backups, fr: backupsFr },
      screenshotAlt: { en: 'Backups screen listing backups by tool', fr: 'Écran Sauvegardes listant les sauvegardes par outil' },
      summary: {
        en: 'Every write is preceded by a backup of the file it modifies. The Backups screen lists them by tool and restores any of them in one click.',
        fr: 'Chaque écriture est précédée d’une sauvegarde du fichier modifié. L’écran Sauvegardes les liste par outil et restaure n’importe laquelle en un clic.',
      },
      points: {
        en: [
          'The current state is itself backed up before a restore.',
          'Old backups are cleaned up automatically and go to the Trash, never deleted outright.',
        ],
        fr: [
          'L’état actuel est lui-même sauvegardé avant une restauration.',
          'Les anciennes sauvegardes sont nettoyées automatiquement et partent à la Corbeille, jamais supprimées définitivement.',
        ],
      },
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
    notes: {
      en: [
        '¹ Bookmarks saved in your Google Account are shown but can’t be deleted from Navloom.',
        'Chrome, Edge and Brave need Full Disk Access to appear in Navloom.',
      ],
      fr: [
        '¹ Les favoris enregistrés dans votre compte Google sont affichés, mais ne peuvent pas être supprimés depuis Navloom.',
        'Chrome, Edge et Brave ont besoin de l’Accès complet au disque pour apparaître dans Navloom.',
      ],
    },
  },
};
