import React from "react";
import "./style.css";
import { Container, useDisclosure } from "@chakra-ui/react";
import cover from "../../assets/images/cover.jpg";
import { GrEdit } from "react-icons/gr";
import { useSelector } from "react-redux";
import Popup from "./Modal";
import Avatar from "../../assets/images/man.jpg";

const MyProfile = () => {
  const users = useSelector((user) => user.logins.login);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="my-profile">
        <Container maxW="6xl">
          <div className="profile-wrapper">
            <div className="cover-photo">
              <img src={cover} alt="cover" />
              <div onClick={onOpen} className="profile-photo">
                <img
                  src={users.photoURL || Avatar}
                  onError={(e) => {
                    e.target.src = { Avatar };
                  }}
                  alt="man"
                />
              </div>
              <div className="cover-change-icon">
                <GrEdit />
              </div>
            </div>
            <div className="profile-name">
              <h3>{users.displayName}</h3>
              <p>
                MERN Stack Developer | Full Stack Developer | Front-end
                developer | React js | Next js | Firebase | React native | Node
                js | MongoDB
              </p>
              <div className="connection">
                <h2>12 connections</h2>
              </div>
            </div>
          </div>
          <Popup isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Container>
      </div>
    </>
  );
};

export default MyProfile;
