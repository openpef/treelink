// Import the config directly from astro.config.mjs
import config from '../astro.config.mjs';

// Extract i18n configuration
const i18nConfig = config.i18n!;

// Type for multilingual values
export type MultilingualValue<T> = T | { [key in typeof i18nConfig.locales[number]]: T };

// Export useful i18n configuration
export const defaultLocale = i18nConfig.defaultLocale;
export const supportedLocales = i18nConfig.locales;

// Function to get locale from URL path
export function getLocaleFromUrl(pathname: string): string {
  const segment = pathname.split('/')[1];
  return supportedLocales.includes(segment as any) ? segment : defaultLocale;
}

// Helper function to get localized value
export function getLocalizedValue<T>(
  value: MultilingualValue<T>, 
  locale: string = defaultLocale
): T {
  if (typeof value === 'object' && !Array.isArray(value)) {
    return (value as { [key: string]: T })[locale] || (value as { [key: string]: T })[defaultLocale];
  }
  return value as T;
}

// Ensure type safety
if (!i18nConfig || !i18nConfig.locales || !i18nConfig.defaultLocale) {
  throw new Error('i18n configuration is missing in astro.config.mjs');
} 