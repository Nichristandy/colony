import React from "react";

const Video = () =>{
    const videoUrl = "https://www.youtube.com/embed/u-9U-BhYUiI"

    return(
        <div className="relative overflow-hidden rounded-md">
        <iframe
        className="w-full h-auto lg:w-[632px] lg:h-[358px] justify-center"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

        </div>
    );
};

export default Video;