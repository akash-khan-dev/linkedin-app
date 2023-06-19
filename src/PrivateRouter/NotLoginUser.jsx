import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function NotLoginUser() {
  const users = useSelector((user) => user.logins.login);
  return users ? Navigate("/") : <Outlet />;
}
