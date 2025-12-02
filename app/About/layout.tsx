import React from "react";
import { Navbar } from "../components/marketing/Navbar";
import { Footer } from "../components/marketing/Footer";

export default function Layout({children}:{
  children: React.ReactNode;
}){
    return(
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}