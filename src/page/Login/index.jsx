import React, { useState } from "react";
import "./style.css";
import loginImg from "../../assets/images/login.png";
import { Button, Grid, InputGroup, InputRightElement } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { BeatLoader } from "react-spinners";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SignIn } from "../../Validation/Validation";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../Feature/UserSlice/UserSlice";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const [show, setShow] = React.useState(false);
  let [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignIn,
    onSubmit: () => {
      setLoading(true);
      signInWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then(({ user }) => {
          if (user.emailVerified === true) {
            dispatch(LoginUser(user));
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
          } else {
            toast.error(` Email Not Verified !`, {
              position: "bottom-center",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
            });
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error.message);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  });
  return (
    <Container maxW="5xl">
      <ToastContainer />
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
                    onChange={formik.handleChange}
                    mt="5"
                    type="email"
                    name="email"
                    value={formik.values.email}
                    placeholder="Email Address"
                    size="lg"
                  />
                  <span className="login-error">
                    {formik.touched.email &&
                      formik.errors.email &&
                      formik.errors.email}
                  </span>

                  <InputGroup size="md">
                    <Input
                      name="password"
                      onChange={formik.handleChange}
                      mt="5"
                      pr="5.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      size="lg"
                      value={formik.values.password}
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
                      className="login-btn"
                      mt="6"
                      width="full"
                      colorScheme="blue"
                    >
                      Sign up
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="login-btn"
                      mt="6"
                      width="full"
                      colorScheme="blue"
                    >
                      <BeatLoader />
                    </Button>
                  )}
                </form>
                <div className="navigate-singup">
                  <h1>
                    Already have an account ?{" "}
                    <Link to="/registration">Sign Up</Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </Container>
  );
};
