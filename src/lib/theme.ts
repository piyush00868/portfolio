export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';
export const DEFAULT_THEME: Theme = 'dark';

/**
 * Runs in <head> before first paint so the saved theme applies with no
 * flash. Kept tiny and dependency-free because it is inlined as a string.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark')}catch(e){}})();`;
