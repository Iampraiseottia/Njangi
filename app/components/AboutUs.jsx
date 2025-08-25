import React, { useState, useEffect } from "react";

import { Play, CheckCircle, ArrowRight, Calendar } from "lucide-react";

import years_experience from "/public/about/about.png";
import calculation from "/public/about/about-1-2.jpg";
import money_bills from "/public/shapes/about-money-1-1.png";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden pt-16 md:pt-20 lg:pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="hidden md:block absolute top-16 sm:top-20 left-4 sm:left-10 opacity-10 transform rotate-12"
          animate={{ rotate: [12, 18, 12], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-12 h-6 sm:w-16 sm:h-8 bg-red-800 rounded"></div>
        </motion.div>

        <motion.div
          className="hidden md:block absolute top-24 sm:top-32 left-8 sm:left-20 opacity-10 transform -rotate-6"
          animate={{ rotate: [-6, 6, -6], scale: [1, 0.9, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-16 h-8 sm:w-20 sm:h-10 bg-green-800 rounded"></div>
        </motion.div>

        <motion.div
          className="hidden lg:block absolute top-32 sm:top-40 left-16 sm:left-32 opacity-10 transform rotate-45"
          animate={{ rotate: [45, 60, 45] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-10 h-5 sm:w-12 sm:h-6 bg-purple-800 rounded"></div>
        </motion.div>

        <motion.div
          className="hidden lg:block absolute bottom-32 sm:bottom-52 left-0 opacity-10 transform rotate-12"
          animate={{
            x: [0, 30, 0],
            rotate: [12, 0, 12],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            alt="Money Bills"
            src={money_bills}
            height={300}
            width={300}
            className="h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]"
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute bottom-16 sm:bottom-20 left-4 sm:left-8 opacity-10 transform -rotate-12"
          animate={{ rotate: [-12, -6, -12], y: [0, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-12 h-6 sm:w-14 sm:h-7 bg-yellow-800 rounded"></div>
        </motion.div>
      </div>

      {/* Curved decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            d="M300 0 Q400 100 400 200 Q300 300 200 300 Q100 200 200 100 Q300 0 300 0"
            fill="none"
            stroke="rgb(6, 182, 212)"
            strokeWidth="2"
          />
          <path
            d="M320 20 Q420 120 420 220 Q320 320 220 320 Q120 220 220 120 Q320 20 320 20"
            fill="none"
            stroke="rgb(6, 182, 212)"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-30"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M0 200 Q100 100 200 200"
            fill="none"
            stroke="rgb(6, 182, 212)"
            strokeWidth="3"
          />
          <path
            d="M20 200 Q100 120 180 200"
            fill="none"
            stroke="rgb(6, 182, 212)"
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <motion.div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12  ">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]">
          {/* Left Content */}
          <motion.div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-block"
              >
                <span className="text-blue-500 text-xs sm:text-sm font-semibold tracking-wide uppercase border-b-2 border-blue-500 pb-1">
                  -- WELCOME TO NJANGIFY
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                With <span className="text-blue-500">Njangify</span> Your
                <br />
                <span className="text-indigo-900">Dreams Come's True</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg"
              >
                Join the most trusted digital Njangi platform in Cameroon. Save
                together, grow together, and achieve your financial goals with
                our innovative rotating savings and credit association system.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  Quick Setup Process
                </span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  Finance Support
                </span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  Reliable and Secure
                </span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  Follow Up Members
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/register"
                className="group border-2 border-blue-500 text-blue-500 px-4 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium inline-flex items-center space-x-2 text-sm sm:text-base"
              >
                <span>JOIN A NJANGI</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <div className="relative order-1 lg:order-2">
            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute top-4 sm:top-8 left-4 sm:left-8 z-10 bg-blue-500 text-white p-3 sm:p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full mx-auto mb-2 sm:mb-4">
                <Calendar className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-3xl font-bold">5+</div>
                <div className="text-xs sm:text-sm opacity-90">
                  Years of Experience
                </div>
              </div>
            </motion.div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] relative">
                <Image
                  alt="Years of Experience"
                  className="w-full h-full object-cover"
                  src={years_experience}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 lg:bottom-0 lg:right-0 w-32 h-24 sm:w-40 sm:h-28 lg:w-48 lg:h-36 bg-white rounded-lg shadow-lg overflow-hidden transform translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4 border-2 sm:border-4 border-blue-500 animate-bounceLeftMoney mr-8 mb-3"
            >
              <Image
                alt="Calculation"
                className="w-full h-full object-cover"
                src={calculation}
                fill
                sizes="(max-width: 768px) 150px, 200px"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
