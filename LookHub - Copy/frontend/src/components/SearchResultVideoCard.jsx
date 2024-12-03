import React from "react";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";

const SearchResultVideoCard = ({ video }) => {
  const {
    videoId,
    channelHandle,
    channelTitle,
    thumbnail,
    channelThumbnail,
    description,
    lengthText,
    publishDate,
    viewCount,
    title,
  } = video || {};

  return (
    <Link to={`/video/${videoId}`} state={{ video }}>
      <div className="flex flex-col md:flex-row mb-4 hover:bg-white/[0.1] rounded-lg p-2">
        <div className="relative flex-shrink-0 h-32 md:h-24 lg:h-28 w-full md:w-40 lg:w-52 rounded-lg bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={thumbnail?.[0]?.url}
            alt="Video Thumbnail"
          />
          <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
            {lengthText}
          </span>
        </div>

        <div className="flex flex-col ml-3 md:ml-4 mt-2 md:mt-0 overflow-hidden">
          <span className="text-sm md:text-base font-semibold line-clamp-2 text-white">
            {title}
          </span>
          
          <span className="hidden md:block text-xs line-clamp-1 text-white/[0.7] mt-1">
            {description}
          </span>

          <div className="flex items-center mt-2">
            <div className="flex items-start mr-2">
              <div className="h-6 w-6 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={channelThumbnail?.[0]?.url}
                  alt="Author Avatar"
                />
              </div>
            </div>
            <div className="flex flex-col">
              {/* Channel Name and Verified Badge */}
              <span className="text-xs font-medium text-white/[0.7] flex items-center">
                {channelTitle}
                {channelHandle === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.5] text-[10px] ml-1" />
                )}
              </span>
              <div className="text-xs text-white/[0.6]">
                {/* Views and Published Time */}
                <span>{`${abbreviateNumber(viewCount, 2)} views`}</span>
                <span className="mx-1">·</span>
                <span>{publishDate}</span> {/* Published Date */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVideoCard;
