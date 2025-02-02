import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import Login from "./components/login"
import Download from "./components/Download";

const App = () => {
    return (
        <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                        <Route path="/login" element={<Login />} /> 
                        <Route
                            path="/searchResult/:searchQuery"
                            element={<SearchResult />}
                        />
                        <Route path="/video/:id" element={<VideoDetails />} />
                        {/* <Route path="/video/:id" element={<VideoDetails />} /> */}
                        <Route path="/download/:id" element={<Download/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    );
};

export default App;
