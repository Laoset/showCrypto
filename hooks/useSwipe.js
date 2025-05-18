import { useState, useRef, TouchEvent, MouseEvent } from 'react';

export const useSwipe = (options = {}) => {
  const { threshold = 50, onSwipeLeft, onSwipeRight } = options;

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [currentX, setCurrentX] = useState(null);

  // To track if we've already triggered a swipe for the current gesture
  const swipeTriggered = useRef(false);

  const handleTouchStart = (e) => {
    swipeTriggered.current = false;
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || swipeTriggered.current) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
      swipeTriggered.current = true;
    }

    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
      swipeTriggered.current = true;
    }
  };

  const handleMouseDown = (e) => {
    swipeTriggered.current = false;
    setMouseDown(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!mouseDown) return;
    setCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (!mouseDown || !startX || !currentX || swipeTriggered.current) {
      setMouseDown(false);
      return;
    }

    const distance = startX - currentX;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
      swipeTriggered.current = true;
    }

    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
      swipeTriggered.current = true;
    }

    setMouseDown(false);
  };

  return {
    onSwipeLeft: onSwipeLeft || (() => {}),
    onSwipeRight: onSwipeRight || (() => {}),
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
};
