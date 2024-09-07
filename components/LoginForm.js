import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { PiSpinnerGapBold } from "react-icons/pi";

export default function LoginForm(props) {
  const { setIsLogin } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  function handleSubmit() {
    setIsAuthenticating(true);
    console.log(email);
    console.log(password);
    setTimeout(() => {
      setIsAuthenticating(false);
    }, 2000);
  }

  return (
    <div className="h-[400px] w-[400px] p-8 flex flex-col gap-4 justify-center shadow-lg rounded-xl bg-white">
      <p className="text-3xl font-semibold">Login</p>
      <input
        className="w-full h-12 border bg-transparent outline-none p-2 border-slate-400 rounded"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="relative w-full">
        <input
          className="w-full h-12 border bg-transparent outline-none p-2 border-slate-400 rounded"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 ">
          {showPassword ? (
            <IoMdEyeOff
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-400"
              size={20}
            />
          ) : (
            <IoMdEye
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-400"
              size={20}
            />
          )}
        </button>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-primary text-white p-2 rounded hover:bg-opacity-80 flex justify-center"
      >
        {isAuthenticating ? (<PiSpinnerGapBold className="animate-spin" size={24} />) : "Login"}
      </button>

      <div className="w-full flex flex-col mt-6 items-center">
        <p className="">Don't have an account?</p>
        <button className="text-primary" onClick={() => setIsLogin(false)}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
