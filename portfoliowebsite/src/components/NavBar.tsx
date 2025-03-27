"use client";
import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-indigo-600">Portfolio</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-indigo-600 cursor-pointer"
            >
              Contact
            </a>
            <a href="/login" className="text-gray-700 hover:text-indigo-600">
              Login <ArrowRightIcon className="inline-block h-5 w-5 ml-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              >
                About
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
