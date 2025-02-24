"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCookieBite, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Stylish Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-[#db8f1b] via-[#db8f1b]/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-32 pt-12 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Column 1 - Company Info */}
          <div className="space-y-6">
            <div className="w-full max-w-md h-16 relative">
              <Image
                src={logo}
                alt="Circular IT group logo"
                layout="fill"
                objectFit="contain"
                className="max-w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/home"
                className="group block text-gray-600 hover:text-[#db8f1b] flex items-center text-base transition-colors duration-200"
              >
                Home
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link
                href="/about-us"
                className="group block text-gray-600 hover:text-[#db8f1b] flex items-center text-base transition-colors duration-200"
              >
                About Us
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link
                href="/contact-us"
                className="group block text-gray-600 hover:text-[#db8f1b] flex items-center text-base transition-colors duration-200"
              >
                Contact Us
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link
                href="/lifecycle-management"
                className="group block text-gray-600 hover:text-[#db8f1b] flex items-center text-base transition-colors duration-200"
              >
                IT Asset Management
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link
                href="/it-asset-disposition"
                className="group block text-gray-600 hover:text-[#db8f1b] flex items-center text-base transition-colors duration-200"
              >
                IT Asset Disposition
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
              <Link
                href="/why-circular-it"
                className="group block text-gray-600 hover:text-[#db8f1b] flex items-center text-base transition-colors duration-200"
              >
                Why Circular IT
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Contact */}
          <div className="space-y-6">
            <h3 className="text-[#db8f1b] text-xl font-bold mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:info@suncircularit.com"
                className="group flex items-center text-gray-600 hover:text-[#db8f1b] text-base transition-colors duration-200"
              >
                <MdEmail className="mr-2 text-lg" />
                info@suncircularit.com 
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
              <a
                href="tel:02034321143"
                className="group flex items-center text-gray-600 hover:text-[#db8f1b] text-base transition-colors duration-200"
              >
                <MdPhone className="mr-2 text-lg" />
                02034321143
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
              <a
                href="https://www.linkedin.com/company/sun-circular-it/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-gray-600 hover:text-[#db8f1b] text-base transition-colors duration-200"
              >
                <FaLinkedin className="mr-2 text-lg" />
                Linkedin
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
              <p className="text-gray-600 text-base flex items-start">
                <FaSearchLocation className="mr-2 mt-1 text-lg"/>
                Airport House, Purley Way, London, CR0 0XZ
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-wrap gap-6 items-center pt-6 border-t border-gray-200">
          <Link
            href="/privacy"
            className="group text-gray-600 hover:text-[#db8f1b] flex items-center text-sm transition-colors duration-200"
          >
            Privacy Policy
            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

