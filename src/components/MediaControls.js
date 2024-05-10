// MediaControls.jsx
import React from 'react';

const MediaControls = ({
  isPlaying,
  onPlayPause,
  volume,
  onVolumeChange,
  currentTime,
  duration,
  onSeek,
}) => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring"
        onClick={onPlayPause}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
        className="w-20 h-4 bg-gray-300 rounded focus:outline-none"
      />
      <span className="text-gray-500 text-sm">
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring"
        onClick={() => onSeek(currentTime - 10)}
      >
        10s Backward
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:ring"
        onClick={() => onSeek(currentTime + 10)}
      >
        10s Forward
      </button>
      {/* Add other controls */}
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default MediaControls;
