// Blog categories. To add one: add it here and give it a color in global.css.
export const categories = {
  'home-automation': { label: 'Home automation' },
  macos: { label: 'macOS' },
  'making-of': { label: 'Making of' },
  dev: { label: 'Dev' },
} as const;

export type CategoryId = keyof typeof categories;
export const categoryIds = Object.keys(categories) as [CategoryId, ...CategoryId[]];
