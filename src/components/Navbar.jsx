import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "./../utils/constants";
import SearchBar from "./SearchBar";
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import { demoProfilePicture } from "./../utils/constants";

const Navbar = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          top: 0,
          justifyContent: "space-between",
          background: "#fff",
          zIndex: "1000",
          marginBottom: "1rem",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={33} />
        </Link>
        <SearchBar />
        <Stack direction="row" alignItems="center">
          <EmergencyRecordingIcon style={{ color: "#000" }} />
          <NotificationAddIcon style={{ color: "red", marginLeft: "1rem" }} />
          <img className="mgImg" src={demoProfilePicture} alt="img" />
        </Stack>
      </Stack>
    </>
  );
};

export default Navbar;
