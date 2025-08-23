import React from "react";

import { Play, CheckCircle, ArrowRight, Calendar } from "lucide-react";

import years_experience from "/public/about/about.png";
import calculation from "/public/about/about-1-2.jpg";
import money_bills from "/public/shapes/about-money-1-1.png";

import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* money bills */}
        <div className="absolute top-20 left-10 opacity-10 transform rotate-12">
          <div className="w-16 h-8 bg-red-800 rounded"></div>
        </div>
        <div className="absolute top-32 left-20 opacity-10 transform -rotate-6">
          <div className="w-20 h-10 bg-green-800 rounded"></div>
        </div>
        <div className="absolute top-40 left-32 opacity-10 transform rotate-45">
          <div className="w-12 h-6 bg-purple-800 rounded"></div>
        </div>
        <div className="absolute bottom-52 left-0 opacity-10 transform rotate-12 ">
          <Image
            alt="Money Bills"
            src={money_bills}
            height={400}
            width={400}
            className="h-[400px] w-[400px] animate-bounceLeftMoney "
          />
        </div>
        <div className="absolute bottom-20 left-8 opacity-10 transform -rotate-12">
          <div className="w-14 h-7 bg-yellow-800 rounded"></div>
        </div>
      </div>

      {/* Curved decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
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
      </div>

      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-30">
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
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-cyan-500 text-sm font-semibold tracking-wide uppercase border-b-2 border-cyan-500 pb-1">
                  -- WELCOME TO NJANGIFY
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                With <span className="text-cyan-500">Njangify</span> Your
                <br />
                <span className="text-indigo-900">Dreams Come's True</span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed">
                Join the most trusted digital Njangi platform in Cameroon. Save
                together, grow together, and achieve your financial goals with
                our innovative rotating savings and credit association system.
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                <span className="text-gray-700 font-medium">
                  Quick Setup Process
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                <span className="text-gray-700 font-medium">
                  Finance Support
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                <span className="text-gray-700 font-medium">
                  Reliable and Secure
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                <span className="text-gray-700 font-medium">
                  Follow Up Members
                </span>
              </div>
            </div>

            <Link href="/register" className="group border-2 border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 font-medium inline-flex items-center space-x-2">
              <span>JOIN A NJANGI</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Experience Badge */}
            <div className="absolute top-8 left-8 z-20 bg-cyan-500 text-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full ml-8 mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm opacity-90">Years of Experience</div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="w-full h-[500px] relative">
                  <Image
                    alt="Years of Experience"
                    className="w-full h-full object-cover"
                    src={years_experience}
                    height={500}
                    width={400}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-0 right-0 w-48 h-36 bg-white rounded-lg shadow-lg overflow-hidden transform translate-x-4 translate-y-4 mr-7 mb-10 animate-bounceLeftMoney">
              <div className="h-full bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center border-4 border-cyan-500">
                <Image
                    alt="Years of Experience"
                    className="w-full h-full object-cover "
                    src={calculation}
                    height={310}
                    width={200}
                  />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
