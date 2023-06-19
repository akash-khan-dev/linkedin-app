import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Login } from "./page/Login";
import Registration from "./page/Registration";
import NotLoginUser from "./PrivateRouter/NotLoginUser";
import LoginUser from "./PrivateRouter/LoginUser";
import { Home } from "./page/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoginUser />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route element={<NotLoginUser />}>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
