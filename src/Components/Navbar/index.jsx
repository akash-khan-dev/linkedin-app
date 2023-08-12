import React from "react";
import Logo from "../../assets/images/Logo.png";
import "./style.css";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { AiFillNotification, AiTwotoneHome } from "react-icons/ai";
import { FaSms } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/images/profile.jpg";
import { FaAngleDown } from "react-icons/fa";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../Feature/UserSlice/UserSlice";
import Avatar from "../../assets/images/man.jpg";

const Navbar = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((user) => user.logins.login);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      localStorage.removeItem("user");
      dispatch(LoginUser(null));
    });
  };
  const handleNavigateProfile = () => {
    navigate("/profile");
    onClose();
  };
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
              <li onClick={onOpen}>
                <div className="usericon">
                  <img
                    src={users.photoURL || Avatar}
                    onError={(e) => {
                      e.target.src = { Avatar };
                    }}
                    alt="man"
                  />
                </div>
                <div className="nav-list user">
                  <span> Me</span>
                  <FaAngleDown />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-modal">
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent>
              <ModalBody>
                <div className="profile-modal">
                  <div className="user-profile">
                    <div className="user-profile-img">
                      <img
                        src={users.photoURL || Avatar}
                        onError={(e) => {
                          e.target.src = { Avatar };
                        }}
                        alt="man"
                      />
                    </div>
                  </div>
                  <div className="user-profile-name">
                    <h1>Akash khan</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eaque rerum iste doloribus provident. Repellendus, ratione
                    </p>
                  </div>
                </div>
                <div className="view-profile">
                  <Button
                    onClick={handleNavigateProfile}
                    colorScheme="teal"
                    variant="outline"
                  >
                    View Profile
                  </Button>
                  <Button
                    onClick={handleSignOut}
                    colorScheme="teal"
                    variant="outline"
                  >
                    Sign Out
                  </Button>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
