'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useSwipe } from '@/hooks/useSwipe';
import { CryptoCard } from '.';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SwipeControls } from './SwipeControls';

export const CryptoSwiper = ({ cryptoData }) => {
  console.log(cryptoData, 'ds');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    if (isAnimating || cryptoData.length <= 1) return;

    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cryptoData.length);
      setIsAnimating(false);
    }, 300);
  }, [cryptoData.length, isAnimating]);

  const goToPrevious = useCallback(() => {
    if (isAnimating || cryptoData.length <= 1) return;

    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cryptoData.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  }, [cryptoData.length, isAnimating]);

  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
  });

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isPaused || cryptoData.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isPaused, goToNext, cryptoData.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  const currentCoin = cryptoData[currentIndex];

  return (
    <div
      className="relative w-full max-w-3xl mx-auto px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="w-full relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => handleMouseUp()}
      >
        <div
          className={`
          transform transition-all duration-300 ease-in-out
          ${
            isAnimating && direction === 'left'
              ? '-translate-x-[100%] opacity-0'
              : ''
          }
          ${
            isAnimating && direction === 'right'
              ? 'translate-x-[100%] opacity-0'
              : ''
          }
        `}
        >
          <CryptoCard cryptoData={currentCoin} />
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:ml-0 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full shadow-lg hover:bg-white/20 transition-all z-10"
        aria-label="Previous coin"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:mr-0 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full shadow-lg hover:bg-white/20 transition-all z-10"
        aria-label="Next coin"
      >
        <ChevronRight size={24} />
      </button>

      <SwipeControls
        currentIndex={currentIndex}
        totalCoins={cryptoData.length}
        goToNext={goToNext}
        goToPrevious={goToPrevious}
        isAutoPlaying={isAutoPlaying}
        setIsAutoPlaying={setIsAutoPlaying}
      />
    </div>
  );
};
