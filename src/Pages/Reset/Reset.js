import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Context/AuthProvider";
import useSetTitle from "../../Hooks/useSetTitle";

const Reset = () => {
  useSetTitle("Reset"); //used custom hook for changing title name.
  const [errorMessage, setErrorMessage] = useState(null);
  const { resetUserPassword } = useContext(AuthContext);

  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    resetUserPassword(email)
      .then(() => {
        setErrorMessage("");
        event.target.reset();
        swal("Please check your inbox or spam box!");
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage(errorMsg);
        event.target.reset();
      });
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <div className=" bg-base-200">
          <div className="hero-content flex-col mx-auto">
            <div className="card rounded-md flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="text-center mb-4">
                  <h1 className="text-4xl font-semibold">Reset Password!</h1>
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
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover text-gray-400"
                    >
                      Already have an account?
                    </Link>
                  </label>
                  <label className="label">
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover text-gray-400"
                    >
                      Don't have an account?
                    </Link>
                    {/* show error message at login time */}
                    <p className="text-xs text-red-500">{errorMessage}</p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-blue-400 border-none">Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reset;
