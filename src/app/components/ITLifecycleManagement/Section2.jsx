"use client";

import Image from "next/image";
import lifecycleImage from "../../images/lifecycle-image.png";

export default function Section2() {
  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Heading */}
        <div className="text-center mb-6 md:w-[50%] flex justify-center flex-col gap-y-4 mx-auto">
          <p className="text-lg md:text-2xl">We’ve introduced a better approach to IT.</p>
          <p className="text-lg md:text-2xl">
            Our innovative IT Lifecycle Management will help you procure,
            deploy, manage and replace your IT hardware sustainably.
          </p>
          <p className="text-lg md:text-2xl">
            Through the right acquisition options and equipment choices upfront,
            clever management, lifecycle extension and optimisation, we achieve
            optimal results with our Lifecycle Management services.
          </p>
        </div>
      </div>
    </section>
  );
}
