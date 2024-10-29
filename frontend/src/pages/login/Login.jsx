import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userName, password);
  };

  return (
    <div className=" xs:w-96 2xs:w-80 2xs:p-2 sm:p-4">
      <div className="xs:p-6 2xs:p-4 3xs:p-2 h-full w-full bg-brown-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <h1 className="text-2xl font-semibold text-center text-gray-300 select-none ">
          Login <span className="text-red-500 font-bold">ChatBox</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="username" className="label p-2">
              <span className="text-base text-gray-300 label-text">
                Username
              </span>
            </label>
            <input
              id="username"
              type="text"
              placeholder="Type username"
              autoComplete="off"
              className="input input-bordered w-full h-10 "
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="label p-2 ">
              <span className="text-base text-gray-300 label-text">
                Password
              </span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Type password"
              autoComplete="off"
              className="input input-bordered w-full h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span className="p-2 2xs:text-sm 3xs:text-xs text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-gray-300 font-semibold transition-all hover:text-red-500"
            >
              Signup
            </Link>
          </span>
          <div>
            <button disabled={loading} className="btn btn-block font-bold p-0 mt-2 bg-red-500 text-gray-300 btn-error hover:text-red-500 hover:bg-gray-600 ">
              {!loading ? (
                "Login"
              ) : (
                <span className="loading loading-spinner "></span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
