import React from "react";
import "./style.css";
import { Container } from "@chakra-ui/react";
import MyAccount from "../../Components/myAccount";
import CreactePost from "../../Components/creactePost";
import Allpages from "../../Components/allPages";

export const Home = () => {
  return (
    <div className="home-box">
      <Container maxW="6xl">
        <div className="home-wrapper">
          <div className="my-account">
            <MyAccount />
          </div>
          <div className="create-account">
            <CreactePost />
          </div>
          <div className="all-page">
            <Allpages />
          </div>
        </div>
      </Container>
    </div>
  );
};
