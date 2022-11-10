import { createBrowserRouter } from "react-router-dom";
import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Reset from "../Pages/Reset/Reset";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ServicesAll from "../Pages/ServicesAll/ServicesAll";
import Main from "../Layout/Main";
import MyReviews from "../Pages/MyReviews/MyReviews";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      {
        path: "details/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      { path: "services", element: <ServicesAll></ServicesAll> },
      {
        path: "reviews",
        element: (
          <PrivetRoute>
            <MyReviews></MyReviews>
          </PrivetRoute>
        ),
      },
      {
        path: "add-services",
        element: (
          <PrivetRoute>
            <AddServices></AddServices>
          </PrivetRoute>
        ),
      },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      { path: "reset", element: <Reset></Reset> },
      { path: "FAQ", element: <FAQ></FAQ> },
      { path: "blog", element: <Blog></Blog> },
    ],
  },
]);
export default router;
