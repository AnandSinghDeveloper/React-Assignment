import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };
   const userData = JSON.parse(localStorage.getItem("user"));
    if (userData.email === email && userData.password === password) {
      navigate("/homescreen");
    }else{
      alert("Invalid email or password");
    }

   
    

    

    setEmail("");
    setPassword("");
  };

  return (
    <div className=" ">
      <div className="flex w-full flex-col items-start justify-start h-screen p-5 pt-7">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl font-semibold">Sign In to your</h2>
          <h2 className="text-2xl font-semibold">PopX Account</h2>
          <span className="w-60 opacity-50 font-medium text-base mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </span>
        </div>

        <form onSubmit={submitHandler} className="mt-7 w-full">
          <div className="relative">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="my-input"
              required
              type="email"
              className="peer border-2 border-[#CBCBCB] rounded-lg w-full px-4 py-3"
              placeholder=""
            />
            <label
              htmlFor="my-input"
              className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-[#A177FD] 
                peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent 
                peer-placeholder-shown:px-0 peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 
                peer-focus:bg-white peer-focus:px-1 peer-focus:text-sm 
                peer-focus:text-[#A177FD] transition-all"
            >
              Email Address
            </label>
          </div>

          <div className="relative mt-4">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="my-password"
              type="password"
              required
              className="peer border-2 border-[#CBCBCB] rounded-lg w-full px-4 py-3"
              placeholder=""
            />
            <label
              htmlFor="my-password"
              className="absolute left-4 -top-2.5 bg-white px-1 text-sm text-[#A177FD] 
                peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent 
                peer-placeholder-shown:px-0 peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 
                peer-focus:bg-white peer-focus:px-1 peer-focus:text-sm 
                peer-focus:text-[#A177FD] transition-all"
            >
              Enter Password
            </label>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center bg-[#CBCBCB] active:bg-[#a4a0a0] text-white font-bold py-2 px-4 rounded mb-3 w-full mt-5"
          >
            Login
          </button>
        </form>

        {/* <p className="mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#A177FD] font-semibold">
            Sign Up
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default Login;

