"use client";

import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useRouter } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-teal-500 sticky top-0 z-50 font-montserrat">
      <div className="container mx-auto py-8 px-4 lg:px-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-white text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer hover:text-[#EEEEEE] transition-colors duration-200"
            onClick={() => handleNavigation("/")}
          >
            Circular IT group
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-3xl transition-transform duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IoMdClose className="rotate-180" /> : <HiMenu />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Circular IT Dropdown */}
            <div className="group relative">
              <button
                onMouseEnter={() => setOpenDropdown("Circular IT")}
                className="text-white text-2xl font-semibold hover:text-[#EEEEEE] flex justify-center items-center gap-x-2 cursor-pointer"
              >
                Circular IT <IoIosArrowDropdown />
              </button>
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className={`fixed top-[100px] left-0 w-full bg-white shadow-lg py-6 transition-all duration-300 ease-in-out transform origin-top ${
                  openDropdown === "Circular IT"
                    ? "opacity-100 scale-y-100"
                    : "opacity-0 scale-y-0 pointer-events-none"
                }`}
              >
                <div className="container mx-auto py-16">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
                    <div 
                      onClick={() => handleNavigation("/")}
                      className="text-2xl font-bold text-gray-800 hover:text-teal-500 transition-colors duration-200 flex items-center gap-x-2 cursor-pointer"
                    >
                      Home <FaArrowRight className="inline-block" />
                    </div>
                    <div 
                      onClick={() => handleNavigation("/why-circular-it")}
                      className="text-2xl font-bold text-gray-800 hover:text-teal-500 transition-colors duration-200 flex items-center gap-x-2 cursor-pointer"
                    >
                      Why Circular IT? <FaArrowRight className="inline-block" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Dropdown */}
            <div className="group relative">
              <button
                onMouseEnter={() => setOpenDropdown("Portfolio")}
                className="text-white text-2xl font-semibold hover:text-[#EEEEEE] flex justify-center items-center gap-x-2 cursor-pointer"
              >
                Portfolio <IoIosArrowDropdown />
              </button>
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className={`fixed top-[100px] left-0 w-full bg-white shadow-lg py-6 transition-all duration-300 ease-in-out transform origin-top ${
                  openDropdown === "Portfolio"
                    ? "opacity-100 scale-y-100"
                    : "opacity-0 scale-y-0 pointer-events-none"
                }`}
              >
                <div className="container mx-auto py-16">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8">
                    <div 
                      onClick={() => handleNavigation("/lifecycle-management")}
                      className="text-2xl font-bold text-gray-800 hover:text-teal-500 transition-colors duration-200 flex items-center gap-x-2 cursor-pointer"
                    >
                      IT recycling <FaArrowRight className="inline-block" />
                    </div>
                    <div 
                      onClick={() => handleNavigation("/it-asset-management")}
                      className="text-2xl font-bold text-gray-800 hover:text-teal-500 transition-colors duration-200 flex items-center gap-x-2 cursor-pointer"
                    >
                      IT asset management <FaArrowRight className="inline-block" />
                    </div>
                    <div 
                      onClick={() => handleNavigation("/it-asset-disposition")}
                      className="text-2xl font-bold text-gray-800 hover:text-teal-500 transition-colors duration-200 flex items-center gap-x-2 cursor-pointer"
                    >
                      IT asset disposition <FaArrowRight className="inline-block" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleNavigation("/about")}
              className="text-white text-2xl font-semibold hover:text-[#EEEEEE] transition-colors duration-200 cursor-pointer"
            >
              About us
            </button>
            <button 
              onClick={() => handleNavigation("/contact")}
              className="text-white text-2xl font-semibold hover:text-[#EEEEEE] transition-colors duration-200 cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Language Switch - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => handleNavigation("/resellers")}
              className="text-white text-2xl font-semibold hover:text-[#EEEEEE] transition-colors duration-200 cursor-pointer"
            >
              Resellers
            </button>
            <button className="text-white text-2xl font-semibold hover:text-[#EEEEEE] transition-colors duration-200 cursor-pointer">
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 max-h-[1000px]"
              : "opacity-0 -translate-y-4 max-h-0"
          } overflow-hidden`}
        >
          <div className="flex flex-col space-y-4 pt-6">
            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "Circular IT" ? null : "Circular IT")}
                className="text-white text-xl font-semibold w-full text-left flex items-center justify-between cursor-pointer"
              >
                Circular IT
                <IoIosArrowDropdown
                  className={`transform transition-transform duration-300 ${
                    openDropdown === "Circular IT" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out transform origin-top overflow-hidden ${
                  openDropdown === "Circular IT"
                    ? "opacity-100 max-h-[500px]"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="bg-teal-600 mt-2 p-4">
                  <div className="space-y-4">
                    <div 
                      onClick={() => handleNavigation("/")}
                      className="text-white text-lg font-semibold flex items-center gap-x-2 cursor-pointer hover:text-[#EEEEEE] transition-colors duration-200"
                    >
                      Home <FaArrowRight className="inline-block" />
                    </div>
                    <div 
                      onClick={() => handleNavigation("/why-circular-it")}
                      className="text-white text-lg font-semibold flex items-center gap-x-2 cursor-pointer hover:text-[#EEEEEE] transition-colors duration-200"
                    >
                      Why Circular IT? <FaArrowRight className="inline-block" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setOpenDropdown(openDropdown === "Portfolio" ? null : "Portfolio")}
                className="text-white text-xl font-semibold w-full text-left flex items-center justify-between cursor-pointer"
              >
                Portfolio
                <IoIosArrowDropdown
                  className={`transform transition-transform duration-300 ${
                    openDropdown === "Portfolio" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out transform origin-top overflow-hidden ${
                  openDropdown === "Portfolio"
                    ? "opacity-100 max-h-[500px]"
                    : "opacity-0 max-h-0"
                }`}
              >
                <div className="bg-teal-600 mt-2 p-4">
                  <div className="space-y-4">
                    <div 
                      onClick={() => handleNavigation("/lifecycle-management")}
                      className="text-white text-lg font-semibold flex items-center gap-x-2 cursor-pointer hover:text-[#EEEEEE] transition-colors duration-200"
                    >
                      IT recycling <FaArrowRight className="inline-block" />
                    </div>
                    <div 
                      onClick={() => handleNavigation("/it-asset-management")}
                      className="text-white text-lg font-semibold flex items-center gap-x-2 cursor-pointer hover:text-[#EEEEEE] transition-colors duration-200"
                    >
                      IT asset management <FaArrowRight className="inline-block" />
                    </div>
                    <div 
                      onClick={() => handleNavigation("/it-asset-disposition")}
                      className="text-white text-lg font-semibold flex items-center gap-x-2 cursor-pointer hover:text-[#EEEEEE] transition-colors duration-200"
                    >
                      IT asset disposition <FaArrowRight className="inline-block" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleNavigation("/about")}
              className="text-white text-xl font-semibold text-left cursor-pointer hover:text-[#EEEEEE] transition-colors duration-200"
            >
              About us
            </button>
            <button 
              onClick={() => handleNavigation("/contact")}
              className="text-white text-xl font-semibold text-left cursor-pointer hover:text-[#EEEEEE] transition-colors duration-200"
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavigation("/resellers")}
              className="text-white text-xl font-semibold text-left cursor-pointer hover:text-[#EEEEEE] transition-colors duration-200"
            >
              Resellers
            </button>
            <button className="text-white text-xl font-semibold text-left cursor-pointer hover:text-[#EEEEEE] transition-colors duration-200">
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}