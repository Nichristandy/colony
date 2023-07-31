import React from "react";
import { useState } from "react";

const Video = () =>{

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prevState) => !prevState);
  };

    return(
      <div className="relative w-full h-auto lg:w-[632px] lg:h-[358px] ">
      <video
        src="assets/video.mp4"
        className="w-full rounded-md"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controls
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            className="bg-gray-900 text-white rounded-full p-4 shadow-lg"
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8 5v14l11-7z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
    );
};

export default Video;