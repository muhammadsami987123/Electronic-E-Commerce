import React from "react";

const NavigationButtons = function() {
  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      {/* Left Button */}
      <button
        className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
        aria-label="Previous"
      >
        <span className="text-xl font-bold">←</span>
      </button>

      {/* Right Button */}
      <button
        className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full shadow hover:bg-gray-300 transition"
        aria-label="Next"
      >
        <span className="text-xl font-bold">→</span>
      </button>
    </div>
  );
};

export default NavigationButtons;
