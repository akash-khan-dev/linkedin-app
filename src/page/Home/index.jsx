import React from "react";
import "./style.css";
import { Container } from "@chakra-ui/react";

export const Home = () => {
  return (
    <div className="home-box">
      <Container maxW="6xl">
        <h1 style={{ color: "red" }}>This is home page</h1>
      </Container>
    </div>
  );
};
