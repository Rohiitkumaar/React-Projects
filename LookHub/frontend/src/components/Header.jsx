
// import React, { useContext, useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { getAuth, signOut } from "firebase/auth";
// import { getFirestore, doc, getDoc } from "firebase/firestore";


// import { SlMenu } from "react-icons/sl";
// import { IoIosSearch } from "react-icons/io";
// import { CgClose } from "react-icons/cg";

// import { Context } from "../context/contextApi";
// import Loader from "../shared/loader";
// import ProfileSection from "./ProfileSection";
// import NotificationPopup from "./NotificationPopup";
// import VideoFeaturePopup from "./VideoFeaturePopup";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [username, setUsername] = useState("Login");
//   const [email, setEmail] = useState("user@gmail.com")

//   const { loading, mobileMenu, setMobileMenu } = useContext(Context);
//   const navigate = useNavigate();

//   const db = getFirestore();
//   const auth = getAuth();

//   useEffect(() => {
//     const fetchUsername = async () => {
//       const user = auth.currentUser;
//       if (user) {
//         setUsername(user.displayName || "User");
//         setEmail(user.email || "");

//         const userDoc = doc(db, "users", user.uid);
//         const userSnapshot = await getDoc(userDoc);
//         if (userSnapshot.exists()) {
//           setUsername(userSnapshot.data().username || "User");
//           setEmail(userSnapshot.data().email || user.email);
//         }
//       } else {
//         setUsername("Login");
//         setEmail("user@gmail.com");
//       }
//     };

//     fetchUsername();
//   }, [auth, db]);

//   const searchQueryHandler = (event) => {
//     if (
//       (event?.key === "Enter" || event === "searchButton") &&
//       searchQuery?.length > 0
//     ) {
//       navigate(`/searchResult/${searchQuery}`);
//     }
//   };

//   const mobileMenuToggle = () => {
//     setMobileMenu(!mobileMenu);
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setUsername("Login");
//       setEmail("user@gmail.com");
//     } catch (error) {
//       console.error("Logout error:", error.message);
//     }
//   };

//   const { pathname } = useLocation();
//   const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

//   return (
//     <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-[3rem] px-4 md:px-5 bg-white dark:bg-black">
//       {loading && <Loader />}

//       {pageName !== "video" && (
//         <div
//           className="flex md:hidden cursor-pointer items-center justify-center h-8 w-8 rounded-full hover:bg-gray-800"
//           onClick={mobileMenuToggle}
//         >
//           {mobileMenu ? (
//             <CgClose className="text-white text-lg" />
//           ) : (
//             <SlMenu className="text-white text-lg" />
//           )}
//         </div>
//       )}

//       {/* Logo Section */}
//       <div className="flex items-center">
//         <Link to="/" className="flex items-center">
//           <h1 className="text-lg md:text-xl text-white font-semibold">
//             L O O K | H U B
//           </h1>
//         </Link>
//       </div>

//       {/* Search Section */}
//       <div className="flex items-center">
//         <div className="flex items-center border border-gray-800 rounded-l-full">
//           <input
//             type="text"
//             className="h-8 md:h-10 bg-transparent text-sm md:text-base outline-none text-white px-3 w-28 md:w-64 lg:w-80"
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyUp={searchQueryHandler}
//             placeholder="Search"
//             value={searchQuery}
//           />
//         </div>
//         <button
//           className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-l-0 border-gray-800 rounded-r-full bg-gray-700"
//           onClick={() => searchQueryHandler("searchButton")}
//         >
//           <IoIosSearch className="text-white text-lg" />
//         </button>
//       </div>

//       <div className="flex items-center space-x-2">
//         <div className="hidden md:flex space-x-2">
//           <div className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-800">
//             <VideoFeaturePopup username={username} />
//             {/* <RiVideoAddLine className="text-white text-lg cursor-pointer" /> */}
//           </div>
//           <div className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-800">
//             <NotificationPopup username={username} />
//           </div>
//         </div>

//         {/* Profile Section */}
//         <ProfileSection
//           username={username}
//           email={email}
//           navigate={navigate}
//           handleLogout={handleLogout}
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;

// import React, { useContext, useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { getAuth, signOut } from "firebase/auth";
// import { getFirestore, doc, getDoc } from "firebase/firestore";

// import { SlMenu } from "react-icons/sl";
// import { IoIosSearch } from "react-icons/io";
// import { CgClose } from "react-icons/cg";

// import { Context } from "../context/contextApi";
// import Loader from "../shared/loader";
// import ProfileSection from "./ProfileSection";
// import NotificationPopup from "./NotificationPopup";
// import VideoFeaturePopup from "./VideoFeaturePopup";

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [username, setUsername] = useState("Login");
//   const [email, setEmail] = useState("user@gmail.com");

//   const { loading, mobileMenu, setMobileMenu } = useContext(Context);
//   const navigate = useNavigate();

//   const db = getFirestore();
//   const auth = getAuth();

//   useEffect(() => {
//     const fetchUsername = async () => {
//       const user = auth.currentUser;
//       if (user) {
//         setUsername(user.displayName || "User");
//         setEmail(user.email || "");

//         const userDoc = doc(db, "users", user.uid);
//         const userSnapshot = await getDoc(userDoc);
//         if (userSnapshot.exists()) {
//           setUsername(userSnapshot.data().username || "User");
//           setEmail(userSnapshot.data().email || user.email);
//         }
//       } else {
//         setUsername("Login");
//         setEmail("user@gmail.com");
//       }
//     };

//     fetchUsername();
//   }, [auth, db]);

//   useEffect(() => {
//     console.log("Updated username:", username);
//     console.log("Updated email:", email);
//   }, [username, email]); // Logs username and email whenever they change

//   const searchQueryHandler = (event) => {
//     if (
//       (event?.key === "Enter" || event === "searchButton") &&
//       searchQuery?.length > 0
//     ) {
//       navigate(`/searchResult/${searchQuery}`);
//     }
//   };

//   const mobileMenuToggle = () => {
//     setMobileMenu(!mobileMenu);
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setUsername("Login");
//       setEmail("user@gmail.com");
//     } catch (error) {
//       console.error("Logout error:", error.message);
//     }
//   };

//   const { pathname } = useLocation();
//   const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

//   return (
//     <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-[3rem] px-4 md:px-5 bg-white dark:bg-black">
//       {loading && <Loader />}

//       {pageName !== "video" && (
//         <div
//           className="flex md:hidden cursor-pointer items-center justify-center h-8 w-8 rounded-full hover:bg-gray-800"
//           onClick={mobileMenuToggle}
//         >
//           {mobileMenu ? (
//             <CgClose className="text-white text-lg" />
//           ) : (
//             <SlMenu className="text-white text-lg" />
//           )}
//         </div>
//       )}

//       {/* Logo Section */}
//       <div className="flex items-center">
//         <Link to="/" className="flex items-center">
//           <h1 className="text-lg md:text-xl text-white font-semibold">
//             L O O K | H U B
//           </h1>
//         </Link>
//       </div>

//       {/* Search Section */}
//       <div className="flex items-center">
//         <div className="flex items-center border border-gray-800 rounded-l-full">
//           <input
//             type="text"
//             className="h-8 md:h-10 bg-transparent text-sm md:text-base outline-none text-white px-3 w-28 md:w-64 lg:w-80"
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyUp={searchQueryHandler}
//             placeholder="Search"
//             value={searchQuery}
//           />
//         </div>
//         <button
//           className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-l-0 border-gray-800 rounded-r-full bg-gray-700"
//           onClick={() => searchQueryHandler("searchButton")}
//         >
//           <IoIosSearch className="text-white text-lg" />
//         </button>
//       </div>

//       <div className="flex items-center space-x-2">
//         <div className="hidden md:flex space-x-2">
//           <div className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-800">
//             <VideoFeaturePopup username={username} />
//           </div>
//           <div className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-800">
//             <NotificationPopup username={username} />
//           </div>
//         </div>

//         {/* Profile Section */}
//         <ProfileSection
//           username={username}
//           email={email}
//           navigate={navigate}
//           handleLogout={handleLogout}
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";
import ProfileSection from "./ProfileSection";
import NotificationPopup from "./NotificationPopup";
import VideoFeaturePopup from "./VideoFeaturePopup";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [username, setUsername] = useState("Login");
  const [email, setEmail] = useState("user@gmail.com");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();

  const db = getFirestore();
  const auth = getAuth();

  useEffect(() => {
    const fetchUsername = async () => {
      const user = auth.currentUser;

      if (user) {
        setUsername(user.displayName || "User");
        setEmail(user.email || "");

        // Fetch user details from Firestore
        const userDoc = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
          setUsername(userSnapshot.data().username || "User");
          setEmail(userSnapshot.data().email || user.email);
        }
      } else {
        setUsername("Login");
        setEmail("user@gmail.com");
      }
    };

    fetchUsername();
  }, [auth.currentUser, db]);

  // useEffect(() => {
  //   console.log("Updated username:", username);
  //   console.log("Updated email:", email);
  // }, [username, email]);

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUsername("Login");
      setEmail("user@gmail.com");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-[3rem] px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}

      {pageName !== "video" && (
        <div
          className="flex md:hidden cursor-pointer items-center justify-center h-8 w-8 rounded-full hover:bg-gray-800"
          onClick={mobileMenuToggle}
        >
          {mobileMenu ? (
            <CgClose className="text-white text-lg" />
          ) : (
            <SlMenu className="text-white text-lg" />
          )}
        </div>
      )}

      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-lg md:text-xl text-white font-semibold">
            L O O K | H U B
          </h1>
        </Link>
      </div>

      {/* Search Section */}
      <div className="flex items-center">
        <div className="flex items-center border border-gray-800 rounded-l-full">
          <input
            type="text"
            className="h-8 md:h-10 bg-transparent text-sm md:text-base outline-none text-white px-3 w-28 md:w-64 lg:w-80"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            placeholder="Search"
            value={searchQuery}
          />
        </div>
        <button
          className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-l-0 border-gray-800 rounded-r-full bg-gray-700"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <IoIosSearch className="text-white text-lg" />
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="hidden md:flex space-x-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-800">
            <VideoFeaturePopup username={username} />
          </div>
          <div className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-800">
            <NotificationPopup username={username} />
          </div>
        </div>

        {/* Profile Section */}
        <ProfileSection
          username={username}
          email={email}
          navigate={navigate}
          handleLogout={handleLogout}
        />
      </div>
    </div>
  );
};

export default Header;
