import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Login></Login> },
    ],
  },
]);
export default router;
