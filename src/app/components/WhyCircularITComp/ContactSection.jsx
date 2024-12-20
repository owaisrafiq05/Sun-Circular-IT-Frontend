"use client";

import Image from "next/image";
import personImage from "../../images/person-transparent.webp";

export default function ContactSection() {
  return (
    <section className="relative bg-gradient-to-r from-teal-300 to-emerald-300 py-24 sm:py-16">
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center gap-y-8 lg:gap-x-16 px-6 lg:px-12">
        {/* Left - Content Box */}
        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 lg:p-12 flex flex-col items-center lg:items-start z-10 text-center lg:text-left">
          <h2 className="text-teal-900 text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Join the Circular IT Movement
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6">
            Embracing Circular IT is more than a business decision—it’s a
            commitment to a greener future. At Sun Circular IT Solutions, we
            make it easy for companies to transition to sustainable IT practices
            without sacrificing value or convenience.
          </p>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6">
            Let’s work together to make your IT management more sustainable.
          </p>
          <button
            className="bg-teal-600 text-white font-semibold text-sm sm:text-base lg:text-lg py-3 px-6 rounded-tr-full rounded-b-full  transition duration-200 hover:bg-teal-700"
          >
            Contact us today →
          </button>
        </div>

        {/* Right - Image Box */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 flex-shrink-0 rounded-full shadow-lg bg-teal-600 flex items-center justify-center z-10">
          <Image
            src={personImage}
            alt="Circular IT Representative"
            layout="intrinsic"
            width={256}
            height={256}
            className="rounded-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
