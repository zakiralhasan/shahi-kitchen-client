import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Pages/Blog/Blog";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import FAQ from "../Components/Pages/FAQ/FAQ";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Reset from "../Components/Pages/Reset/Reset";
import ServiceDetails from "../Components/Pages/ServiceDetails/ServiceDetails";
import ServicesAll from "../Components/Pages/ServicesAll/ServicesAll";
import Main from "../Layout/Main";

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
      { path: "/services", element: <ServicesAll></ServicesAll> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      { path: "reset", element: <Reset></Reset> },
      { path: "FAQ", element: <FAQ></FAQ> },
      { path: "blog", element: <Blog></Blog> },
    ],
  },
]);
export default router;
