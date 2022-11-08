import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen">
      <div className="bg-gray-50 shadow-lg p-6 text-center rounded-md">
        <h1 className="text-6xl mb-4 text-red-500">Oops!</h1>
        <h4>An unexpected error has occurred.</h4>
        <div className="text-gray-400">
          <p className="text-2xl">{error.status}</p>
          <small>{error.statusText}</small>
        </div>
        <Link to="/">
          <button className="bg-blue-400 px-4 py-2 rounded font-semibold text-white mt-4">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
