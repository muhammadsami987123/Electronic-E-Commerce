"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const PromoBanner = function(){
  const [countdownTimes, setCountdownTimes] = useState({
    hours: 23,
    minutes: 5,
    seconds: 59,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (countdownTimes.seconds > 0) {
        setCountdownTimes((prevTimes) => ({
          ...prevTimes,
          seconds: prevTimes.seconds - 1,
        }));
      } else if (countdownTimes.minutes > 0) {
        setCountdownTimes((prevTimes) => ({
          ...prevTimes,
          minutes: prevTimes.minutes - 1,
          seconds: 59,
        }));
      } else if (countdownTimes.hours > 0) {
        setCountdownTimes((prevTimes) => ({
          ...prevTimes,
          hours: prevTimes.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownTimes]);

  return (
 <section className="px-32  " ><div className="bg-gray-900 sm:px-4 text-white rounded-lg shadow-md flex items-center justify-between mt-8 ">
      {/* Text Content */}
      <div>
        <h2 className="text-green-400 text-sm font-semibold mb-1">Categories</h2>
        <h1 className="text-3xl font-bold mb-4">Enhance Your Music Experience</h1>

        {/* Countdown Timer */}
        <div className="flex space-x-4 mb-6">
          <div className="bg-white flex flex-col items-center justify-center text-center text-black w-[70px] h-[70px] rounded-full ">
            <span className="text-2xl font-bold">{countdownTimes.hours}</span>
            <span className="text-sm">Hours</span>
          </div>
          <div className="bg-white flex flex-col items-center justify-center text-center text-black w-[70px] h-[70px] rounded-full ">
            <span className="text-2xl font-bold">{countdownTimes.minutes}</span>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="bg-white flex flex-col items-center justify-center text-center text-black w-[70px] h-[70px] rounded-full ">
            <span className="text-2xl font-bold">{countdownTimes.seconds}</span>
            <span className="text-sm ">Seconds</span>
          </div>
        </div>

        {/* Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md">
          Buy Now!
        </button>
      </div>

      {/* Image */}
      <div className="w-1/2 flex items-center justify-center">
        <Image
          src="/banner.jpg"
          alt="JBL Speaker"
          className="w-full px-auto py-auto   max-w-md"
        />
      </div>
    </div>
    </section>
  );
};

export default PromoBanner;