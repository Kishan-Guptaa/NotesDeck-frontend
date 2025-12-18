// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { signIn } from "next-auth/react";
// import { FcGoogle } from "react-icons/fc";

// export default function SignupPage() {
//     const [form, setForm] = useState({
//         name: "",
//         emial: "",
//         password: "",
//         mobile: "",
//     });

//     const [message, setMessage] = useState("");

//     const handleSubmit = async () => {
//         const res = await fetch("/api/auth/signup", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(form),
//         });

//         const data = await res.json();
//         setMessage(data.error || data.message);

//         if (!data.error) {
//             setTimeout(() => {
//                 window.location.href = "/signin";
//             }, 800);
//         }
//     };

//     return (
//         <div className="h-screen flex justify-center items-center bg-gray-100 dark:bg-black/90">

//             <div
//                 className="p-6 w-[28rem] 
//                 bg-white dark:bg-gray-800 
//                 border-4 border-black dark:border-white 
//                 rounded-2xl 
//                 shadow-[10px_10px_0_0_#000000] dark:shadow-[10px_10px_0_0_#374151]
//                 flex flex-col gap-4"
//             >
//                 <h1 className="text-3xl font-bold text-center">Sign Up</h1>

//                 {/* GOOGLE SIGNUP */}
//                 <button
//                     onClick={() => signIn("google", { callbackUrl: "/" })}
//                     className="flex items-center justify-center gap-2 h-12 bg-white border-2 border-black 
//                     rounded-lg hover:bg-gray-200 transition text-black font-medium"
//                 >
//                     <FcGoogle className="w-6 h-6" />
//                     Sign up with Google
//                 </button>

//                 <div className="flex items-center gap-3 my-2">
//                     <div className="h-[1px] bg-black flex-1"></div>
//                     <span className="text-sm text-gray-600 dark:text-gray-300">OR</span>
//                     <div className="h-[1px] bg-black flex-1"></div>
//                 </div>

//                 {/* NAME */}
//                 <input
//                     type="text"
//                     placeholder="Enter your name..."
//                     onChange={(e) => setForm({ ...form, name: e.target.value })}
//                     className="h-12 px-3 w-full border-2 border-black rounded-lg"
//                 />

//                 {/* EMAIL */}
//                 <input
//                     type="email"
//                     placeholder="Enter your email..."
//                     onChange={(e) => setForm({ ...form, emial: e.target.value })}
//                     className="h-12 px-3 w-full border-2 border-black rounded-lg"
//                 />

//                 {/* PASSWORD */}
//                 <input
//                     type="password"
//                     placeholder="Enter password..."
//                     onChange={(e) => setForm({ ...form, password: e.target.value })}
//                     className="h-12 px-3 w-full border-2 border-black rounded-lg"
//                 />

//                 {/* MOBILE */}
//                 <input
//                     placeholder="Mobile"
//                     onChange={(e) => setForm({ ...form, mobile: e.target.value })}
//                     className="h-12 px-3 w-full border-2 border-black rounded-lg"
//                 />

//                 {/* SUBMIT */}
//                 <button
//                     onClick={handleSubmit}
//                     className="h-12 bg-black text-white rounded-lg hover:bg-gray-500 transition font-medium"
//                 >
//                     Create Account
//                 </button>

//                 {/* MESSAGE */}
//                 {message && (
//                     <p className="text-center text-sm text-green-600">{message}</p>
//                 )}

//                 <p className="text-center text-sm text-gray-700 dark:text-gray-300">
//                     Already have an account?{" "}
//                     <Link href="/signin" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
//                         Sign In
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    emial: "",
    password: "",
    mobile: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.error || data.message);

    if (!data.error) {
      setTimeout(() => {
        window.location.href = "/signin";
      }, 800);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gray-100 dark:bg-black/90">
      <div
        className="
          w-full max-w-md
          p-6 sm:p-8
          bg-white dark:bg-gray-800
          border-4 border-black dark:border-white
          rounded-2xl
          shadow-[8px_8px_0_0_#000000]
          dark:shadow-[8px_8px_0_0_#374151]
          flex flex-col gap-4
        "
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Sign Up
        </h1>

        {/* GOOGLE SIGNUP */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="
            flex items-center justify-center gap-2
            h-11 sm:h-12
            bg-white
            border-2 border-black
            rounded-lg
            hover:bg-gray-200
            transition
            text-black
            font-medium
          "
        >
          <FcGoogle className="w-5 h-5 sm:w-6 sm:h-6" />
          Sign up with Google
        </button>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-1">
          <div className="h-[1px] bg-black flex-1"></div>
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            OR
          </span>
          <div className="h-[1px] bg-black flex-1"></div>
        </div>

        {/* NAME */}
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="
            h-11 sm:h-12
            px-3
            w-full
            border-2 border-black
            rounded-lg
            text-sm sm:text-base
          "
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setForm({ ...form, emial: e.target.value })}
          className="
            h-11 sm:h-12
            px-3
            w-full
            border-2 border-black
            rounded-lg
            text-sm sm:text-base
          "
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Enter password..."
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="
            h-11 sm:h-12
            px-3
            w-full
            border-2 border-black
            rounded-lg
            text-sm sm:text-base
          "
        />

        {/* MOBILE */}
        <input
          placeholder="Mobile"
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          className="
            h-11 sm:h-12
            px-3
            w-full
            border-2 border-black
            rounded-lg
            text-sm sm:text-base
          "
        />

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          className="
            h-11 sm:h-12
            bg-black
            text-white
            rounded-lg
            hover:bg-gray-700
            transition
            font-medium
          "
        >
          Create Account
        </button>

        {/* MESSAGE */}
        {message && (
          <p className="text-center text-sm text-green-600">
            {message}
          </p>
        )}

        <p className="text-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
