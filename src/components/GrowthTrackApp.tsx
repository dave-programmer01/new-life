"use client";

import { useState, useCallback } from "react";
import { LangProvider } from "@/lib/LangContext";
import { scoreQuiz, type QuizResults } from "@/lib/scoring";
import WelcomePage from "@/components/WelcomePage";
import QuizPage from "@/components/QuizPage";
import ResultsPage from "@/components/ResultsPage";

type AppScreen = "welcome" | "quiz" | "results";

function AppContent() {
  const [screen, setScreen] = useState<AppScreen>("welcome");
  const [results, setResults] = useState<QuizResults | null>(null);

  const handleBegin = useCallback(() => {
    setScreen("quiz");
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = useCallback((answers: Record<number, number>) => {
    const scored = scoreQuiz(answers);
    setResults(scored);
    setScreen("results");
    window.scrollTo(0, 0);
  }, []);

  const handleRetake = useCallback(() => {
    setResults(null);
    setScreen("welcome");
    window.scrollTo(0, 0);
  }, []);

  const handleBackToWelcome = useCallback(() => {
    setScreen("welcome");
    window.scrollTo(0, 0);
  }, []);

  switch (screen) {
    case "welcome":
      return <WelcomePage onBegin={handleBegin} />;
    case "quiz":
      return <QuizPage onSubmit={handleSubmit} onBack={handleBackToWelcome} />;
    case "results":
      return results ? (
        <ResultsPage results={results} onRetake={handleRetake} />
      ) : null;
    default:
      return null;
  }
}

export default function GrowthTrackApp() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  );
}
