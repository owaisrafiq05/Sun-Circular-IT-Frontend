"use client";

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

// Import Geist Sans and Mono fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Loader duration: 5 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <html lang="en">
      <head>
        <style>
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Loader */}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {/* Global Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="min-h-screen">{children}</main>

            {/* Global Footer */}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
