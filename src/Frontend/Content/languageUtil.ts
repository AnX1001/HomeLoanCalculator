import textContent from "./textContent.json";

export const userLocale =
  navigator.language as keyof typeof textContent.supportedLanguages;
