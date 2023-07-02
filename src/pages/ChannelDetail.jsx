import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "./../utils/fetchFromApi";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./../components/Videos";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <>
      <Box width="100%" height="95vh">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(36,23,0,1) 0%, rgba(9,39,121,0.963202468487395) 91%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#000",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardMedia
              image={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              alt={channelDetail?.snippet?.title}
              sx={{
                borderRadius: "50%",
                height: "130px",
                width: "130px",
                mb: 2,
                mt: "-90px",
              }}
            />
            <CheckCircleIcon
              sx={{
                fontSize: "14px",
                color: "lightBlue",
              }}
            />
            <Typography
              sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
              variant="h6"
            >
              {channelDetail?.snippet?.title}
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography
                sx={{ fontSize: "12px", fontWeight: 500, color: "gray" }}
              >
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString("en-US")}
                Subscribers
              </Typography>
            )}
          </div>
        </CardContent>
        <Box sx={{ paddingLeft: "90px", paddingRight: "90px" }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </>
  );
};

export default ChannelDetail;
