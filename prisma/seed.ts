import { PrismaClient, Level } from '@prisma/client'
import {
  absBeginnerModules,
  beginnerA1Modules,
  softSkillsModules,
  confidenceModules,
  interviewModules,
  techModules,
  vocabularyWords
} from './seeds/seedData'

import { a1GrammarModules } from './seeds/grammarA1'
import { a1CommunicationModules } from './seeds/communicationA1'
import { a1SpeakingModules } from './seeds/speakingA1'
import { a1PronunciationModules } from './seeds/pronunciationA1'
import { a1ReadingModules } from './seeds/readingA1'
import { a1ListeningModules } from './seeds/listeningA1'
import { a1WritingModules } from './seeds/writingA1'
import { a1VocabularyWords } from './seeds/vocabularyA1'
import { a1ThinkingModules } from './seeds/thinkingA1'
import { a1ShadowingModules } from './seeds/shadowingA1'
import { a1SoftSkillsModules } from './seeds/softSkillsA1'
import { a1ConfidenceModules } from './seeds/confidenceA1'
import { a1InterviewModules } from './seeds/interviewA1'
import { a1TechModules } from './seeds/technicalA1'

// Phase 04 Imports
import { phase04SpeakingModules } from './seeds/phase04_speaking'
import { phase04ReadingModules } from './seeds/phase04_reading'
import { phase04ListeningModules } from './seeds/phase04_listening'
import { phase04WritingModules } from './seeds/phase04_writing'
import { phase04PronunciationModules } from './seeds/phase04_pronunciation'
import { phase04ThinkingModules } from './seeds/phase04_thinking'
import { phase04ShadowingModules } from './seeds/phase04_shadowing'
import { phase04SoftSkillsModules } from './seeds/phase04_softskills'
import { phase04ConfidenceModules } from './seeds/phase04_confidence'
import { phase04InterviewModules } from './seeds/phase04_interview'
import { phase04TechnicalModules } from './seeds/phase04_technical'
import { phase04VocabularyWords } from './seeds/phase04_vocabulary'

// Phase 05 (A2) Imports
import { a2GrammarModules } from './seeds/a2Grammar'
import { a2CommunicationModules } from './seeds/a2Communication'
import { a2SpeakingModules } from './seeds/a2Speaking'
import { a2ReadingModules } from './seeds/a2Reading'
import { a2ListeningModules } from './seeds/a2Listening'
import { a2WritingModules } from './seeds/a2Writing'
import { a2PronunciationModules } from './seeds/a2Pronunciation'
import { a2ThinkingModules } from './seeds/a2Thinking'
import { a2ShadowingModules } from './seeds/a2Shadowing'
import { a2SoftSkillsModules } from './seeds/a2SoftSkills'
import { a2ConfidenceModules } from './seeds/a2Confidence'
import { a2InterviewModules } from './seeds/a2Interview'
import { a2TechnicalModules } from './seeds/a2Technical'
import { a2PracticeModules } from './seeds/a2Practice'
import { a2VocabularyWordsFull } from './seeds/a2Vocabulary'

// Phase 06 (B1) Imports
import { b1GrammarModules } from './seeds/b1Grammar'
import { b1CommunicationModules } from './seeds/b1Communication'
import { b1SpeakingModules } from './seeds/b1Speaking'
import { b1ReadingModules } from './seeds/b1Reading'
import { b1ListeningModules } from './seeds/b1Listening'
import { b1WritingModules } from './seeds/b1Writing'
import { b1PronunciationModules } from './seeds/b1Pronunciation'
import { b1ThinkingModules } from './seeds/b1Thinking'
import { b1ShadowingModules } from './seeds/b1Shadowing'
import { b1SoftSkillsModules } from './seeds/b1SoftSkills'
import { b1ConfidenceModules } from './seeds/b1Confidence'
import { b1InterviewModules } from './seeds/b1Interview'
import { b1TechnicalModules } from './seeds/b1Technical'
import { b1RoleplayModules } from './seeds/b1Roleplay'
import { b1PracticeModules } from './seeds/b1Practice'
import { b1VocabularyWordsFull } from './seeds/b1Vocabulary'

// Phase 07 (B2) Imports
import { b2GrammarModules } from './seeds/b2Grammar'
import { b2CommunicationModules } from './seeds/b2Communication'
import { b2SpeakingModules } from './seeds/b2Speaking'
import { b2PronunciationModules } from './seeds/b2Pronunciation'
import { b2ReadingModules } from './seeds/b2Reading'
import { b2ListeningModules } from './seeds/b2Listening'
import { b2WritingModules } from './seeds/b2Writing'
import { b2ThinkingModules } from './seeds/b2Thinking'
import { b2ShadowingModules } from './seeds/b2Shadowing'
import { b2SoftSkillsModules } from './seeds/b2SoftSkills'
import { b2ConfidenceModules } from './seeds/b2Confidence'
import { b2InterviewModules } from './seeds/b2Interview'
import { b2TechnicalModules } from './seeds/b2Technical'
import { b2RoleplayModules } from './seeds/b2Roleplay'
import { b2PracticeModules } from './seeds/b2Practice'
import { b2VocabularyWordsFull } from './seeds/b2Vocabulary'
import { b2AssessmentModules } from './seeds/b2Assessment'

// Phase 08 (C1) Imports
import { c1GrammarModules } from './seeds/c1Grammar'
import { c1CommunicationModules } from './seeds/c1Communication'
import { c1SpeakingModules } from './seeds/c1Speaking'
import { c1PronunciationModules } from './seeds/c1Pronunciation'
import { c1ReadingModules } from './seeds/c1Reading'
import { c1ListeningModules } from './seeds/c1Listening'
import { c1WritingModules } from './seeds/c1Writing'
import { c1ThinkingModules } from './seeds/c1Thinking'
import { c1ShadowingModules } from './seeds/c1Shadowing'
import { c1SoftSkillsModules } from './seeds/c1SoftSkills'
import { c1ConfidenceModules } from './seeds/c1Confidence'
import { c1InterviewModules } from './seeds/c1Interview'
import { c1TechnicalModules } from './seeds/c1Technical'
import { c1RoleplayModules } from './seeds/c1Roleplay'
import { c1PracticeGrammarModules } from './seeds/c1PracticeGrammar'
import { c1PracticeVocabularyModules } from './seeds/c1PracticeVocabulary'
import { c1PracticeSpeakingModules } from './seeds/c1PracticeSpeaking'
import { c1PracticeReadingModules } from './seeds/c1PracticeReading'
import { c1PracticeListeningModules } from './seeds/c1PracticeListening'
import { c1PracticeWritingModules } from './seeds/c1PracticeWriting'
import { c1PracticePronunciationModules } from './seeds/c1PracticePronunciation'
import { c1PracticeShadowingModules } from './seeds/c1PracticeShadowing'
import { c1PracticeThinkingModules } from './seeds/c1PracticeThinking'
import { c1PracticeSoftSkillsModules } from './seeds/c1PracticeSoftSkills'
import { c1PracticeConfidenceModules } from './seeds/c1PracticeConfidence'
import { c1PracticeInterviewModules } from './seeds/c1PracticeInterview'
import { c1PracticeTechnicalModules } from './seeds/c1PracticeTechnical'
import { c1PracticeRoleplayModules } from './seeds/c1PracticeRoleplay'
import { c1PracticeMixedModules } from './seeds/c1PracticeMixed'
import { c1VocabularyWordsFull } from './seeds/c1Vocabulary'
import { c1AssessmentModules } from './seeds/c1Assessment'

// C2
import { c2GrammarModules } from './seeds/c2Grammar'
import { c2CommunicationModules } from './seeds/c2Communication'
import { c2SpeakingModules } from './seeds/c2Speaking'
import { c2PronunciationModules } from './seeds/c2Pronunciation'
import { c2ReadingModules } from './seeds/c2Reading'
import { c2ListeningModules } from './seeds/c2Listening'
import { c2WritingModules } from './seeds/c2Writing'
import { c2ThinkingModules } from './seeds/c2Thinking'
import { c2ShadowingModules } from './seeds/c2Shadowing'
import { c2SoftSkillsModules } from './seeds/c2SoftSkills'
import { c2ConfidenceModules } from './seeds/c2Confidence'
import { c2InterviewModules } from './seeds/c2Interview'
import { c2TechnicalModules } from './seeds/c2Technical'
import { c2RoleplayModules } from './seeds/c2Roleplay'
import { c2PracticeGrammarModules } from './seeds/c2PracticeGrammar'
import { c2PracticeVocabularyModules } from './seeds/c2PracticeVocabulary'
import { c2PracticeSpeakingModules } from './seeds/c2PracticeSpeaking'
import { c2PracticeReadingModules } from './seeds/c2PracticeReading'
import { c2PracticeListeningModules } from './seeds/c2PracticeListening'
import { c2PracticeWritingModules } from './seeds/c2PracticeWriting'
import { c2PracticePronunciationModules } from './seeds/c2PracticePronunciation'
import { c2PracticeShadowingModules } from './seeds/c2PracticeShadowing'
import { c2PracticeThinkingModules } from './seeds/c2PracticeThinking'
import { c2PracticeSoftSkillsModules } from './seeds/c2PracticeSoftSkills'
import { c2PracticeConfidenceModules } from './seeds/c2PracticeConfidence'
import { c2PracticeInterviewModules } from './seeds/c2PracticeInterview'
import { c2PracticeTechnicalModules } from './seeds/c2PracticeTechnical'
import { c2PracticeRoleplayModules } from './seeds/c2PracticeRoleplay'
import { c2AssessmentModules } from './seeds/c2Assessment'
import { c2VocabularyWordsFull } from './seeds/c2Vocabulary'

// Phase 10
import { phase10SoftwareEngineerModules } from './seeds/phase10SoftwareEngineer'
import { phase10WorkplaceModules } from './seeds/phase10Workplace'
import { phase10PracticeModules } from './seeds/phase10Practice'
import { phase10AssessmentModules } from './seeds/phase10Assessment'
import { phase10VocabularyWords } from './seeds/phase10Vocabulary'

// Phase 12
import { phase12PronunciationModules } from './seeds/phase12Pronunciation'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding Phase 03 - Complete A1 Foundation...')

  // Clean up
  await prisma.levelReadiness.deleteMany()
  await prisma.practiceAttempt.deleteMany()
  await prisma.example.deleteMany()
  await prisma.practiceExercise.deleteMany()
  await prisma.concept.deleteMany()
  await prisma.lesson.deleteMany()
  await prisma.unit.deleteMany()
  await prisma.module.deleteMany()
  await prisma.level.deleteMany()
  await prisma.vocabularyWord.deleteMany()
  await prisma.userProgress.deleteMany()

  const levelsData = [
    { order: 1, title: 'Absolute Beginner', description: 'Foundation for complete beginners.' },
    { order: 2, title: 'Beginner — A1', description: 'Basic communication.' },
    { order: 3, title: 'Elementary — A2', description: 'Everyday situations.' },
    { order: 4, title: 'Intermediate — B1', description: 'Conversational fluency.' },
    { order: 5, title: 'Upper-Intermediate — B2', description: 'Confident expression.' },
    { order: 6, title: 'Advanced — C1', description: 'Complex and spontaneous.' },
    { order: 7, title: 'Professional / Pro — C2', description: 'Near-native professional.' },
    { order: 8, title: 'Career Mastery — Software / Full-Stack', description: 'Tech industry communication.' },
    { order: 9, title: 'International Workplace Communication', description: 'Global corporate environments.' },
    { order: 10, title: 'Final Interview & Communication Mastery', description: 'Acing tech and HR interviews.' }
  ]

  const createdLevels: Level[] = []
  for (const l of levelsData) {
    createdLevels.push(await prisma.level.create({ data: l }))
  }

  // Insert modules recursively
  async function insertModules(levelOrder: number, modulesData: any[]) {
    const levelId = createdLevels.find(l => l.order === levelOrder)!.id

    for (const mod of modulesData) {
      await prisma.module.create({
        data: {
          order: mod.order,
          title: mod.title,
          description: mod.description,
          levelId: levelId,
          units: {
            create: mod.units.map((unit: any) => ({
              order: unit.order,
              title: unit.title,
              description: unit.description,
              lessons: {
                create: unit.lessons.map((lesson: any) => ({
                  order: lesson.order,
                  title: lesson.title,
                  description: lesson.description,
                  concepts: {
                    create: lesson.concepts?.map((concept: any) => ({
                      order: concept.order,
                      title: concept.title,
                      explanation: concept.explanation,
                      hindiSupport: concept.hindiSupport,
                      examples: {
                        create: concept.examples?.map((ex: any) => ({
                          english: ex.english,
                          hindi: ex.hindi
                        })) || []
                      }
                    })) || []
                  },
                  exercises: {
                    create: lesson.exercises?.map((ex: any) => ({
                      type: ex.type,
                      prompt: ex.prompt,
                      answer: ex.answer,
                      difficulty: ex.difficulty || 'A1-MEDIUM'
                    })) || []
                  }
                }))
              }
            }))
          }
        }
      })
    }
  }

  // Insert Phase 02 existing data
  await insertModules(1, absBeginnerModules)
  await insertModules(2, beginnerA1Modules)
  await insertModules(2, softSkillsModules.map(m => ({...m, order: m.order + 10})))
  await insertModules(2, confidenceModules.map(m => ({...m, order: m.order + 20})))
  await insertModules(8, techModules)
  await insertModules(10, interviewModules)

  // Insert Phase 03 massive data
  await insertModules(2, a1GrammarModules)
  await insertModules(2, a1CommunicationModules)
  await insertModules(2, a1SpeakingModules)
  await insertModules(2, a1PronunciationModules)
  await insertModules(2, a1ReadingModules)
  await insertModules(2, a1ListeningModules)
  await insertModules(2, a1WritingModules)
  await insertModules(2, a1ThinkingModules)
  await insertModules(2, a1ShadowingModules)
  
  // Appending to other levels where appropriate
  await insertModules(2, a1SoftSkillsModules)
  await insertModules(2, a1ConfidenceModules)
  await insertModules(10, a1InterviewModules)
  await insertModules(8, a1TechModules)

  // Insert Phase 04 Expansion Data
  await insertModules(2, phase04SpeakingModules)
  await insertModules(2, phase04ReadingModules)
  await insertModules(2, phase04ListeningModules)
  await insertModules(2, phase04WritingModules)
  await insertModules(2, phase04PronunciationModules)
  await insertModules(2, phase04ThinkingModules)
  await insertModules(2, phase04ShadowingModules)
  await insertModules(2, phase04SoftSkillsModules)
  await insertModules(2, phase04ConfidenceModules)
  await insertModules(10, phase04InterviewModules)
  await insertModules(8, phase04TechnicalModules)

  // Insert Phase 05 (A2) Data
  await insertModules(3, a2GrammarModules)
  await insertModules(3, a2CommunicationModules)
  await insertModules(3, a2SpeakingModules)
  await insertModules(3, a2ReadingModules)
  await insertModules(3, a2ListeningModules)
  await insertModules(3, a2WritingModules)
  await insertModules(3, a2PronunciationModules)
  await insertModules(3, a2ThinkingModules)
  await insertModules(3, a2ShadowingModules)
  await insertModules(3, a2SoftSkillsModules)
  await insertModules(3, a2ConfidenceModules)
  await insertModules(10, a2InterviewModules)
  await insertModules(3, a2TechnicalModules)
  await insertModules(3, a2PracticeModules)

  // Insert Phase 06 (B1) Data
  await insertModules(4, b1GrammarModules)
  await insertModules(4, b1CommunicationModules)
  await insertModules(4, b1SpeakingModules)
  await insertModules(4, b1ReadingModules)
  await insertModules(4, b1ListeningModules)
  await insertModules(4, b1WritingModules)
  await insertModules(4, b1PronunciationModules)
  await insertModules(4, b1ThinkingModules)
  await insertModules(4, b1ShadowingModules)
  await insertModules(4, b1SoftSkillsModules)
  await insertModules(4, b1ConfidenceModules)
  await insertModules(10, b1InterviewModules)
  await insertModules(8, b1TechnicalModules)
  await insertModules(4, b1RoleplayModules)
  await insertModules(4, b1PracticeModules)

  // Insert Phase 07 (B2) Data
  await insertModules(5, b2GrammarModules)
  await insertModules(5, b2CommunicationModules)
  await insertModules(5, b2SpeakingModules)
  await insertModules(5, b2PronunciationModules)
  await insertModules(5, b2ReadingModules)
  await insertModules(5, b2ListeningModules)
  await insertModules(5, b2WritingModules)
  await insertModules(5, b2ThinkingModules)
  await insertModules(5, b2ShadowingModules)
  await insertModules(5, b2SoftSkillsModules)
  await insertModules(5, b2ConfidenceModules)
  await insertModules(10, b2InterviewModules)
  await insertModules(8, b2TechnicalModules)
  await insertModules(5, b2RoleplayModules)
  await insertModules(5, b2PracticeModules)
  await insertModules(5, b2AssessmentModules)

  // Insert Phase 08 (C1) Data
  await insertModules(6, c1GrammarModules)
  await insertModules(6, c1CommunicationModules)
  await insertModules(6, c1SpeakingModules)
  await insertModules(6, c1PronunciationModules)
  await insertModules(6, c1ReadingModules)
  await insertModules(6, c1ListeningModules)
  await insertModules(6, c1WritingModules)
  await insertModules(6, c1ThinkingModules)
  await insertModules(6, c1ShadowingModules)
  await insertModules(6, c1SoftSkillsModules)
  await insertModules(6, c1ConfidenceModules)
  await insertModules(10, c1InterviewModules)
  await insertModules(9, c1TechnicalModules)
  await insertModules(6, c1RoleplayModules)
  await insertModules(6, c1PracticeGrammarModules)
  await insertModules(6, c1PracticeVocabularyModules)
  await insertModules(6, c1PracticeSpeakingModules)
  await insertModules(6, c1PracticeReadingModules)
  await insertModules(6, c1PracticeListeningModules)
  await insertModules(6, c1PracticeWritingModules)
  await insertModules(6, c1PracticePronunciationModules)
  await insertModules(6, c1PracticeShadowingModules)
  await insertModules(6, c1PracticeThinkingModules)
  await insertModules(6, c1PracticeSoftSkillsModules)
  await insertModules(6, c1PracticeConfidenceModules)
  await insertModules(6, c1PracticeInterviewModules)
  await insertModules(6, c1PracticeTechnicalModules)
  await insertModules(6, c1PracticeRoleplayModules)
  await insertModules(6, c1PracticeMixedModules)
  await insertModules(6, c1AssessmentModules)

  console.log('Seeding Phase 09 - C2 Professional Mastery...')
  await insertModules(7, c2GrammarModules)
  await insertModules(7, c2CommunicationModules)
  await insertModules(7, c2SpeakingModules)
  await insertModules(7, c2PronunciationModules)
  await insertModules(7, c2ReadingModules)
  await insertModules(7, c2ListeningModules)
  await insertModules(7, c2WritingModules)
  await insertModules(7, c2ThinkingModules)
  await insertModules(7, c2ShadowingModules)
  await insertModules(7, c2SoftSkillsModules)
  await insertModules(7, c2ConfidenceModules)
  await insertModules(10, c2InterviewModules)
  await insertModules(9, c2TechnicalModules)
  await insertModules(7, c2RoleplayModules)
  await insertModules(7, c2PracticeGrammarModules)
  await insertModules(7, c2PracticeVocabularyModules)
  await insertModules(7, c2PracticeSpeakingModules)
  await insertModules(7, c2PracticeReadingModules)
  await insertModules(7, c2PracticeListeningModules)
  await insertModules(7, c2PracticeWritingModules)
  await insertModules(7, c2PracticePronunciationModules)
  await insertModules(7, c2PracticeShadowingModules)
  await insertModules(7, c2PracticeThinkingModules)
  await insertModules(7, c2PracticeSoftSkillsModules)
  await insertModules(7, c2PracticeConfidenceModules)
  await insertModules(7, c2PracticeInterviewModules)
  await insertModules(7, c2PracticeTechnicalModules)
  await insertModules(7, c2PracticeRoleplayModules)
  await insertModules(7, c2AssessmentModules)

  console.log('Seeding Phase 10 - Software Engineer & International Workplace...')
  await insertModules(8, phase10SoftwareEngineerModules)
  await insertModules(9, phase10WorkplaceModules)
  await insertModules(10, phase10PracticeModules)
  await insertModules(10, phase10AssessmentModules)

  console.log('Seeding Phase 12 - Advanced Speech & Pronunciation...')
  await insertModules(10, phase12PronunciationModules)

  // Vocabulary
  const allVocab = [...vocabularyWords, ...a1VocabularyWords, ...phase04VocabularyWords, ...a2VocabularyWordsFull, ...b1VocabularyWordsFull, ...b2VocabularyWordsFull, ...c1VocabularyWordsFull, ...c2VocabularyWordsFull, ...phase10VocabularyWords]
  for (const v of allVocab) {
    await prisma.vocabularyWord.create({ data: v })
  }

  // Progress tracking
  const skills = [
    'Grammar', 'Vocabulary', 'Speaking', 'Pronunciation', 'Fluency', 
    'Reading', 'Listening', 'Writing', 'English Thinking', 'Shadowing',
    'Soft Skills', 'Self Confidence', 'Interview English', 'Technical English'
  ]
  for (const s of skills) {
    await prisma.userProgress.create({
      data: { skill: s, level: 0 }
    })
  }

  console.log('Seeding Phase 03 finished successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
