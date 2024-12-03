// import axios from "axios";

// const BASE_URL = "https://youtube138.p.rapidapi.com";

// const options = {
//     params: { hl: "en", gl: "US" },
//     headers: {
//         "X-RapidAPI-Key":
//             process.env.REACT_APP_YOUTUBE_KEY || "YOUR_API_KEY",
//         "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//     },
// };

// export const fetchDataFromApi = async (url) => {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
// };

import axios from "axios";

const BASE_URL = "https://yt-api.p.rapidapi.com"; // New API base URL

// Updated options with new headers
const options = {
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_YOUTUBE_KEY || "YOUR_NEW_API_KEY", // Replace with your actual key
    "x-rapidapi-host": "yt-api.p.rapidapi.com",
  },
};

// Function to fetch data from the new API
export const fetchDataFromApi = async (endpoint) => {
  try {
    // Log the endpoint to verify correct URL formation
    console.log("Requesting endpoint:", `${BASE_URL}/${endpoint}`);

    const { data } = await axios.get(`${BASE_URL}/${endpoint}`, options);

    // Log the received data to check the API response
    // console.log("API Response:", data);

    return data;
  } catch (error) {
    // Log any error that occurs during the request
    console.error("Error fetching data from API:", error.message);

    // Optionally, you can throw the error to handle it in the calling function
    throw error;
  }
};
