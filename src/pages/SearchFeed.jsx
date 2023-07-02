import { useState, useEffect } from "react";
import { fetchFromApi } from "./../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Videos from "./../components/Videos";

const SearchFeed = () => {
  const [videos, setVideoes] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideoes(data.items)
    );
  }, [searchTerm]);

  return (
    <>
      <Box p={2} sx={{ overflowY: "auto" }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Search videos for:{" "}
          <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
        </Typography>

        <Videos videos={videos} />
      </Box>
    </>
  );
};

export default SearchFeed;
