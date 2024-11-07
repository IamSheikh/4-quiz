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
      {/* <button
        onClick={restartQuiz}
        className='bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-900 transition'
      >
        Restart Quiz
      </button> */}
      <div className='flex justify-center items-center'>
        <button
          className='rounded bg-green-600 px-3 py-2 font-comic text-sm uppercase tracking-widest text-white shadow shadow-green-800 transition hover:bg-green-600 flex items-center space-x-2'
          onClick={restartQuiz}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='size-4 stroke-2'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
            />
          </svg>
          <span> Restart </span>
        </button>
      </div>
    </div>
  );
};

export default Result;
