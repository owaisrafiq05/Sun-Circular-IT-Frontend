"use client";

import Image from "next/image";
import cardImage1 from "../../images/card-image1.webp";
import cardImage2 from "../../images/card-image2.webp";
import cardImage3 from "../../images/card-image3.webp";

export default function LifecycleManagement() {
  const cards = [
    {
      id: 1,
      image: cardImage1,
      title: "Device as a Service",
      description:
        "Discover our Device as a Service (DaaS). Advanced IT Lifecycle Management combined with circularity.",
      link: "Device as a Service",
    },
    {
      id: 2,
      image: cardImage2,
      title: "Purchase Options and Procurement",
      description:
        "The most flexible options for purchasing IT hardware, combined with our convenient procurement customer portal.",
      link: "purchasing IT hardware",
    },
    {
      id: 3,
      image: cardImage3,
      title: "Device configuration and deployment",
      description:
        "Users can start right away with their custom-configured devices. Easy deployment!",
      link: "custom-configured devices",
    },
    {
        id: 4,
        image: cardImage3,
        title: "Device configuration and deployment",
        description:
          "Users can start right away with their custom-configured devices. Easy deployment!",
        link: "custom-configured devices",
    },
    {
        id: 5,
        image: cardImage1,
        title: "Device as a Service",
        description:
          "Discover our Device as a Service (DaaS). Advanced IT Lifecycle Management combined with circularity.",
        link: "Device as a Service",
      },
      {
        id: 6,
        image: cardImage2,
        title: "Purchase Options and Procurement",
        description:
          "The most flexible options for purchasing IT hardware, combined with our convenient procurement customer portal.",
        link: "purchasing IT hardware",
    },  
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#005C38] text-3xl md:text-4xl font-bold">
            Hassle-free device lifecycle management.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            (laptops, PCs, smartphones, and tablets)
          </p>
          <p className="text-base md:text-lg text-gray-600 mt-2">
            Our unique combination of smart software and experienced staff
            allows us to offer the best device lifecycle management services in
            the market. From smooth purchasing, procurement, and reporting, to
            extending the lifespan and eventually replacing your devices.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="bg-white shadow-md rounded-lg">
              {/* Card Image */}
              <div className="relative w-full h-64">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-[#005C38] text-xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base mb-4">
                  {card.description.split(card.link)[0]}
                  <a
                    href="#"
                    className="text-teal-500 font-semibold hover:underline"
                  >
                    {card.link}
                  </a>
                  {card.description.split(card.link)[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
