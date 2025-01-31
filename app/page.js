"use client";

import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Trending from "./components/Trending";
import Reasons from "./components/Reasons";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
        <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/netflix-bg.jpg')" }}>

            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="relative z-10">
                <Header />
                <HomePage />
            </div>
            {<svg
                className="w-full h-[100px] md:h-[120px] opacity-90"
                viewBox="0 0 1440 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path fill="red" d="M0,98 Q720,5 1440,98 V100 H0 Z" />
                <path fill="black" d="M0,100 Q720,20 1440,100 V100 H0 Z" />
            </svg>}
        </div>
    
        <Trending />
        <Reasons />
        <FAQ />
        <Footer />
        
            
    </div>
    
  );
}
