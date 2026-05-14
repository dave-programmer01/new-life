"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "@/lib/LangContext";
import type { QuizResults } from "@/lib/scoring";
import { giftNames, discDescriptions, ministryTranslations } from "@/lib/translations";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  results: QuizResults;
}

export default function ShareModal({ isOpen, onClose, results }: ShareModalProps) {
  const { lang, t } = useLang();
  const [fullName, setFullName] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) return null;

  const { disc, topGifts, recommendedMinistries } = results;
  const discInfo = discDescriptions[disc.primary];

  const top3Gifts = topGifts.slice(0, 3).map((g) => giftNames[g.letter]?.[lang] || g.letter);
  const translatedMinistries = recommendedMinistries.map(
    (m) => ministryTranslations[m]?.[lang] || m
  );

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    setIsSending(true);
    setStatus("idle");

    try {
      const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      const templateParams = {
        student_name: fullName,
        disc_type: `${disc.combo} (${discInfo?.[lang].name || ""})`,
        top_gifts: top3Gifts.join(", "),
        ministry: translatedMinistries.join(", "),
        to_email: lang === "es" ? "NVPasosdecrecimiento@gmail.com" : "Mgarcia1022@gmail.com",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      setStatus("success");
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setFullName("");
      }, 2000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(26, 35, 50, 0.6)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        zIndex: 50,
        padding: "1rem",
      }}
      onClick={onClose}
    >
      <div
        className="glass-card fade-in"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "var(--bg-white)",
          padding: "24px",
          position: "relative",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "var(--text-muted)",
            fontSize: "1.25rem",
          }}
        >
          &times;
        </button>

        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "8px", color: "var(--text-dark)" }}>
          {t("shareModalTitle")}
        </h2>
        <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "20px" }}>
          {t("shareModalDesc")}
        </p>

        {/* Summary of Results */}
        <div style={{
          backgroundColor: "var(--bg-light)",
          padding: "16px",
          borderRadius: "8px",
          marginBottom: "20px",
          fontSize: "0.875rem",
          color: "var(--text-dark)",
          lineHeight: "1.5"
        }}>
          <div><strong>{t("personalityType")}:</strong> {disc.combo} ({discInfo?.[lang].name})</div>
          <div><strong>{t("topGifts")}:</strong> {top3Gifts.join(", ")}</div>
          <div><strong>{t("dreamTeam")}:</strong> {translatedMinistries.join(", ")}</div>
        </div>

        <form onSubmit={handleSend} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label htmlFor="fullName" style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-dark)" }}>
              {t("fullName")}
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid rgba(0,0,0,0.1)",
                fontSize: "1rem",
                outline: "none",
                transition: "border-color 0.2s"
              }}
              onFocus={(e) => e.target.style.borderColor = "var(--sky-blue)"}
              onBlur={(e) => e.target.style.borderColor = "rgba(0,0,0,0.1)"}
            />
          </div>

          {status === "success" && (
            <div style={{ color: "var(--success)", fontSize: "0.875rem", textAlign: "center", fontWeight: 500 }}>
              {t("successMessage")}
            </div>
          )}

          {status === "error" && (
            <div style={{ color: "var(--error)", fontSize: "0.875rem", textAlign: "center", fontWeight: 500 }}>
              {t("errorMessage")}
            </div>
          )}

          <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
              style={{ flex: 1, padding: "10px" }}
              disabled={isSending}
            >
              {t("cancel")}
            </button>
            <button
              type="submit"
              className="btn-primary"
              style={{ flex: 1, padding: "10px" }}
              disabled={!fullName.trim() || isSending}
            >
              {isSending ? t("sending") : t("send")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
