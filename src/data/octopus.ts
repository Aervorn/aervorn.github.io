import type { App } from './types';
import icon from '../assets/apps/octopus-icon.svg?url';
import home from '../assets/apps/octopus-home.jpg';
import homeFr from '../assets/apps/octopus-home-fr.jpg';
import clean from '../assets/apps/octopus-clean.jpg';
import cleanFr from '../assets/apps/octopus-clean-fr.jpg';
import status from '../assets/apps/octopus-status.jpg';
import statusFr from '../assets/apps/octopus-status-fr.jpg';
import security from '../assets/apps/octopus-security.jpg';
import securityFr from '../assets/apps/octopus-security-fr.jpg';
import homebrew from '../assets/apps/octopus-homebrew.jpg';
import homebrewFr from '../assets/apps/octopus-homebrew-fr.jpg';
import ssh from '../assets/apps/octopus-ssh.jpg';
import sshFr from '../assets/apps/octopus-ssh-fr.jpg';


export const octopus: App = {
  slug: 'octopus',
  name: 'Octopus',
  platform: 'mac',
  version: '0.2.0',
  released: '2026-11-13T10:07+01:00',
  selfUpdating: true,
  tagline: {
    en: 'Cleanup, apps, security and system tools for your Mac.',
    fr: 'Nettoyage, apps, sécurité et outils système pour votre Mac.',
  },
  description: {
    en: 'A native interface for Mole, the command-line cleanup tool, with every command and option one click away, plus its own tools: security checks, SSH keys, network ports, startup items, Homebrew and hidden settings.',
    fr: 'Une interface native pour Mole, l’outil de nettoyage en ligne de commande, avec toutes ses commandes et options à portée de clic, et ses propres outils : vérifications de sécurité, clés SSH, ports réseau, éléments de démarrage, Homebrew et réglages cachés.',
  },
  icon,
  screenshot: { en: home, fr: homeFr },
  screenshotAlt: {
    en: 'Octopus home with Mac health, security status, Mole version and every tool',
    fr: 'Accueil d’Octopus avec la santé du Mac, la sécurité, la version de Mole et tous les outils',
  },
  accent: ['#3fbed6', '#2563eb'],
  features: [
    { label: { en: 'Cleanup with Mole', fr: 'Nettoyage avec Mole' }, color: '#3fbed6' },
    { label: { en: 'Security checks', fr: 'Vérifications de sécurité' }, color: '#22c55e' },
    { label: { en: 'App management', fr: 'Gestion des apps' }, color: '#f59e0b' },
    { label: { en: 'System tools', fr: 'Outils système' }, color: '#a78bfa' },
  ],
  requirements: { en: 'macOS 14+ · Mole for cleanup', fr: 'macOS 14+ · Mole pour le nettoyage' },
  minMacOS: 'macOS 14',
  repo: 'https://github.com/Aervorn/MacOS_Octopus',
  facts: [
    { label: { en: 'Version', fr: 'Version' }, value: '0.2.0' },
    { label: { en: 'Requires', fr: 'Requiert' }, value: 'macOS 14' },
    { label: { en: 'Interface', fr: 'Interface' }, value: 'EN · FR' },
    { label: { en: 'Engine', fr: 'Moteur' }, value: 'Mole' },
    { label: { en: 'License', fr: 'Licence' }, value: 'MIT' },
  ],
  notice: {
    en: 'Octopus drives Mole, which it can install for you; it isn’t affiliated with Mole or its author.',
    fr: 'Octopus pilote Mole, qu’il peut installer pour vous ; il n’est pas affilié à Mole ni à son auteur.',
  },
  privacy: {
    en: 'Octopus collects nothing and sends nothing about you. It only checks the latest Mole version and its own updates on GitHub, and your public IP address when you open the Network view.',
    fr: 'Octopus ne collecte rien et n’envoie rien vous concernant. Il vérifie seulement la dernière version de Mole et ses propres mises à jour sur GitHub, et votre adresse IP publique quand vous ouvrez la vue Réseau.',
  },
  sections: [
    {
      id: 'overview',
      title: { en: 'Home', fr: 'Accueil' },
      heading: { en: 'Your Mac at a glance', fr: 'Votre Mac en un coup d’œil' },
      glyph: 'home',
      color: '#3fbed6',
      screenshot: { en: home, fr: homeFr },
      screenshotAlt: { en: 'Octopus home', fr: 'Accueil d’Octopus' },
      summary: {
        en: 'Health, disk and memory gauges, the result of the security checks, the installed Mole version and Full Disk Access status, with a tile for every tool.',
        fr: 'Jauges de santé, de disque et de mémoire, résultat des vérifications de sécurité, version de Mole installée et état de l’accès complet au disque, avec une tuile pour chaque outil.',
      },
      points: {
        en: [
          'Mole updates in one click, with Homebrew or mo update depending on how it was installed.',
          'If Mole is missing, Octopus offers to install it.',
          'Light, dark or automatic mode, with color-coded sections.',
        ],
        fr: [
          'Mise à jour de Mole en un clic, avec Homebrew ou mo update selon la façon dont il a été installé.',
          'Si Mole est absent, Octopus propose de l’installer.',
          'Mode clair, sombre ou automatique, avec des sections colorées.',
        ],
      },
    },
    {
      id: 'cleanup',
      title: { en: 'Cleanup', fr: 'Nettoyage' },
      heading: { en: 'Every Mole command, with its options', fr: 'Toutes les commandes de Mole, avec leurs options' },
      glyph: 'sparkle',
      color: '#0ea5e9',
      screenshot: { en: clean, fr: cleanFr },
      screenshotAlt: { en: 'Disk cleanup with Mole in Octopus', fr: 'Nettoyage du disque avec Mole dans Octopus' },
      summary: {
        en: 'Caches, logs, project artifacts, installer files and Time Machine snapshots. Options are checkboxes, and Mole runs in a real embedded terminal, Touch ID and sudo included.',
        fr: 'Caches, logs, artefacts de projets, fichiers d’installation et instantanés Time Machine. Les options sont des cases à cocher, et Mole s’exécute dans un vrai terminal intégré, Touch ID et sudo compris.',
      },
      points: {
        en: [
          'Preview first: --dry-run is checked by default on every command that deletes.',
          'The generated command line is always shown before launch.',
          'Includes the Mole commands missing from the mo menu.',
        ],
        fr: [
          'Aperçu d’abord : --dry-run est coché par défaut sur toutes les commandes qui suppriment.',
          'La ligne de commande générée est toujours affichée avant le lancement.',
          'Y compris les commandes de Mole absentes du menu de mo.',
        ],
      },
    },
    {
      id: 'apps',
      title: { en: 'App management', fr: 'Gestion des apps' },
      heading: { en: 'Apps, startup items and Homebrew', fr: 'Apps, éléments de démarrage et Homebrew' },
      glyph: 'grid',
      color: '#f59e0b',
      screenshot: { en: homebrew, fr: homebrewFr },
      screenshotAlt: { en: 'Homebrew in Octopus', fr: 'Homebrew dans Octopus' },
      summary: {
        en: 'Uninstall apps with all their files, slim universal apps, choose default apps, and keep an eye on what starts with your Mac.',
        fr: 'Désinstallez des apps avec tous leurs fichiers, allégez les apps universelles, choisissez les apps par défaut, et surveillez ce qui démarre avec votre Mac.',
      },
      points: {
        en: [
          'Startup items with their signature: enable, disable or reveal them, several at a time.',
          'Homebrew: one-click upgrades, packages excluded from updates, formulae and casks, services, cleanup and autoremove.',
          'Detects and repairs a cask stuck on “already an App at…”.',
        ],
        fr: [
          'Éléments de démarrage avec leur signature : activez, désactivez ou affichez-les, plusieurs à la fois.',
          'Homebrew : mises à jour en un clic, paquets exclus des mises à jour, formules et casks, services, nettoyage et autoremove.',
          'Détecte et répare un cask bloqué sur « already an App at… ».',
        ],
      },
    },
    {
      id: 'system',
      title: { en: 'System', fr: 'Système' },
      heading: { en: 'Live status and disk explorer', fr: 'État en direct et explorateur de disque' },
      glyph: 'gauge',
      color: '#22c55e',
      screenshot: { en: status, fr: statusFr },
      screenshotAlt: { en: 'System status in Octopus', fr: 'État du système dans Octopus' },
      summary: {
        en: 'CPU, GPU, memory, disks, network, battery and the busiest processes, live, in native views built on Mole’s data.',
        fr: 'CPU, GPU, mémoire, disques, réseau, batterie et processus les plus gourmands, en direct, dans des vues natives construites sur les données de Mole.',
      },
      points: {
        en: [
          'The biggest folders and files of your Mac or of a folder, sortable, with reveal in Finder.',
          'Optimize: refreshes system caches and services, and runs risk-free maintenance tasks.',
          'History of Mole’s recent operations and deletions.',
        ],
        fr: [
          'Les plus gros dossiers et fichiers du Mac ou d’un dossier, triables, avec affichage dans le Finder.',
          'Optimiser : rafraîchit les caches et services système, et lance les tâches d’entretien sans risque.',
          'Historique des opérations et suppressions récentes de Mole.',
        ],
      },
    },
    {
      id: 'security',
      title: { en: 'Security', fr: 'Sécurité' },
      heading: { en: 'Is your Mac protected?', fr: 'Votre Mac est-il protégé ?' },
      glyph: 'shield',
      color: '#ef4444',
      screenshot: { en: security, fr: securityFr },
      screenshotAlt: { en: 'Security checks in Octopus', fr: 'Vérifications de sécurité dans Octopus' },
      summary: {
        en: 'Checks in the spirit of SilentKnight: SIP, signed system volume, boot security, Gatekeeper, FileVault, firewall, XProtect and its last scans, firmware and pending updates.',
        fr: 'Des vérifications dans l’esprit de SilentKnight : SIP, volume système signé, démarrage sécurisé, Gatekeeper, FileVault, coupe-feu, XProtect et ses derniers scans, firmware et mises à jour en attente.',
      },
      points: {
        en: ['App inspector: who signed an app, whether it’s from the App Store or notarized, whether it’s sandboxed, its quarantine and entitlements, and quarantine removal.'],
        fr: ['Inspecteur d’app : qui l’a signée, si elle vient de l’App Store ou est notarisée, si elle est dans un bac à sable, sa quarantaine et ses droits, et retrait de la quarantaine.'],
      },
    },
    {
      id: 'tools',
      title: { en: 'Tools', fr: 'Outils' },
      heading: { en: 'SSH, ports, network and hidden settings', fr: 'SSH, ports, réseau et réglages cachés' },
      glyph: 'terminal',
      color: '#8b5cf6',
      screenshot: { en: ssh, fr: sshFr },
      screenshotAlt: { en: 'SSH keys in Octopus', fr: 'Clés SSH dans Octopus' },
      summary: {
        en: 'Your SSH keys and the agent’s (1Password included), the hosts of ~/.ssh/config with a form editor, known hosts, connection test and public key upload.',
        fr: 'Vos clés SSH et celles de l’agent (1Password compris), les hôtes de ~/.ssh/config avec un éditeur en formulaire, les hôtes connus, le test de connexion et l’envoi de clé publique.',
      },
      points: {
        en: [
          'Network ports: which process listens on which port, root processes included, with Touch ID.',
          'Network: addresses, DNS, public IP, diagnostics and the hosts file editor.',
          'Hidden settings for Finder, screenshots and the Dock, without defaults write.',
        ],
        fr: [
          'Ports réseau : quel processus écoute sur quel port, processus root compris, avec Touch ID.',
          'Réseau : adresses, DNS, IP publique, diagnostic et éditeur du fichier hosts.',
          'Réglages cachés du Finder, des captures d’écran et du Dock, sans defaults write.',
        ],
      },
    },
  ],
};
