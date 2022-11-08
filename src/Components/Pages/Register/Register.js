import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { creatUser } = useContext(AuthContext);

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgURL = form.imgURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, imgURL, email, password);

    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setErrorMessage("");
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage(errorMsg);
        form.reset();
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
                  <h1 className="text-4xl font-semibold">Register free!</h1>
                </div>
                <div className="form-control mb-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="py-2 outline-none "
                    required
                  />
                  <hr />
                </div>
                <div className="form-control mb-2">
                  <input
                    type="text"
                    name="imgURL"
                    placeholder="Image URL"
                    className="py-2 outline-none "
                    required
                  />
                  <hr />
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
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover text-gray-400 mt-1"
                    >
                      Already have an account?
                    </Link>
                  </label>
                  {/* show error message at login time */}
                  <p className="text-xs text-red-500">{errorMessage}</p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-400 border-none">
                    Register
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

export default Register;
