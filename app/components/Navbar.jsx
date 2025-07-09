"use client";

import Image from "next/image";
import Link from "next/link";

import { ChevronDown, Menu, X } from "lucide-react";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import navLogo from "/public/icons/logo.png";

import globalStyle from '../globals.css' 


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1240 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to determine if link is active
  const isActive = (path) => {
    return pathname === path;
  };

  // Function to check if the current path is in an array of possible paths
  const isActiveInArray = (paths) => {
    return paths.some((path) => pathname === path);
  };

  return (
    <main className="min-h-[20vh] w-full relative z-50">
      {/* Sticky Header */}
      <nav
        className={`py-4 w-full transition-all duration-300 
        ${
          isScrolled
            ? "fixed top-0 left-0 bg-white shadow-lg mb-96 "
            : "pt-6 md:pt-20 bg-white"
        }`}
      >
        <div className="container mx-[5%] mt-3 mb-3 header-mid px-4 sm:px-6 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Image
                  src={navLogo}
                  alt="NJANGIFY Logo"
                  width={70}
                  height={60}
                  className={`h-auto transition-all duration-300 ${
                    isScrolled ? "w-[50px] md:w-[70px]" : "w-[60px] md:w-[90px]"
                  }`}
                />
                <span
                  className={`ml-2 md:ml-3 tracking-wide font-bold text-purple-600 transition-all duration-300 
                  ${
                    isScrolled ? "text-xl md:text-4xl" : "text-2xl md:text-4xl"
                  }`}
                >
                  NJANGIFY
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 focus:outline-none text-purple-500 mr-4"
            >
              {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>

          {/* Desktop Navigation  */}
          <div className="hidden xl:flex space-x-4 xl:space-x-9 ease-in-out duration-300">
            <Link
              href="/"
              className={`text-lg xl:text-[22px] font-semibold transition-colors duration-300 
              ${
                isActive("/")
                  ? "text-purple-500"
                  : "text-black hover:text-purple-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-lg xl:text-[22px] font-semibold transition-colors duration-300 
              ${
                isActive("/about")
                  ? "text-purple-500"
                  : "text-black hover:text-purple-600"
              }`}
            >
              About
            </Link>
            <Link
              href="/service"
              className={`text-lg xl:text-[22px] font-semibold transition-colors duration-300
              ${
                isActive("/service")
                  ? "text-purple-500"
                  : "text-black hover:text-purple-600"
              }`}
            >
              Service
            </Link>
            <Link
              href="/faqs"
              className={`text-lg xl:text-[22px] font-semibold transition-colors duration-300 
              ${
                isActive("/faqs")
                  ? "text-purple-500"
                  : "text-black hover:text-purple-600"
              }`}
            >
              FAQs
            </Link>
            <div className="relative group z-50">
              {" "}
              {/* Increased z-index here */}
              <button
                className={`text-lg xl:text-[22px] ease-in-out duration-300 font-semibold flex items-center 
              ${
                isActiveInArray([
                  "/blog",
                  "/blog-details-1",
                  "/blog-details-2",
                  "/blog-details-3",
                  "/our-team",
                  "/privacy-policy",
                  "/terms-conditions",
                ])
                  ? "text-purple-500"
                  : "text-black hover:text-purple-600"
              }`}
              >
                Pages <ChevronDown className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
              </button>
              <div className="absolute hidden bg-white w-60 border-t-2 border-t-purple-500 -ml-1 h-auto py-5 transition-all group-hover:block p-2 rounded shadow-lg">
                <Link
                  href="/blog"
                  className={`block py-2 pl-2 ease-in-out duration-200 text-[16px] xl:text-[18px] hover:text-lg xl:hover:text-xl hover:text-purple-600 font-semibold tracking-wide 
                    ${isActive("/blog") ? "text-purple-500" : "text-slate-800"}`}
                >
                  Blog
                </Link>
                <Link
                  href="/our-team"
                  className={`block py-2 pl-2 ease-in-out duration-200 text-[16px] xl:text-[18px] hover:text-lg xl:hover:text-xl hover:text-purple-600 font-semibold tracking-wide 
                    ${
                      isActive("/our-team") ? "text-purple-500" : "text-slate-800"
                    }`}
                >
                  Our Team
                </Link>

                <Link
                  href="/privacy-policy"
                  className={`block py-2 pl-2 ease-in-out duration-200 text-[16px] xl:text-[18px] hover:text-lg xl:hover:text-xl hover:text-purple-600 font-semibold tracking-wide 
                    ${
                      isActive("/privacy-policy")
                        ? "text-purple-500"
                        : "text-slate-800"
                    }`}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className={`block py-2 pl-2 ease-in-out duration-200 text-[16px] xl:text-[18px] hover:text-lg xl:hover:text-xl hover:text-purple-600 font-semibold tracking-wide 
                    ${
                      isActive("/terms-conditions")
                        ? "text-purple-500"
                        : "text-slate-800"
                    }`}
                >
                  Terms-Condition
                </Link>
              </div>
            </div>

            <Link
              href="/contact-us"
              className={`text-lg xl:text-[22px] font-semibold transition-colors duration-300 
              ${
                isActive("/contact-us")
                  ? "text-purple-500"
                  : "text-black hover:text-purple-600"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Right Section - Register Button */}
          <div className="hidden xl:flex items-center space-x-3 xl:space-x-5 -mr-40 header-mid2">
            <Link
              href="/register"
              className={`bg-purple-600 text-white font-extrabold tracking-wider ease-in-out cursor-pointer rounded hover:rounded-3xl  hover:bg-transparent hover:border-2 hover:border-purple-500 hover:text-purple-600  transition duration-300 
              ${
                isScrolled
                  ? "py-3 px-4 xl:py-3 xl:px-7 text-sm xl:text-base"
                  : "py-3 px-4 xl:py-4 xl:px-9 text-sm xl:text-base"
              }`}
            > 
              REGISTER
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`xl:hidden bg-white p-4 z-50 w-full ${
            isScrolled ? "fixed top-16" : "absolute"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`text-xl font-semibold 
              ${
                isActive("/")
                  ? "text-purple-500"
                  : "text-black hover:text-purple-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-xl font-semibold 
              ${
                isActive("/about")
                  ? "text-purple-500"
                  : "text-black hover:text-purple-600"
              }`}
            >
              About
            </Link>
            <Link
              href="/service"
              className={`text-xl font-semibold 
              ${
                isActive("/service")
                  ? "text-purple-500"
                  : "text-black hover:text-purple-600"
              }`}
            >
              Service
            </Link>
            <Link
              href="/faqs"
              className={`text-xl font-semibold 
              ${
                isActive("/faqs")
                  ? "text-purple-500"
                  : "text-black hover:text-purple-600"
              }`}
            >
              FAQs
            </Link>

            <div className="relative">
              <button
                onClick={() =>
                  document
                    .getElementById("mobilePages")
                    .classList.toggle("hidden")
                }
                className={`text-xl font-semibold flex items-center justify-between w-full ${
                  isActiveInArray([
                    "/blog",
                    "/blog-details-1",
                    "/blog-details-2",
                    "/blog-details-3",
                    "/our-team",
                    "/privacy-policy",
                    "/terms-conditions",
                  ])
                    ? "text-purple-500"
                    : "text-black hover:text-purple-600"
                }`}
              >
                Pages <ChevronDown className="ml-1 w-5 h-5" />
              </button>
              <div
                id="mobilePages"
                className="hidden bg-gray-100 mt-2 p-2 rounded"
              >
                <Link
                  href="/blog"
                  className={`block py-2 
                  ${
                    isActive("/blog")
                      ? "text-purple-500"
                      : "text-black hover:text-purple-600"
                  }`}
                >
                  Blog
                </Link>

                <Link
                  href="/our-team"
                  className={`block py-2 
                  ${
                    isActive("/our-team")
                      ? "text-purple-500"
                      : "text-black hover:text-purple-600"
                  }`}
                >
                  Our Team
                </Link>

                <Link
                  href="/privacy-policy"
                  className={`block py-2 
                  ${
                    isActive("/privacy-policy")
                      ? "text-purple-500"
                      : "text-black hover:text-purple-600"
                  }`}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className={`block py-2 
                  ${
                    isActive("/terms-conditions")
                      ? "text-purple-500"
                      : "text-black hover:text-purple-600"
                  }`}
                >
                  Terms-Condition
                </Link>
              </div>
            </div>

            <Link
              href="/contact-us"
              className={`text-xl font-semibold 
              ${
                isActive("/contact-us")
                  ? "text-purple-500"
                  : "text-black hover:text-purple-600"
              }`}
            >
              Contact
            </Link>

            <div className="flex items-center justify-between mt-4">
              <Link
                href="/donate-payment"
                className="bg-purple-600 text-white font-extrabold tracking-wider py-2 px-6 hover:text-white hover:bg-purple-500 rounded transition duration-300"
              >
                REGISTER
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Navbar;
