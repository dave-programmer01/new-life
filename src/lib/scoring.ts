// Scoring logic for DISC and Spiritual Gifts

/**
 * Gift question groupings: letter → question IDs
 * Every 3 questions map to one gift (questions 21–92)
 */
export const giftGroupings: Record<string, number[]> = {
  A: [21, 45, 69], // Administration
  B: [22, 46, 70], // Apostleship
  C: [23, 47, 71], // Craftsmanship
  D: [24, 48, 72], // Discernment
  E: [25, 49, 73], // Evangelism
  F: [26, 50, 74], // Exhortation
  G: [27, 51, 75], // Faith
  H: [28, 52, 76], // Giving
  I: [29, 53, 77], // Healing
  J: [30, 54, 78], // Helps
  K: [31, 55, 79], // Hospitality
  L: [32, 56, 80], // Intercession
  M: [33, 57, 81], // Knowledge
  N: [34, 58, 82], // Leadership
  O: [35, 59, 83], // Mercy
  P: [36, 60, 84], // Miracles
  Q: [37, 61, 85], // Missionary
  R: [38, 62, 86], // Music/Worship
  S: [39, 63, 87], // Pastor/Shepherd
  T: [40, 64, 88], // Prophecy
  U: [41, 65, 89], // Service
  V: [42, 66, 90], // Teaching
  W: [43, 67, 91], // Tongues
  X: [44, 68, 92], // Wisdom
};

/**
 * Ministry mapping: gift letter → ministries
 */
export const ministryMapping: Record<string, string[]> = {
  A: ["A-Team", "Kids Check-in", "Setup/Takedown", "Production"],
  B: ["Growth Track Team", "Small Group Leadership"],
  C: ["Facilities", "New Life Kids", "New Life Students", "Setup/Takedown", "Production"],
  D: ["Growth Track Team", "Kids Check-in", "Prayer Team", "Ushers"],
  E: ["Outreach", "New Life Students", "Prayer Team", "Small Group Leadership"],
  F: ["Outreach", "Dream Team Serve", "Events", "Greeters", "Growth Track Team", "Hospitality Team", "New Life Kids", "New Life Students", "Info/Resource Team", "Kids Check-in", "Parking Team", "Preschool/Nursery", "Small Group Leadership", "Ushers"],
  G: ["All Teams"],
  H: ["Legacy Team"],
  I: ["First Responders", "Prayer Team"],
  J: ["A-Team", "Dream Team Serve", "Events", "Facilities", "First Responders", "Info/Resource Team"],
  K: ["Dream Team Serve", "Events", "Greeters", "Growth Track Team", "New Life Students", "Hospitality Team", "Info/Resource Team", "Kids Check-in", "Parking Team", "Ushers"],
  L: ["Prayer Team", "Small Group Leadership"],
  M: ["Outreach", "First Responders", "Prayer Team", "Ushers"],
  N: ["All Teams"],
  O: ["Outreach", "First Responders", "Small Group Leadership"],
  P: ["Outreach", "First Responders", "Prayer Team"],
  Q: ["Outreach", "Small Group Leadership"],
  R: ["New Life Kids", "New Life Students", "New Life Worship", "Preschool/Nursery", "Small Group Leadership"],
  S: ["Growth Track Team", "New Life Kids", "New Life Students", "Small Group Leadership", "Ushers"],
  T: ["Prayer Team", "Small Group Leadership"],
  U: ["A-Team", "Dream Team Serve", "Events", "Preschool/Nursery", "Setup/Takedown"],
  V: ["Small Group Leadership"],
  W: ["Prayer Team"],
  X: ["New Life Worship", "Prayer Team", "Small Group Leadership", "Ushers"],
};

export interface DISCResult {
  primary: string;
  secondary: string | null;
  combo: string;
  scores: { D: number; I: number; S: number; C: number };
}

export interface GiftResult {
  letter: string;
  score: number;
}

export interface QuizResults {
  disc: DISCResult;
  topGifts: GiftResult[];
  recommendedMinistries: string[];
}

/**
 * Calculate DISC type from answers 1–20
 */
function calculateDISC(answers: Record<number, number>): DISCResult {
  const scores = {
    D: (answers[1] || 0) + (answers[2] || 0) + (answers[3] || 0) + (answers[4] || 0) + (answers[5] || 0),
    I: (answers[6] || 0) + (answers[7] || 0) + (answers[8] || 0) + (answers[9] || 0) + (answers[10] || 0),
    S: (answers[11] || 0) + (answers[12] || 0) + (answers[13] || 0) + (answers[14] || 0) + (answers[15] || 0),
    C: (answers[16] || 0) + (answers[17] || 0) + (answers[18] || 0) + (answers[19] || 0) + (answers[20] || 0),
  };

  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const primary = sorted[0][0];
  const primaryScore = sorted[0][1];
  const secondaryScore = sorted[1][1];
  const secondary = primaryScore - secondaryScore <= 3 ? sorted[1][0] : null;
  const combo = secondary ? `${primary}/${secondary}` : primary;

  return { primary, secondary, combo, scores };
}

/**
 * Calculate top 5 spiritual gifts from answers 21–92
 */
function calculateGifts(answers: Record<number, number>): GiftResult[] {
  const giftScores: GiftResult[] = Object.entries(giftGroupings).map(
    ([letter, questionIds]) => ({
      letter,
      score: questionIds.reduce((sum, qId) => sum + (answers[qId] || 0), 0),
    })
  );

  giftScores.sort((a, b) => b.score - a.score);
  return giftScores.slice(0, 5);
}

/**
 * Determine recommended ministries from top 5 gifts
 */
function calculateMinistries(topGifts: GiftResult[]): string[] {
  const ministryCounts: Record<string, number> = {};

  topGifts.forEach(({ letter }) => {
    const ministries = ministryMapping[letter] || [];
    ministries.forEach((m) => {
      if (m === "All Teams") return; // Skip "All Teams" — it's universal
      ministryCounts[m] = (ministryCounts[m] || 0) + 1;
    });
  });

  // If any gift maps to "All Teams", note that
  const hasAllTeams = topGifts.some(
    ({ letter }) => ministryMapping[letter]?.includes("All Teams")
  );

  const sorted = Object.entries(ministryCounts).sort(([, a], [, b]) => b - a);
  if (sorted.length === 0 && hasAllTeams) {
    return ["All Teams — You can serve anywhere!"];
  }

  const maxCount = sorted[0]?.[1] || 0;
  // Get all ministries with highest count (handle ties)
  const top = sorted.filter(([, count]) => count === maxCount).map(([name]) => name);

  return top;
}

/**
 * Main scoring function — takes all 92 answers and returns results
 */
export function scoreQuiz(answers: Record<number, number>): QuizResults {
  const disc = calculateDISC(answers);
  const topGifts = calculateGifts(answers);
  const recommendedMinistries = calculateMinistries(topGifts);

  return { disc, topGifts, recommendedMinistries };
}
