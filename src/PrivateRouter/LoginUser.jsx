import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Login } from "../page/Login";

export const LoginUser = () => {
  const users = useSelector((user) => user.logins.login);
  return users ? <Outlet /> : <Login />;
};

export const NotLoginUser = () => {
  const users = useSelector((user) => user.logins.login);
  return users ? Navigate("/") : <Outlet />;
};
