"use client";

import Image from "next/image";
import serviceImage1 from "../../images/article1.jpg";
import serviceImage2 from "../../images/article2.jpg";
import serviceImage3 from "../../images/article3.avif";
import serviceImage4 from "../../images/article4.avif";

export default function OurServicesSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-32">
        {/* Section Heading */}
        <h2 className="text-[#db8f1b] text-3xl lg:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <Image
              src={serviceImage1}
              alt="IT Asset Disposition"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-4">
              <h3 className="text-teal-900 text-lg font-semibold mb-2">
                IT Asset Disposition (ITAD)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our ITAD services provide a secure and sustainable solution for disposing of outdated IT equipment. We ensure complete data destruction, followed by recycling or repurposing of hardware in compliance with environmental regulations.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <Image
              src={serviceImage2}
              alt="IT Asset Management"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-4">
              <h3 className="text-teal-900 text-lg font-semibold mb-2">
                IT Asset Management (ITAM)
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our ITAM solutions help businesses track, manage, and optimize their IT assets throughout their lifecycle. From procurement to retirement, we simplify the process, reduce costs, and ensure that your assets are used effectively.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <Image
              src={serviceImage3}
              alt="Rebates for IT Hardware"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-4">
              <h3 className="text-teal-900 text-lg font-semibold mb-2">
                Rebates for IT Hardware
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Turn your retired IT assets into a source of revenue with our rebate program. We evaluate eligible equipment and provide competitive payouts, helping you maximize your return on investment.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <Image
              src={serviceImage4}
              alt="Free London Collections"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-4">
              <h3 className="text-teal-900 text-lg font-semibold mb-2">
                Free London Collections
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To make IT disposal hassle-free, we offer free collections for most projects in the London area.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className="text-[#db8f1b] border-2 border-[#db8f1b] font-semibold text-lg py-2 px-8 rounded-full hover:bg-[#db8f1b] hover:text-white transition duration-300"
          >
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}
