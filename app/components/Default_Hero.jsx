"use client";

import React from "react";

import { motion } from "motion/react"

import Image from "next/image";

import heroImage from "/public/background/hero-bg.jpg"

const Default_Hero = ({
  title,
  firstDescription,
  MainDescription,
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className={`relative h-72 w-full`}> 
        <Image
          src={heroImage}
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/50" />
      </div>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-white font-extrabold text-3xl md:text-4xl lg:text-6xl mb-4 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        {/* Breadcrumb */}
        <motion.div
          className="flex items-center space-x-2 text-xl tracking-wider md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-white hover:text-purple-300 transition-colors cursor-pointer">
            {firstDescription}
          </span>
          <span className="text-white">&gt;</span>
          <span className="text-[cyan] font-medium">{MainDescription}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Default_Hero;
