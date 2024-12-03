
import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginationToken, setPaginationToken] = useState(null);
  const { searchQuery } = useParams();
  const { setLoading: setGlobalLoading } = useContext(Context);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type") || "video";
  const sort = queryParams.get("sort") || "relevance";
  const duration = queryParams.get("duration") || "";
  const uploadDate = queryParams.get("upload_date") || "";
  const features = queryParams.get("features") || "";
  const pagination = queryParams.get("token") || "";

  useEffect(() => {
    // Reset the root class when the searchQuery changes
    document.getElementById("root").classList.remove("custom-h");
    fetchSearchResults();

    return () => {
      setLoading(false);
      setError(null);
    };
  }, [searchQuery, location.search]);

  const buildApiUrl = () => {
    let url = `search?query=${searchQuery}`;
    if (type) url += `&type=${type}`;
    if (sort) url += `&sort=${sort}`;
    if (duration) url += `&duration=${duration}`;
    if (uploadDate) url += `&upload_date=${uploadDate}`;
    if (features) url += `&features=${features}`;
    if (pagination) url += `&token=${pagination}`;
    return url;
  };

  const fetchSearchResults = () => {
    setGlobalLoading(true);
    const apiUrl = buildApiUrl();
    console.log(apiUrl)

    fetchDataFromApi(apiUrl)
      .then((res) => {
        setResult(res?.data || []);
        console.log(result)
        setPaginationToken(res?.nextPageToken || null);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching search results: ", err);
        setError("Failed to fetch search results.");
        setLoading(false);
      })
      .finally(() => {
        setGlobalLoading(false);
      });
  };

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        {loading && (
          <div className="flex justify-center items-center h-full text-white">
            <span>Loading...</span>
          </div>
        )}

        {error && (
          <div className="flex justify-center items-center h-full text-red-500">
            <span>{error}</span>
          </div>
        )}
=
        {!loading && !error && result.length === 0 && (
          <div className="flex justify-center items-center h-full text-white">
            <span>No results found for "{searchQuery}"</span>
          </div>
        )}

        <div className="grid grid-cols-1 gap-2 p-5">
          {result?.map((item) => {
            if (item?.type !== type) return null;
            return <SearchResultVideoCard key={item.videoId} video={item} />;
          })}
        </div>

        {paginationToken && !loading && (
          <div className="flex justify-center items-center mt-4">
            <button
              className="text-white bg-blue-500 p-2 rounded"
              onClick={() => {
                queryParams.set("token", paginationToken);
                window.history.pushState(
                  {},
                  "",
                  `${window.location.pathname}?${queryParams.toString()}`
                );
                fetchSearchResults();
              }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
