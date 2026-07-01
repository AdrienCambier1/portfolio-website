import { createContext, useState, useEffect, ReactNode } from "react";

interface LanguageContextProps {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextProps);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const supportedLanguages = ["fr", "en", "zh"];
  const storedLanguage = localStorage.getItem("language");
  const initialLanguage =
    storedLanguage && supportedLanguages.includes(storedLanguage)
      ? storedLanguage
      : "fr";
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  useEffect(() => {
    localStorage.setItem("language", selectedLanguage);
    document.documentElement.lang =
      selectedLanguage === "zh" ? "zh-CN" : selectedLanguage;
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
