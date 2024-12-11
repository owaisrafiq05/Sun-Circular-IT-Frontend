"use client";

import Image from "next/image";
import heartImage from "../../images/waste-image-2.jpg";
import {FaArrowRight } from "react-icons/fa";

export default function ImpactSection() {
  return (
    <section className="bg-white py-8 lg:py-16 font-montserrat">
      <div className="container flex flex-col lg:flex-row items-center justify-between lg:items-start gap-y-8 gap-x-12 px-4 lg:pl-8">
        {/* Left Text Content */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:px-12 max-w-full sm:max-w-md lg:max-w-lg flex-shrink-0 mx-auto lg:mx-0 relative lg:left-32 z-10 my-auto">
          <h2 className="text-teal-900 text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-tight">
          How can we make IT circular together?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
          Together, we can make IT hardware circular. The next steps in the 10Rs model for circularity by the Utrecht Sustainability Institute all play a part in this.
          </p>
          <button
            className="text-white font-semibold text-sm sm:text-base lg:text-lg py-1 px-4 rounded-tr-full rounded-b-full transition duration-200 hover:opacity-90 flex justify-center items-center gap-x-2"
            style={{
              background: "linear-gradient(129deg, #db8f1b 0%, #db8f1b 100%)",
              boxShadow: "0 4px 24px rgba(219, 143, 27, 0.4784313725)",
            }}
          >
            Read More <FaArrowRight/>
          </button>
        </div>

        {/* Right Image Content */}
        <div className="relative w-full sm:w-3/4 lg:w-3/4 h-64 sm:h-80 lg:h-[500px] rounded-lg overflow-hidden mx-auto lg:mx-0">
          <Image
            src={heartImage}
            alt="Heart-shaped forest"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
