import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Login } from "../page/Login";

export default function LoginUser() {
  const users = useSelector((user) => user.logins.login);
  return users ? <Outlet /> : <Login />;
}
