import type { App } from './types';
import icon from '../assets/apps/forkwatch-icon.png?url';
import dashboard from '../assets/apps/forkwatch-dashboard.jpg';

export const forkwatch: App = {
  slug: 'forkwatch',
  name: 'ForkWatch',
  platform: 'server',
  version: '2.1.1',
  tagline: {
    en: 'A safe copy of the Git repositories you depend on.',
    fr: 'Une copie de secours des dépôts Git dont vous dépendez.',
  },
  description: {
    en: 'ForkWatch watches the third-party repositories that matter to you, archives every version and blocks suspicious updates, in case their authors delete or break them. Runs in Docker, with a web dashboard and Discord alerts.',
    fr: 'ForkWatch surveille les dépôts de tiers qui sont importants pour vous, archive chaque version et bloque les mises à jour suspectes, au cas où leurs auteurs les supprimeraient ou les casseraient. Tourne dans Docker, avec un tableau de bord web et des alertes Discord.',
  },
  icon,
  screenshot: { en: dashboard, fr: dashboard },
  screenshotAlt: {
    en: 'ForkWatch dashboard with blocked, unreachable and up-to-date repositories',
    fr: 'Tableau de bord de ForkWatch avec des dépôts bloqués, injoignables et à jour',
  },
  accent: ['#4ade80', '#2dd4bf'],
  onAccent: '#052e16',
  features: [
    { label: { en: 'Archives', fr: 'Archives' }, color: '#4ade80' },
    { label: { en: 'Blocks force-pushes', fr: 'Bloque les force-push' }, color: '#f2665b' },
    { label: { en: 'Web dashboard', fr: 'Tableau de bord web' }, color: '#6ea1ff' },
    { label: { en: 'Discord alerts', fr: 'Alertes Discord' }, color: '#a78bfa' },
  ],
  requirements: { en: 'Docker · NAS or home server', fr: 'Docker · NAS ou serveur maison' },
  repo: 'https://github.com/Aervorn/Docker_ForkWatch',
  facts: [
    { label: { en: 'Version', fr: 'Version' }, value: '2.1.1' },
    { label: { en: 'Runs on', fr: 'Tourne sur' }, value: 'Docker' },
    { label: { en: 'Written in', fr: 'Écrit en' }, value: 'Python' },
    { label: { en: 'Languages', fr: 'Langues' }, value: 'EN · FR' },
    { label: { en: 'License', fr: 'Licence' }, value: 'MIT' },
  ],
  privacy: {
    en: 'ForkWatch runs on your own server and sends nothing to me. It only contacts the Git hosts of the repositories you watch, and optionally the GitHub API and your Discord webhook.',
    fr: 'ForkWatch tourne sur votre propre serveur et ne m’envoie rien. Il contacte uniquement les hébergeurs Git des dépôts surveillés et, si vous le configurez, l’API GitHub et votre webhook Discord.',
  },
  sections: [
    {
      id: 'overview',
      title: { en: 'Dashboard', fr: 'Tableau de bord' },
      heading: { en: 'Everything from one dashboard', fr: 'Tout depuis un tableau de bord' },
      glyph: 'home',
      color: '#22c55e',
      screenshot: { en: dashboard, fr: dashboard },
      screenshotAlt: { en: 'ForkWatch dashboard', fr: 'Tableau de bord de ForkWatch' },
      summary: {
        en: 'Add a fork by pasting its URL and ForkWatch finds the original repository. Each card shows the state of a repository, its last change and its archives.',
        fr: 'Ajoutez un fork en collant son adresse, et ForkWatch retrouve le dépôt d’origine. Chaque carte montre l’état d’un dépôt, son dernier changement et ses archives.',
      },
      points: {
        en: [
          'Works with any Git host: GitHub, GitLab, Gitea… Paste a repository URL to watch it directly.',
          'Check one repository or all of them, pause or remove one.',
          'History of each repository and archive downloads.',
          'French or English, light or dark theme.',
        ],
        fr: [
          'Compatible avec tous les hébergeurs Git : GitHub, GitLab, Gitea… Collez l’adresse d’un dépôt pour le surveiller directement.',
          'Vérifiez un dépôt ou tous, mettez-en un en pause ou retirez-le.',
          'Historique de chaque dépôt et téléchargement des archives.',
          'En français ou en anglais, thème clair ou sombre.',
        ],
      },
    },
    {
      id: 'safety',
      title: { en: 'Safe updates', fr: 'Mises à jour sûres' },
      heading: { en: 'Suspicious updates are blocked', fr: 'Les mises à jour suspectes sont bloquées' },
      glyph: 'filter',
      color: '#ef4444',
      summary: {
        en: 'Before applying a change, ForkWatch analyses it. On the main branch, the one people actually use, it blocks anything that looks wrong and keeps the upstream version aside.',
        fr: 'Avant d’appliquer un changement, ForkWatch l’analyse. Sur la branche principale, celle qu’on utilise réellement, il bloque tout ce qui semble anormal et met la version distante de côté.',
      },
      points: {
        en: [
          'History rewritten by a force-push.',
          'A branch suddenly losing a large share of its files.',
          'Review the reasons and accept a blocked update in one click.',
        ],
        fr: [
          'Historique réécrit par un force-push.',
          'Branche qui perd d’un coup une grande partie de ses fichiers.',
          'Consultez les raisons et acceptez une mise à jour bloquée en un clic.',
        ],
      },
    },
    {
      id: 'archives',
      title: { en: 'Archives', fr: 'Archives' },
      heading: { en: 'Every version, archived', fr: 'Chaque version, archivée' },
      glyph: 'archive',
      color: '#14b8a6',
      summary: {
        en: 'Before every update, ForkWatch saves the previous state as a .bundle file: the full history in a single file, restorable with a plain git clone.',
        fr: 'Avant chaque mise à jour, ForkWatch enregistre l’état précédent dans un fichier .bundle : tout l’historique dans un seul fichier, restaurable avec un simple git clone.',
      },
      points: {
        en: [
          'Branches and tags deleted or moved upstream are kept.',
          'Detects changes with git ls-remote: nothing is downloaded when nothing moved.',
          'Archives can be backed up automatically to a second storage, for safety.',
        ],
        fr: [
          'Les branches et tags supprimés ou déplacés en amont sont conservés.',
          'Détection des changements avec git ls-remote : rien n’est téléchargé si rien n’a bougé.',
          'Les archives peuvent être sauvegardées automatiquement sur un second stockage, par sécurité.',
        ],
      },
    },
    {
      id: 'alerts',
      title: { en: 'Alerts & forks', fr: 'Alertes et forks' },
      heading: { en: 'Discord alerts and fork sync', fr: 'Alertes Discord et synchro des forks' },
      glyph: 'sync',
      color: '#8b5cf6',
      summary: {
        en: 'ForkWatch tells you on Discord what changed, in French or English, and can keep your GitHub forks up to date after each healthy update.',
        fr: 'ForkWatch vous prévient sur Discord de ce qui a changé, en français ou en anglais, et peut mettre à jour vos forks GitHub après chaque mise à jour saine.',
      },
      points: {
        en: [
          'Colored notifications: update, minor change, block, unreachable upstream.',
          'Optional GitHub token, stored on your server and never shown back.',
        ],
        fr: [
          'Notifications en couleur : mise à jour, changement mineur, blocage, dépôt injoignable.',
          'Jeton GitHub facultatif, stocké sur votre serveur et jamais réaffiché.',
        ],
      },
      limits: {
        en: ['Fork detection and sync only work with GitHub.', 'Private upstream repositories aren’t supported.'],
        fr: ['La détection et la synchro des forks ne fonctionnent qu’avec GitHub.', 'Les dépôts d’origine privés ne sont pas pris en charge.'],
      },
    },
    {
      id: 'security',
      title: { en: 'Security', fr: 'Sécurité' },
      heading: { en: 'Keep it on your network', fr: 'Gardez-le sur votre réseau' },
      glyph: 'ghost',
      color: '#f59e0b',
      summary: {
        en: 'The dashboard has no authentication: anyone who can open it can accept updates or change the settings. It’s made for a local network or a VPN.',
        fr: 'Le tableau de bord n’a pas d’authentification : toute personne qui peut l’ouvrir peut accepter des mises à jour ou changer les réglages. Il est fait pour un réseau local ou un VPN.',
      },
      points: {
        en: ['Secrets are readable by root only and never sent back by the dashboard.'],
        fr: ['Les secrets ne sont lisibles que par root et jamais renvoyés par le tableau de bord.'],
      },
      limits: {
        en: ['Never expose the dashboard publicly on the internet.'],
        fr: ['N’exposez jamais le tableau de bord publiquement sur Internet.'],
      },
    },
  ],
};
