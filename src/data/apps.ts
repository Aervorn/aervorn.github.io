// The apps shown on the site. Add an app file and list it here:
// it gets a card on the home page and its own page at /<slug>.
import { navloom } from './navloom';
import { flux } from './flux';
import { forkwatch } from './forkwatch';
import { vestora } from './vestora';
import { octopus } from './octopus';
import { labpanel } from './labpanel';
import { nuvora } from './nuvora';

export type { App, AppSection } from './types';
export const apps = [navloom, flux, vestora, octopus, nuvora, labpanel, forkwatch];
export const macApps = apps.filter((a) => a.platform === 'mac');
export const serverApps = apps.filter((a) => a.platform === 'server');
