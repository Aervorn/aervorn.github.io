// The apps shown on the site. Add an app file and list it here:
// it gets a card on the home page and its own page at /<slug>.
import { navloom } from './navloom';
import { flux } from './flux';
import { forkwatch } from './forkwatch';

export type { App, AppSection } from './types';
export const apps = [navloom, flux, forkwatch];
export const macApps = apps.filter((a) => a.platform === 'mac');
export const serverApps = apps.filter((a) => a.platform === 'server');
