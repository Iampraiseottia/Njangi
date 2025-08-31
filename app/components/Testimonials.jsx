"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Users } from "lucide-react";

import testimony1 from "/public/testimonials/testimony.jpeg";
import testimony2 from "/public/testimonials/testimony2.jpeg";
import testimony3 from "/public/testimonials/testimony3.jpeg";
import testimony4 from "/public/testimonials/testimony4.jpeg";
import testimony5 from "/public/testimonials/testimony5.jpeg";
import testimony6 from "/public/testimonials/testimony6.jpeg";

import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mbeuh",
      role: "Small Business Owner",
      location: "Limbe, Cameroon 🇨🇲",
      image: testimony1,
      rating: 5,
      text: "NJANGIFY has completely transformed my financial status. It has greatly helped me boost my standard of living and finance.",
      amount: "35%",
      TestimonyAlt: "Photo of Sarah Mbeuh",
    },
    {
      id: 2,
      name: "Jean-Claude Fotso",
      role: "Teacher",
      location: "Yaoundé, Cameroon 🇨🇲",
      image: testimony2,
      rating: 4.5,
      text: "The transparency and security of NJANGIFY gives me peace of mind. I can track every contribution and payout in real-time.",
      amount: "25%",
      TestimonyAlt: "Photo of Jean-Claude Fotso",
    },
    {
      id: 3,
      name: "Marie Ngono",
      role: "Entrepreneur",
      location: "Bafoussam, Cameroon 🇨🇲",
      image: testimony3,
      rating: 5,
      text: "Join various njangi group was so simple with NJANGIFY. The platform handles everything automatically - contributions, rotations, and notifications. Highly recommended!",
      amount: "20%",
      TestimonyAlt: "Photo of Marie Ngono",
    },
    {
      id: 4,
      name: "Paul Kamga",
      role: "Civil Servant",
      location: "Bamenda, Cameroon 🇨🇲",
      image: testimony4,
      rating: 4,
      text: "I was skeptical about njangi at first, but NJANGIFY proved me wrong. The system is reliable, secure, and has helped me achieve my financial goals faster.",
      amount: "18%",
      TestimonyAlt: "Photo of Paul Kamga",
    },
    {
      id: 5,
      name: "Patience Nkomo",
      role: "Market Vendor",
      location: "Douala, Cameroon 🇨🇲",
      image: testimony5,
      rating: 4.5,
      text: "With NJANGIFY, I don't have to worry about collecting money from group members manually. Everything is automated and transparent. It's a game-changer!",
      amount: "24%",
      TestimonyAlt: "Photo of Patience Nkomo",
    },
    {
      id: 6,
      name: "Emmanuel Tabi",
      role: "IT Professional",
      location: "kumba, Cameroon 🇨🇲",
      image: testimony6,
      rating: 5,
      text: "The user interface is intuitive and makes it easy to manage my njangi groups. I can focus on my work and other life.",
      amount: "33%",
      TestimonyAlt: "Photo of Emmanuel Tabi",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <main className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-16 h-10 bg-blue-200/20 dark:bg-blue-400/10 rounded transform rotate-12 animate-float"></div>
        <div className="absolute top-32 left-32 w-12 h-8 bg-yellow-200/20 dark:bg-yellow-400/10 rounded transform -rotate-6 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-14 h-9 bg-green-200/20 dark:bg-green-400/10 rounded transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-20 left-64 w-10 h-6 bg-purple-200/20 dark:bg-purple-400/10 rounded transform -rotate-12 animate-float"></div>
        <div className="absolute bottom-32 left-8 w-12 h-7 bg-pink-200/20 dark:bg-pink-400/10 rounded transform rotate-23 animate-float-delayed"></div>

        {/* Right side floating elements */}
        <div className="absolute top-16 right-12 w-20 h-12 bg-indigo-200/20 dark:bg-indigo-400/10 rounded transform -rotate-15 animate-float"></div>
        <div className="absolute bottom-40 right-24 w-16 h-10 bg-teal-200/20 dark:bg-teal-400/10 rounded transform rotate-30 animate-float-slow"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-4"
          >
            <div className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                TESTIMONIALS
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            What Our{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Members Say
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of satisfied members who have transformed their
            financial journey with NJANGIFY.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Main Carousel Container */}
            <div className="overflow-hidden rounded-2xl hover:shadow-md  shadow-gray-500 transition-shadow duration-200 ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="bg-white dark:bg-gray-700 p-8 md:p-12 rounded-2xl shadow-xl dark:shadow-gray-700"
                >
                  <div className="grid md:grid-cols-12 gap-8 items-center">
                    {/* Testimonial Content */}
                    <div className="md:col-span-8 space-y-6 ml-10">
                      {/* Quote Icon */}
                      <div className="flex justify-start">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                          <Quote className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>

                      <StarRating rating={testimonials[currentIndex].rating} />

                      <blockquote className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
                        "{testimonials[currentIndex].text}"
                      </blockquote>

                      <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
                        <span className="text-green-700 dark:text-green-400 font-bold text-sm">
                          Percentage Increase in Finance:{" "}
                          {testimonials[currentIndex].amount}
                        </span>
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="md:col-span-4 text-center md:text-left">
                      {/* Profile Image */}
                      <div className="relative mb-4 flex justify-center md:justify-start">
                        <Image
                          className=" object-cover w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center overflow-hidden"
                          alt={testimonials[currentIndex].TestimonyAlt}
                          src={testimonials[currentIndex].image}
                        />
                      </div>

                      {/* User Details */}
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg dark:shadow-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg dark:shadow-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </button>
          </motion.div>

          {/* Dots Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-8 space-x-2"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 dark:bg-blue-400 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </motion.div>

          
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
