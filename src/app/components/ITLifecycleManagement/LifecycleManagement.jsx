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
      title: "Asset Visibility",
      description:
        "Gain a clear understanding of all IT hardware and software assets, their location, and status.",
    },
    {
      id: 2,
      image: cardImage2,
      title: "Cost Optimization",
      description:
        "Identify underused or unnecessary assets to reduce waste and optimize spending.",
    },
    {
      id: 3,
      image: cardImage3,
      title: "Lifecycle Management",
      description:
        "Track each asset from acquisition to disposal, ensuring proper usage and secure retirement.",
      
    },
    {
      id: 4,
      image: cardImage3,
      title: "Compliance",
      description:
        "Maintain compliance with software licenses, regulatory requirements, and environmental standards.",
      
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#db8f1b] text-3xl md:text-4xl font-bold">
            IT Asset Management (ITAM) at Sun Circular IT Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            We provide tailored ITAM services to help businesses manage their IT hardware responsibly, reduce costs, and maximize the value of their technology investments.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-[#db8f1b] text-xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base mb-4">
                  {card.description.split(card.link)[0]}
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
