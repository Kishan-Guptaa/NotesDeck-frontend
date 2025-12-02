
"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
// import { FcGoogle } from "react-icons/fc";

export default function SigninPage() {
  const [form, setForm] = useState({
    emial: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      redirect: false,
      emial: form.emial,
      password: form.password,
    });

    if (res?.error) {
      setErrorMessage(res.error);
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="p-6 w-[28rem] bg-white dark:bg-gray-800 border-4 border-black dark:border-white rounded-2xl shadow-[10px_10px_0_0_#000000] dark:shadow-[12px_12px_0_0_#374151] flex flex-col gap-4 h-fit">

        <h1 className="text-3xl font-bold text-center mb-2">Sign In</h1>

       
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex items-center justify-center gap-2 h-12 bg-white border-2 border-black rounded-lg hover:bg-gray-200 transition text-black font-medium"
        >
          
          Sign in with Google
        </button>

        <div className="flex items-center gap-3 my-2">
          <div className="h-[1px] bg-black flex-1"></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">OR</span>
          <div className="h-[1px] bg-black flex-1"></div>
        </div>

        <input
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setForm({ ...form, emial: e.target.value })}
          className="h-12 px-3 w-full border-2 border-black rounded-lg"
        />

        <input
          type="password"
          placeholder="Enter password..."
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="h-12 px-3 w-full border-2 border-black rounded-lg"
        />

        <button
          onClick={handleLogin}
          className="h-12 bg-black text-white rounded-lg hover:bg-gray-500 transition font-medium"
        >
          Login
        </button>

        {errorMessage && (
          <p className="text-center text-sm text-red-500">{errorMessage}</p>
        )}

        <p className="text-center text-sm text-gray-700 dark:text-gray-300 mt-2">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
