import React from "react";
import "./style.css";

import Cover from "../../assets/images/cover.jpg";
import Profile from "../../assets/images/profile.jpg";

const MyAccount = () => {
  return (
    <>
      <div className="my-accout-wrapper">
        <div className="cover-img">
          <img src={Cover} alt="cover" />
        </div>
        <div className="navigate-profile">
          <div className="profile-img">
            <img src={Profile} alt="profile" />
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
