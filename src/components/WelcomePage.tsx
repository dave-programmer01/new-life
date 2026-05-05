"use client";

import { useLang } from "@/lib/LangContext";
import LanguageToggle from "./LanguageToggle";

interface WelcomePageProps {
  onBegin: () => void;
}

export default function WelcomePage({ onBegin }: WelcomePageProps) {
  const { t } = useLang();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div
        className="ambient-glow"
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          top: "8%",
          right: "-10%",
        }}
      />
      <div
        className="ambient-glow"
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          bottom: "12%",
          left: "-8%",
        }}
      />

      {/* ─── Header ─── */}
      <header
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(to bottom right, var(--gold-500), var(--gold-400))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 14px rgba(201, 162, 78, 0.2)",
            }}
          >
            <span
              style={{
                color: "var(--navy-950)",
                fontWeight: 800,
                fontSize: "12px",
                lineHeight: 1,
              }}
            >
              NL
            </span>
          </div>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--text-secondary)",
              letterSpacing: "0.02em",
            }}
          >
            {t("churchName")}
          </span>
        </div>
        <LanguageToggle />
      </header>

      {/* ─── Hero ─── */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px 48px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "440px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Icon */}
          <div className="fade-in" style={{ marginBottom: "32px" }}>
            <div
              className="glass-card pulse-glow"
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "var(--gold-400)" }}
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1
            className="fade-in fade-in-delay-1"
            style={{
              fontSize: "clamp(2.25rem, 8vw, 3.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            <span className="text-shimmer">{t("tagline")}</span>
          </h1>

          {/* Description */}
          <p
            className="fade-in fade-in-delay-2"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.125rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: "32px",
              maxWidth: "380px",
            }}
          >
            {t("welcomeDesc")}
          </p>

          {/* Meta pill */}
          <div className="fade-in fade-in-delay-3" style={{ marginBottom: "40px" }}>
            <span className="result-badge">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {t("questionCount")}
            </span>
          </div>

          {/* CTA */}
          <div className="fade-in fade-in-delay-4" style={{ width: "100%" }}>
            <button
              id="begin-quiz"
              className="btn-primary"
              onClick={onBegin}
              style={{
                width: "100%",
                maxWidth: "320px",
                fontSize: "1.125rem",
                padding: "16px",
              }}
            >
              {t("begin")}
            </button>
          </div>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer
        style={{
          flexShrink: 0,
          textAlign: "center",
          padding: "24px",
          fontSize: "12px",
          color: "var(--text-muted)",
          position: "relative",
          zIndex: 10,
        }}
      >
        © {new Date().getFullYear()} New Life Bronx Church
      </footer>
    </div>
  );
}
