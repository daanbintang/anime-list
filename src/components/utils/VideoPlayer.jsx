"use client";

import { X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const option = {
    width: "300",
    height: "300",
  };

  function handleTrailerVideo() {
    setIsOpen((prev) => !prev);
  }

  const VideoTrailer = () => {
    return (
      <div>
        <button className="font-bold text-primary bg-dark" onClick={handleTrailerVideo}>
          <X size={24} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={({ target }) => target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const ButtonVideoPlayer = () => {
    return <button className="font-bold text-primary backdrop-blur px-4 py-2 rounded-tr" onClick={handleTrailerVideo}>watch trailer</button>;
  };

  return isOpen ? <VideoTrailer /> : <ButtonVideoPlayer />;
};

export default VideoPlayer;
