"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import brandLogo from "../../images/brand-logo.webp";

export default function CustomersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Duplicate the brands array to create an infinite loop effect
  const brands = [
    brandLogo,
    brandLogo,
    brandLogo,
    brandLogo,
    brandLogo,
    brandLogo,
    brandLogo,
    brandLogo,
    brandLogo,
  ];

  // Create a duplicated array for smooth infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      // When reaching the start, jump to the duplicate section
      if (newIndex < 0) {
        return brands.length - 1;
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      // When reaching the end of duplicated section, reset to start
      if (newIndex >= brands.length) {
        return 0;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center px-4 lg:px-8">
        <h3 className="text-teal-900 text-2xl lg:text-3xl font-bold mb-8">
          Customers of Circular IT group
        </h3>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-x-6">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 transition duration-200"
            aria-label="Previous"
          >
            &#8592;
          </button>

          {/* Brand Logos */}
          <div className="flex overflow-hidden w-full max-w-4xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / brands.length)}%)`,
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-20 lg:w-48 lg:h-24 mx-2"
                >
                  <Image
                    src={brand}
                    alt={`Brand ${(index % brands.length) + 1}`}
                    width={192}
                    height={96}
                    className="object-contain w-full h-full"
                    priority={index < 5}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 transition duration-200"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}