"use client";

import { useLang } from "@/lib/LangContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <div className="lang-toggle">
      <button
        id="lang-es"
        className={lang === "es" ? "active" : ""}
        onClick={lang !== "es" ? toggleLang : undefined}
        aria-label="Español"
      >
        ES
      </button>
      <button
        id="lang-en"
        className={lang === "en" ? "active" : ""}
        onClick={lang !== "en" ? toggleLang : undefined}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
