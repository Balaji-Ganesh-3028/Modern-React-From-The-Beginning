const TimerDisplay = ({ time }: { time: number }) => {
  return ( 
      <h2 className='text-4xl font-semibold mt-4'>⏳ Timer: {time} sec</h2>
   );
}
 
export default TimerDisplay;