import { useEffect, useRef, useState } from 'react'
import TimerDisplay from './TimerDisplay';
import TimerControl from './TimerControl';

const Timer = () => {
  const timerRef = useRef<number | null>(null)

  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem('time') ?? 0);
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem('time', time.toString());
  }, [time]);

  // Start/Stop Timer
  const toggleTimer = () => {
    if (isRunning) {
      // Clear the interval to stop the timer
      clearInterval(timerRef.current ?? undefined);
      timerRef.current = null; //  Clears stored interval ID
    } else {
      // Start the timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current ?? undefined);
    timerRef.current = null;
    setTime(0);
    setIsRunning(false);
  }

  return ( 
    <>
      <TimerDisplay time={time} />
      <TimerControl isRunning={isRunning} onToggleTimer={toggleTimer} onResetTimer={resetTimer} />
    </>
   );
}
 
export default Timer;