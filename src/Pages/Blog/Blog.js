import React from "react";
import useSetTitle from "../../Hooks/useSetTitle";
import jwtImg from "../../images/JWT.png";
import nodeJsImg from "../../images/nodejs-architecture.png";

const Blog = () => {
  useSetTitle("Blog"); //used custom hook for changing title name.

  return (
    <div className="bg-gray-100">
      <div className="py-8">
        <div className="m-4 p-5 text-left border bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-medium">
            What is the difference between SQL and NoSQL?
          </h1>
          <div className="my-2">
            <p>
              <span className="text-xl font-semibold">SQL:</span> An SQL
              database, also known as a relational database and named for the
              programming language it's written in, Structured Query Language
              (SQL). It's the more rigid, structured way of storing data. A
              relational database management system (RDBMS) executes queries,
              retrieves data, and edits data by updating, deleting, or creating
              new records. SQL is a lightweight, declarative language that does
              the heavy lifting for the relational database, acting as a
              database's version of a server-side script
            </p>
          </div>
          <div className="my-2">
            <p>
              <span className="text-xl font-semibold">NoSQL:</span> NoSQL
              databases, also known as ''non-SQL'' or "not only SQL," store data
              in a format other than relational tables. If your data
              requirements aren't clear at the outset or if you're dealing with
              massive amounts of unstructured data, you'll want to use
              non-relational databases because they offer greater flexibility.
            </p>
          </div>
        </div>
        <div className="m-4 p-5 text-left border bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-medium">
            What is JWT, and how does it work?
          </h1>
          <div className="my-2">
            <p>
              <span className="text-xl font-semibold">Ans:</span>
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP). So the integrity
              and authenticity of the token can be verified by other parties
              involved.
            </p>
            <div className="mt-3">
              <h1 className="my-2 mb-3 sm:text-xl font-medium">
                The working procedure of JWT given below through the flow chart.
              </h1>
              <img
                className=" sm:w-1/2 sm:mx-auto  border-2 rounded-md"
                src={jwtImg}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="m-4 p-5 text-left border bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-medium">
            What is the difference between javascript and Node.js??
          </h1>
          <div className="my-2">
            <p>
              <span className="text-xl font-semibold">JavaScript:</span>{" "}
              Javascript is a scripting language, but JS is basically the ECMA
              script's updated version. Javascript is mainly utilized in making
              web pages more dynamic and interactive. It is a high-level
              language, and it makes use of the Oops concept. Yet, it is based
              primarily on the concept of prototype inheritance.
            </p>
          </div>
          <div className="my-2">
            <p>
              <span className="text-xl font-semibold">Node.js:</span> Node.js is
              a JS runtime environment that lets Javascript be run on the server
              side. It is cross-platform, and it thus allows the JS code to run
              outside any browser easily. There are various modules in NodeJS,
              and it is mainly utilized in the process of web development.
            </p>
          </div>
        </div>
        <div className="m-4 p-5 text-left border bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-medium">
            How does Node JS handle multiple requests at the same time?
          </h1>
          <div className="my-2">
            <p>
              <span className="text-xl font-semibold">Ans:</span> Node.js is an
              open-source, cross-platform JavaScript runtime environment and
              library for running web applications outside the client's browser.
              Node.js handle multiple requests at the same time with the help of
              Event-Loop. I have explained this with the help of the below
              flowchart.
            </p>
            <div className="mt-3">
              <h1 className="my-2 mb-3 sm:text-xl font-medium">
                The working procedure of Node.js given below through the flow
                chart.
              </h1>
              <img
                className=" sm:w-1/2 sm:mx-auto  border-2 rounded-md"
                src={nodeJsImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
