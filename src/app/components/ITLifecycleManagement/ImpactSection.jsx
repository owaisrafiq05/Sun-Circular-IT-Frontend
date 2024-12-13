"use client";

import Image from "next/image";
import impactImage from "../../images/impact-image.jpg"; // Replace with the correct path to your image

export default function ImpactSection() {
  return (
    <section className="bg-[#e2f0f5] py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col gap-y-6">
          <h2 className="text-[#005C38] text-3xl lg:text-4xl font-bold">
            The positive impact of circular IT
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Want to know what impact your IT equipment has on the environment?
            With us, you can calculate your impact in advance of replacing your
            IT equipment or keeping it in use for longer. We consider all the
            relevant factors, such as years deployed, energy consumption, CO₂
            emissions, and e-waste.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our Lifecycle Management solutions, services, and hardware always
            provide you with a clear impact report. This shows you exactly how
            much you have saved in CO₂ and e-waste, so you can measure your
            impact on the environment and improve it. Plus, you can use this
            information in your CSR reporting.
          </p>
          <button
                className="text-white font-semibold text-base sm:text-lg py-2 px-4 rounded-tr-full rounded-b-full transition duration-200 hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(129deg, #db8f1b 0%, #db8f1b 100%)",
                  boxShadow: "0 4px 24px rgba(219, 143, 27, 0.4784313725)",
                }}
              >
                Contact Us
              </button>
        </div>

        {/* Right Image */}
        <div className="relative lg:w-1/2 w-full max-w-lg lg:max-w-none h-auto">
          <Image
            src={impactImage}
            alt="Woman with a laptop"
            className="rounded-lg shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
