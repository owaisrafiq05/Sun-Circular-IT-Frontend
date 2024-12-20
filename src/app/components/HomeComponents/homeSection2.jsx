"use client";

import Image from "next/image";
import lifecycleImage from "../../images/lifecycle-image.png"; // Update the path based on your project

export default function HomeSection2() {
  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl mb-2 text-gray-800 montserrat-regular">
            Unlock the Full Potential of Your Retired IT Assets
          </h2>
        </div>

        {/* Description Section */}
        <div className="text-center mb-16">
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto montserrat-regular">
            At Sun Circular IT Solutions, we are committed to helping businesses unlock the full potential of their retired IT assets. Whether you need secure IT asset disposition, efficient asset management, or sustainable recycling, our comprehensive services ensure that your old or unused hardware delivers value while minimizing its environmental impact. We specialize in handling a wide range of IT equipment, including laptops, desktops, servers, monitors, and much more, using certified and eco-friendly processes.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-12 px-16 relative">
          {/* Circular Graphic */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start">
            <Image
              src={lifecycleImage}
              alt="IT Lifecycle Graphic"
              width={600}
              height={600}
              className="max-w-full h-auto"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left relative">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4 montserrat-bold">
              Certified and Eco-Friendly Processes
            </h3>
            <p className="text-base md:text-xl text-black leading-relaxed mb-8 montserrat-regular">
              Operating under a WEEE license, we adhere to strict compliance standards in England and Wales, guaranteeing that your IT assets are managed responsibly and securely. Our approach blends data security, sustainability, and value recovery, making us the trusted choice for businesses seeking to turn unused IT into tangible benefits.
            </p>
            <button className="bg-transparent border-2 border-teal-600 text-teal-600 py-2 px-6 rounded-tr-full rounded-b-full font-semibold text-lg hover:bg-teal-600 hover:text-white transition duration-200 montserrat-bold">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}