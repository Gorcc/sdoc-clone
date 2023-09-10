import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Outlet, Link } from "react-router-dom";
const header = () => {
  return (
    <div className="header">
        <div className="header-left">
            
        <Link
              to="/"
              
            >
              SDOC MEDIA
            </Link></div>
        <div className="header-right">
          <ul>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href=""
              >
                {" "}
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default header