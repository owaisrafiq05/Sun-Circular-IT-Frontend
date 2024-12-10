"use client";

import Link from "next/link";
import { FaCookieBite, FaLinkedin, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-teal-500 pt-12 pb-8 lg:px-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-32">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1 - Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
              Circular IT group
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/home"
                className="group block text-white hover:text-gray-200 flex items-center text-base sm:text-lg"
              >
                Home
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link
                href="/about-us"
                className="group block text-white hover:text-gray-200 flex items-center text-base sm:text-lg"
              >
                About Us
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link
                href="/contact-us"
                className="group block text-white hover:text-gray-200 flex items-center text-base sm:text-lg"
              >
                Contact Us
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link
                href="/it-recycling"
                className="group block text-white hover:text-gray-200 flex items-center text-base sm:text-lg"
              >
                IT Recycling
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link
                href="/it-asset-management"
                className="group block text-white hover:text-gray-200 flex items-center text-base sm:text-lg"
              >
                IT Asset Management
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link
                href="/it-asset-disposition"
                className="group block text-white hover:text-gray-200 flex items-center text-base sm:text-lg"
              >
                IT Asset Disposition
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link
                href="/why-circular-it"
                className="group block text-white hover:text-gray-200 flex items-center text-base sm:text-lg"
              >
                Why Circular IT
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-lg sm:text-xl font-bold mb-4">
              Contact
            </h3>
            <a
              href="mailto:info@circularitgroup.com"
              className="group flex items-center text-white hover:text-gray-200 text-base sm:text-lg"
            >
              <span className="mr-2">✉</span>
              info@circularitgroup.com
              <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
            <a
              href="tel:+31889907500"
              className="group flex items-center text-white hover:text-gray-200 text-base sm:text-lg"
            >
              <span className="mr-2">☏</span>
              +31 (0) 88 – 990 7500
              <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center text-white hover:text-gray-200 text-base sm:text-lg"
            >
              <FaLinkedin className="mr-2" />
              Linkedin
              <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>

          {/* Column 3 - Newsletter Signup */}
          <div className="bg-white rounded-lg p-4 sm:p-6">
            <h3 className="text-[#005C38] text-lg sm:text-xl font-bold mb-4">
              Stay up to date about Circular IT group
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Your emailaddress
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-tr-full rounded-b-full focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Enter your email"
                />
              </div>
              <button
                className="w-full text-white font-semibold text-base sm:text-lg py-2 px-4 rounded-tr-full rounded-b-full transition duration-200 hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(129deg, #db8f1b 0%, #db8f1b 100%)",
                  boxShadow: "0 4px 24px rgba(219, 143, 27, 0.4784313725)",
                }}
              >
                Subscribe newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-wrap gap-4 items-center pt-6 border-t border-emerald-400 text-sm sm:text-base">
          <FaCookieBite className="text-white" />
          <Link
            href="/privacy"
            className="group text-white hover:text-gray-200 flex items-center"
          >
            Privacy Policy
            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Link>
          <Link
            href="/cookies"
            className="group text-white hover:text-gray-200 flex items-center"
          >
            Cookie Policy
            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Link>
          <Link
            href="/principles"
            className="group text-white hover:text-gray-200 flex items-center"
          >
            Principles Statement
            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
