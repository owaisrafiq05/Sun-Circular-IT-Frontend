"use client";

import { useState, useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

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
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Display Loader for 5 seconds */}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {/* Global Navbar */}
            <Navbar />
            
            {/* Page Content */}
            {children}
            

            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
