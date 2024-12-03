
import React from "react";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";

const VideoCard = ({ video }) => {
  const {
    videoId,
    thumbnail,
    title,
    channelTitle,
    viewCount,
    publishedTimeText,
    channelThumbnail,
    lengthText,
  } = video || {};

  const defaultThumbnail = "path/to/default-thumbnail.jpg";
  const thumbnailUrl = (thumbnail && thumbnail[0]?.url) || defaultThumbnail;
  const channelThumbnailUrl =
    (channelThumbnail && channelThumbnail[0]?.url) || defaultThumbnail;

  return (
    <Link to={`/video/${videoId}`} state={{ video }}>
      {" "}
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={thumbnailUrl}
            alt={title}
          />
          <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
            {lengthText}
          </span>
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="flex h-9 w-9 rounded-full overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={channelThumbnailUrl}
                alt={channelTitle}
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">{title}</span>
            <span className="text-[12px] font-semibold mt-2 text-white/[0.7]">
              {channelTitle}
            </span>
            <div className="flex text-[12px] font-semibold text-white/[0.7]">
              <span>{`${abbreviateNumber(viewCount, 2)} views`}</span>
              <span className="mx-1">•</span>
              <span>{publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
