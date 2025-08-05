import React, { useEffect, useState } from 'react';

export default function TimerVotingGate({ onExpire }) {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) {
      onExpire();
      return;
    }
    const interval = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="text-center text-xl font-bold text-red-600">
      Voting will expire in {timeLeft} seconds!
    </div>
  );
}
