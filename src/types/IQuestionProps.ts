import { IAnswerOption } from ".";

export interface IQuestionProps {
  question: {
    questionText: string;
    answerOptions: IAnswerOption[];
  };
  questionNumber: number;
  totalQuestions: number;
  handleAnswer: (isCorrect: boolean) => void;
}
