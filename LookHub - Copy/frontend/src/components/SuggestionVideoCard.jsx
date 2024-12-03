import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SuggestionVideoCard = ({ video }) => {
  const {
    videoId = "defaultVideoId",
    thumbnail = [{ url: "default-thumbnail.jpg" }],
    title = "No title available",
    channelTitle,
    lengthText,
    viewCount,
    channelThumbnail,
    channelHandle,
    publishDate,
    publishedTimeText = "Unknown time",
  } = video || {};

  return (
    <Link to={`/video/${videoId}`} state={{ video }}>
      <div className="flex mb-3">
        <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={thumbnail[0]?.url || "default-thumbnail.jpg"}
            alt={title || "Video thumbnail"}
          />
          <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
            {lengthText}
          </span>
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-white">
            {title}
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
              <span className="text-xs font-medium text-white/[0.7] flex items-center">
                {channelTitle}
                {channelHandle === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.5] text-[10px] ml-1" />
                )}
              </span>
          </div>

          <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{`${abbreviateNumber(viewCount, 2)} Views`}</span>

            {publishedTimeText !== null && (
              <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1 pt-1">
                •
              </span>
            )}
            {publishedTimeText && (
              <span className="truncate">{publishedTimeText}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SuggestionVideoCard;
