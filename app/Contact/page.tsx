"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
/* ---------------------- SOCIAL LINKS ---------------------- */
const socialLinks = [
  { Icon: FaInstagram, href: "https://www.instagram.com/kishan_n_09/", label: "Instagram" },
  { Icon: FaTwitter, href: "https://x.com/T2_c0de", label: "Twitter" },
  { Icon: FaFacebook, href: "YOUR_FACEBOOK_URL", label: "Facebook" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/kishangupta09", label: "LinkedIn" },
] as const;

/* ---------------------- TOAST COMPONENT ---------------------- */
function Toast({ message, type }: { message: string; type: "success" | "error" }) {
  return (
    <div
      className={`
        fixed top-6 right-6 px-5 py-3 mt-24 rounded-lg shadow-xl text-white dark:text-black 
        bg-black dark:bg-white text-sm font-medium z-[9999] animate-slide-in
      `}
    >
      {message}
    </div>
  );
}

export default function Contact() {
  const [toast, setToast] = React.useState({
    show: false,
    message: "",
    type: "success" as "success" | "error",
  });

  function showToast(message: string, type: "success" | "error") {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type }), 3000);
  }

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white">
       <Link
        href="/"
        className="
          absolute top-20 left-4 sm:left-6
          px-4 py-2 text-sm font-semibold
          border-2 border-black dark:border-gray-300
          rounded-md
          shadow-[4px_4px_0_0_#000]
          dark:shadow-[4px_4px_0_0_#374151]
          hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] mt-10
          transition
        "
      >
        ← Back
      </Link>
     
      <Image
        src="/contact1.svg"
        alt="decor"
        width={150}
        height={220}
        className="absolute top-30 left-90 opacity-90 dark:invert pointer-events-none hidden md:block"
      />

      <Image
        src="/contact.svg"
        alt="decor"
        width={150}
        height={240}
        className="absolute bottom-10 right-70 opacity-90 dark:invert pointer-events-none hidden md:block"
      />
      

      {toast.show && <Toast message={toast.message} type={toast.type} />}

      
      <header className="max-w-4xl mx-auto text-center mt-8 mb-12 ">
        <h1
          className="text-5xl md:text-6xl font-extrabold"
          style={{ textShadow: "2px 2px 0px rgba(160,160,160,0.6)" }}
        >
          Contact
        </h1>

        <p className="mt-5 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Need support or want to share an idea for NotesDeck?
          <br />
          Send us a message — we respond quickly and love hearing from our users.
        </p>
      </header>

     
      <div className="relative flex justify-center items-center w-full mt-10">


        <Image
          src="/follow.svg"
          alt="Decor"
          width={70}
          height={90}
          className="absolute left-[calc(54%-330px)] top-1/2 -translate-y-1/2 
               dark:invert hidden md:block"
        />

        {/* SOCIAL ICONS CARD */}
        <div className="
          w-120 flex items-center justify-center gap-10 
          border-2 border-black dark:border-gray-300 
          rounded-lg p-5 md:p-8 
          bg-white dark:bg-black 
          shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#A0AEC0]
          relative
        ">
          {socialLinks.map(({ Icon, href, label }, i) => (
            <motion.div
              key={label}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative group"
            >
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg">
                {label}
              </span>

              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl transition transform hover:scale-125 hover:text-gray-700 dark:hover:text-gray-400"
              >
                <Icon />
              </a>
            </motion.div>
          ))}
        </div>
      </div>


      <div className="max-w-2xl mx-auto mt-12 bg-white dark:bg-black border-2 border-black dark:border-gray-300 shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#A0AEC0] p-8 rounded-xl relative z-10">
        <h2 className="text-2xl font-bold mb-4">Send us a message</h2>

        <form
          className="space-y-5"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);

            const data = {
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            };

            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });

            if (res.ok) {
              showToast("Message Sent Successfully!", "success");
              (e.target as HTMLFormElement).reset();
            } else {
              showToast("Failed to send message", "error");
            }
          }}
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border-2 border-black dark:border-gray-300 rounded-lg dark:bg-black dark:text-white"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border-2 border-black dark:border-gray-300 rounded-lg dark:bg-black dark:text-white"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 border-2 border-black dark:border-gray-300 rounded-lg dark:bg-black dark:text-white"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
