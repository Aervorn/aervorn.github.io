import type { App } from './types';
import icon from '../assets/apps/hookbar-icon.png?url';
import home from '../assets/apps/hookbar-home.jpg';
import homeFr from '../assets/apps/hookbar-home-fr.jpg';
import windowShot from '../assets/apps/hookbar-window.jpg';
import windowShotFr from '../assets/apps/hookbar-window-fr.jpg';

export const hookbar: App = {
  slug: 'hookbar',
  name: 'HookBar',
  platform: 'mac',
  version: '0.2.0',
  released: '2026-11-27T11:20+01:00',
  selfUpdating: true,
  tagline: {
    en: 'Your Discord notifications in the Mac menu bar.',
    fr: 'Vos notifications Discord dans la barre de menus du Mac.',
  },
  description: {
    en: 'Homelab alerts posted to your Discord server by bots and webhooks (Uptime Kuma, Proxmox, Synology, Home Assistant…), counted in the menu bar and listed channel by channel in a Gitify-style window, without opening Discord.',
    fr: 'Les alertes de votre homelab postées sur votre serveur Discord par des bots et des webhooks (Uptime Kuma, Proxmox, Synology, Home Assistant…), comptées dans la barre de menus et listées salon par salon dans une fenêtre façon Gitify, sans ouvrir Discord.',
  },
  icon,
  screenshot: { en: home, fr: homeFr },
  screenshotAlt: {
    en: 'HookBar: channels with unread messages on the left, their messages on the right',
    fr: 'HookBar : les salons non lus à gauche, leurs messages à droite',
  },
  accent: ['#8b5cf6', '#4f46e5'],
  features: [
    { label: { en: 'Unread counter', fr: 'Compteur de non-lus' }, color: '#f43f5e' },
    { label: { en: 'Discord embeds', fr: 'Embeds Discord' }, color: '#8b5cf6' },
    { label: { en: 'Automatic app icons', fr: 'Icônes automatiques' }, color: '#0ea5e9' },
    { label: { en: 'Nothing missed', fr: 'Rien de manqué' }, color: '#22c55e' },
  ],
  requirements: { en: 'macOS 26+ · your own Discord bot', fr: 'macOS 26+ · votre propre bot Discord' },
  minMacOS: 'macOS 26',
  repo: 'https://github.com/Aervorn/MacOS_HookBar',
  facts: [
    { label: { en: 'Version', fr: 'Version' }, value: '0.2.0' },
    { label: { en: 'Requires', fr: 'Requiert' }, value: 'macOS 26' },
    { label: { en: 'Interface', fr: 'Interface' }, value: 'EN · FR' },
    { label: { en: 'Source', fr: 'Source' }, value: 'Discord bot' },
    { label: { en: 'License', fr: 'Licence' }, value: 'MIT' },
  ],
  notice: {
    en: 'HookBar reads your server through your own Discord bot, created in five minutes (step-by-step guide in the README). It isn’t affiliated with or endorsed by Discord.',
    fr: 'HookBar lit votre serveur avec votre propre bot Discord, créé en cinq minutes (guide pas à pas dans le README). Elle n’est ni affiliée à Discord, ni approuvée par Discord.',
  },
  privacy: {
    en: 'HookBar collects nothing and sends nothing about you. It only connects to Discord with your bot’s token (kept in your macOS keychain), downloads avatars, embed images and selfh.st icons, and checks for its own updates on GitHub. It never posts anything and doesn’t read your direct messages.',
    fr: 'HookBar ne collecte rien et n’envoie rien vous concernant. Elle se connecte seulement à Discord avec le jeton de votre bot (gardé dans votre trousseau macOS), télécharge les avatars, les images des embeds et les icônes selfh.st, et cherche ses propres mises à jour sur GitHub. Elle ne poste jamais rien et ne lit pas vos messages privés.',
  },
  sections: [
    {
      id: 'overview',
      title: { en: 'Window', fr: 'Fenêtre' },
      heading: { en: 'Unread, channel by channel', fr: 'Les non-lus, salon par salon' },
      glyph: 'feed',
      color: '#7c3aed',
      screenshot: { en: windowShot, fr: windowShotFr },
      screenshotAlt: { en: 'The HookBar window', fr: 'La fenêtre de HookBar' },
      summary: {
        en: 'A bell in the menu bar with the number of unread messages. A click opens the window: channels with unread messages on the left, with their app icon and a badge, and their messages on the right.',
        fr: 'Une cloche dans la barre de menus avec le nombre de messages non lus. Un clic ouvre la fenêtre : à gauche les salons qui ont des messages non lus, avec l’icône de leur application et une pastille, à droite leurs messages.',
      },
      points: {
        en: [
          'The unread count stands out in color in the menu bar: pick yours, or turn it off.',
          'A channel without unread messages disappears from the list.',
          'Embeds as Discord shows them: color bar, title, fields, image, footer.',
          'Click a message to expand it, with its links and an Open in Discord link.',
          'No Dock icon: HookBar only lives in the menu bar.',
        ],
        fr: [
          'Le nombre de non-lus ressort en couleur dans la barre de menus : choisissez la vôtre, ou désactivez-la.',
          'Un salon sans message non lu disparaît de la liste.',
          'Les embeds comme dans Discord : barre de couleur, titre, champs, image, pied.',
          'Un clic sur un message le déplie, avec ses liens et un lien Ouvrir dans Discord.',
          'Pas d’icône dans le Dock : HookBar vit uniquement dans la barre de menus.',
        ],
      },
    },
    {
      id: 'read',
      title: { en: 'Mark as read', fr: 'Marquer comme lu' },
      heading: { en: 'One check, just where it helps', fr: 'Une coche, là où elle sert' },
      glyph: 'eye',
      color: '#22c55e',
      summary: {
        en: 'Messages stay until you mark them as read, even after a restart. A green check per message (on hover), per channel and for everything, shown only when no other visible check already does the same.',
        fr: 'Les messages restent jusqu’à ce que vous les marquiez comme lus, même après un redémarrage. Une coche verte par message (au survol), par salon et pour tout, affichée seulement si aucune autre coche visible ne fait déjà la même chose.',
      },
      points: {
        en: [
          'Option: clicking a message also marks it as read; it stays visible, dimmed, until the window closes.',
          'A message you just read can be marked unread again.',
        ],
        fr: [
          'Option : cliquer sur un message le marque aussi comme lu ; il reste affiché, estompé, jusqu’à la fermeture de la fenêtre.',
          'Un message lu à l’instant peut redevenir non lu.',
        ],
      },
    },
    {
      id: 'icons',
      title: { en: 'Icons', fr: 'Icônes' },
      heading: { en: 'Each channel, its app', fr: 'Chaque salon, son application' },
      glyph: 'sparkle',
      color: '#0ea5e9',
      summary: {
        en: 'Each channel gets the icon of its app from the selfh.st catalog (about 3,000 self-hosting icons), found automatically from its name.',
        fr: 'Chaque salon reçoit l’icône de son application, tirée du catalogue selfh.st (environ 3 000 icônes d’auto-hébergement), trouvée automatiquement d’après son nom.',
      },
      points: {
        en: [
          'Typos and variants are recognized: proxmmox, ad-guard, jdownloader2.',
          'Aliases for the usual suspects: nut → Network UPS Tools, unifi → UniFi.',
          'Generic channels get a symbol (security → shield); any icon can be changed in Settings.',
        ],
        fr: [
          'Fautes de frappe et variantes reconnues : proxmmox, ad-guard, jdownloader2.',
          'Des alias pour les cas courants : nut → Network UPS Tools, unifi → UniFi.',
          'Les salons génériques reçoivent un symbole (security → bouclier) ; chaque icône se change dans les Réglages.',
        ],
      },
    },
    {
      id: 'reliable',
      title: { en: 'Reliable', fr: 'Fiable' },
      heading: { en: 'Nothing slips through', fr: 'Rien ne passe à la trappe' },
      glyph: 'sync',
      color: '#f59e0b',
      summary: {
        en: 'A real-time connection to Discord, with automatic reconnection after a network loss or when the Mac wakes up. A network loss shows up right away, with a slashed bell, and messages posted in the meantime are fetched as soon as it’s back.',
        fr: 'Une connexion en temps réel à Discord, avec reconnexion automatique après une coupure réseau ou au réveil du Mac. Une perte de réseau est signalée aussitôt par une cloche barrée, et les messages postés entre-temps sont récupérés dès son retour.',
      },
      points: {
        en: [
          'Optional macOS banner per channel, and a single summary banner after a long disconnection.',
          'New channels on your server are followed automatically (can be turned off).',
        ],
        fr: [
          'Bannière macOS facultative par salon, et une seule bannière récapitulative après une longue coupure.',
          'Les nouveaux salons de votre serveur sont suivis automatiquement (désactivable).',
        ],
      },
    },
    {
      id: 'bot',
      title: { en: 'Your bot', fr: 'Votre bot' },
      heading: { en: 'Five minutes to set up', fr: 'Cinq minutes de mise en route' },
      glyph: 'lock',
      color: '#ec4899',
      summary: {
        en: 'HookBar reads your server through a bot you create on Discord’s developer portal and invite to your server. Its token stays in your Mac’s keychain.',
        fr: 'HookBar lit votre serveur avec un bot que vous créez sur le portail développeur de Discord et invitez sur votre serveur. Son jeton reste dans le trousseau de votre Mac.',
      },
      points: {
        en: [
          'Create an application, copy the bot’s token and turn on Message Content Intent.',
          'Invite the bot with the View Channels and Read Message History permissions.',
          'Paste the token in HookBar’s Settings, then choose the channels to follow.',
        ],
        fr: [
          'Créez une application, copiez le jeton du bot et activez Message Content Intent.',
          'Invitez le bot avec les permissions View Channels et Read Message History.',
          'Collez le jeton dans les Réglages de HookBar, puis choisissez les salons à suivre.',
        ],
      },
      limits: {
        en: [
          'Shows new messages: Discord doesn’t share your personal read state with bots, so older messages aren’t imported.',
          'Direct messages aren’t supported.',
        ],
        fr: [
          'Affiche les nouveaux messages : Discord ne communique pas votre état de lecture aux bots, les messages plus anciens ne sont donc pas importés.',
          'Les messages privés ne sont pas pris en charge.',
        ],
      },
    },
  ],
};
