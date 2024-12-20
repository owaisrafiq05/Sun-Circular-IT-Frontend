"use client";

import Image from "next/image";
import personImage from "../../images/person-transparent.webp";

export default function ContactSection() {
  return (
    <section className="relative bg-[#e2f0f5] py-24 sm:py-16">
      {/* Curved Top Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#e2f0f5"
            d="M0,192L80,213.3C160,235,320,277,480,282.7C640,288,800,256,960,229.3C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center gap-y-8 lg:gap-x-12 px-4 lg:px-8">
        {/* Left - Person Info */}
        <div className="flex flex-col items-center lg:items-start z-10">
          <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full bg-teal-600 flex flex-col items-center justify-center shadow-md">
            <Image
              src={personImage}
              alt="Contact Us"
              width={180}
              height={180}
              className="rounded-full relative bottom-8 sm:bottom-4"
              priority
            />
            <p className="text-white text-sm sm:text-base lg:text-lg font-semibold mt-4 text-center relative bottom-12 sm:bottom-8 w-[80%] sm:w-[70%] lg:w-[50%]">
              Sun Circular IT Solutions
            </p>
          </div>
        </div>

        {/* Right - Contact Box */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8 max-w-full sm:max-w-md lg:max-w-lg mt-8 lg:mt-0 z-10">
          <h3 className="text-teal-900 text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Let’s Work Together
          </h3>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6">
            By partnering with Sun Circular IT Solutions, you can enjoy a seamless process that adds value to your business while aligning with sustainability goals.
          </p>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6">
            If you’re ready to declutter your workspace, protect sensitive data, and contribute to a greener future, contact Sun Circular IT Solutions today. We’re here to provide secure, compliant, and sustainable solutions for all your IT asset management and recycling needs.
          </p>
          <button
            className="text-white font-semibold text-sm sm:text-base lg:text-lg py-2 px-4 sm:px-6 rounded-tr-full rounded-b-full transition duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(129deg, #db8f1b 0%, #db8f1b 100%)",
              boxShadow: "0 4px 24px rgba(219, 143, 27, 0.4784313725)",
            }}
          >
            Get in Touch →
          </button>
        </div>
      </div>
    </section>
  );
}
