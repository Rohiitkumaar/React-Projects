import React, { useState, useEffect, useRef } from "react";
import { RiVideoAddLine } from "react-icons/ri";

const VideoFeaturePopup = ({ username }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null); 
  const videoIconRef = useRef(null); 
  const togglePopup = () => {
    setShowPopup((prevState) => !prevState); 
  };

  const handleClickOutside = (e) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(e.target) &&
      videoIconRef.current &&
      !videoIconRef.current.contains(e.target)
    ) {
      setShowPopup(false); 
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <RiVideoAddLine
        ref={videoIconRef} 
        className="text-white text-lg cursor-pointer"
        onClick={togglePopup}
      />

      {showPopup && (
        <div
          ref={popupRef} 
          className="absolute top-10 right-0 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64"
        >
          {username === "Login" ? (
            <div>
              <div className="font-bold text-lg mb-2">Access Restricted</div>
              <p className="text-sm">Please log in to use this feature.</p>
            </div>
          ) : (
            <div>
              <div className="font-bold text-lg mb-2">Feature Unavailable</div>
              <p className="text-sm">
                This feature is currently not supported for your account.
              </p>
            </div>
          )}
          <button
            onClick={togglePopup}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoFeaturePopup;
