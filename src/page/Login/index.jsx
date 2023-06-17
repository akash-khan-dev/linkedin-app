import React, { useState } from "react";
import "./style.css";
import loginImg from "../../assets/images/login.png";
import { Button, Grid, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { BeatLoader } from "react-spinners";
import { useFormik } from "formik";
import { SignUp } from "../../Validation/Validation";

export const Login = () => {
  const [show, setShow] = React.useState(false);
  let [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignUp,
    onSubmit: () => {
      setLoading(true);
      console.log("hello");
    },
  });
  return (
    <Container maxW="5xl">
      <div className="login-box">
        <div className="login-item"></div>
        <Grid templateColumns="repeat(2, 1fr)" gap={8}>
          <div className="login-img">
            <picture>
              <img src={loginImg} alt="" />
            </picture>
          </div>
          <div className="login-from">
            <div className="registration-box">
              <div className="linkin-icon">
                <BsLinkedin />
              </div>
              <div className="registration-heading">
                <h1>Login</h1>
                <h4>Free register and you can enjoy it</h4>
              </div>
              <div className="registration-form">
                <form onSubmit={formik.handleSubmit}>
                  <Input
                    mt="5"
                    type="email"
                    name="email"
                    value=""
                    placeholder="Email Address"
                    size="lg"
                  />
                  <span className="login-error">
                    {formik.touched.email &&
                      formik.errors.email &&
                      formik.errors.email}
                  </span>

                  {/* <div style={{ position: "relative" }}> */}
                  <InputGroup size="md">
                    <Input
                      mt="5"
                      pr="5.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      size="lg"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        pt="6"
                        pb="6"
                        size="lg"
                        mt="12"
                        h="1.75rem"
                        onClick={() => setShow(!show)}
                      >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>

                  <span className="login-error">
                    {formik.touched.password &&
                      formik.errors.password &&
                      formik.errors.password}
                  </span>

                  {!loading ? (
                    <Button
                      type="submit"
                      className="reg-btn"
                      mt="6"
                      width="full"
                      colorScheme="blue"
                    >
                      Sign up
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="reg-btn"
                      mt="6"
                      width="full"
                      colorScheme="blue"
                    >
                      <BeatLoader />
                    </Button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </Container>
  );
};
