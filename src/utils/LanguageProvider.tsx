import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import mortageContent from "../mortageContent/mortageContent.json";

type SupportedLangs = keyof typeof mortageContent.supportedLanguages;

type LanguageContextType = {
  userLocale: SupportedLangs;
  setUserLocale: (locale: SupportedLangs) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [userLocale, setUserLocale] = useState<SupportedLangs>("nb");

  useEffect(() => {
    //TODO: refactor without using useEffect
    const browserLocale = navigator.language;
    if (isSupportedLang(browserLocale)) {
      setUserLocale(browserLocale);
    }
  }, []);

  const isSupportedLang = (locale: string): locale is SupportedLangs => {
    return locale in mortageContent.supportedLanguages;
  };

  return (
    <LanguageContext.Provider value={{ userLocale, setUserLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
