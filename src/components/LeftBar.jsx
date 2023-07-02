import { Box, Typography } from "@mui/material";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import StreamOutlinedIcon from "@mui/icons-material/StreamOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import SportsGymnasticsOutlinedIcon from "@mui/icons-material/SportsGymnasticsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ToysIcon from "@mui/icons-material/Toys";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";

const LeftBar = () => {
  const date = new Date().getFullYear();

  return (
    <Box
      className="left_bar"
      sx={{
        overflowX: "hidden",
        height: "85vh",
        p: "10px",
        width: "300px",
        marginRight: "2rem",
      }}
    >
      <div
        style={{ borderBottom: "1px solid #cac7c7", paddingBottom: "0.5rem" }}
      >
        <div className="left-bar">
          <CottageOutlinedIcon /> <span>Home</span>
        </div>
        <div className="left-bar">
          <SlowMotionVideoOutlinedIcon /> <span>Shorts</span>
        </div>
        <div className="left-bar">
          <SubscriptionsOutlinedIcon /> <span>Subscriptions</span>
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid #cac7c7",
          paddingBottom: "0.5rem",
          paddingTop: "1rem",
        }}
      >
        <div className="left-bar">
          <VideoLibraryOutlinedIcon /> <span>Library</span>
        </div>
        <div className="left-bar">
          <HistoryOutlinedIcon /> <span>History</span>
        </div>
        <div className="left-bar">
          <SmartDisplayOutlinedIcon /> <span>Your videos</span>
        </div>
        <div className="left-bar">
          <ScheduleOutlinedIcon /> <span>Watch later</span>
        </div>
        <div className="left-bar">
          <FileDownloadOutlinedIcon /> <span>Downloads</span>
        </div>
        <div className="left-bar">
          <ThumbUpOffAltOutlinedIcon /> <span>Liked videos</span>
        </div>
      </div>
      <p className="explore">Explore</p>
      <div
        style={{
          borderBottom: "1px solid #cac7c7",
          paddingBottom: "0.5rem",
          paddingTop: "0.7rem",
        }}
      >
        <div className="left-bar">
          <WhatshotOutlinedIcon /> <span>Trending</span>
        </div>
        <div className="left-bar">
          <AudiotrackOutlinedIcon /> <span>Music</span>
        </div>
        <div className="left-bar">
          <StreamOutlinedIcon /> <span>Live</span>
        </div>
        <div className="left-bar">
          <SportsEsportsOutlinedIcon /> <span>Gaming</span>
        </div>
        <div className="left-bar">
          <FeedOutlinedIcon /> <span>News</span>
        </div>
        <div className="left-bar">
          <SportsGymnasticsOutlinedIcon /> <span>Sports</span>
        </div>
        <div className="left-bar">
          <SchoolOutlinedIcon /> <span>Education</span>
        </div>
      </div>
      <p className="explore">More from YouTube</p>
      <div
        style={{
          borderBottom: "1px solid #cac7c7",
          paddingBottom: "0.5rem",
          paddingTop: "0.7rem",
        }}
      >
        <div className="left-bar">
          <VolunteerActivismIcon sx={{ color: "red" }} />
          <span>YouTube Studio</span>
        </div>
        <div className="left-bar">
          <ToysIcon sx={{ color: "red" }} /> <span>YouTube Kids</span>
        </div>
      </div>
      <div
        style={{
          borderBottom: "1px solid #cac7c7",
          paddingBottom: "0.5rem",
          paddingTop: "0.7rem",
        }}
      >
        <div className="left-bar">
          <SettingsOutlinedIcon />
          <span>Settings</span>
        </div>
        <div className="left-bar">
          <FlagOutlinedIcon /> <span>Report history</span>
        </div>
        <div className="left-bar">
          <HelpOutlineOutlinedIcon />
          <span>Help</span>
        </div>
        <div className="left-bar">
          <ErrorOutlinedIcon /> <span>Send feedback</span>
        </div>
      </div>
      <Typography
        sx={{
          fontSize: "0.7rem",
          color: "#646060",
          marginLeft: "5px",
          marginTop: "10px",
          lineHeight: "1.2rem",
        }}
      >
        About Press Copyright <br /> Contact us Creators <br /> Advertise
        Developers
      </Typography>
      <Typography
        sx={{
          fontSize: "0.7rem",
          color: "#646060",
          marginLeft: "5px",
          marginTop: "15px",
          lineHeight: "1.2rem",
        }}
      >
        Terms Privacy Policy & <br /> Safety How YouTube <br /> worksTest new
        features
      </Typography>
      <Typography
        sx={{
          fontSize: "0.5rem",
          color: "#918a8a",
          marginLeft: "5px",
          marginTop: "7px",
        }}
      >
        {`© ${date} Google LLC`}
      </Typography>
    </Box>
  );
};

export default LeftBar;
