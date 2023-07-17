import React from "react";
import Logo from "../../assets/images/Logo.png";
import "./style.css";
import { Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { AiFillNotification } from "react-icons/ai";
import { FaSms } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/Ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-main">
      <Container maxW="6xl">
        <div className="nav-box">
          <div className="nav-logo">
            <picture>
              <img src={Logo} alt="logo" />
            </picture>
          </div>
          <div className="nav-search">
            <Input placeholder="Search" size="md" width="100%" />
            <div className="search-icon">
              <BiSearchAlt2 />
            </div>
          </div>
          <div className="nav-menu">
            <ul>
              <li onClick={() => navigate("/")}>
                <div className="nav-icon">
                  <AiTwotoneHome />
                </div>
                <div className="nav-list">Home</div>
              </li>
              <li onClick={() => navigate("/about")}>
                <div className="nav-icon">
                  <FaNetworkWired />
                </div>
                <div className="nav-list">My Network</div>
              </li>

              <li>
                <div className="nav-icon">
                  <BsBag />
                </div>
                <div className="nav-list">Jobs</div>
              </li>
              <li>
                <div className="nav-icon">
                  <FaSms />
                </div>
                <div className="nav-list"> Messaging</div>
              </li>
              <li>
                <div className="nav-icon">
                  <AiFillNotification />
                </div>
                <div className="nav-list">Notification</div>
              </li>
              <li>
                <div className="usericon"></div>
                <div className="nav-list">Me</div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
