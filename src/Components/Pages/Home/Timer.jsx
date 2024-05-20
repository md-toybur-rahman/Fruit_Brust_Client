import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div>
      <div className='flex items-center gap-10'>
        <div>
          <h1 className='text-[48px] font-bold text-[#121212]'>{days}</h1>
          <p className='text-base font-medium'>Days</p>
        </div>
        <div className='text-[50px] p-0 m-0'>:</div>
        <div>
          <h1 className='text-[48px] font-bold text-[#121212]'>{hours}</h1>
          <p className='text-base font-medium'>Hours</p>
        </div>
        <div className='text-[50px] p-0 m-0'>:</div>
        <div>
          <h1 className='text-[48px] font-bold text-[#121212]'>{minutes}</h1>
          <p className='text-base font-medium'>Minutes</p>
        </div>
        <div className='text-[50px] p-0 m-0'>:</div>
        <div>
          <h1 className='text-[48px] font-bold text-[#121212]'>{seconds}</h1>
          <p className='text-base font-medium'>Seconds</p>
        </div>
      </div>
      <div className='flex items-center justify-center gap-5 mt-4'>
        <button className='border border-black px-5 py-2 text-base font-medium rounded-xl' onClick={start}>Start</button>
        <button className='border border-black px-5 py-2 text-base font-medium rounded-xl' onClick={pause}>Pause</button>
        <button className='border border-black px-5 py-2 text-base font-medium rounded-xl' onClick={resume}>Resume</button>
        <button className='border border-black px-5 py-2 text-base font-medium rounded-xl' onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 600000);
          restart(time)
        }}>Restart</button>
      </div>
    </div>
  );
}

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600000);
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}