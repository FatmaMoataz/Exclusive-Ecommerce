import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import './CountDownTimer.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountDownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);
    const difference = +targetDate - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', columnGap: '1rem' }}>
        <h2>Days</h2>
        <h2>Hours</h2>
        <h2>Minutes</h2>
        <h2>Seconds</h2>
      </Box>
      <h2 className='flex-center'>
        {timeLeft.days} <span className='text-color'>:</span> {timeLeft.hours} <span className='text-color'>:</span> {timeLeft.minutes} <span className='text-color'>:</span> {timeLeft.seconds}
      </h2>
    </Box>
  );
}
