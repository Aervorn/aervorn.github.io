import type { App } from './types';
import icon from '../assets/apps/nuvora-icon.svg?url';
import canvas from '../assets/apps/nuvora-canvas.jpg';
import canvasFr from '../assets/apps/nuvora-canvas-fr.jpg';
import notes from '../assets/apps/nuvora-notes.jpg';
import notesFr from '../assets/apps/nuvora-notes-fr.jpg';
import links from '../assets/apps/nuvora-links.jpg';
import linksFr from '../assets/apps/nuvora-links-fr.jpg';
import library from '../assets/apps/nuvora-library.jpg';
import libraryFr from '../assets/apps/nuvora-library-fr.jpg';

export const nuvora: App = {
  slug: 'nuvora',
  name: 'Nuvora',
  platform: 'mac',
  version: '0.1.0',
  selfUpdating: true,
  tagline: {
    en: 'Infinite canvases for your ideas, 100% local.',
    fr: 'Des canvas infinis pour vos idées, 100 % en local.',
  },
  description: {
    en: 'Lay out notes, voice notes, images, videos, documents and web links on infinite canvases, connect them with arrows and group them in containers. No account, no cloud, no telemetry: everything stays on your Mac.',
    fr: 'Posez notes, notes vocales, images, vidéos, documents et liens web sur des canvas infinis, reliez-les par des flèches et rangez-les dans des conteneurs. Pas de compte, pas de cloud, pas de télémétrie : tout reste sur votre Mac.',
  },
  icon,
  screenshot: { en: canvas, fr: canvasFr },
  screenshotAlt: {
    en: 'A Nuvora canvas with notes, a document, an image and a web link connected by arrows inside a container',
    fr: 'Un canvas de Nuvora avec des notes, un document, une image et un lien web reliés par des flèches dans un conteneur',
  },
  accent: ['#6c4df6', '#12a8c2'],
  features: [
    { label: { en: 'Infinite canvas', fr: 'Canvas infini' }, color: '#6c4df6' },
    { label: { en: 'Markdown notes & tasks', fr: 'Notes Markdown et tâches' }, color: '#f59e0b' },
    { label: { en: 'Voice notes, files, links', fr: 'Notes vocales, fichiers, liens' }, color: '#12a8c2' },
    { label: { en: '100% local', fr: '100 % local' }, color: '#22c55e' },
  ],
  requirements: { en: 'macOS 26+', fr: 'macOS 26+' },
  minMacOS: 'macOS 26',
  repo: 'https://github.com/Aervorn/MacOS_Nuvora',
  facts: [
    { label: { en: 'Version', fr: 'Version' }, value: '0.1.0' },
    { label: { en: 'Requires', fr: 'Requiert' }, value: 'macOS 26' },
    { label: { en: 'Interface', fr: 'Interface' }, value: 'EN · FR' },
    { label: { en: 'Data', fr: 'Données' }, value: '100% local' },
    { label: { en: 'License', fr: 'Licence' }, value: 'MIT' },
  ],
  privacy: {
    en: 'Nuvora collects nothing and sends nothing about you. Your canvases and their files stay on your Mac, and voice notes are transcribed on your Mac. Its only network requests read the preview of a web link you add, once (this can be turned off), and check for its own updates on GitHub.',
    fr: 'Nuvora ne collecte rien et n’envoie rien vous concernant. Vos canvas et leurs fichiers restent sur votre Mac, et les notes vocales sont transcrites sur votre Mac. Ses seules requêtes réseau lisent l’aperçu d’un lien web que vous ajoutez, une seule fois (désactivable), et vérifient ses propres mises à jour sur GitHub.',
  },
  sections: [
    {
      id: 'canvas',
      title: { en: 'Canvas', fr: 'Canvas' },
      heading: { en: 'An infinite canvas for everything', fr: 'Un canvas infini pour tout poser' },
      glyph: 'grid',
      color: '#6c4df6',
      screenshot: { en: canvas, fr: canvasFr },
      screenshotAlt: { en: 'A Nuvora canvas with its floating bar and minimap', fr: 'Un canvas de Nuvora avec sa barre flottante et sa miniature' },
      summary: {
        en: 'Pan with two fingers, zoom by pinching, or switch to hand mode with a mouse. A floating bar adds every kind of item, and a minimap shows the whole canvas.',
        fr: 'Déplacez-vous à deux doigts, zoomez en pinçant, ou passez en mode main à la souris. Une barre flottante ajoute tous les types d’éléments, et une miniature montre tout le canvas.',
      },
      points: {
        en: [
          'Drop files from the Finder or paste anything with ⌘V: files, images, web addresses, text.',
          'Resize from any side or corner, undo and redo everything, snap to an optional grid.',
          'Saved continuously, every few minutes, or only when you ask.',
        ],
        fr: [
          'Déposez des fichiers depuis le Finder ou collez n’importe quoi avec ⌘V : fichiers, images, adresses web, texte.',
          'Redimensionnez par n’importe quel côté ou coin, annulez et rétablissez tout, alignez sur une grille facultative.',
          'Enregistrement en continu, toutes les quelques minutes, ou seulement à la demande.',
        ],
      },
    },
    {
      id: 'notes',
      title: { en: 'Notes', fr: 'Notes' },
      heading: { en: 'Markdown notes, with tasks', fr: 'Des notes en Markdown, avec des tâches' },
      glyph: 'article',
      color: '#f59e0b',
      screenshot: { en: notes, fr: notesFr },
      screenshotAlt: { en: 'The full note editor in Nuvora', fr: 'L’éditeur complet d’une note dans Nuvora' },
      summary: {
        en: 'Headings, lists, quotes, code blocks and tasks you tick straight on the canvas, with their progress shown on the note.',
        fr: 'Titres, listes, citations, blocs de code et tâches à cocher directement sur le canvas, avec leur avancement affiché sur la note.',
      },
      points: {
        en: [
          'A formatting bar appears while you edit a note in place.',
          'A floating full editor shows the Markdown code or its rendered preview.',
          'Notes grow to show all their text.',
        ],
        fr: [
          'Une barre de mise en forme apparaît pendant la modification d’une note sur place.',
          'Un éditeur complet flottant montre le code Markdown ou son aperçu rendu.',
          'Les notes s’agrandissent pour montrer tout leur texte.',
        ],
      },
    },
    {
      id: 'links',
      title: { en: 'Links & containers', fr: 'Liens et conteneurs' },
      heading: { en: 'Connect and group your ideas', fr: 'Reliez et regroupez vos idées' },
      glyph: 'magnet',
      color: '#ec4899',
      screenshot: { en: links, fr: linksFr },
      screenshotAlt: { en: 'Choosing the direction, line and color of the next links in Nuvora', fr: 'Le choix du sens, du trait et de la couleur des prochains liens dans Nuvora' },
      summary: {
        en: 'Drag from any side of an item to connect it to another. Each link has a direction, a solid, dashed or dotted line, a color and an optional label.',
        fr: 'Tirez depuis n’importe quel côté d’un élément pour le relier à un autre. Chaque lien a un sens, un trait plein, en tirets ou en pointillés, une couleur et un libellé facultatif.',
      },
      points: {
        en: [
          'Containers group items, can be nested, and collapse to hide their content.',
          'A container can be shared between canvases and stay in sync, or copied.',
          'Several link types can be mixed on the same canvas.',
        ],
        fr: [
          'Les conteneurs regroupent des éléments, s’imbriquent et se réduisent pour masquer leur contenu.',
          'Un conteneur peut être partagé entre plusieurs canvas et rester synchronisé, ou être copié.',
          'Plusieurs types de liens peuvent se mélanger sur un même canvas.',
        ],
      },
    },
    {
      id: 'media',
      title: { en: 'Voice, files & web', fr: 'Vocal, fichiers et web' },
      heading: { en: 'Voice notes, images, documents and web links', fr: 'Notes vocales, images, documents et liens web' },
      glyph: 'eye',
      color: '#12a8c2',
      summary: {
        en: 'Record voice notes in the app: you get a waveform to click and a transcript made on your Mac. Documents show a preview of their first page, web links their title and image.',
        fr: 'Enregistrez des notes vocales dans l’app : vous obtenez une forme d’onde cliquable et une transcription faite sur votre Mac. Les documents montrent un aperçu de leur première page, les liens web leur titre et leur image.',
      },
      points: {
        en: [
          'PDF, Word, Excel, PowerPoint, Keynote, Pages: previewed with Quick Look.',
          'Images and videos keep their proportions and can be named.',
          'Files are copied into the canvas, which stays complete even if the original moves.',
        ],
        fr: [
          'PDF, Word, Excel, PowerPoint, Keynote, Pages : aperçu avec Quick Look.',
          'Les images et les vidéos gardent leurs proportions et peuvent être nommées.',
          'Les fichiers sont copiés dans le canvas, qui reste complet même si l’original bouge.',
        ],
      },
    },
    {
      id: 'details',
      title: { en: 'Details', fr: 'Détails' },
      heading: { en: 'Everything about the selected item', fr: 'Tout sur l’élément sélectionné' },
      glyph: 'list',
      color: '#22c55e',
      screenshot: { en: canvas, fr: canvasFr },
      screenshotAlt: { en: 'The details panel in Nuvora', fr: 'Le panneau de détails dans Nuvora' },
      summary: {
        en: 'A panel on the right shows the selected item: its actions, its tasks, the canvases it appears on, and its children, parents and siblings.',
        fr: 'Un panneau à droite montre l’élément sélectionné : ses actions, ses tâches, les canvas où il apparaît, et ses fils, parents et frères.',
      },
      points: {
        en: [
          'Children are at the end of an arrow leaving the item, parents at the start of one reaching it, siblings are linked without an arrow.',
          'Click a related item to center the view on it.',
        ],
        fr: [
          'Les fils sont au bout d’une flèche qui part de l’élément, les parents à l’origine d’une flèche qui y arrive, les frères sont reliés sans flèche.',
          'Un clic sur un élément lié centre la vue sur lui.',
        ],
      },
    },
    {
      id: 'library',
      title: { en: 'Library', fr: 'Bibliothèque' },
      heading: { en: 'Canvases in folders, found in a keystroke', fr: 'Des canvas rangés en dossiers, retrouvés en une touche' },
      glyph: 'archive',
      color: '#8b5cf6',
      screenshot: { en: library, fr: libraryFr },
      screenshotAlt: { en: 'The search palette in Nuvora', fr: 'La palette de recherche dans Nuvora' },
      summary: {
        en: 'As many canvases as you like, in folders and subfolders, each with its own icon: a symbol, an emoji or an image of yours.',
        fr: 'Autant de canvas que vous voulez, en dossiers et sous-dossiers, chacun avec son icône : un symbole, un emoji ou une image à vous.',
      },
      points: {
        en: [
          '⌘K finds canvases by name and by content, and runs commands.',
          'Light, dark or automatic mode, color themes, and your choice of fonts.',
          'Interface in English and French.',
        ],
        fr: [
          '⌘K trouve les canvas par leur nom et leur contenu, et lance les commandes.',
          'Mode clair, sombre ou automatique, thèmes de couleur, et le choix des polices.',
          'Interface en français et en anglais.',
        ],
      },
    },
  ],
};
