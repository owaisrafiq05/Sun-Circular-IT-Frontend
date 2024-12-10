"use client";

import Image from "next/image";
import cardImg1 from "../../images/card-img1.webp";
import cardImg2 from "../../images/card-img2.webp";
import cardImg3 from "../../images/card-img3.webp";
import cardImg4 from "../../images/card-img4.webp";

export default function HowCircularITWorks() {
  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Content */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-x-12">
          {/* Text Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-900 mb-4 montserrat-bold">
              How do you make IT truly circular?
            </h2>
            <p className="text-lg text-gray-600 mb-4 montserrat-regular">
              With our approach to circular IT, you will get the maximum
              possible use out of your IT, reducing costs and – most importantly
              – cutting down the mountain of electronic waste.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Circular IT involves using, reusing, refurbishing and recycling IT
              equipment to maximise its life. This greatly reduces the need for
              new IT equipment, creating a much more sustainable environment.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Using IT hardware for longer is not just about extending its
              lifecycle, but also about managing all kinds of IT equipment
              efficiently throughout the journey, such as laptops, desktops,
              tablets, smartphones, servers, storage and networking equipment.
            </p>
            <button className="bg-teal-500 text-white text-lg font-semibold py-3 px-6 rounded-tr-full rounded-b-full hover:bg-teal-600 transition duration-300 montserrat-bold">
              Why Circular IT?
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
                <h3 className="text-lg font-bold text-teal-900 montserrat-bold">Solutions</h3>
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
                <h3 className="text-lg font-bold text-teal-900 montserrat-bold">Services</h3>
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
                <h3 className="text-lg font-bold text-teal-900 montserrat-bold">Hardware</h3>
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
                <h3 className="text-lg font-bold text-teal-900 montserrat-bold">
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
