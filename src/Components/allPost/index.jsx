import React from "react";
import "./style.css";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import pageProfile from "../../assets/images/profile.jpg";

const AllPost = () => {
  return (
    <>
      <div className="main-vew">
        <div className="post-container">
          <div className="post-wrapper">
            <Flex>
              <Avatar src={pageProfile} />
              <Box ml="3">
                <Text fontWeight="bold">Segun Adebayo</Text>
                <Text fontSize="sm">UI Engineer</Text>
              </Box>
            </Flex>
            <div className="post-content">
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                nisi eos aperiam unde aut excepturi laudantium numquam maxime,
                id totam voluptas veniam! Consequuntur unde eos placeat? Nemo
                esse quae impedit ullam eos, provident minima adipisci
                laudantium veritatis
              </h2>
            </div>
            <div className="post-img">
              <img src={pageProfile} alt="post" />
            </div>
          </div>
        </div>
        <div className="post-container">
          <div className="post-wrapper">
            <Flex>
              <Avatar src={pageProfile} />
              <Box ml="3">
                <Text fontWeight="bold">Segun Adebayo</Text>
                <Text fontSize="sm">UI Engineer</Text>
              </Box>
            </Flex>
            <div className="post-content">
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                nisi eos aperiam unde aut excepturi laudantium numquam maxime,
                id totam voluptas veniam! Consequuntur unde eos placeat? Nemo
                esse quae impedit ullam eos, provident minima adipisci
                laudantium veritatis
              </h2>
            </div>
            <div className="post-img">
              <img src={pageProfile} alt="post" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPost;
