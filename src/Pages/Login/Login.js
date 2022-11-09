import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { user, setLoading, userLoginWithEmailAndPassword } =
    useContext(AuthContext);

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //user login with email and password
    userLoginWithEmailAndPassword(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        form.reset();
        setErrorMessage("");
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage(errorMsg);
        form.reset();
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <div className=" bg-base-200">
          <div className="hero-content flex-col ">
            <div className="card rounded-md flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="text-center mb-4">
                  <h1 className="text-4xl font-semibold">Login now!</h1>
                </div>
                <div className="form-control mb-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="py-2 outline-none "
                    required
                  />
                  <hr />
                </div>
                <div className="form-control mb-2">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="py-2 outline-none "
                    required
                  />
                  <hr />
                  <label className="label mt-2">
                    <Link
                      to="/reset"
                      className="label-text-alt link link-hover text-gray-400"
                    >
                      Forgot password?
                    </Link>
                  </label>
                  <label className="label">
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover text-gray-400"
                    >
                      Don't have an account?
                    </Link>
                  </label>
                  {/* show error message at login time */}
                  <p className="text-xs text-red-500">{errorMessage}</p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-400 border-none">Login</button>
                </div>
                <div className="divider">OR</div>
                <div className="flex gap-2 text-2xl">
                  <button className="flex gap-4 items-center w-1/2 bg-blue-400 px-2 py-1 rounded-md text-white hover:bg-gray-700">
                    <FaGoogle className="" />
                    <small className="text-sm">With Google</small>
                  </button>
                  <button className="flex gap-4 items-center w-1/2 bg-blue-400 px-2 py-1 rounded-md text-white hover:bg-gray-700">
                    <FaGithub className="" />
                    <small className="text-sm">With Github</small>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
