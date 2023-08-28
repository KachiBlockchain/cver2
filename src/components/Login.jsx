import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import loginImage from "../assets/img/twocv.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
      alert(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex bg-signbg bg-no-repeat bg-cover flex-col lg:flex-row items-center justify-center gap-16 py-[100px]">
      <div className="max-w-[500px] basis-[50%]">
        <img
          src={loginImage}
          alt="Login"
          className="object-cover w-full h-full"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full basis-[50%] flex flex-col justify-center  p-8 bg-white max-w-[555px] max-h-[669px]"
      >
        <h2 className="text-[42px] leading-normal text-center text-black font-bold mb-4">Login</h2>
        <label htmlFor="" className="text-black p-2 font-semibold ">
          E-mail
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 py-2 px-4 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="" className="text-black pl-4 font-semibold ">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 py-2 px-4 border border-gray-300 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          type="Submit"
        >
          Sign In
        </button>
        <p className="text-gray-600 mt-4">Forgot password?</p>
        <div className="flex items-center">
          <hr className="flex-grow border-t-2 border-gray-400" />
          <div className="mx-4 text-gray-500">Or</div>
          <hr className="flex-grow border-t-2 border-gray-400" />
        </div>
        <div className="flex p-8 items-center justify-center">
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <div className="p-4 box mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
