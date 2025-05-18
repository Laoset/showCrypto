'use client';

import { Pause, Play } from 'lucide-react';
import React from 'react';

export const SwipeControls = ({
  currentIndex,
  totalCoins,
  isAutoPlaying,
  setIsAutoPlaying,
}) => {
  return (
    <div className="flex items-center justify-center mt-4 space-x-4">
      {/* Pagination dots */}
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalCoins }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-4'
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Auto-play toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="bg-gray-800/80 p-2 rounded-full hover:bg-gray-700 transition-colors"
        aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
      >
        {isAutoPlaying ? (
          <Pause size={16} className="text-white" />
        ) : (
          <Play size={16} className="text-white" />
        )}
      </button>
    </div>
  );
};
