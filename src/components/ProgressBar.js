// ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ currentTime, duration, onSeek }) => {
  const handleSeek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
    onSeek(seekTime);
  };

  const calculateProgress = () => {
    return (currentTime / duration) * 100 || 0;
  };

  return (
    <div className="w-full bg-gray-300 h-4 relative" onClick={handleSeek}>
      <div
        className="bg-blue-500 h-full"
        style={{ width: `${calculateProgress()}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
