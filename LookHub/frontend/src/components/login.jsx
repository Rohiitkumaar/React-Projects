// import React, { useRef, useState } from "react";
// import { checkValidData, validateName } from "../utils/Validate";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
// import bgImage from "../images/BG.jpg";
// import Loader from "../shared/loader";

// const Login = () => {
//   const [signIn, setSignIn] = useState(true);
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const fname = useRef(null);
//   const Email = useRef(null);
//   const Password = useRef(null);
//   const navigate = useNavigate();

//   const handleInputChange = () => {
//     setErrorMessage(null);
//   };

//   const signInTogler = () => {
//     setSignIn(!signIn);
//     setErrorMessage(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const email = Email.current.value;
//     const password = Password.current.value;
//     const name = signIn ? null : fname.current.value;

//     if (!signIn) {
//       const emailError = checkValidData(email, password);
//       if (emailError) {
//         setErrorMessage(emailError);
//         return;
//       }
//     }

//     setLoading(true);

//     try {
//       if (!signIn) {
//         const nameValidationMessage = validateName(name);
//         setErrorMessage(nameValidationMessage);
//         if (nameValidationMessage) return;

//         const userCredential = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//         const user = userCredential.user;

//         await updateProfile(user, {
//           displayName: name,
//         });

//         navigate("/"); // Redirect to home after successful sign up
//       } else {
//         await signInWithEmailAndPassword(auth, email, password);
//         navigate("/"); // Redirect to home after successful sign in
//       }
//     } catch (error) {
//       // Display friendly error messages based on Firebase error codes
//       setErrorMessage(getErrorMessage(error.code));
//     } finally {
//       setLoading(false); // Reset loading state
//     }
//   };
  

//   const getErrorMessage = (errorCode) => {
//     switch (errorCode) {
//       case "auth/invalid-email":
//         return "Please enter a valid email address.";
//       case "auth/user-not-found":
//         return "No account found with this email. Please sign up.";
//       case "auth/wrong-password":
//         return "Incorrect password. Please try again.";
//       case "auth/email-already-in-use":
//         return "The email address is already in use. Please use a different email.";
//       case "auth/invalid-credential":
//         return "The credentials you provided are invalid. Please check and try again.";
//       default:
//         return "An error occurred. Please try again.";
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center h-screen"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//       }}
//     >
//       <div className="relative w-full max-w-xs md:max-w-md bg-opacity-80 bg-gray-800 rounded-lg">
//         <form
//           className="shadow-md rounded px-8 pt-6 pb-8 "
//           onSubmit={handleSubmit}
//         >
//           <h2 className="text-center text-white text-xl font-bold mb-6">
//             {signIn ? "Sign In" : "Sign Up"}
//           </h2>

//           {!signIn && (
//             <div className="mb-4">
//               <label
//                 className="block text-slate-300 text-sm font-bold mb-2"
//                 htmlFor="name"
//               >
//                 Name
//               </label>
//               <input
//                 ref={fname}
//                 type="text"
//                 placeholder="Enter Your Name"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-outline"
//                 onChange={handleInputChange}
//               />
//             </div>
//           )}

//           <div className="mb-4">
//             <label
//               className="block text-slate-300 text-sm font-bold mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               ref={Email}
//               type="email"
//               placeholder="Enter Your Email"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-outline"
//               onChange={handleInputChange} // Reset error when typing
//             />
//           </div>

//           <div className="mb-3">
//             <label
//               className="block text-slate-300 text-sm font-bold mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               ref={Password}
//               type="password"
//               placeholder="********"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-outline"
//               onChange={handleInputChange}
//             />
//           </div>

//           {/* Display the error message */}
//           {errorMessage && (
//             <p className="text-red-500 font-bold text-sm py-2 mb-2 text-center">
//               {errorMessage}
//             </p>
//           )}

//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300 w-full"
//               type="submit"
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <span>Loading...</span>
//                   <Loader />
//                 </>
//               ) : signIn ? (
//                 "Sign In"
//               ) : (
//                 "Sign Up"
//               )}
//             </button>
//           </div>

//           <p
//             className="text-center text-sm text-blue-500 hover:text-blue-700 cursor-pointer mt-4"
//             onClick={signInTogler}
//           >
//             {signIn ? "New User? ➜ Sign-up now" : "Existing user? ➜ Sign-in"}
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useRef, useState, useEffect } from "react";
import { checkValidData, validateName } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import bgImage from "../images/BG.jpg";
import Loader from "../shared/loader";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null); // Added state for user info
  const fname = useRef(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const navigate = useNavigate();

  const handleInputChange = () => {
    setErrorMessage(null);
  };

  const signInTogler = () => {
    setSignIn(!signIn);
    setErrorMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = Email.current.value;
    const password = Password.current.value;
    const name = signIn ? null : fname.current.value;

    if (!signIn) {
      const emailError = checkValidData(email, password);
      if (emailError) {
        setErrorMessage(emailError);
        return;
      }
    }

    setLoading(true);

    try {
      if (!signIn) {
        const nameValidationMessage = validateName(name);
        setErrorMessage(nameValidationMessage);
        if (nameValidationMessage) return;

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await updateProfile(user, {
          displayName: name,
        });

        setUserInfo({
          username: user.displayName,
          email: user.email,
        });

        navigate("/");
      } else {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        setUserInfo({
          username: user.displayName,
          email: user.email,
        });

        // console.log("User logged in successfully");
        // console.log("Username:", user.displayName);
        // console.log("Email:", user.email);

        navigate("/"); 
      }
    } catch (error) {
      setErrorMessage(getErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-not-found":
        return "No account found with this email. Please sign up.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/email-already-in-use":
        return "The email address is already in use. Please use a different email.";
      case "auth/invalid-credential":
        return "The credentials you provided are invalid. Please check and try again.";
      default:
        return "An error occurred. Please try again.";
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="relative w-full max-w-xs md:max-w-md bg-opacity-80 bg-gray-800 rounded-lg">
        <form
          className="shadow-md rounded px-8 pt-6 pb-8 "
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-white text-xl font-bold mb-6">
            {signIn ? "Sign In" : "Sign Up"}
          </h2>

          {!signIn && (
            <div className="mb-4">
              <label
                className="block text-slate-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                ref={fname}
                type="text"
                placeholder="Enter Your Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-outline"
                onChange={handleInputChange}
              />
            </div>
          )}

          <div className="mb-4">
            <label
              className="block text-slate-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              ref={Email}
              type="email"
              placeholder="Enter Your Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-outline"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label
              className="block text-slate-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              ref={Password}
              type="password"
              placeholder="********"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-outline"
              onChange={handleInputChange}
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 font-bold text-sm py-2 mb-2 text-center">
              {errorMessage}
            </p>
          )}

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300 w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span>Loading...</span>
                  <Loader />
                </>
              ) : signIn ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </button>
          </div>

          <p
            className="text-center text-sm text-blue-500 hover:text-blue-700 cursor-pointer mt-4"
            onClick={signInTogler}
          >
            {signIn ? "New User? ➜ Sign-up now" : "Existing user? ➜ Sign-in"}
          </p>
        </form>

      </div>
    </div>
  );
};

export default Login;
