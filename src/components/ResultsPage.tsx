"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";
import {
  discDescriptions,
  giftNames,
  giftDescriptions,
  ministryTranslations,
} from "@/lib/translations";
import type { QuizResults } from "@/lib/scoring";
import LanguageToggle from "./LanguageToggle";
import ShareModal from "./ShareModal";

interface ResultsPageProps {
  results: QuizResults;
  onRetake: () => void;
}

export default function ResultsPage({ results, onRetake }: ResultsPageProps) {
  const { lang, t } = useLang();
  const { disc, topGifts, recommendedMinistries } = results;

  const discInfo = discDescriptions[disc.primary];
  const discComboInfo = disc.secondary
    ? discDescriptions[disc.secondary]
    : null;

  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* ─── Header ─── */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1px solid rgba(20, 29, 56, 0.5)",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img 
              src="/icon.svg" 
              alt="NLBX Logo" 
              style={{ width: "100%", height: "100%", objectFit: "contain" }} 
            />
          </div>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--text-secondary)",
            }}
          >
            {t("churchName")}
          </span>
        </div>
        <LanguageToggle />
      </header>

      {/* ─── Content ─── */}
      <main style={{ flex: 1, padding: "24px 16px" }}>
        <div style={{ width: "100%", maxWidth: 560, margin: "0 auto" }}>
          {/* Title */}
          <div className="fade-in" style={{ textAlign: "center", marginBottom: 24 }}>
            <h1
              style={{
                fontSize: "clamp(1.5rem, 5vw, 2.25rem)",
                fontWeight: 800,
                marginBottom: 4,
              }}
            >
              <span className="text-shimmer">{t("resultsTitle")}</span>
            </h1>
            <p style={{ fontSize: "0.6875rem", color: "var(--text-muted)" }}>
              New Life Bronx • Growth Track
            </p>
          </div>

          {/* ── DISC ── */}
          <section
            className="glass-card fade-in fade-in-delay-1"
            style={{ padding: 20, marginBottom: 16 }}
          >
            <h2
              style={{
                fontSize: "0.625rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 16,
              }}
            >
              {t("personalityType")}
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                marginBottom: 16,
              }}
            >
              <div className="disc-badge">{disc.combo}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3
                  style={{
                    fontSize: "clamp(1rem, 3vw, 1.25rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 4,
                    lineHeight: 1.3,
                  }}
                >
                  {discInfo?.[lang].name}
                  {discComboInfo && ` / ${discComboInfo[lang].name}`}
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {discInfo?.[lang].desc}
                </p>
              </div>
            </div>

            {/* Score bars */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8,
              }}
            >
              {(["D", "I", "S", "C"] as const).map((type) => {
                const score = disc.scores[type];
                const pct = (score / 25) * 100;
                const isPrimary = disc.primary === type;
                return (
                  <div key={type} style={{ textAlign: "center" }}>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.625rem",
                        fontWeight: 700,
                        color: "var(--text-muted)",
                        marginBottom: 4,
                      }}
                    >
                      {type}
                    </span>
                    <div
                      style={{
                        height: 6,
                        borderRadius: 100,
                        background: "var(--navy-800)",
                        overflow: "hidden",
                        marginBottom: 2,
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          borderRadius: 100,
                          width: `${pct}%`,
                          background: isPrimary
                            ? "linear-gradient(90deg, var(--gold-500), var(--gold-300))"
                            : "rgba(151,160,188,0.2)",
                          transition: "width 0.7s ease",
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: "0.625rem",
                        fontWeight: 600,
                        color: isPrimary ? "var(--gold-400)" : "var(--text-muted)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {score}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Top 5 Gifts ── */}
          <section
            className="glass-card fade-in fade-in-delay-2"
            style={{ padding: 20, marginBottom: 16 }}
          >
            <h2
              style={{
                fontSize: "0.625rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 16,
              }}
            >
              {t("topGifts")}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {topGifts.map((gift, i) => {
                const name = giftNames[gift.letter]?.[lang] || gift.letter;
                const desc = giftDescriptions[gift.letter]?.[lang] || "";
                const pct = (gift.score / 15) * 100;
                return (
                  <div
                    key={gift.letter}
                    className="gift-card fade-in"
                    style={{ animationDelay: `${0.25 + i * 0.12}s` }}
                  >
                    {/* Header row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 28,
                            height: 28,
                            borderRadius: 6,
                            fontSize: "0.75rem",
                            fontWeight: 800,
                            background: "rgba(201, 162, 78, 0.1)",
                            border: "1px solid rgba(201, 162, 78, 0.12)",
                            color: "var(--gold-400)",
                          }}
                        >
                          {i + 1}
                        </span>
                        <h3
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                          }}
                        >
                          {name}
                        </h3>
                      </div>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--gold-400)",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {gift.score}/15
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        marginBottom: 10,
                        paddingLeft: 38,
                      }}
                    >
                      {desc}
                    </p>

                    {/* Bar */}
                    <div style={{ paddingLeft: 38 }}>
                      <div
                        style={{
                          height: 4,
                          borderRadius: 100,
                          background: "var(--navy-800)",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            borderRadius: 100,
                            width: `${pct}%`,
                            background:
                              "linear-gradient(90deg, var(--gold-500), var(--gold-300))",
                            transition: "width 0.8s ease",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Dream Team ── */}
          <section
            className="glass-card pulse-glow fade-in fade-in-delay-3"
            style={{ padding: 20, marginBottom: 24 }}
          >
            <h2
              style={{
                fontSize: "0.625rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 8,
              }}
            >
              {t("dreamTeam")}
            </h2>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                marginBottom: 16,
              }}
            >
              {t("dreamTeamDesc")}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {recommendedMinistries.map((m) => {
                const translatedM = ministryTranslations[m]?.[lang] || m;
                return (
                  <span key={m} className="ministry-tag">
                    ✦ {translatedM}
                  </span>
                );
              })}
            </div>
          </section>

          {/* ── Actions ─── */}
          <div
            className="fade-in fade-in-delay-4"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <button
              id="share-results"
              className="btn-primary"
              onClick={handleShare}
              style={{ width: "100%", padding: "14px 24px" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
              </svg>
              {t("share")}
            </button>
            <button
              id="retake-quiz"
              className="btn-secondary"
              onClick={onRetake}
              style={{ width: "100%", padding: "14px 24px" }}
            >
              {t("retake")}
            </button>
          </div>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px 16px",
          fontSize: "0.6875rem",
          color: "var(--text-muted)",
          flexShrink: 0,
        }}
      >
        © {new Date().getFullYear()} New Life Bronx Church
      </footer>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        results={results}
      />
    </div>
  );
}
