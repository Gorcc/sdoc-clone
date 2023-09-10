import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Outlet, Link } from "react-router-dom";
import Header from "./Components/header";
function App() {
  const [isHoveredVids, setIsHoveredVids] = useState(false);
  const [isHoveredPics, setIsHoveredPics] = useState(false);
  const [isHoveredConnect, setIsHoveredConnect] = useState(false);

  const handleHoverVids = () => {
    setIsHoveredVids(true);
  };
  const handleHoverPics = () => {
    setIsHoveredPics(true);
  };
  const handleHoverConnect = () => {
    setIsHoveredConnect(true);
  };
  const handleMouseLeave = () => {
    setIsHoveredVids(false);
    setIsHoveredPics(false);
    setIsHoveredConnect(false);
  };

  return (
    <div
      className={`App ${
        isHoveredVids ? "videos-background" : "videos-background"
      } ${isHoveredPics ? "pics-background" : "videos-background"} ${
        isHoveredConnect ? "connect-background" : "videos-background"
      }`}
    >

      <Header/>
      
      <div className="hero">
        <ul>
          <li>
            <Link
              to="videos"
              onMouseEnter={handleHoverVids}
              onMouseLeave={handleMouseLeave}
            >
              VIDEOS
            </Link>
          </li>
          <li>
            <Link
              to="photos"
              onMouseEnter={handleHoverPics}
              onMouseLeave={handleMouseLeave}
            >
              PHOTOS
            </Link>
          </li>
          <li>
            <Link
              to="connect"
              onMouseEnter={handleHoverConnect}
              onMouseLeave={handleMouseLeave}
            >
              CONNECT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
