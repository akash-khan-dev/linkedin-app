import React from "react";
import "./style.css";

import Cover from "../../assets/images/cover.jpg";
import Profile from "../../assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "../../assets/images/man.jpg";

const MyAccount = () => {
  const navigate = useNavigate();
  const users = useSelector((user) => user.logins.login);
  const handleNavigateProfile = () => {
    navigate("/profile");
  };
  return (
    <>
      <div className="my-accout-wrapper">
        <div className="cover-img">
          <img src={Cover} alt="cover" />
        </div>
        <div className="navigate-profile">
          <div onClick={handleNavigateProfile} className="profile-img">
            <img
              src={users.photoURL || Avatar}
              onError={(e) => {
                e.target.src = { Avatar };
              }}
              alt="man"
            />
          </div>
          <div className="userName">
            <h1>akash khan</h1>
          </div>
        </div>
        <div className="userBio">
          <p>I am MERN Stack Developer</p>
        </div>
        <div className="connect">
          <div className="connect-text">
            <h4>Connections</h4>
            <h5>Grow your network</h5>
          </div>
          <div className="connect-number">
            <h3>23</h3>
          </div>
        </div>
        <div className="invitation">
          <div className="invitation-text">
            <h2>Invitation</h2>
          </div>
          <div className="invitation-number">
            <h3>3</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
