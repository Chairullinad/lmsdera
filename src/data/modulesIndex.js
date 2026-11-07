import { twkModules, twkSubCategories } from './twk/twkModules.js';
import { tiuModules, tiuSubCategories } from './tiu/tiuModules.js';
import { tkpModules, tkpSubCategories } from './tkp/tkpModules.js';

export const CATEGORY_META = {
  TWK: {
    code: "TWK",
    name: "Tes Wawasan Kebangsaan",
    shortDesc: "Nasionalisme, Integritas, Bela Negara, Pilar Negara, & Bahasa Indonesia",
    passingGrade: 65,
    totalQuestionsBKN: 30,
    maxScoreBKN: 150,
    scoringRule: "Benar +5 • Salah/Kosong 0",
    color: "rose",
    subCategories: twkSubCategories
  },
  TIU: {
    code: "TIU",
    name: "Tes Inteligensia Umum",
    shortDesc: "Kemampuan Verbal, Numerik (Hitung, Deret, Cerita), & Figural",
    passingGrade: 80,
    totalQuestionsBKN: 35,
    maxScoreBKN: 175,
    scoringRule: "Benar +5 • Salah/Kosong 0",
    color: "indigo",
    subCategories: tiuSubCategories
  },
  TKP: {
    code: "TKP",
    name: "Tes Karakteristik Pribadi",
    shortDesc: "Pelayanan Publik, Jejaring Kerja, Sosial Budaya, TIK, Profesionalisme, Anti-Radikalisme",
    passingGrade: 166,
    totalQuestionsBKN: 45,
    maxScoreBKN: 225,
    scoringRule: "Bobot Berjenjang 1 s/d 5 • Kosong 0",
    color: "emerald",
    subCategories: tkpSubCategories
  }
};

export const allModules = [
  ...twkModules,
  ...tiuModules,
  ...tkpModules
];

export function getModulesByCategory(category) {
  if (!category || category === 'ALL') return allModules;
  return allModules.filter((m) => m.category === category);
}

export function getAllQuizQuestions() {
  const questions = [];
  allModules.forEach((mod) => {
    if (Array.isArray(mod.quiz)) {
      mod.quiz.forEach((q) => {
        questions.push({
          ...q,
          moduleId: mod.id,
          moduleTitle: mod.title,
          category: mod.category,
          subCategory: mod.subCategory
        });
      });
    }
  });
  return questions;
}

