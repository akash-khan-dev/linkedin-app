import React from "react";
import "./style.css";
import "./style.css";
import pageProfile from "../../assets/images/profile.jpg";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Users = () => {
  return (
    <>
      <div className="users-container">
        <div className="users-heading">
          <h2>All Users</h2>
        </div>
        <div className="single-users">
          <div className="users-content">
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
                  Connect
                </Button>
              </Box>
            </Flex>
          </div>
          <div className="users-content">
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
                  Connect
                </Button>
              </Box>
            </Flex>
          </div>
          <div className="users-content">
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
                  Connect
                </Button>
              </Box>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
