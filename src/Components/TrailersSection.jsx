import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        EventHighlights
      </p>

      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />

        <video
          src={currentTrailer.videoUrl}
          controls
          className="mx-auto max-w-full"
          width="960"
          height="540"
        />
      </div>
    </div>
  );
};

export default TrailersSection;
