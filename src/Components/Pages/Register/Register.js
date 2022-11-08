import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      {" "}
      <form>
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
                      className="label-text-alt link link-hover text-gray-400"
                    >
                      Already have an account?
                    </Link>
                  </label>
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
