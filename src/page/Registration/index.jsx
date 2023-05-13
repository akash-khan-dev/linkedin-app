import React from "react";
import "./style.css";
// react icon
import { BsLinkedin } from "react-icons/bs";
import { Input } from "@chakra-ui/react";

const Registration = () => {
  return (
    <>
      <div className="registration">
        <div className="registration-box">
          <div className="linkin-icon">
            <BsLinkedin />
          </div>
          <div className="registration-heading">
            <h1>Get started with easily register</h1>
            <h4>Free register and you can enjoy it</h4>
          </div>
          <div className="registration-form">
            <form>
              <Input placeholder="Full Name" size="lg" />
              <Input
                mt="5"
                className="inputs"
                placeholder="Email Address"
                size="lg"
              />
              <Input mt="5" placeholder="Password" size="lg" />
              <Input mt="5" placeholder="Confirm Password" size="lg" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
