import { IAnswerOption } from "./IAnswerOption";

export interface IQuestion {
  questionText: string;
  answerOptions: IAnswerOption[];
}
