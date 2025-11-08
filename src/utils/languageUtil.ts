import mortageContent from "../mortageContent/mortageContent.json";

type SupportedLangs = keyof typeof mortageContent.supportedLanguages;

const isSupportedLang = (locale: string): locale is SupportedLangs => {
  return locale in mortageContent.supportedLanguages;
};

const getDefaultLocale = (): SupportedLangs => {
  const browserLocale = navigator.language;
  
  // Check exact match first
  if (isSupportedLang(browserLocale)) {
    return browserLocale;
  }
  
  // Check if the base language matches (e.g., "nb-NO" -> "nb", "en-US" -> "en")
  const baseLocale = browserLocale.split('-')[0];
  if (isSupportedLang(baseLocale)) {
    return baseLocale;
  }
  
  // Check for "en" -> "en-US" mapping
  if (baseLocale === 'en' && isSupportedLang('en-US')) {
    return 'en-US';
  }
  
  // Default to Norwegian if browser language is not supported
  return "nb";
};

export const userLocale = getDefaultLocale();
