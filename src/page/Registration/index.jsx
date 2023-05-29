import React from "react";
import "./style.css";
// react icon
import { BsLinkedin } from "react-icons/bs";
import { Button, Input } from "@chakra-ui/react";
import { useFormik } from "formik";

const Registration = () => {
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: () => {
      console.log("hello");
    },
  });
  console.log(formik.values);
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
            <form onSubmit={formik.handleSubmit}>
              <Input
                onChange={formik.handleChange}
                type="text"
                name="fullname"
                value={formik.values.fullname}
                placeholder="Full Name"
                size="lg"
              />
              <Input
                onChange={formik.handleChange}
                mt="5"
                type="email"
                name="email"
                value={formik.values.email}
                placeholder="Email Address"
                size="lg"
              />
              <Input
                onChange={formik.handleChange}
                mt="5"
                type="password"
                name="password"
                values={formik.values.password}
                placeholder="Password"
                size="lg"
              />
              <Input
                onChange={formik.handleChange}
                mt="5"
                type="passord"
                name="confirmpassword"
                value={formik.values.confirmpassword}
                placeholder="Confirm Password"
                size="lg"
              />
              <Button
                type="submit"
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
