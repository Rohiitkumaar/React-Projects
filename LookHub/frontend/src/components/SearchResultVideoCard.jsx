import React from "react";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/videoLength";

const SearchResultVideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col md:flex-row mb-4 hover:bg-white/[0.1] rounded-lg p-2">
        <div className="relative flex-shrink-0 h-32 md:h-24 lg:h-28 w-full md:w-40 lg:w-52 rounded-lg bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails[0]?.url}
            alt="Video Thumbnail"
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex flex-col ml-3 md:ml-4 mt-2 md:mt-0 overflow-hidden">
          <span className="text-sm md:text-base font-semibold line-clamp-2 text-white">
            {video?.title}
          </span>
          <span className="hidden md:block text-xs line-clamp-1 text-white/[0.7] mt-1">
            {video?.descriptionSnippet}
          </span>
          <div className="flex items-center mt-2">
            <div className="flex items-start mr-2">
              <div className="h-6 w-6 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={video?.author?.avatar[0]?.url}
                  alt="Author Avatar"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-white/[0.7] flex items-center">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.5] text-[10px] ml-1" />
                )}
              </span>
              <div className="text-xs text-white/[0.6]">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="mx-1">·</span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVideoCard;
