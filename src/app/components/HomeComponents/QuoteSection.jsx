"use client";

import Image from "next/image";
import profileImg from "../../images/profile-img.webp";

export default function QuoteSection() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col gap-y-4 lg:flex-row items-center justify-center gap-x-16">
          {/* Circular Image Section */}
          <div className="relative flex-shrink-0">
            <div className="absolute bg-teal-100 z-10"></div>
            <Image
              src={profileImg}
              alt="Profile Image"
              width={200}
              height={200}
              className="rounded-full bg-blue-200"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left lg:ml-12 w-[100%] md:w-[30%]">
            <h3 className="montserrat-bold text-2xl lg:text-4xl font-bold text-teal-900 mb-4">
              “The Champions League for Climate Impact Officers is Scope 3”
            </h3>
            <p className="montserrat-regular text-lg text-gray-800 mb-6">
              Maarten de Roos, CEO CITg
            </p>
            <button className="montserrat-bold bg-transparent border-2 border-teal-600 text-teal-600 py-2 px-6 rounded-tr-full rounded-b-full font-semibold text-lg hover:bg-teal-600 hover:text-white transition duration-200">
              Read our blog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
