import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import useSignup from "../../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputs);

    await signup(inputs);
  };

  return (
    <div className=" xs:w-96 2xs:w-80 2xs:p-2 sm:p-4">
      <div className="xs:p-6 2xs:p-4 3xs:p-2 h-full w-full bg-brown-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <h1 className="text-2xl font-semibold text-center text-gray-300 select-none ">
          Signup <span className="text-red-500 font-bold">ChatBox</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label htmlFor="fullName" className="label p-2">
              <span className="text-base text-gray-300 label-text">
                Full Name
              </span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Type full name"
              className="input input-bordered w-full h-10 "
              autoComplete="off"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div className="">
            <label htmlFor="userName" className="label p-2">
              <span className="text-base text-gray-300 label-text">
                Username
              </span>
            </label>
            <input
              id="userName"
              type="text"
              placeholder="Type username"
              className="input input-bordered w-full h-10 "
              autoComplete="off"
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
            />
          </div>
          <div className="">
            <label htmlFor="password" className="label p-2 ">
              <span className="text-base text-gray-300 label-text">
                Password
              </span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Type password"
              className="input input-bordered w-full h-10"
              autoComplete="off"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div className="mb-1">
            <label htmlFor="confirmPassword" className="label p-2 ">
              <span className="text-base text-gray-300 label-text">
                Confirm Password
              </span>
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Retype password"
              className="input input-bordered w-full h-10 "
              autoComplete="off"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />

          <span className="p-2 2xs:text-sm 3xs:text-xs text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-gray-300 font-bold transition-all hover:text-red-500 hover:font-bold"
            >
              Login
            </Link>
          </span>
          <div>
            <button className="btn btn-block font-bold p-0 mt-2 bg-red-500 text-gray-300 btn-error hover:text-red-500 hover:bg-gray-600 disabled={loading} ">
              {!loading ? (
                "Signup"
              ) : (
                <span className="loading loading-spinner"></span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
