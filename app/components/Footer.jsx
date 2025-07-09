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
    <footer className="relative mt-16 md:mt-0">
      <div className="pt-20 md:pt-0">
        <div className="absolute inset-0 bg-gray-900 opacity-90 z-0"></div>

        <div className="absolute inset-0 z-0 opacity-90">
          <Image
            src="/shapes/footer-bg-1-1.png"
            alt="World Map Background"
            fill={true}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/95 to-indigo-800/85"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src={navLogo}
                  alt="NJANGIFY Logo"
                  width={70}
                  height={60}
                  className={`h-auto transition-all duration-300 w-20 `}
                />
                <span className="text-white text-2xl font-bold">NJANGIFY</span>
              </div>

              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                It enables users to join, and create njangi groups, enhancing
                financial growth and fostering community collaboration for
                effective finances and wealth-building.
              </p>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-4 py-3 bg-white rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cyan-500 p-2 rounded-md hover:bg-cyan-600 transition-colors">
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-6">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Meet The Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Recent News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Loan Services */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-6">
                Loan Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/bike-loan"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Bike Loan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/home-loan"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Home Loan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/study-loan"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Abroad Study Loan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business-loan"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Business Loan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/personal-loan"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Personal Loan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-6">
                Get InTouch
              </h4>
              <div className="space-y-4">
                <div className="text-gray-300 text-sm">
                  85 Ketch Harbour Road Bensal PA 19020
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-cyan-500 p-2 rounded-full">
                    <Mail className="text-white h-4 w-4" />
                  </div>
                  <a
                    href="mailto:needhelp@company.com"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    needhelp@company.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-cyan-500 p-2 rounded-full">
                    <Phone className="text-white h-4 w-4" />
                  </div>
                  <a
                    href="tel:+915698003642"
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    +91 5698 0036 420
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-10" />

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex justify-center md:justify-start gap-4 mb-4 md:mb-0">
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Image src={Facebook} alt="Facebook Icon" className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Image src={Youtube} alt="Youtube Icon" className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Image src={Instagram} alt="Instagram Icon" className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <Image src={LinkedIn} alt="LinkedIn Icon" className="w-5 h-5" />
              </Link>
            </div>

            <p className="text-gray-400 text-sm text-center md:text-right">
              © Copyright 2025 By NJANGIFY HTML Template.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;