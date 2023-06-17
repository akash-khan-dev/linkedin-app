import React, { useState } from "react";
import "./style.css";
// react icon
import { BsLinkedin } from "react-icons/bs";
import { Button, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import { SignUp } from "../../Validation/Validation";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import BeatLoader from "react-spinners/BeatLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [isShowPass, setIsShowPass] = useState(true);
  let [loading, setLoading] = useState(false);
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignUp,
    onSubmit: () => {
      setLoading(true);
      createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then(() => {
          sendEmailVerification(auth.currentUser);
          setLoading(false);
          navigate("/login");
        })
        .catch(() => {
          console.log();
          toast.error(`🦄 Email is use !`, {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
          });
          setLoading(false);
        });
    },
  });
  console.log(formik.values);
  return (
    <>
      <div className="registration">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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
              <span className="registration-error">
                {formik.errors.fullname && formik.errors.fullname}
              </span>
              <Input
                onChange={formik.handleChange}
                mt="5"
                type="email"
                name="email"
                value={formik.values.email}
                placeholder="Email Address"
                size="lg"
              />
              <span className="registration-error">
                {formik.touched.email &&
                  formik.errors.email &&
                  formik.errors.email}
              </span>

              <div style={{ position: "relative" }}>
                <Input
                  onChange={formik.handleChange}
                  mt="5"
                  type={isShowPass ? "password" : "text"}
                  name="password"
                  values={formik.values.password}
                  placeholder="Password"
                  size="lg"
                />
                <div
                  className="Eye"
                  onClick={() => setIsShowPass(!isShowPass ? true : false)}
                  style={{
                    position: "absolute",
                    top: "35px",
                    right: "25px",
                    cursor: "pointer",
                  }}
                >
                  {!isShowPass ? <AiOutlineEyeInvisible /> : <AiFillEye />}
                </div>
              </div>

              <span className="registration-error">
                {formik.touched.password &&
                  formik.errors.password &&
                  formik.errors.password}
              </span>

              <Input
                onChange={formik.handleChange}
                mt="5"
                type="password"
                name="confirmpassword"
                value={formik.values.confirmpassword}
                placeholder="Confirm Password"
                size="lg"
              />
              <span className="registration-error">
                {formik.touched.confirmpassword &&
                  formik.errors.confirmpassword &&
                  formik.errors.confirmpassword}
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
    </>
  );
};

export default Registration;
