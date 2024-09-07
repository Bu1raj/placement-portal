import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

export default function SignUpForm(props) {
  const { setIsLogin } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [usn, setUsn] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  function handleSubmit() {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setIsAuthenticating(true);
    console.log(email);
    console.log(password);
    console.log(fullName);
    console.log(usn);
    console.log(confirmPassword);
    setTimeout(() => {
      setIsAuthenticating(false);
    }, 2000);
  }

  return (
    <div className="h-[600px] w-[400px] p-8 flex flex-col gap-4 justify-center shadow-lg rounded-xl bg-white">
      <p className="text-3xl font-semibold mb-2">Sign Up</p>
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
      <div className="relative w-full">
        <input
          className="w-full h-12 border bg-transparent outline-none p-2 border-slate-400 rounded"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
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

      <input
        className="w-full h-12 border bg-transparent outline-none p-2 border-slate-400 rounded capitalize"
        type="text"
        placeholder="Full Name"
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        className="w-full h-12 border bg-transparent outline-none p-2 border-slate-400 rounded uppercase"
        type="text"
        placeholder="USN"
        onChange={(e) => setUsn(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-primary text-white p-2 rounded hover:bg-opacity-80 flex justify-center"
      >
        {isAuthenticating ? "Creating Account.." : "Sign Up"}
      </button>

      <div className="w-full flex flex-col mt-6 items-center">
        <p className="">Already have an account</p>
        <button className="text-primary" onClick={() => setIsLogin(true)}>
          Login
        </button>
      </div>
    </div>
  );
}
