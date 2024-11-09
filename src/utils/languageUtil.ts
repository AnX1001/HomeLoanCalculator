import mortageContent from "../mortageContent/mortageContent.json";

export const userLocale =
  navigator.language as keyof typeof mortageContent.supportedLanguages;
