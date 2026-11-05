import type { App } from './types';
import icon from '../assets/apps/vestora-icon.png?url';
import dashboard from '../assets/apps/vestora-dashboard.jpg';
import lots from '../assets/apps/vestora-lots.jpg';
import sales from '../assets/apps/vestora-sales.jpg';
import simulator from '../assets/apps/vestora-simulator.jpg';
import tax from '../assets/apps/vestora-tax.jpg';
import income from '../assets/apps/vestora-income.jpg';

// Vestora's interface is in French only: its screenshots are used for both languages.
const both = <V,>(v: V) => ({ en: v, fr: v });

export const vestora: App = {
  slug: 'vestora',
  name: 'Vestora',
  platform: 'mac',
  version: '0.1.1',
  selfUpdating: true,
  tagline: {
    en: 'Track your RSUs and the French tax on selling them.',
    fr: 'Suivez vos RSU et l’impôt sur leur vente, en France.',
  },
  description: {
    en: 'Enter or import your grants, vestings and sales: Vestora shows what your shares are worth, which ones you can sell, and the French tax due on a sale, real or planned. Everything stays on your Mac, with an encrypted backup.',
    fr: 'Saisissez ou importez vos attributions, vestings et ventes : Vestora montre ce que valent vos actions, celles que vous pouvez vendre et l’impôt dû sur une vente, réelle ou envisagée. Tout reste sur votre Mac, avec une sauvegarde chiffrée.',
  },
  icon,
  screenshot: both(dashboard),
  screenshotAlt: {
    en: 'Vestora dashboard with portfolio value, stock chart and upcoming vestings (demo data)',
    fr: 'Tableau de bord de Vestora avec la valeur du portefeuille, le cours et les prochains vestings (données de démo)',
  },
  accent: ['#8b5cf6', '#f97316'],
  features: [
    { label: { en: 'Dashboard', fr: 'Tableau de bord' }, color: '#3b82f6' },
    { label: { en: 'Sale simulator', fr: 'Simulateur de vente' }, color: '#22c55e' },
    { label: { en: 'French tax', fr: 'Fiscalité française' }, color: '#f59e0b' },
    { label: { en: 'Encrypted backup', fr: 'Sauvegarde chiffrée' }, color: '#a78bfa' },
  ],
  requirements: { en: 'macOS 26+ · French tax residents', fr: 'macOS 26+ · résidents fiscaux français' },
  minMacOS: 'macOS 26',
  repo: 'https://github.com/Aervorn/MacOS_Vestora',
  facts: [
    { label: { en: 'Version', fr: 'Version' }, value: '0.1.1' },
    { label: { en: 'Requires', fr: 'Requiert' }, value: 'macOS 26' },
    { label: { en: 'Interface', fr: 'Interface' }, value: 'FR' },
    { label: { en: 'Tax rules', fr: 'Fiscalité' }, value: 'France' },
    { label: { en: 'License', fr: 'Licence' }, value: 'MIT' },
  ],
  notice: {
    en: 'Vestora’s interface is in French, since it implements French tax rules. Its calculations are estimates, not tax advice.',
    fr: 'Les calculs de Vestora sont des estimations : ils ne remplacent ni un professionnel ni l’administration fiscale.',
  },
  privacy: {
    en: 'Vestora collects nothing and sends nothing about you. Your grants, sales and income stay on your Mac. It only fetches the stock price, exchange rates, public news and updates, and none of these requests contains your amounts.',
    fr: 'Vestora ne collecte rien et n’envoie rien vous concernant. Vos attributions, ventes et revenus restent sur votre Mac. Il récupère seulement le cours, les taux de change, des actualités publiques et les mises à jour, et aucune de ces requêtes ne contient vos montants.',
  },
  sections: [
    {
      id: 'overview',
      title: { en: 'Dashboard', fr: 'Tableau de bord' },
      heading: { en: 'Your shares at a glance', fr: 'Vos actions en un coup d’œil' },
      glyph: 'home',
      color: '#3b82f6',
      screenshot: both(dashboard),
      screenshotAlt: { en: 'Vestora dashboard (demo data)', fr: 'Tableau de bord de Vestora (données de démo)' },
      summary: {
        en: 'At the current price: the value of the shares you hold, can sell, are still holding and have yet to receive, with your unrealized gains.',
        fr: 'Au cours actuel : la valeur des actions détenues, cessibles, encore en conservation et à venir, avec vos plus-values latentes.',
      },
      points: {
        en: [
          'Stock price from one day to the full history, with the prices of your vestings.',
          'Upcoming vestings, breakdown by grant and latest sales.',
          'Price, €/$ rate and New York Stock Exchange hours in Paris time.',
          'The price and your shares’ value can also live in the menu bar.',
        ],
        fr: [
          'Le cours sur un jour ou tout l’historique, avec les prix de vos vestings.',
          'Les prochains vestings, la répartition par attribution et les dernières ventes.',
          'Le cours, le taux €/$ et les horaires de la Bourse de New York à l’heure de Paris.',
          'Le cours et la valeur de vos actions peuvent aussi s’afficher dans la barre des menus.',
        ],
      },
    },
    {
      id: 'lots',
      title: { en: 'Grants & lots', fr: 'Attributions et lots' },
      heading: { en: 'Grants, vestings and lots', fr: 'Attributions, vestings et lots' },
      glyph: 'coins',
      color: '#14b8a6',
      screenshot: both(lots),
      screenshotAlt: { en: 'Vestora lots screen (demo data)', fr: 'Écran Lots de Vestora (données de démo)' },
      summary: {
        en: 'Each grant groups its vestings, with their date, quantity, price and exchange rate. Generate a vesting schedule, or import your tracking spreadsheet.',
        fr: 'Chaque attribution regroupe ses vestings, avec leur date, leur quantité, leur prix et leur taux de change. Générez un calendrier de vesting ou importez votre tableau de suivi.',
      },
      points: {
        en: [
          'Enter a vesting once: the price and the ECB rate apply to every lot of that date.',
          'CSV import of lots and vesting prices, without duplicates.',
          'Checks your values against the stock’s close and the ECB rate, and tells you which price rule your broker uses.',
        ],
        fr: [
          'Saisissez un vesting une fois : le prix et le taux BCE s’appliquent à tous les lots de la date.',
          'Import CSV des lots et des prix de vesting, sans doublons.',
          'Vérifie vos valeurs avec la clôture de l’action et le taux BCE, et indique la règle de prix de votre courtier.',
        ],
      },
      limits: {
        en: ['Quantities and prices are entered in today’s shares (split-adjusted), as most brokers show them.'],
        fr: ['Quantités et prix se saisissent en actions d’aujourd’hui (historique ajusté des splits), comme la plupart des courtiers les affichent.'],
      },
    },
    {
      id: 'sales',
      title: { en: 'Sales', fr: 'Ventes' },
      heading: { en: 'Every sale, with its fees', fr: 'Chaque vente, avec ses frais' },
      glyph: 'bank',
      color: '#0ea5e9',
      screenshot: both(sales),
      screenshotAlt: { en: 'Vestora sales screen (demo data)', fr: 'Écran Ventes de Vestora (données de démo)' },
      summary: {
        en: 'Each sale records its broker, price, rate, fees and the lots sold, allocated from oldest to newest or chosen by hand.',
        fr: 'Chaque vente enregistre son courtier, son prix, son taux, ses frais et les lots vendus, du plus ancien au plus récent ou choisis à la main.',
      },
      points: {
        en: [
          'Broker fees in dollars, exchange and transfer fees in euros.',
          'The rate you got when bringing the dollars home gives the exchange gain or loss.',
        ],
        fr: [
          'Frais de courtage en dollars, frais de change et de virement en euros.',
          'Le taux obtenu au rapatriement des dollars donne le gain ou la perte de change.',
        ],
      },
    },
    {
      id: 'simulator',
      title: { en: 'Simulator', fr: 'Simulateur' },
      heading: { en: 'What would a sale bring in?', fr: 'Combien rapporterait une vente ?' },
      glyph: 'calc',
      color: '#22c55e',
      screenshot: both(simulator),
      screenshotAlt: { en: 'Vestora sale simulator (demo data)', fr: 'Simulateur de vente de Vestora (données de démo)' },
      summary: {
        en: 'Pick a number of shares, or a target net amount and let Vestora find the number of shares, at the current price or at the one you enter.',
        fr: 'Choisissez un nombre d’actions, ou un montant net visé et Vestora trouve le nombre d’actions, au cours actuel ou à celui que vous indiquez.',
      },
      points: {
        en: [
          'Sell the oldest lots first, the highest or lowest value at vesting, or lot by lot, and compare the orders.',
          'The tax shown is the additional tax for the year, taking into account your earlier sales and your household.',
        ],
        fr: [
          'Vendez les lots les plus anciens, ceux de plus forte ou plus faible valeur au vesting, ou lot par lot, et comparez les ordres.',
          'L’impôt affiché est le supplément pour l’année, compte tenu de vos ventes précédentes et de votre foyer.',
        ],
      },
    },
    {
      id: 'tax',
      title: { en: 'Taxes', fr: 'Impôts' },
      heading: { en: 'The tax on a year of sales', fr: 'L’impôt sur une année de ventes' },
      glyph: 'chart',
      color: '#f59e0b',
      screenshot: both(tax),
      screenshotAlt: { en: 'Vestora taxes screen (demo data)', fr: 'Écran Impôts de Vestora (données de démo)' },
      summary: {
        en: 'Vestora applies the French qualified free-share regime: acquisition gain, €300,000 threshold, capital gain, social charges, and an estimated tax notice.',
        fr: 'Vestora applique le régime français des actions gratuites qualifiantes : gain d’acquisition, seuil de 300 000 €, plus-value, prélèvements sociaux et avis d’impôt estimé.',
      },
      points: {
        en: [
          '50% allowance below the threshold, salary rules above it.',
          'Income tax by difference, family quotient cap, CEHR, CDHR and the quotient system for exceptional income.',
          'The boxes to fill in on your tax return; each year’s parameters can be edited.',
        ],
        fr: [
          'Abattement de 50 % sous le seuil, régime des salaires au-delà.',
          'Impôt sur le revenu par différence, plafonnement du quotient familial, CEHR, CDHR et système du quotient pour les revenus exceptionnels.',
          'Les cases à remplir sur votre déclaration ; les paramètres de chaque année sont modifiables.',
        ],
      },
      limits: {
        en: ['Only the qualified regime with allowance, for French tax residents. No older or non-qualified plans, foreign tax or wealth tax.'],
        fr: ['Uniquement le régime qualifiant avec abattement, pour les résidents fiscaux français. Pas d’anciens plans ni de plans non qualifiants, pas de fiscalité étrangère ni d’IFI.'],
      },
    },
    {
      id: 'income',
      title: { en: 'Household income', fr: 'Revenus du foyer' },
      heading: { en: 'Your household, year by year', fr: 'Votre foyer, année par année' },
      glyph: 'house',
      color: '#ef4444',
      screenshot: both(income),
      screenshotAlt: { en: 'Vestora household income screen (demo data)', fr: 'Écran Revenus du foyer de Vestora (données de démo)' },
      summary: {
        en: 'One sheet per year with the boxes of your tax return, entered by hand or imported from the PDF summary of your online return.',
        fr: 'Une fiche par année avec les cases de votre déclaration, saisies à la main ou importées depuis le récapitulatif PDF de votre déclaration en ligne.',
      },
      points: {
        en: ['Vestora compares its calculation, line by line, with the imported tax notice.'],
        fr: ['Vestora compare son calcul, ligne par ligne, avec l’avis d’impôt importé.'],
      },
    },
    {
      id: 'privacy',
      title: { en: 'Hidden mode & lock', fr: 'Mode masqué et verrou' },
      heading: { en: 'Your figures stay private', fr: 'Vos chiffres restent privés' },
      glyph: 'eye',
      color: '#8b5cf6',
      summary: {
        en: 'Hidden mode replaces amounts and share counts with dots. Vestora starts hidden and hides again whenever the screen locks or the Mac sleeps.',
        fr: 'Le mode masqué remplace les montants et les nombres d’actions par des points. Vestora démarre masqué et se masque à chaque verrouillage de l’écran ou mise en veille.',
      },
      points: {
        en: [
          'Optional Touch ID lock at launch and on wake.',
          'Demo mode with a fictitious portfolio, to show the app without your data.',
        ],
        fr: [
          'Verrou Touch ID facultatif au lancement et au réveil.',
          'Mode démo avec un portefeuille fictif, pour montrer l’appli sans vos données.',
        ],
      },
    },
    {
      id: 'backup',
      title: { en: 'Backup', fr: 'Sauvegarde' },
      heading: { en: 'An encrypted daily backup', fr: 'Une sauvegarde quotidienne chiffrée' },
      glyph: 'lock',
      color: '#64748b',
      summary: {
        en: 'Every day your data changed, Vestora writes an encrypted archive to iCloud Drive or a folder of your choice, and keeps the 30 most recent.',
        fr: 'Chaque jour où vos données ont changé, Vestora écrit une archive chiffrée dans iCloud Drive ou le dossier de votre choix, et garde les 30 plus récentes.',
      },
      points: {
        en: [
          'AES-256-GCM encryption with a key derived from your password: without it, an archive is unreadable, on iCloud too.',
          'Restoring shows what an archive contains and keeps a safety copy of your current data first.',
        ],
        fr: [
          'Chiffrement AES-256-GCM avec une clé dérivée de votre mot de passe : sans lui, une archive est illisible, sur iCloud aussi.',
          'La restauration montre le contenu de l’archive et garde d’abord une copie de sécurité de vos données.',
        ],
      },
      limits: {
        en: ['Keep your password in a password manager: without it, no archive can be restored.'],
        fr: ['Gardez votre mot de passe dans un gestionnaire : sans lui, aucune archive ne peut être restaurée.'],
      },
    },
  ],
};
