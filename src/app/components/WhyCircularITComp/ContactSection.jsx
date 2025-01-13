"use client";

import Image from "next/image";
import personImage from "../../images/contact-us.jpg";

export default function ContactSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left - Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[400px]">
              <Image
                src={personImage}
                alt="Contact Us"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right - Contact Content */}
          <div className="w-full lg:w-1/2">
            <div className="p-6">
              <h3 className="text-[#db8f1b] text-2xl font-bold mb-4">
                Join the Circular IT Movement
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                Embracing Circular IT is more than a business decision—it’s a
            commitment to a greener future. At Sun Circular IT Solutions, we
            make it easy for companies to transition to sustainable IT practices
            without sacrificing value or convenience.
                </p>
                
                <p className="text-gray-600">
                Let’s work together to make your IT management more sustainable.
                </p>
              </div>

              <button
            className="text-white font-semibold text-sm sm:text-base lg:text-lg py-1 px-4 rounded-full transition duration-200 hover:opacity-90 mt-6"
            style={{
              background: "linear-gradient(129deg, #db8f1b 0%, #db8f1b 100%)",
              boxShadow: "0 4px 24px rgba(219, 143, 27, 0.4784313725)",
            }}
          >
            Contact us today →
          </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}