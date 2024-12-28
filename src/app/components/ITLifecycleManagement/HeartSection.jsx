"use client";

import Image from "next/image";
import heartImage from "../../images/heart-image.webp";

export default function EmpowerSection() {
  return (
    <section className="bg-white py-8 lg:py-16 font-montserrat">
      <div className="container flex flex-col lg:flex-row items-center justify-between lg:items-start gap-y-8 gap-x-12 px-4 lg:pl-8">
        {/* Left Text Content */}
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:px-12 max-w-full sm:max-w-md lg:max-w-lg flex-shrink-0 mx-auto lg:mx-0 relative lg:left-32 z-10 my-auto">
          <h4 className="text-[#db8f1b] text-xs sm:text-sm lg:text-base font-semibold uppercase tracking-wide mb-2">
            EMPOWER YOUR BUSINESS
          </h4>
          <h2 className="text-[#db8f1b] text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-tight">
            Unlock Your Business Potential with ITAM
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed">
            By implementing an effective ITAM strategy with Sun Circular IT Solutions, you can unlock operational efficiencies, control costs, and ensure your IT assets are managed securely and sustainably.
          </p>
          <button
            className="text-white font-semibold text-sm sm:text-base lg:text-lg py-1 px-4 rounded-full transition duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(129deg, #db8f1b 0%, #db8f1b 100%)",
              boxShadow: "0 4px 24px rgba(219, 143, 27, 0.4784313725)",
            }}
          >
            Learn More
          </button>
        </div>

        {/* Right Image Content */}
        <div className="relative w-full sm:w-3/4 lg:w-3/4 h-64 sm:h-80 lg:h-[500px] rounded-lg overflow-hidden mx-auto lg:mx-0">
          <Image
            src={heartImage}
            alt="Empowered ITAM"
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
