"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "../components/marketing/Navbar";
import { Footer } from "../components/marketing/Footer";
import Loader from "../components/Loader";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Delay to show loader briefly on first load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div>
        <Navbar />
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
