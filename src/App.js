import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ChannelDetail, SearchFeed, VideoDetail } from "./pages";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Navbar />
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" exact element={<VideoDetail />} />
            <Route path="/channel/:id" exact element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Box>
    </BrowserRouter>
  );
};

export default App;
