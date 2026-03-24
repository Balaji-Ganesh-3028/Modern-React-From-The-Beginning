import { useEffect, useRef } from "react";
type TimerControlProps = {
  isRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
}

const TimerControl = ({ isRunning, onToggleTimer, onResetTimer }: TimerControlProps) => {
  const startButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, [])

  return (  
    <>
      <button
        onClick={onToggleTimer}
        ref={startButtonRef}
        className='mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-3'
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>

      <button
        onClick={onResetTimer}
        className='mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
      >
        Reset
      </button>
    </>
  );
}
 
export default TimerControl;