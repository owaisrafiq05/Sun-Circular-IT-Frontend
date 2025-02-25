"use client";

import Image from "next/image";
import heroImg from "../../images/hero-bg-1.jpg";

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
              "linear-gradient(90deg, rgba(219, 143, 27, 0.95) 0%, rgba(219, 143, 27, 0.5) 45%, rgba(0, 0, 0, 0) 65%)",
          }}
        ></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 sm:px-8 md:px-12 lg:px-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 montserrat-extrabold">
            What is Circular IT?
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 md:w-[50%] leading-relaxed">
            Circular IT is a sustainable approach to managing technology that prioritizes reuse, recycling, and extending the lifecycle of IT assets. Instead of following a traditional “use and dispose” model, Circular IT embraces the principles of a circular economy, where resources are continuously repurposed to minimize waste and reduce environmental impact.
          </p>
        </div>
      </div>
    </section>
  );
}
