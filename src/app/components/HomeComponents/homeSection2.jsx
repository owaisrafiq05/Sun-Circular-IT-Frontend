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
            The way we use IT today is no longer sustainable.
          </h2>
          <h2 className="text-2xl md:text-3xl text-gray-600 montserrat-regular">
            Our society needs someone to drive change.
          </h2>
        </div>

        {/* Description Section */}
        <div className="text-center mb-16">
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto montserrat-regular">
            That’s where we come in! Together with our customers and partners,
            we have embarked on a sustainable transformation. We are breaking
            the vicious circle of treating IT like a disposable product.
            Instead, we are making IT truly circular.
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
              Traditional IT Lifecycle Management is evolving
            </h3>
            <p className="text-base md:text-xl text-black leading-relaxed mb-8 montserrat-regular">
              With our innovative and sustainable IT Lifecycle Management, you
              can procure, deploy, manage, and replace your IT equipment.
            </p>
            <button className="bg-transparent border-2 border-teal-600 text-teal-600 py-2 px-6 rounded-tr-full rounded-b-full font-semibold text-lg hover:bg-teal-600 hover:text-white transition duration-200 montserrat-bold">
              Learn how
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
