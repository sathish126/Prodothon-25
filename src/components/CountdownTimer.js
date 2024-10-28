// src/components/CountdownTimer.js
import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const calculateCountdown = () => {
    const now = new Date();
    const totalSeconds = Math.floor((targetDate - now) / 1000);

    if (totalSeconds < 0) {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setCountdown({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown">
      <span>{countdown.days}d </span>
      <span>{countdown.hours}h </span>
      <span>{countdown.minutes}m </span>
      <span>{countdown.seconds}s</span>
    </div>
  );
};

export default CountdownTimer;
