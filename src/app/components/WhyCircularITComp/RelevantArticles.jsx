"use client";

import Image from "next/image";
import articleImage1 from "../../images/article1.jpg";
import articleImage2 from "../../images/article2.jpg";
import articleImage3 from "../../images/article3.avif";

export default function RelevantArticles() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-32">
        {/* Section Heading */}
        <h2 className="text-teal-900 text-3xl lg:text-4xl font-bold text-center mb-12">
          Relevant articles
        </h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <Image
              src={articleImage1}
              alt="Article 1"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-4">
              <span className="bg-teal-100 text-teal-600 text-xs uppercase px-2 py-1 rounded-full inline-block mb-3">
                News
              </span>
              <h3 className="text-teal-900 text-lg font-semibold mb-2">
                Elsevier donates residual value of laptops to Kinderen van de
                Voedselbank
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ❤️ Amsterdam, November 7, 2024 – Elsevier donates the residual
                value of written-off laptops to Children of the Food...
              </p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <Image
              src={articleImage2}
              alt="Article 2"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-4">
              <span className="bg-teal-100 text-teal-600 text-xs uppercase px-2 py-1 rounded-full inline-block mb-3">
                Blog
              </span>
              <h3 className="text-teal-900 text-lg font-semibold mb-2">
                High-Level Data Destruction
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Data turns to dust. Our new H5 and E5 shredders provide data
                destruction according to the highest standards, ensuring you...
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <Image
              src={articleImage3}
              alt="Article 3"
              width={400}
              height={200}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-4">
              <span className="bg-teal-100 text-teal-600 text-xs uppercase px-2 py-1 rounded-full inline-block mb-3">
                News
              </span>
              <h3 className="text-teal-900 text-lg font-semibold mb-2">
                Vereniging Eigen Huis donates old IT equipment to Het Vergeten
                Kind
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Amersfoort, 15 October 2024 – Vereniging Eigen Huis has donated
                the residual value of their decommissioned IT...
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            className="text-teal-600 border-2 border-teal-600 font-semibold text-lg py-2 px-8 rounded-tr-full rounded-b-full hover:bg-teal-600 hover:text-white transition duration-300"
          >
            More articles
          </button>
        </div>
      </div>
    </section>
  );
}
