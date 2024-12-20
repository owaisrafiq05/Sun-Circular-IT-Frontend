"use client";

import Image from "next/image";
import heroImg from "../../images/hero-bg.webp";

export default function HeroSection() {
  return (
    <section className="my-12 mx-4 md:mx-16 relative">
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
        {/* Background Image */}
        <Image
          src={heroImg}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className=""
          priority
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 92, 56, 0.95) 0%, rgba(0, 92, 56, 0.5) 45%, rgba(0, 0, 0, 0) 65%)",
          }}
        ></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 sm:px-12 lg:px-24">
          <h4 className="text-sm sm:text-base uppercase tracking-wide text-emerald-300 font-semibold mb-2 montserrat-regular">
            Sun Circular IT
          </h4>
          <h1 className="text-5xl sm:text-4xl lg:text-7xl font-extrabold leading-tight mb-6 montserrat-extrabold">
          Welcome to Sun Circular IT Solutions
          </h1>
          <button
                className="text-white font-semibold text-base sm:text-lg py-1 px-6 rounded-tr-full rounded-b-full transition duration-200 hover:opacity-90 montserrat-bold"
                style={{
                  background:
                    "linear-gradient(129deg, #db8f1b 0%, #db8f1b 100%)",
                  boxShadow: "0 4px 24px rgba(219, 143, 27, 0.4784313725)",
                }}
              >
                Discover How!
              </button>
        </div>
      </div>
    </section>
  );
}
