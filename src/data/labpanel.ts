import type { App } from './types';
import icon from '../assets/apps/labpanel-icon.png?url';
import home from '../assets/apps/labpanel-home.jpg';
import dock from '../assets/apps/labpanel-dock.jpg';
import dockFr from '../assets/apps/labpanel-dock-fr.jpg';
import switcher from '../assets/apps/labpanel-switcher.jpg';
import switcherFr from '../assets/apps/labpanel-switcher-fr.jpg';
import settings from '../assets/apps/labpanel-settings.jpg';
import settingsFr from '../assets/apps/labpanel-settings-fr.jpg';

// The home screenshot has no interface text: it is used for both languages.
const both = <V,>(v: V) => ({ en: v, fr: v });

export const labpanel: App = {
  slug: 'labpanel',
  name: 'LabPanel',
  platform: 'mac',
  version: '0.2.2',
  selfUpdating: true,
  tagline: {
    en: 'Your homelab’s web interfaces in one Mac window.',
    fr: 'Les interfaces web de votre homelab dans une seule fenêtre Mac.',
  },
  description: {
    en: 'UniFi, Synology DSM, Proxmox, Home Assistant, AdGuard Home and any other web interface, one tab per service in a native window. Pages stay alive between tabs, each service keeps its own sign-in, and a dot tells you whether it responds.',
    fr: 'UniFi, Synology DSM, Proxmox, Home Assistant, AdGuard Home et toute autre interface web, un onglet par service dans une fenêtre native. Les pages restent ouvertes d’un onglet à l’autre, chaque service garde sa connexion, et une pastille indique s’il répond.',
  },
  icon,
  screenshot: both(home),
  screenshotAlt: {
    en: 'LabPanel with the capsule tab bar and a service open',
    fr: 'LabPanel avec la capsule d’onglets et un service ouvert',
  },
  accent: ['#22d3ee', '#7c3aed'],
  features: [
    { label: { en: 'Capsule or dock tabs', fr: 'Onglets capsule ou dock' }, color: '#22d3ee' },
    { label: { en: 'Quick switcher ⌘K', fr: 'Sélecteur rapide ⌘K' }, color: '#a855f7' },
    { label: { en: 'Automatic sign-in', fr: 'Connexion automatique' }, color: '#f59e0b' },
    { label: { en: 'Service status', fr: 'État des services' }, color: '#2dd4bf' },
  ],
  requirements: { en: 'macOS 26+', fr: 'macOS 26+' },
  minMacOS: 'macOS 26',
  repo: 'https://github.com/Aervorn/MacOS_LabPanel',
  facts: [
    { label: { en: 'Version', fr: 'Version' }, value: '0.2.2' },
    { label: { en: 'Requires', fr: 'Requiert' }, value: 'macOS 26' },
    { label: { en: 'Interface', fr: 'Interface' }, value: 'EN · FR' },
    { label: { en: 'Engine', fr: 'Moteur' }, value: 'WebKit' },
    { label: { en: 'License', fr: 'Licence' }, value: 'MIT' },
  ],
  notice: {
    en: 'LabPanel shows the web interfaces of services you already run; it isn’t affiliated with Ubiquiti, Synology, Proxmox, Home Assistant or the other services it opens.',
    fr: 'LabPanel affiche les interfaces web de services que vous faites déjà tourner ; il n’est affilié ni à Ubiquiti, ni à Synology, ni à Proxmox, ni à Home Assistant, ni aux autres services qu’il ouvre.',
  },
  privacy: {
    en: 'LabPanel collects nothing and sends nothing about you. It only opens your services at the addresses you enter, checks that they respond, downloads their official icons once and checks for its own updates on GitHub. Saved logins stay in your macOS keychain.',
    fr: 'LabPanel ne collecte rien et n’envoie rien vous concernant. Il ouvre seulement vos services aux adresses que vous saisissez, vérifie qu’ils répondent, télécharge une fois leurs icônes officielles et cherche ses propres mises à jour sur GitHub. Les identifiants enregistrés restent dans votre trousseau macOS.',
  },
  sections: [
    {
      id: 'overview',
      title: { en: 'Tabs', fr: 'Onglets' },
      heading: { en: 'One tab per service', fr: 'Un onglet par service' },
      glyph: 'list',
      color: '#2563eb',
      screenshot: both(home),
      screenshotAlt: { en: 'The capsule tab bar in LabPanel', fr: 'La capsule d’onglets de LabPanel' },
      summary: {
        en: 'A glass tab bar in the title bar, macOS 26 style: each service has its official icon and color, only the open tab shows its name, and the highlight slides from one tab to the next.',
        fr: 'Une barre d’onglets en verre dans la barre de titre, façon macOS 26 : chaque service a son icône officielle et sa couleur, seul l’onglet ouvert affiche son nom, et la surbrillance glisse d’un onglet à l’autre.',
      },
      points: {
        en: [
          'Nine services ready to go: UniFi, DSM, Proxmox, Dockhand, AdGuard, NPM, NUT, Home Assistant and Zigbee2MQTT, plus your own.',
          '⌘1 … ⌘9 to jump to a tab, ⌃⇥ for the next one.',
          'Right-click a tab to reload, go home, open in your browser, copy the address or hide it.',
        ],
        fr: [
          'Neuf services prêts à l’emploi : UniFi, DSM, Proxmox, Dockhand, AdGuard, NPM, NUT, Home Assistant et Zigbee2MQTT, plus les vôtres.',
          '⌘1 … ⌘9 pour aller à un onglet, ⌃⇥ pour passer au suivant.',
          'Clic droit sur un onglet pour recharger, revenir à l’accueil, ouvrir dans le navigateur, copier l’adresse ou le masquer.',
        ],
      },
    },
    {
      id: 'dock',
      title: { en: 'Dock', fr: 'Dock' },
      heading: { en: 'Or a floating dock', fr: 'Ou un dock flottant' },
      glyph: 'grid',
      color: '#7c3aed',
      screenshot: { en: dock, fr: dockFr },
      screenshotAlt: { en: 'The floating dock at the bottom of LabPanel', fr: 'Le dock flottant en bas de LabPanel' },
      summary: {
        en: 'Prefer the tabs at the bottom? A floating glass dock, with icons that grow under the pointer like the macOS Dock and each service’s name and status above its icon.',
        fr: 'Vous préférez les onglets en bas ? Un dock flottant en verre, avec des icônes qui grossissent sous le pointeur comme le Dock de macOS, et le nom et l’état de chaque service au-dessus de son icône.',
      },
      points: {
        en: [
          'Hides itself and shows up when the pointer reaches the bottom of the window, or stays visible.',
          'Switch between capsule and dock in Settings › General.',
        ],
        fr: [
          'Se masque et réapparaît quand le pointeur atteint le bas de la fenêtre, ou reste visible.',
          'Passez de la capsule au dock dans Réglages › Général.',
        ],
      },
    },
    {
      id: 'switcher',
      title: { en: 'Quick switcher', fr: 'Sélecteur rapide' },
      heading: { en: 'Anywhere in a few keystrokes', fr: 'Partout en quelques touches' },
      glyph: 'keyboard',
      color: '#a855f7',
      screenshot: { en: switcher, fr: switcherFr },
      screenshotAlt: { en: 'The ⌘K quick switcher in LabPanel', fr: 'Le sélecteur rapide ⌘K de LabPanel' },
      summary: {
        en: 'Press ⌘K, type a few letters (prox, ha for Home Assistant, part of an address), Enter, and you’re there.',
        fr: 'Appuyez sur ⌘K, tapez quelques lettres (prox, ha pour Home Assistant, un bout d’adresse), Entrée, et vous y êtes.',
      },
      points: {
        en: [
          'Also offers the common actions for each service: reload, fill login, open in browser, unload, edit.',
          'Its shortcut can be changed in Settings › General, so ⌘K stays free for pages that use it, like Dockhand.',
        ],
        fr: [
          'Propose aussi les actions courantes de chaque service : recharger, remplir l’identifiant, ouvrir dans le navigateur, décharger, modifier.',
          'Son raccourci se change dans Réglages › Général, pour laisser ⌘K aux pages qui s’en servent, comme Dockhand.',
        ],
      },
    },
    {
      id: 'pages',
      title: { en: 'Pages', fr: 'Pages' },
      heading: { en: 'Pages that stay alive', fr: 'Des pages qui restent ouvertes' },
      glyph: 'sync',
      color: '#0ea5e9',
      summary: {
        en: 'Switching tabs doesn’t reload anything: you find Proxmox, Home Assistant or DSM exactly where you left them, and each service keeps its own cookies, so two services on the same NAS don’t sign each other out.',
        fr: 'Changer d’onglet ne recharge rien : vous retrouvez Proxmox, Home Assistant ou DSM exactement où vous les avez laissés, et chaque service garde ses propres cookies, pour que deux services du même NAS ne se déconnectent pas l’un l’autre.',
      },
      points: {
        en: [
          'Pop-up windows (Proxmox’s noVNC console…), downloads, file uploads and HTTP passwords work as in a browser.',
          'Inactive tabs can be unloaded to free memory and reopen at the same page; Proxmox is exempt by default.',
          'Page zoom per service, and light or dark mode passed on to pages that support it.',
        ],
        fr: [
          'Fenêtres surgissantes (console noVNC de Proxmox…), téléchargements, envoi de fichiers et mots de passe HTTP fonctionnent comme dans un navigateur.',
          'Les onglets inactifs peuvent être déchargés pour libérer la mémoire et rouvrent à la même page ; Proxmox est exempté par défaut.',
          'Zoom par service, et mode clair ou sombre transmis aux pages qui le gèrent.',
        ],
      },
    },
    {
      id: 'signin',
      title: { en: 'Sign-in', fr: 'Connexion' },
      heading: { en: 'Signed in, and staying that way', fr: 'Connecté, et ça dure' },
      glyph: 'lock',
      color: '#f59e0b',
      summary: {
        en: 'For services that keep signing you out, LabPanel can fill the login form with credentials stored in your Mac’s keychain, and submit it if you like.',
        fr: 'Pour les services qui vous déconnectent sans cesse, LabPanel peut remplir le formulaire de connexion avec des identifiants gardés dans le trousseau de votre Mac, et le valider si vous le souhaitez.',
      },
      points: {
        en: [
          'Handles Proxmox, DSM’s two-step login and Home Assistant’s Shadow DOM forms.',
          'Logins are only given to pages on the service’s own host; after a failure, nothing is submitted again for two minutes.',
          'Self-signed certificates (Proxmox, DSM, UniFi) are accepted for that service’s host only.',
        ],
        fr: [
          'Gère Proxmox, la connexion en deux étapes de DSM et les formulaires en Shadow DOM de Home Assistant.',
          'Les identifiants ne sont donnés qu’aux pages du service lui-même ; après un échec, rien n’est renvoyé pendant deux minutes.',
          'Les certificats auto-signés (Proxmox, DSM, UniFi) sont acceptés pour l’hôte du service uniquement.',
        ],
      },
    },
    {
      id: 'status',
      title: { en: 'Status', fr: 'État' },
      heading: { en: 'Is it up?', fr: 'Ça répond ?' },
      glyph: 'gauge',
      color: '#22c55e',
      summary: {
        en: 'Once a minute, and when the Mac wakes up, LabPanel checks that each service responds: green dot if it does, orange if its certificate isn’t accepted, red if nothing answers.',
        fr: 'Une fois par minute, et au réveil du Mac, LabPanel vérifie que chaque service répond : pastille verte s’il répond, orange si son certificat n’est pas accepté, rouge si rien ne répond.',
      },
      points: {
        en: ['The tooltip shows the response time. Can be turned off in Settings.'],
        fr: ['L’infobulle indique le temps de réponse. Désactivable dans les Réglages.'],
      },
    },
    {
      id: 'settings',
      title: { en: 'Settings', fr: 'Réglages' },
      heading: { en: 'Your services, your way', fr: 'Vos services, à votre façon' },
      glyph: 'tag',
      color: '#ec4899',
      screenshot: { en: settings, fr: settingsFr },
      screenshotAlt: { en: 'Service settings in LabPanel', fr: 'Réglages des services dans LabPanel' },
      summary: {
        en: 'Add as many services as you like, reorder or hide tabs, and give each one a name, an address, a color and an icon.',
        fr: 'Ajoutez autant de services que vous voulez, réordonnez ou masquez les onglets, et donnez à chacun un nom, une adresse, une couleur et une icône.',
      },
      points: {
        en: [
          'Official icons from Dashboard Icons (3,000+, with search), any SF Symbol or your own image.',
          'Clear one service’s cookies and data without touching the others.',
          'Light, dark or automatic appearance, English or French interface.',
        ],
        fr: [
          'Icônes officielles de Dashboard Icons (plus de 3 000, avec recherche), n’importe quel SF Symbol ou votre propre image.',
          'Effacez les cookies et données d’un service sans toucher aux autres.',
          'Apparence claire, sombre ou automatique, interface en français ou en anglais.',
        ],
      },
    },
  ],
};
