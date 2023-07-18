import React from "react";
import "./style.css";
import pageProfile from "../../assets/images/profile.jpg";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Allpages = () => {
  return (
    <>
      <div className="pages-container">
        <div className="pages-heading">
          <h2>Add to your feed</h2>
        </div>
        <div className="single-page">
          <div className="page-content">
            <Flex>
              <Avatar src={pageProfile} />
              <Box ml="3">
                <Text fontWeight="bold">Segun Adebayo</Text>
                <Text fontSize="sm">UI Engineer</Text>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  colorScheme="teal"
                  variant="outline"
                >
                  Call us
                </Button>
              </Box>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Allpages;
