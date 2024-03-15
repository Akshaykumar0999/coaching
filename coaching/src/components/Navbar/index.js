import "./index.css";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

// import { white } from "@mui/material/colors";
// import { border } from "@mui/system";

const Navbar = () => (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to='/' className="logo">LOGO</Link>
      </div>
      <div className="navbar-center">
        <Link to="/" className="navbar-link">
          Home        
        </Link>
        <Link to="/projects" className="navbar-link">
          Projects
        </Link>
        <Link to="/videos" className="navbar-link">
          Videos
        </Link>
      </div>
      <div className="navbar-right">
        <a href="https://www.youtube.com/" className="navbarIcon">
          <YouTubeIcon
            fontSize="medium"
            style={{
              color: "white",
              border: "1px solid rgba(0, 60, 137, 1)",
              backgroundColor: "rgba(0, 60, 137, 1)",
              borderRadius: "5px",
            }}
          />
        </a>
        <a href="https://github.com/" className="navbarIcon">
          <GitHubIcon
            fontSize="medium"
            style={{
              color: "white",
              border: "1px solid rgba(0, 60, 137, 1)",
              backgroundColor: "rgba(0, 60, 137, 1)",
              borderRadius: "5px",
            }}
          />
        </a>
        <a href="https://twitter.com/umairXabdullah" className="navbarIcon">
          <XIcon
            fontSize="medium"
            style={{
              color: "white",
              border: "1px solid rgba(0, 60, 137, 1)",
              backgroundColor: "rgba(0, 60, 137, 1)",
              borderRadius: "5px",
            }}
          />
        </a>
      </div>
    </nav>
  );

export default Navbar;
