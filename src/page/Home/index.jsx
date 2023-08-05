import React from "react";
import "./style.css";
import { Container } from "@chakra-ui/react";
import MyAccount from "../../Components/myAccount";
import CreactePost from "../../Components/creactePost";
import Allpages from "../../Components/allPages";
import Users from "../../Components/Users";
import AllPost from "../../Components/allPost";

export const Home = () => {
  return (
    <div className="home-box">
      <Container maxW="6xl">
        <div className="home-wrapper">
          <div className="my-account">
            <MyAccount />
            <Users />
          </div>
          <div className="create-account">
            <CreactePost />
            <AllPost />
          </div>
          <div className="all-page">
            <Allpages />
          </div>
        </div>
      </Container>
    </div>
  );
};
