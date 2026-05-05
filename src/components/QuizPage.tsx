"use client";

import { useState, useCallback } from "react";
import { useLang } from "@/lib/LangContext";
import { questions } from "@/lib/questions";
import LanguageToggle from "./LanguageToggle";

interface QuizPageProps {
  onSubmit: (answers: Record<number, number>) => void;
  onBack: () => void;
}

const SCALE_OPTIONS = [
  { value: 1, labelKey: "never" },
  { value: 2, labelKey: "rarely" },
  { value: 3, labelKey: "sometimes" },
  { value: 4, labelKey: "often" },
  { value: 5, labelKey: "always" },
];

export default function QuizPage({ onSubmit, onBack }: QuizPageProps) {
  const { lang, t } = useLang();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showError, setShowError] = useState(false);

  const total = questions.length;
  const question = questions[currentIndex];
  const progress = ((currentIndex + 1) / total) * 100;
  const answeredCount = Object.keys(answers).length;
  const isLast = currentIndex === total - 1;
  const isFirst = currentIndex === 0;

  const handleAnswer = useCallback(
    (value: number) => {
      setAnswers((prev) => ({ ...prev, [question.id]: value }));
      setShowError(false);
    },
    [question.id]
  );

  const handleNext = useCallback(() => {
    if (!answers[question.id]) {
      setShowError(true);
      return;
    }
    setShowError(false);
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [answers, question.id, currentIndex, total]);

  const handlePrevious = useCallback(() => {
    setShowError(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleSubmit = useCallback(() => {
    if (!answers[question.id]) {
      setShowError(true);
      return;
    }
    if (answeredCount < total) {
      const firstUnanswered = questions.findIndex((q) => !answers[q.id]);
      if (firstUnanswered !== -1) {
        setCurrentIndex(firstUnanswered);
        setShowError(true);
        return;
      }
    }
    onSubmit(answers);
  }, [answers, question.id, answeredCount, total, onSubmit]);

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
      {/* ─── Sticky top bar ─── */}
      <header
        style={{
          flexShrink: 0,
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(8, 12, 24, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(20, 29, 56, 0.5)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 20px",
          }}
        >
          <button
            id="back-to-welcome"
            onClick={onBack}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              color: "var(--text-muted)",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            aria-label="Back"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--gold-400)",
              fontVariantNumeric: "tabular-nums",
              letterSpacing: "0.02em",
            }}
          >
            {currentIndex + 1} / {total}
          </span>

          <LanguageToggle />
        </div>

        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </header>

      {/* ─── Question area ─── */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "32px 20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          {/* Glass card */}
          <div
            className="glass-card slide-up"
            key={currentIndex}
            style={{ padding: "32px" }}
          >
            {/* Question number + line */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--gold-400)",
                  background: "rgba(201, 162, 78, 0.1)",
                  border: "1px solid rgba(201, 162, 78, 0.15)",
                  flexShrink: 0,
                }}
              >
                {question.id}
              </span>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background:
                    "linear-gradient(90deg, rgba(28, 42, 78, 0.6) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Question text */}
            <p
              style={{
                fontSize: "clamp(1.125rem, 4vw, 1.5rem)",
                fontWeight: 600,
                color: "var(--text-primary)",
                lineHeight: 1.5,
                marginBottom: "32px",
              }}
            >
              {question[lang]}
            </p>

            {/* Scale buttons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {SCALE_OPTIONS.map(({ value, labelKey }) => (
                <button
                  key={value}
                  id={`scale-${value}`}
                  className={`scale-option ${
                    answers[question.id] === value ? "selected" : ""
                  }`}
                  onClick={() => handleAnswer(value)}
                  aria-label={`${value} - ${t(labelKey)}`}
                >
                  <span className="scale-number">{value}</span>
                  <span className="scale-label">{t(labelKey)}</span>
                </button>
              ))}
            </div>

            {/* Error */}
            {showError && (
              <p
                className="fade-in"
                style={{
                  marginTop: "16px",
                  fontSize: "14px",
                  color: "var(--error)",
                  textAlign: "center",
                }}
              >
                {t("pleaseAnswer")}
              </p>
            )}
          </div>

          {/* ─── Navigation row ─── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "24px",
            }}
          >
            <button
              id="prev-question"
              className="btn-secondary"
              onClick={isFirst ? onBack : handlePrevious}
              style={{ fontSize: "14px", padding: "14px 20px" }}
            >
              ← {t("previous")}
            </button>

            {isLast ? (
              <button
                id="submit-quiz"
                className="btn-primary"
                onClick={handleSubmit}
                style={{ fontSize: "14px", padding: "14px 24px" }}
              >
                {t("submit")} →
              </button>
            ) : (
              <button
                id="next-question"
                className="btn-primary"
                onClick={handleNext}
                style={{ fontSize: "14px", padding: "14px 24px" }}
              >
                {t("next")} →
              </button>
            )}
          </div>

          {/* Progress counter */}
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontSize: "12px",
              color: "var(--text-muted)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {answeredCount}/{total}{" "}
            {lang === "es" ? "respondidas" : "answered"}
          </p>
        </div>
      </main>
    </div>
  );
}
