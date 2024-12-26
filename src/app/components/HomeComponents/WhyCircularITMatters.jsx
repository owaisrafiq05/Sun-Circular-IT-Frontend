"use client";

import Image from "next/image";
import cardImg1 from "../../images/card-img1.webp";
import cardImg2 from "../../images/card-img2.webp";
import cardImg3 from "../../images/card-img3.webp";
import cardImg4 from "../../images/card-img4.webp";

export default function WhyCircularITMatters() {
  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Content */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-x-12">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#db8f1b] mb-4 montserrat-bold">
              Why Circular IT Matters
            </h2>
            <p className="text-lg text-gray-600 mb-4 montserrat-regular">
              Circular IT is at the heart of what we do. This innovative approach prioritizes reuse, refurbishment, and recycling to extend the life of IT assets. By embracing Circular IT principles, businesses can significantly reduce e-waste, conserve resources, and demonstrate a commitment to sustainability.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              At Sun Circular IT Solutions, we help companies transition to a circular economy by refurbishing IT hardware whenever possible and recycling responsibly. By keeping technology in use longer, we reduce environmental impact while providing cost-saving benefits to our clients.
            </p>
            <button className="bg-transparent border-2 border-[#db8f1b] text-[#db8f1b] py-2 px-6 rounded-full font-semibold text-lg hover:bg-[#db8f1b] hover:text-white transition duration-200 montserrat-bold">
              Learn More
            </button>
          </div>

          {/* Cards Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="overflow-hidden">
                <Image
                  src={cardImg1}
                  alt="Solutions"
                  className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#db8f1b] montserrat-bold">Solutions</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="overflow-hidden">
                <Image
                  src={cardImg2}
                  alt="Services"
                  className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#db8f1b] montserrat-bold">Services</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 relative -top-4">
              <div className="overflow-hidden">
                <Image
                  src={cardImg3}
                  alt="Hardware"
                  className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#db8f1b] montserrat-bold">Hardware</h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 relative -top-4">
              <div className="overflow-hidden">
                <Image
                  src={cardImg4}
                  alt="Acquisition options"
                  className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#db8f1b] montserrat-bold">
                  Acquisition options
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
