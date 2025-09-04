"use client";
import { useEffect, useState } from "react";

export default function Timer({ duration = 10 }: { duration?: number }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [progress, setProgress] = useState(1); // 1 = cheio, 0 = vazio

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
    }, 100); // atualiza a cada 100ms

    return () => clearInterval(interval);
  }, [duration]);

  // Círculo
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="relative flex flex-col items-center p-8 rounded-xl bg-[#111] shadow-xl">
        <div className="relative flex items-center justify-center">
          <svg className="w-56 h-56 -rotate-90">
            <circle
              cx="112"
              cy="112"
              r={radius}
              stroke="#333"
              strokeWidth="8"
              fill="transparent"
            />
            <circle
              cx="112"
              cy="112"
              r={radius}
              stroke="#00e0ff"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-100 linear"
            />
          </svg>
          <span className="absolute text-4xl font-bold">
            {timeLeft}s
          </span>
        </div>
      </div>
    </div>
  );
}
