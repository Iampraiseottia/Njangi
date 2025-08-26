import React from "react";
import Image from "next/image";

import service_img from "/public/services/Service.png";

import { DollarSign } from "lucide-react";

import { motion } from "framer-motion";

const Service = () => {
  return (
    <main className="relative overflow-hidden bg-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Floating Cards Animation */}
        <div className="absolute top-10 right-10 w-16 h-10 bg-blue-200/30 rounded transform rotate-12 animate-float"></div>
        <div className="absolute top-32 right-32 w-12 h-8 bg-yellow-200/30 rounded transform -rotate-6 animate-float-delayed"></div>
        <div className="absolute bottom-20 right-20 w-14 h-9 bg-blue-300/30 rounded transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-20 right-64 w-10 h-6 bg-yellow-300/30 rounded transform -rotate-12 animate-float"></div>
        <div className="absolute bottom-32 right-8 w-12 h-7 bg-blue-200/30 rounded transform rotate-23 animate-float-delayed"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 mb-6"
          >
            -- WHAT WE ARE OFFERING --
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Experience very smooth and efficient njangi system while watching
            your finances move to another level with NJANGIFY .
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative animate-slide-in-left"
          >
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.03] transition-transform duration-500">
              <div className="aspect-[4/3] relative">
                <Image
                  src={service_img}
                  alt="Services Image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse-delayed"></div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-8 animate-slide-in-right"
          >
            <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-400/25 transition-shadow duration-300">
                <DollarSign />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Finance Boosting
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With NJANGIFY your finance boosting is one of our top
                  priorities. Be calm, join njangi groups and then sit back and
                  watch the magic unfolds.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-yellow-400/25 transition-shadow duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  Quick And Easy Setup
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Start or join njangi group in minutes with our intuitive
                  platform. Invite members, set contribution details, and begin
                  your journey effortlessly. Each group is verified by admins.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-400/25 transition-shadow duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Secure & Transparent
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your funds are protected with high-level security. We track
                  all transactions, contributions, and payouts with complete
                  transparency and real-time updates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Service;
