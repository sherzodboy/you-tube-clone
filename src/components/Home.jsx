import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";
import LeftBar from "./LeftBar";
import SideBar from "./SideBar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <>
      <LeftBar />
      <Stack
        className="home-scroll"
        sx={{ width: "100%", height: "85vh", overflow: "scroll" }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Box pt={1} mb={2}>
          <Typography variant="h7" fontWeight="bold">
            {selectedCategory} <span style={{ color: "#fd0808" }}>videos</span>
          </Typography>
        </Box>
        <Videos videos={videos} />
      </Stack>
    </>
  );
};

export default Home;
