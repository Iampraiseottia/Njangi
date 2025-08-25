import Image from "next/image";
import Link from "next/link";

import { Mail, Phone, Send } from "lucide-react";

import Facebook from "/public/icons/fb.png";
import Youtube from "/public/icons/tweeter.png";
import Instagram from "/public/icons/ig.png";
import LinkedIn from "/public/icons/linkedin.png";

import navLogo from "/public/icons/logo.png";

import globalStyle from "../globals.css";

const Footer = () => {
  return (
    <footer className="relative mt-8 sm:mt-10 md:mt-10 lg:mt-10 z-40">
      <div className="pt-12 sm:pt-14 md:pt-14 lg:pt-14">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-90 z-0"></div>

        {/* Background image */}
        <div className="absolute inset-0 z-0 opacity-90">
          <Image
            src="/shapes/footer-bg-1-1.png"
            alt="World Map Background"
            fill={true}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-indigo-800/85"></div>

        {/* Main content  */}
        <div className="relative mx-auto z-10 container px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-12 lg:py-12 pt-12 sm:pt-12 md:pt-12 lg:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {/* Company Info & Newsletter  */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center sm:justify-start gap-1 mb-4 sm:mb-6 -mt-10">
                <Image
                  src={navLogo}
                  alt="NJANGIFY Logo"
                  width={70}
                  height={60}
                  className="h-auto transition-all duration-300 w-16 sm:w-18 md:w-20"
                />
                <span className="text-white text-xl sm:text-2xl font-bold">
                  NJANGIFY
                </span>
              </div>

              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-center sm:text-left">
                It enables users to join, and create njangi groups, enhancing
                financial growth and fostering community collaboration for
                effective finances and wealth-building.
              </p>

              {/* Newsletter signup */}
              <div className="relative max-w-sm mx-auto sm:mx-0">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
                <button className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 p-1.5 sm:p-2 rounded-md hover:bg-blue-600 transition-colors">
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Explore Links */}
            <div className="text-center sm:text-left sm:ml-20">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Explore
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base inline-block relative group"
                  >
                    About Us
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-1000 ease-out"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base inline-block relative group"
                  >
                    Our Services
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-1000 ease-out"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base inline-block relative group"
                  >
                    Meet The Team
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-1000 ease-out"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base inline-block relative group"
                  >
                    Contact
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-1000 ease-out"></span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore Links (Secondary) */}
            <div className="text-center sm:text-left">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base inline-block relative group"
                  >
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-1000 ease-out"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base inline-block relative group"
                  >
                    Register
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-1000 ease-out"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base inline-block relative group"
                  >
                    FAQs
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-1000 ease-out"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base inline-block relative group"
                  >
                    Our Blog
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-1000 ease-out"></span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get In Touch - Full width on mobile, centered content */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center sm:text-left">
                Get In Touch
              </h4>
              <div className="space-y-3 sm:space-y-4 max-w-sm mx-auto sm:mx-0">
                {/* Address */}
                <div className="text-gray-300 text-sm sm:text-base text-center sm:text-left leading-relaxed">
                  Malingo, Buea, Cameroon
                </div>

                {/* Email */}
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="bg-blue-500 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                    <Mail className="text-white h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <a
                    href="mailto:njangify@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base break-all relative group"
                  >
                    njangify@gmail.com
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-1000 ease-out"></span>
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="bg-blue-500 p-1.5 sm:p-2 rounded-full flex-shrink-0">
                    <Phone className="text-white h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <a
                    href="tel:+237682777879"
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm sm:text-base relative group"
                  >
                    +237 682 777 879
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-1000 ease-out"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider  */}
          <hr className="border-gray-700 my-6 sm:my-8 md:my-10" />

          {/* Footer Bottom  */}
          <div className="flex flex-col gap-2 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 order-2 sm:order-1 mt-2">
              <Link
                href="#"
                className="bg-white p-2 sm:p-2.5 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Image
                  src={Facebook}
                  alt="Facebook Icon"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </Link>
              <Link
                href="#"
                className="bg-white p-2 sm:p-2.5 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Image
                  src={Youtube}
                  alt="Youtube Icon"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </Link>
              <Link
                href="#"
                className="bg-white p-2 sm:p-2.5 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Image
                  src={Instagram}
                  alt="Instagram Icon"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </Link>
              <Link
                href="#"
                className="bg-white p-2 sm:p-2.5 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Image
                  src={LinkedIn}
                  alt="LinkedIn Icon"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-right order-1 sm:order-2 leading-relaxed mb-2 ">
              © Copyright 2025 | NJANGIFY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
