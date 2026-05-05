"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { ui, type Lang } from "./translations";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  const t = useCallback(
    (key: string) => {
      return ui[key]?.[lang] || key;
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
