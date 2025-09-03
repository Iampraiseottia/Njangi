"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronDown, Menu, X } from "lucide-react";

import { useState, useEffect } from "react";

import { motion } from "motion/react";

import navLogo from "/public/icons/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if a link is active
  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Check if any pages dropdown link is active
  const isPagesActive = () => {
    const pagesRoutes = [
      "/blog",
      "/our-team",
      "/privacy-policy",
      "/terms-conditions",
    ];
    return pagesRoutes.some(
      (route) => pathname === route || pathname.startsWith(route + "/")
    );
  };

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

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      viewport={{ once: true }}
      className="w-full bg-white dark:bg-gray-900 shadow-lg text-black dark:text-white"
    >
      <div className="relative z-50">
        {/* Sticky Header */}
        <nav
          className={`py-4 w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-lg text-black dark:text-white py-2 sm:py-5"
            : "pt-7 md:pt-12"
        }`}
        >
          <div className="container mx-[5%] header-mid px-4 sm:px-6 flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  <Image
                    src={navLogo}
                    alt="Njangify Logo"
                    width={80}
                    height={70}
                    className={`h-auto transition-all duration-300 
                    ${
                      isScrolled
                        ? "w-[60px] md:w-[70px]"
                        : "w-[60px] md:w-[90px]"
                    }`}
                  />
                  <span
                    className={`ml-2 md:ml-3 tracking-wider font-extrabold transition-all duration-300 
                  ${
                    isScrolled
                      ? "text-xl md:text-3xl text-black dark:text-white"
                      : "text-2xl md:text-[40px] text-black dark:text-white"
                  }`}
                  >
                    NJANGIFY
                  </span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button  */}
            <div className="xl:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 focus:outline-none mr-4 
                  ${isScrolled ? "text-black dark:text-white" : "text-white"}`}
              >
                {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex space-x-4 xl:space-x-9 ease-in-out duration-300">
              <Link
                href="/"
                className={`text-lg xl:text-2xl font-semibold transition-colors duration-300 ${
                  isActiveLink("/")
                    ? "text-blue-700 dark:text-[gold]"
                    : isScrolled
                    ? "text-gray-700 dark:text-white hover:text-yellow-200"
                    : "text-black dark:text-white hover:text-yellow-200"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-lg xl:text-[22px] font-semibold transition-colors duration-300 ${
                  isActiveLink("/about")
                    ? "text-blue-700 dark:text-[gold]"
                    : isScrolled
                    ? "text-gray-700 dark:text-white hover:text-yellow-200"
                    : "text-black dark:text-white hover:text-yellow-200"
                }`}
              >
                About
              </Link>
              <Link
                href="/service"
                className={`text-lg xl:text-[22px] font-semibold transition-colors duration-300 ${
                  isActiveLink("/service")
                    ? "text-blue-700 dark:text-[gold]"
                    : isScrolled
                    ? "text-gray-700 dark:text-white hover:text-yellow-200"
                    : "text-black dark:text-white hover:text-yellow-200"
                }`}
              >
                Service
              </Link>
              <Link
                href="/testimonials"
                className={`text-lg xl:text-[22px] font-semibold transition-colors duration-300 ${
                  isActiveLink("/testimonials")
                    ? "text-blue-700 dark:text-[gold]"
                    : isScrolled
                    ? "text-gray-700 dark:text-white hover:text-yellow-200"
                    : "text-black dark:text-white hover:text-yellow-200"
                }`}
              >
                Testimonials
              </Link>
              <Link
                href="/faqs"
                className={`text-lg xl:text-[22px] font-semibold transition-colors duration-300 ${
                  isActiveLink("/faqs")
                    ? "text-blue-700 dark:text-[gold]"
                    : isScrolled
                    ? "text-gray-700 dark:text-white hover:text-yellow-200"
                    : "text-black dark:text-white hover:text-yellow-200"
                }`}
              >
                FAQs
              </Link>
              <div className="relative group z-10">
                <button
                  className={`text-lg xl:text-[22px] ease-in-out duration-300 font-semibold flex items-center transition-colors ${
                    isPagesActive()
                      ? "text-blue-700 dark:text-[gold]"
                      : isScrolled
                      ? "text-gray-700 dark:text-white hover:text-yellow-200"
                      : "text-black dark:text-white hover:text-yellow-200"
                  }`}
                >
                  Pages <ChevronDown className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
                </button>
                <div className="absolute hidden bg-white w-60 border-t-2 border-t-blue-600 -ml-1 h-auto py-5 transition-all group-hover:block p-2 rounded shadow-lg">
                  <Link
                    href="/blog"
                    className={`block py-2 pl-2 ease-in-out duration-200 text-[16px] xl:text-[18px] hover:text-lg xl:hover:text-xl font-semibold tracking-wide ${
                      isActiveLink("/blog")
                        ? "text-blue-600"
                        : "text-slate-800 hover:text-blue-600"
                    }`}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/our-team"
                    className={`block py-2 pl-2 ease-in-out duration-200 text-[16px] xl:text-[18px] hover:text-lg xl:hover:text-xl font-semibold tracking-wide ${
                      isActiveLink("/our-team")
                        ? "text-blue-600"
                        : "text-slate-800 hover:text-blue-600"
                    }`}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className={`block py-2 pl-2 ease-in-out duration-200 text-[16px] xl:text-[18px] hover:text-lg xl:hover:text-xl font-semibold tracking-wide ${
                      isActiveLink("/privacy-policy")
                        ? "text-blue-600"
                        : "text-slate-800 hover:text-blue-600"
                    }`}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-conditions"
                    className={`block py-2 pl-2 ease-in-out duration-200 text-[16px] xl:text-[18px] hover:text-lg xl:hover:text-xl font-semibold tracking-wide ${
                      isActiveLink("/terms-conditions")
                        ? "text-blue-600"
                        : "text-slate-800 hover:text-blue-600"
                    }`}
                  >
                    Terms-Condition
                  </Link>
                </div>
              </div>

              <Link
                href="/contact-us"
                className={`text-lg xl:text-[22px] font-semibold transition-colors duration-300 ${
                  isActiveLink("/contact-us")
                    ? "text-blue-700 dark:text-[gold]"
                    : isScrolled
                    ? "text-gray-700 dark:text-white hover:text-yellow-200"
                    : "text-black dark:text-white hover:text-yellow-200"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Desktop Right Section  */}
            <div className="hidden xl:flex items-center space-x-3 xl:space-x-5 -mr-40 header-mid2">
              <Link
                href="/register"
                className={`bg-blue-600 text-white font-extrabold ease-in-out cursor-pointer rounded hover:rounded-3xl hover:text-blue-500 hover:bg-yellow-300 transition duration-300 tracking-wider 
                ${
                  isScrolled
                    ? "py-2 px-4 xl:py-2 xl:px-14 text-sm xl:text-xl"
                    : "py-2 px-4 xl:py-2 xl:px-9 text-sm xl:text-xl"
                }`}
              >
                Become a Member
              </Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`xl:hidden p-4 z-50 w-full ${
              isScrolled
                ? "fixed top-16 bg-white dark:bg-gray-900 shadow-lg"
                : "absolute bg-gray-900"
            }`}
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`text-xl font-semibold transition-colors duration-300 ${
                  isActiveLink("/")
                    ? "text-blue-700 dark:text-[gold]"
                    : isScrolled
                    ? "text-gray-900 dark:text-white hover:text-yellow-200"
                    : "text-[gold] hover:text-yellow-200"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-xl font-semibold transition-colors duration-300 ${
                  isActiveLink("/about")
                    ? "text-blue-700 dark:text-[gold]"
                    : isScrolled
                    ? "text-gray-900 dark:text-white hover:text-yellow-200"
                    : "text-white hover:text-yellow-200"
                }`}
              >
                About
              </Link>
              <Link
                href="/service"
                className={`text-xl font-semibold transition-colors duration-300 ${
                  isActiveLink("/service")
                    ? "text-blue-700 dark:text-[gold]"
                    : isScrolled
                    ? "text-gray-900 dark:text-white hover:text-yellow-200"
                    : "text-white hover:text-yellow-200"
                }`}
              >
                Service
              </Link>
              <Link
                href="/testimonials"
                className={`text-xl font-semibold transition-colors duration-300 ${
                  isActiveLink("/testimonials")
                    ? "text-blue-700 dark:text-[gold]"
                    : isScrolled
                    ? "text-gray-900 dark:text-white hover:text-yellow-200"
                    : "text-white hover:text-yellow-200"
                }`}
              >
                Testimonials
              </Link>
              <Link
                href="/faqs"
                className={`text-xl font-semibold transition-colors duration-300 ${
                  isActiveLink("/faqs")
                    ? "text-blue-700 dark:text-[gold]"
                    : isScrolled
                    ? "text-gray-900 dark:text-white hover:text-yellow-200"
                    : "text-white hover:text-yellow-200"
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
                  className={`text-xl font-semibold flex items-center justify-between w-full transition-colors duration-300 ${
                    isPagesActive()
                      ? "text-blue-700 dark:text-[gold]"
                      : isScrolled
                      ? "text-gray-900 dark:text-white hover:text-yellow-200"
                      : "text-white hover:text-yellow-200"
                  }`}
                >
                  Pages <ChevronDown className="ml-1 w-5 h-5" />
                </button>
                <div
                  id="mobilePages"
                  className="hidden bg-gray-800 mt-2 p-2 rounded"
                >
                  <Link
                    href="/blog"
                    className={`block py-2 transition-colors duration-300 ${
                      isActiveLink("/blog")
                        ? "text-yellow-500"
                        : "text-white hover:text-yellow-500"
                    }`}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/our-team"
                    className={`block py-2 transition-colors duration-300 ${
                      isActiveLink("/our-team")
                        ? "text-yellow-500"
                        : "text-white hover:text-yellow-500"
                    }`}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className={`block py-2 transition-colors duration-300 ${
                      isActiveLink("/privacy-policy")
                        ? "text-yellow-500"
                        : "text-white hover:text-yellow-500"
                    }`}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-conditions"
                    className={`block py-2 transition-colors duration-300 ${
                      isActiveLink("/terms-conditions")
                        ? "text-yellow-500"
                        : "text-white hover:text-yellow-500"
                    }`}
                  >
                    Terms-Condition
                  </Link>
                </div>
              </div>

              <Link
                href="/contact-us"
                className={`text-xl font-semibold transition-colors duration-300 ${
                  isActiveLink("/contact-us")
                    ? "text-blue-700 dark:text-[gold]"
                    : isScrolled
                    ? "text-gray-900 dark:text-white hover:text-yellow-200"
                    : "text-white hover:text-yellow-200"
                }`}
              >
                Contact
              </Link>

              <div className="flex items-center justify-between mt-4">
                <Link
                  href="/register"
                  className="bg-blue-800 text-white font-extrabold py-2 px-6 hover:text-[violet] rounded hover:bg-yellow-300 transition duration-300"
                >
                  REGISTER
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
