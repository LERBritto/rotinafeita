"use client";
import { useEffect, useState } from "react";

export default function Timer({ duration = 10 }: { duration?: number }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const start = Date.now();
    const end = start + duration * 1000;

    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, Math.floor((end - now) / 1000));
      setTimeLeft(remaining);

      const fraction = Math.max(0, (end - now) / (duration * 1000));
      setProgress(fraction);

      if (remaining < 0) clearInterval(interval);
    }, 100); 

    return () => clearInterval(interval);
  }, [duration]);

  const radius = 230;
  const radiusMinute = 213;
  const radiusHour = 199;

  const circumference = 2 * Math.PI * radius;
  const circumferenceMinutes = 2 * Math.PI * radiusMinute;
  const circumferenceHour = 2 * Math.PI * radiusHour;
  
  const strokeDashoffset = circumference * (1 - progress);
  const strokeDashoffsetMinutes = circumferenceMinutes * (1 - progress);
  const strokeDashoffsetHour = circumferenceHour * (1 - progress);
  
  return (
    <div className="flex justify-end items-center min-h-screen bg-[#171717] text-white">
      <div className="relative flex flex-col items-center p-1 mr-55 mt-20 rounded-[50%] bg-[#111] shadow-xl">
        <div className="relative flex items-center justify-center">
          <svg className="w-120 h-120 -rotate-90">
            <circle
              cx="240"
              cy="240"
              r={radiusHour}
              stroke="#333"
              strokeWidth="5"
              fill="transparent"
            />
            <circle
              cx="240"
              cy="240"
              r={radiusHour}
              stroke="#ffffff"
              strokeWidth="5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-100 linear"
            />
            <circle
              cx="240"
              cy="240"
              r={radiusMinute}
              stroke="#333"
              strokeWidth="7.5"
              fill="transparent"
            />
            <circle
              cx="240"
              cy="240"
              r={radiusMinute}
              stroke="#ffffff"
              strokeWidth="7.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-100 linear"
            />
            <circle
              cx="240"
              cy="240"
              r={radius}
              stroke="#333"
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx="240"
              cy="240"
              r={radius}
              stroke="#ffffff"
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-100 linear"
            />
          </svg>
          <span className="absolute text-[75px] font-bold">
            {timeLeft}s
          </span>
        </div>
      </div>
    </div>
  );
}
