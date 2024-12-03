import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom"; 
import ReactPlayer from "react-player/youtube";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = () => {
  const [relatedVideos, setRelatedVideos] = useState();
  const [showModal, setShowModal] = useState(false)
  const { id } = useParams();
  const { setLoading } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("root").classList.add("custom-h");
    fetchRelatedVideos();
  }, [id]);


  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDataFromApi(`related?id=${id}`).then((res) => {
      setRelatedVideos(res.data);

      setLoading(false);
    });
  };

  const closeModal = () => {
    setShowModal(false)
    }

  const handleDownload = () => {
    // navigate(`/download/${id}`);
    setShowModal(true);
  };
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => setLiked(!liked);
  const { state } = useLocation();
  const videoss = state?.video;

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-300px)] xl:w-[calc(100%-350px)] px-4 py-3 lg:py-6 overflow-y-auto">
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              playing={true}
            />
          </div>
          <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {videoss?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-11 w-11 rounded-full"
                    src={videoss.channelThumbnail[0]?.url}
                    alt={videoss.channelTitle}
                  />
                </div>
              </div>
              <div className="flex ml-3 items-center gap-0">
                <div className="text-white text-md font-semibold">
                  {videoss.channelTitle}
                </div>
              </div>
            </div>
            <div className="flex text-white mt-4 md:mt-0">
              <div
                className={`flex items-center  justify-center h-9 md:h-11 px-[1rem] rounded-3xl cursor-pointer
                ${liked ? "bg-blue-600" : "bg-white/[0.15]"}`}
                onClick={handleLikeClick}
              >
                <AiOutlineLike className="text-md md:text-xl text-white mr-2" />
                <span className="text-sm md:text-base lg:text-lg">
                  {`${abbreviateNumber(videoss.viewCount, 2)}`}
                </span>
              </div>
              <div className="flex items-center  justify-center h-9 md:h-11 px-[1rem] rounded-3xl bg-white/[0.15] ml-4">
                <span className="text-sm md:text-base lg:text-lg">
                  {`${abbreviateNumber(videoss.viewCount, 2)} Views`}
                </span>
              </div>
              <div className="flex items-center  justify-center h-9 md:h-11 px-[1rem] rounded-3xl bg-white/[0.15] ml-4">
                <span className="text-sm md:text-base lg:text-lg">
                  <button onClick={handleDownload}>Download</button>
                  {/* Modal for Premium Notification */}
                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                      <div className="bg-slate-900 p-6 rounded-lg shadow-lg w-80 text-center">
                        <h2 className="text-lg font-semibold mb-4">
                          Premium Feature
                        </h2>
                        <p>This feature is available for premium users only.</p>
                        <button
                          onClick={closeModal}
                          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Div with Increased Width */}
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[400px] xl:w-[450px]">
          {relatedVideos?.map((item, index) => {
            if (item?.type !== "video") return null;
            return (
              <SuggestionVideoCard
                key={item?.videoId}
                video={item}
                title={item?.title}
                videoId={item?.videoId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
