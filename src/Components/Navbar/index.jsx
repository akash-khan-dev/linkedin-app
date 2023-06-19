import React from "react";
import Logo from "../../assets/images/Logo.png";
import "./style.css";
import { Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
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
          <div className="nav-menu"></div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
