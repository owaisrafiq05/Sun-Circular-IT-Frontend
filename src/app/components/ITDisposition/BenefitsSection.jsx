"use client";

import Image from "next/image";
import personImage from "../../images/person-transparent.webp";

export default function BenefitsSection() {
  return (
    <section className="relative py-24 sm:py-16">
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center gap-y-8 lg:gap-x-16 px-6 lg:px-12">
        {/* Left - Content Box */}
        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8 lg:p-12 flex flex-col items-center lg:items-start z-10 text-center lg:text-left">
          <h2 className="text-teal-900 text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Benefits of Partnering with Us
          </h2>
          <ul className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 leading-relaxed list-disc ml-5">
            <li>Simplify IT Disposal: Leave the complexities of IT asset disposition to our experts.</li>
            <li>Protect Your Business: Secure data destruction protects your company’s reputation and sensitive information.</li>
            <li>Contribute to Sustainability: Join us in reducing the environmental impact of electronic waste.</li>
          </ul>
          <button
            className="bg-teal-600 text-white font-semibold text-sm sm:text-base lg:text-lg py-3 px-6 rounded-tr-full rounded-b-full transition duration-200 hover:bg-teal-700"
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
