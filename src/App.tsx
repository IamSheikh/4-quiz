import Quiz from './components/Quiz';

const App = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='w-full max-w-md h-[70vh] max-h-[70vh] justify-center items-center flex flex-col bg-white shadow-lg rounded-lg p-6'>
        <h1 className='text-3xl font-bold text-center'>
          <span className='text-red-500'>A</span>
          <span className='text-orange-500'>l</span>
          <span className='text-yellow-300'>l</span>
          <span className='text-green-500'>i</span>
          <span className='text-blue-500'>s</span>
          <span className='text-violet-500'>o</span>
          <span className='text-red-500'>n</span>{' '}
          <span className='text-orange-500'>B</span>
          <span className='text-yellow-300'>u</span>
          <span className='text-green-500'>r</span>
          <span className='text-blue-500'>g</span>
          <span className='text-violet-500'>e</span>
          <span className='text-red-500'>r</span>
          <span className='text-orange-500'>s</span> Quiz App
        </h1>
        <Quiz />
      </div>
    </div>
  );
};

export default App;
