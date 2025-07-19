import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2025-07-31T22:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex justify-center gap-8 mt-8 font-playfair">
      <div
        className="text-center animate-scale-in"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="text-4xl md:text-6xl font-bold text-wedding-gold mb-2">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-sm md:text-base text-muted-foreground">Days</div>
        <div className="text-sm md:text-base text-muted-foreground arabic-text">
          أيام
        </div>
      </div>

      <div
        className="text-center animate-scale-in"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="text-4xl md:text-6xl font-bold text-wedding-gold mb-2">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-sm md:text-base text-muted-foreground">Hours</div>
        <div className="text-sm md:text-base text-muted-foreground arabic-text">
          ساعات
        </div>
      </div>

      <div
        className="text-center animate-scale-in"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="text-4xl md:text-6xl font-bold text-wedding-gold mb-2">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-sm md:text-base text-muted-foreground">
          Minutes
        </div>
        <div className="text-sm md:text-base text-muted-foreground arabic-text">
          دقائق
        </div>
      </div>

      <div
        className="text-center animate-scale-in"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="text-4xl md:text-6xl font-bold text-wedding-gold mb-2">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-sm md:text-base text-muted-foreground">
          Seconds
        </div>
        <div className="text-sm md:text-base text-muted-foreground arabic-text">
          ثواني
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
