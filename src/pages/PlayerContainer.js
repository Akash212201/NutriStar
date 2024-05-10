// PlayerContainer.jsx
import React, { useState, useEffect, useRef } from 'react';

const PlayerContainer = ({ src, subtitlesSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [captionsEnabled, setCaptionsEnabled] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    // Play/Pause functionality
    const togglePlay = () => {
      setIsPlaying(!isPlaying);
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    };

    // Volume functionality
    const toggleMute = () => {
      setIsMuted(!isMuted);
      video.muted = !video.muted;
    };

    // Set volume
    video.volume = volume;

    // Set up event listeners
    video.addEventListener('play', () => setIsPlaying(true));
    video.addEventListener('pause', () => setIsPlaying(false));
    video.addEventListener('timeupdate', () => setCurrentTime(video.currentTime));
    video.addEventListener('loadeddata', () => {
      setTotalTime(video.duration);
      setCurrentTime(video.currentTime);
    });

    return () => {
      // Clean up event listeners
      video.removeEventListener('play', () => setIsPlaying(true));
      video.removeEventListener('pause', () => setIsPlaying(false));
      video.removeEventListener('timeupdate', () => setCurrentTime(video.currentTime));
      video.removeEventListener('loadeddata', () => {
        setTotalTime(video.duration);
        setCurrentTime(video.currentTime);
      });
    };
  }, [volume, isMuted, isPlaying]);

  // Play/Pause button
  const playPauseBtnClickHandler = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Full screen button
  const fullScreenBtnClickHandler = () => {
    const video = videoRef.current;
    if (!isFullScreen) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  // Mini player button
  const miniPlayerBtnClickHandler = () => {
    const video = videoRef.current;
    if (!isMiniPlayer) {
      if (video.requestPictureInPicture) {
        video.requestPictureInPicture();
      }
    } else {
      if (document.exitPictureInPicture) {
        document.exitPictureInPicture();
      }
    }
    setIsMiniPlayer(!isMiniPlayer);
  };

  // Theater mode button
  const theaterBtnClickHandler = () => {
    setIsTheaterMode(!isTheaterMode);
  };

  // Captions button
  const captionsBtnClickHandler = () => {
    setCaptionsEnabled(!captionsEnabled);
  };

  return (
    <div className={`video-container${isPlaying ? '' : ' paused'}${isFullScreen ? ' full-screen' : ''}${isMiniPlayer ? ' mini-player' : ''}${isTheaterMode ? ' theater' : ''}`}>
      <video ref={videoRef} src={src}>
        {subtitlesSrc && <track kind="captions" src={subtitlesSrc} srcLang="en" />}
      </video>
      {/* Add your controls buttons and other elements here */}
    </div>
  );
};

  
  export default PlayerContainer;
