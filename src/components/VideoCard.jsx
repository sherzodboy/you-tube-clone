import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "./../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: "285px", sx: "100%" },
        borderRadius: "7px",
        height: "240px",
        position: "relative",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 285, height: 120 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#fff" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            style={{ fontSize: "12px" }}
            variant="subtitle5"
            fontWeight="bold"
            color="#000"
          >
            {snippet?.title.slice(0.6) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            style={{ fontSize: "10px" }}
            variant="subtitle5"
            fontWeight="bold"
            color="gray"
          >
            <br />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle
                sx={{ scale: "0.5", color: "lightBlue", ml: "2px" }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "8px",
                position: "absolute",
                bottom: "0.5rem",
                left: "1rem",
              }}
            >
              {snippet?.publishedAt.slice(0, 10)}
            </Typography>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
