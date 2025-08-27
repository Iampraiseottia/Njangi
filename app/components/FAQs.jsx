import React from "react";

import { motion } from "framer-motion";

const FAQs = () => {
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
    </div>
  );
};

export default FAQs;
