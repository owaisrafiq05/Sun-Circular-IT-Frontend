"use client";

import Image from "next/image";
import heroImg from "../../images/hero-bg-3.jpg";

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
          <h4 className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-white font-semibold mb-2 montserrat-regular">
            Secure IT Disposal Solutions
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 montserrat-extrabold">
            What is IT Asset Disposition (ITAD)?
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 leading-relaxed">
            IT Asset Disposition (ITAD) is the process of securely and responsibly managing the disposal of outdated or unused IT equipment, such as laptops, desktops, servers, and more. It involves a structured approach to ensure that hardware is either repurposed, recycled, or disposed of in an environmentally friendly and compliant manner.
          </p>
          <button
            className="text-white font-semibold text-sm sm:text-base md:text-lg py-2 px-6 rounded-full transition duration-200 hover:opacity-90 montserrat-bold"
            style={{
              background: "linear-gradient(129deg, #db8f1b 0%, #db8f1b 100%)",
              boxShadow: "0 4px 24px rgba(219, 143, 27, 0.4784313725)",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
