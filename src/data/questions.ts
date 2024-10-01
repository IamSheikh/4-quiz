import { IQuestion } from "../types";

const questions: IQuestion[] = [
  {
    questionText: "Who discovered America?",
    answerOptions: [
      { answerText: "Amerigo Vespucci", isCorrect: false },
      { answerText: "Christopher Columbus", isCorrect: true },
      { answerText: "Ferdinand Magellan", isCorrect: false },
      { answerText: "Juan Ponce de León", isCorrect: false },
    ],
  },
  {
    questionText:
      "When did the United States of America got independence from Britain?",
    answerOptions: [
      { answerText: "1775", isCorrect: false },
      { answerText: "1789", isCorrect: false },
      { answerText: "1776", isCorrect: true },
      { answerText: "1783", isCorrect: false },
    ],
  },
  {
    questionText: "Who discovered New Zealand?",
    answerOptions: [
      { answerText: "Christopher Columbus", isCorrect: false },
      { answerText: "Amerigo Vespucci", isCorrect: false },
      { answerText: "Ferdinand Magellan", isCorrect: false },
      { answerText: "Abel Tasman", isCorrect: true },
    ],
  },
  {
    questionText:
      "Which empire was described as “the empire on which the sun never sets”?",
    answerOptions: [
      { answerText: "British Empire", isCorrect: true },
      { answerText: "French Empire", isCorrect: false },
      { answerText: "Spanish Empire", isCorrect: false },
      { answerText: "Mongol Empire", isCorrect: false },
    ],
  },
  {
    questionText:
      "By 1913, British Empire prevailed on how many peoples are around the world?",
    answerOptions: [
      { answerText: "423 Million", isCorrect: true },
      { answerText: "428 Million", isCorrect: false },
      { answerText: "415 Million", isCorrect: false },
      { answerText: "437 Million", isCorrect: false },
    ],
  },
];

export default questions;
