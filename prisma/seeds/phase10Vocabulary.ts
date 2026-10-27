export const phase10VocabularyWords = Array.from({ length: 150 }).map((_, i) => ({
  word: `pro_technical_term_${i + 1}`,
  meaning: `Professional engineering/workplace definition for term ${i + 1}`,
  hindiSupport: `Hindi translation ${i + 1}`,
  exampleSentence: `We need to refactor the pro_technical_term_${i + 1} to improve system scalability and latency.`,
  difficulty: 'PRO-EXPERT'
}));
