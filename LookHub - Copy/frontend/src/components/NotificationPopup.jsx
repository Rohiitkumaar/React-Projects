
import React, { useState, useEffect, useRef } from "react";
import { FiBell } from "react-icons/fi";

const NotificationPopup = ({ username }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null); 
  const bellRef = useRef(null); 
  const togglePopup = () => {
    setShowPopup((prevState) => !prevState);
  };
  const handleClickOutside = (e) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(e.target) &&
      bellRef.current &&
      !bellRef.current.contains(e.target)
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
      <FiBell
        ref={bellRef}
        className="text-white text-xl cursor-pointer"
        onClick={togglePopup}
      />

      {showPopup && (
        <div
          ref={popupRef}
          className="absolute top-10 right-0 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64"
        >
          {username === "Login" ? (
            <div>
              <div className="font-bold text-lg mb-2">Welcome!</div>
              <p className="text-sm">
                Please log in to view your notifications.
              </p>
            </div>
          ) : (
            <>
              <div className="font-bold text-lg mb-2">Notifications</div>
              
              <div className="text-sm mb-3">
                <p className="mb-1">New comment on your post</p>
                <p className="text-gray-400 text-xs">2 minutes ago</p>
              </div>
              <div className="text-sm mb-3">
                <p className="mb-1">New subscription</p>
                <p className="text-gray-400 text-xs">5 minutes ago</p>
              </div>
              <div className="text-sm mb-3">
                <p className="mb-1">New Video uploaded by your friend</p>
                <p className="text-gray-400 text-xs">10 minutes ago</p>
              </div>
            </>
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

export default NotificationPopup;
