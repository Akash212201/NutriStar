// LoadingOverlay.jsx
import React from 'react';

const LoadingOverlay = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center"
    >
      <span className="text-white">Loading...</span>
    </div>
  );
};

export default LoadingOverlay;
