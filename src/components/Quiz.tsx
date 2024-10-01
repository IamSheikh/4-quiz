import { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import questions from "../data/questions";
import { IUserAnswer } from "../types";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [_, setUserAnswers] = useState<IUserAnswer[]>([]);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    const answerRecord: IUserAnswer = {
      question: questions[currentQuestion].questionText,
      isCorrect,
    };

    setUserAnswers((prev) => [...prev, answerRecord]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  return (
    <div>
      {showResult ? (
        <Result
          score={score}
          total={questions.length}
          restartQuiz={restartQuiz}
        />
      ) : (
        <Question
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
