import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      sx={{ width: "100%" }}
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos?.map((item, idx) => (
        <Box key={idx}>{item?.id.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
