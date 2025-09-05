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

  const radius = 290;
  const radiusMinute = 260;
  const radiusHour = 235;

  const circumference = 2 * Math.PI * radius;
  const circumferenceMinutes = 2 * Math.PI * radiusMinute;
  const circumferenceHour = 2 * Math.PI * radiusHour;
  
  const strokeDashoffset = circumference * (1 - progress);
  const strokeDashoffsetMinutes = circumferenceMinutes * (1 - progress);
  const strokeDashoffsetHour = circumferenceHour * (1 - progress);
  
  return (
    <div className="flex justify-end items-center min-h-screen bg-black text-white">
      <div className="relative flex flex-col items-center p-8 mr-20 mb-5 rounded-[50%] bg-[#111] shadow-xl">
        <div className="relative flex items-center justify-center">
          <svg className="w-150 h-150 -rotate-90">
            <circle
              cx="300"
              cy="300"
              r={radiusHour}
              stroke="#333"
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx="300"
              cy="300"
              r={radiusHour}
              stroke="#ffffff"
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-100 linear"
            />
            <circle
              cx="300"
              cy="300"
              r={radiusMinute}
              stroke="#333"
              strokeWidth="15"
              fill="transparent"
            />
            <circle
              cx="300"
              cy="300"
              r={radiusMinute}
              stroke="#ffffff"
              strokeWidth="15"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-100 linear"
            />
            <circle
              cx="300"
              cy="300"
              r={radius}
              stroke="#333"
              strokeWidth="20"
              fill="transparent"
            />
            <circle
              cx="300"
              cy="300"
              r={radius}
              stroke="#ffffff"
              strokeWidth="20"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-100 linear"
            />
          </svg>
          <span className="absolute text-[150px] font-bold">
            {timeLeft}s
          </span>
        </div>
      </div>
    </div>
  );
}
