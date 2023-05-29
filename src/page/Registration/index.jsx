import React from "react";
import "./style.css";
// react icon
import { BsLinkedin } from "react-icons/bs";
import { Button, Input } from "@chakra-ui/react";

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
              <Input
                type="text"
                name="fullname"
                placeholder="Full Name"
                size="lg"
              />
              <Input
                mt="5"
                type="text"
                name="email"
                placeholder="Email Address"
                size="lg"
              />
              <Input
                mt="5"
                type="password"
                name="password"
                placeholder="Password"
                size="lg"
              />
              <Input
                mt="5"
                type="passord"
                name="confirmpassword"
                placeholder="Confirm Password"
                size="lg"
              />
              <Button
                className="reg-btn"
                mt="6"
                width="full"
                colorScheme="blue"
              >
                Sign up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
