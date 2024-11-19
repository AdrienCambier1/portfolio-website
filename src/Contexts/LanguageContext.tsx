import { createContext, useState, useEffect, ReactNode } from "react";

interface LanguageContextProps {
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextProps>(undefined!);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const initialLanguage = localStorage.getItem("language") || "fr";
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  useEffect(() => {
    localStorage.setItem("language", selectedLanguage);
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
