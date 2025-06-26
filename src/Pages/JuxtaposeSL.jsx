import React, { useState } from 'react';
import './JuxtaposeSL.css';
import TextSlider from '../Components/TextSlider';

const JuxtaposeSL = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseDown = (e) => {
    e.preventDefault();
    const container = e.currentTarget.parentElement;
    const containerWidth = container.offsetWidth;

    const moveHandler = (moveEvent) => {
      const rect = container.getBoundingClientRect();
      const newPosition = ((moveEvent.clientX - rect.left) / containerWidth) * 100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    };

    const upHandler = () => {
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('mouseup', upHandler);
    };

    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', upHandler);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const container = e.currentTarget.parentElement;
    const containerWidth = container.offsetWidth;

    const moveHandler = (moveEvent) => {
      const rect = container.getBoundingClientRect();
      const newPosition = ((moveEvent.touches[0].clientX - rect.left) / containerWidth) * 100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    };

    const endHandler = () => {
      document.removeEventListener('touchmove', moveHandler);
      document.removeEventListener('touchend', endHandler);
    };

    document.addEventListener('touchmove', moveHandler);
    document.addEventListener('touchend', endHandler);
  };

  return (
    <div>
    <div className="juxtapose-container">
      {/* Background image (left) */}
      <img
        src="/assets/1.jpg"
        alt="До лечения"
        className="image-background"
      />
      
      {/* Foreground image (right) */}
      <div className="image-foreground" style={{ width: `${sliderPosition}%` }}>
        <img
          src="/assets/2.jpg"
          alt="После лечения"
          className="image-foreground-img"
        />
      </div>
      
      {/* Vertical slider line with centered circular handle */}
      <div
        className="slider-line"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{ left: `${sliderPosition}%` }}
      />
    </div>
    <div>
      <TextSlider />
    </div>
    </div>    
  );

};

export default JuxtaposeSL;