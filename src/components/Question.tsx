import { IQuestionProps } from "../types";

const Question: React.FC<IQuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  handleAnswer,
}) => {
  return (
    <div>
      <div className="mb-4 mt-4 text-gray-700">
        <span className="font-semibold">Question {questionNumber}</span> of{" "}
        {totalQuestions}
      </div>
      <div className="mb-6 text-xl text-gray-900">{question.questionText}</div>
      <div className="space-y-4">
        {question.answerOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.isCorrect)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
