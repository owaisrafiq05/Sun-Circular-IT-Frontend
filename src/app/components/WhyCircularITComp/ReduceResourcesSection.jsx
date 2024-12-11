"use client";

import Image from "next/image";
import wasteImage from "../../images/waste-image.jpg"; // Update the path to your image

export default function ReduceResourcesSection() {
  return (
    <>
    <div className="text-center mb-16">
          <p className="text-base md:text-xl text-center md:text-left text-black leading-relaxed max-w-2xl mx-auto montserrat-regular">
          The way we use IT today is no longer sustainable. By making IT circular, we keep equipment in use for as long as possible. And at the end of its lifecycle, the raw materials used in its production are recovered and reused.
          </p>
        </div>
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-x-16 gap-y-8 px-4 lg:px-16">
        {/* Left - Image Content */}
        <div className="w-full lg:w-1/2">
          <Image
            src={wasteImage}
            alt="Waste collection setup"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-teal-900 text-2xl lg:text-3xl font-bold mb-4">
            Reduce resources, CO₂ and e-waste
          </h3>
          <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">
            Business laptops are usually replaced every three to four years. But
            did you know it takes around 1,200 kg of metal-rich earths and almost
            200,000 litres of water to make a single laptop? So let’s change the
            way we treat laptops and other IT equipment to make for a better
            environment.
          </p>
          <button
            className="text-white font-semibold text-base lg:text-lg py-3 px-6 rounded-tr-full rounded-b-full transition duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(129deg, #21A783 0%, #21A783 100%)",
              boxShadow: "0 4px 24px rgba(33, 167, 131, 0.4784313725)",
            }}
          >
            Calculate how much you will save
          </button>
        </div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-y-8 lg:gap-x-16 px-4 lg:px-16">

        {/* Right - Text Content */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-teal-900 text-2xl lg:text-3xl font-bold mb-4">
            Reduce resources, CO₂ and e-waste
          </h3>
          <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">
            Business laptops are usually replaced every three to four years. But
            did you know it takes around 1,200 kg of metal-rich earths and almost
            200,000 litres of water to make a single laptop? So let’s change the
            way we treat laptops and other IT equipment to make for a better
            environment.
          </p>
          <button
            className="text-white font-semibold text-base lg:text-lg py-3 px-6 rounded-tr-full rounded-b-full transition duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(129deg, #21A783 0%, #21A783 100%)",
              boxShadow: "0 4px 24px rgba(33, 167, 131, 0.4784313725)",
            }}
          >
            Calculate how much you will save
          </button>
        </div>

        {/* Left - Image Content */}
        <div className="w-full lg:w-1/2">
          <Image
            src={wasteImage}
            alt="Waste collection setup"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>


    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-x-16 gap-y-8 px-4 lg:px-16">
        {/* Left - Image Content */}
        <div className="w-full lg:w-1/2">
          <Image
            src={wasteImage}
            alt="Waste collection setup"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-teal-900 text-2xl lg:text-3xl font-bold mb-4">
            Reduce resources, CO₂ and e-waste
          </h3>
          <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">
            Business laptops are usually replaced every three to four years. But
            did you know it takes around 1,200 kg of metal-rich earths and almost
            200,000 litres of water to make a single laptop? So let’s change the
            way we treat laptops and other IT equipment to make for a better
            environment.
          </p>
          <button
            className="text-white font-semibold text-base lg:text-lg py-3 px-6 rounded-tr-full rounded-b-full transition duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(129deg, #21A783 0%, #21A783 100%)",
              boxShadow: "0 4px 24px rgba(33, 167, 131, 0.4784313725)",
            }}
          >
            Calculate how much you will save
          </button>
        </div>
      </div>
    </section>


    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-y-8 lg:gap-x-16 px-4 lg:px-16">

        {/* Right - Text Content */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-teal-900 text-2xl lg:text-3xl font-bold mb-4">
            Reduce resources, CO₂ and e-waste
          </h3>
          <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">
            Business laptops are usually replaced every three to four years. But
            did you know it takes around 1,200 kg of metal-rich earths and almost
            200,000 litres of water to make a single laptop? So let’s change the
            way we treat laptops and other IT equipment to make for a better
            environment.
          </p>
          <button
            className="text-white font-semibold text-base lg:text-lg py-3 px-6 rounded-tr-full rounded-b-full transition duration-200 hover:opacity-90"
            style={{
              background: "linear-gradient(129deg, #21A783 0%, #21A783 100%)",
              boxShadow: "0 4px 24px rgba(33, 167, 131, 0.4784313725)",
            }}
          >
            Calculate how much you will save
          </button>
        </div>

        {/* Left - Image Content */}
        <div className="w-full lg:w-1/2">
          <Image
            src={wasteImage}
            alt="Waste collection setup"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
    </>
  );
}
