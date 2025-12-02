"use client";

import React, { useEffect } from "react";

export default function Toast({ message, type, onClose }: any) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed top-5 right-5 px-5 py-3 rounded-lg shadow-lg text-white text-sm
        animate-slide-in 
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
    >
      {message}
    </div>
  );
}
