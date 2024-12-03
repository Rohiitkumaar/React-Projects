
import React, { useContext } from "react";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults,} =
    useContext(Context);

  const videoItems = searchResults.filter((item) => item.type === "video");

  document.getElementById("root").classList.remove("custom-h");

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {loading ? (
            <div className="text-white text-center py-10">Loading...</div>
          ) : (
            videoItems.map((item) => {
              const thumbnailUrl =
                  item?.thumbnail?.[0]?.url || "default-thumbnail.jpg";

              return (
                <VideoCard
                  key={item?.videoId}
                      video={item}
                      channelThumbnail = {item?.channelThumbnail}
                  channelTitle={item?.channelTitle}
                  title={item?.title}
                  videoId={item?.videoId}
                  thumbnail={thumbnailUrl}
                      viewCount={item?.viewCount}
                      lenghtText ={item?.lenghtText}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;