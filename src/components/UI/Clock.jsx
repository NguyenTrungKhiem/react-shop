import React, { useState, useEffect } from "react";

const Clock = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    
    let interval;
    
    const countDown = () => {
      const destination = new Date("June 26, 2023").getTime();
    
      interval = setInterval(() => {
        const now = new Date().getTime();
       
        const different = destination - now;
        
        const countDays = Math.floor(different / (1000 * 60 * 60 * 24));
    
        const countHours = Math.floor(
          (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
    
        const countMinutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
    
        const countSeconds = Math.floor((different % (1000 * 60)) / 1000);
    
        if (destination < 0) clearInterval(interval);
        else {
          setDays(countDays);
          setHours(countHours);
          setMinutes(countMinutes);
          setSeconds(countSeconds);
        }
      });
    };
    
    useEffect(() => {
      countDown();
      return () => {
        clearInterval(interval);
      }});

  return (
    <div>
      <div className="clock__wrapper d-flex align-items-center justify-content-center gap-3">
        <div className="clock__data d-flex align-items-center gap-3">
          <div className="text-center">
            <h1 className="text-white fs-3 mb-2">{days}</h1>
            <h5 className="text-white fs-6">Days</h5>
          </div>
          <span className="text-white fs-3">:</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
          <div className="text-center">
            <h1 className="text-white fs-3 mb-2">{hours}</h1>
            <h5 className="text-white fs-6">Hours</h5>
          </div>
          <span className="text-white fs-3">:</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
          <div className="text-center">
            <h1 className="text-white fs-3 mb-2">{minutes}</h1>
            <h5 className="text-white fs-6">Minutes</h5>
          </div>
          <span className="text-white fs-3">:</span>
        </div>
        <div className="clock__data d-flex align-items-center gap-3">
          <div className="text-center">
            <h1 className="text-white fs-3 mb-2">{seconds}</h1>
            <h5 className="text-white fs-6">Seconds</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
