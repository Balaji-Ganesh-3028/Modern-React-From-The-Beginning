import { useRef} from 'react';

const UseRefHook = () => {
    const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    console.log(inputRef.current);
    console.log(inputRef.current?.value);
  }
  return (  <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center'>
      <h2 className='text-2xl font-bold mb-4'>useRef Example</h2>

      <input
        type='text'
        placeholder='Type something...'
        className='w-full p-2 border rounded-lg'
        ref={inputRef}
      />

      <button
        className='mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div> );
}
 
export default UseRefHook;
