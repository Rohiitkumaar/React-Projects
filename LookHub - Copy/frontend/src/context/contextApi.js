
import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = async (query) => {
    setLoading(true); 
      try {
        // console.log("Fetching data for category:", query); 
        const endpoint = `search?query=${query}`; 
        const { data } = await fetchDataFromApi(endpoint); 

        // console.log("API Response Data:", data);
        if (data && data.length > 0) {
          setSearchResults(data);
        } else {
          console.log("No results found in the API response");
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error fetching category data:", error.message); 
      } finally {
        setLoading(false); 
      }



  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
              searchResults,
        setSearchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
