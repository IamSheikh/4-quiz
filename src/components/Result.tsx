import React from 'react';

import { IResultProps } from '../types';

const Result: React.FC<IResultProps> = ({ score, total, restartQuiz }) => {
  const percentage = ((score / total) * 100).toFixed(2);

  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold mb-4 mt-4'>Quiz Completed!</h2>
      <p className='text-lg mb-2'>
        You scored <span className='font-semibold'>{score}</span> out of{' '}
        <span className='font-semibold'>{total}</span>
      </p>
      <p className='text-lg mb-6'>Your Score: {percentage}%</p>
      <button
        onClick={restartQuiz}
        className='bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900 transition'
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
