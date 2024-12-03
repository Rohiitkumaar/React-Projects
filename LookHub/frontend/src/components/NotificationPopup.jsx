
// import React, { useState, useEffect, useRef } from "react";
// import { FiBell } from "react-icons/fi";

// const NotificationPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const popupRef = useRef(null); // Ref for the popup
//   const bellRef = useRef(null); // Ref for the bell icon

//   // Toggle popup visibility
//   const togglePopup = () => {
//     setShowPopup((prevState) => !prevState); // Toggle the popup state
//   };

//   // Close popup if click happens outside of the bell icon or popup
//   const handleClickOutside = (e) => {
//     // Check if click is outside the popup and the bell icon
//     if (
//       popupRef.current &&
//       !popupRef.current.contains(e.target) &&
//       bellRef.current &&
//       !bellRef.current.contains(e.target)
//     ) {
//       setShowPopup(false); // Close popup
//     }
//   };

//   useEffect(() => {
//     // Add event listener for outside click detection
//     document.addEventListener("click", handleClickOutside);

//     // Cleanup the event listener when the component is unmounted
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative">
//       {/* Bell Icon */}
//       <FiBell
//         ref={bellRef} // Attach ref to the bell icon
//         className="text-white text-xl cursor-pointer"
//         onClick={togglePopup} // Toggle the popup visibility on bell click
//       />

//       {/* Popup */}
//       {showPopup && (
//         <div
//           ref={popupRef} // Attach ref to the popup container
//           className="absolute top-10 right-0 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64"
//         >
//           <div className="font-bold text-lg mb-2">Notifications</div>
//           {/* Sample Notifications */}
//           <div className="text-sm mb-3">
//             <p className="mb-1">New comment on your post</p>
//             <p className="text-gray-400 text-xs">2 minutes ago</p>
//           </div>
//           <div className="text-sm mb-3">
//             <p className="mb-1">New subscription</p>
//             <p className="text-gray-400 text-xs">5 minutes ago</p>
//           </div>
//           <div className="text-sm mb-3">
//             <p className="mb-1">New Video uploaded by your friend</p>
//             <p className="text-gray-400 text-xs">10 minutes ago</p>
//           </div>

//           <button
//             onClick={togglePopup}
//             className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
//           >
//             &times;
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotificationPopup;

import React, { useState, useEffect, useRef } from "react";
import { FiBell } from "react-icons/fi";

const NotificationPopup = ({ username }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null); // Ref for the popup
  const bellRef = useRef(null); // Ref for the bell icon

  // Toggle popup visibility
  const togglePopup = () => {
    setShowPopup((prevState) => !prevState); // Toggle the popup state
  };

  // Close popup if click happens outside of the bell icon or popup
  const handleClickOutside = (e) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(e.target) &&
      bellRef.current &&
      !bellRef.current.contains(e.target)
    ) {
      setShowPopup(false); // Close popup
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
      {/* Bell Icon */}
      <FiBell
        ref={bellRef} // Attach ref to the bell icon
        className="text-white text-xl cursor-pointer"
        onClick={togglePopup} // Toggle the popup visibility on bell click
      />

      {/* Popup */}
      {showPopup && (
        <div
          ref={popupRef} // Attach ref to the popup container
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
              {/* Sample Notifications */}
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
