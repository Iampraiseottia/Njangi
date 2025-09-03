"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";

import faqImg from "/public/faq/faq.png";
import faqShape from "/public/shapes/faqShape.png";

import Image from "next/image";

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What is a NJANGIFY and how does it work?",
      answer:
        "NJANGIFY is a njangi platform where members contribute a fixed amount regularly (weekly, monthly, or bi-weekly) to a common pool. Each cycle, one member receives the entire pool amount. This continues until all members have received their turn. For example, if 10 members contribute 50,000 FCFA monthly, each member will receive 500,000 FCFA when their turn comes. It's a powerful way to save money, access lump sums for investments, and build financial discipline within a trusted community.",
    },
    {
      question: "How do I join or start a Njangi group?",
      answer:
        "To join an existing group, you need an invitation from current members who vouch for your trustworthiness and financial stability OR groups recommended to you based on our analysis on your financial status. This helps ensure the members of each group fit the standard set. Most groups require new members to demonstrate their commitment through a probation period or higher initial contribution. To start a Njangi, create a new group request setting all details very accurately. Our team will examine the request, verify then validate the njangi requests before publishing it for others to join. Establish clear rules including contribution amounts, payment dates, meeting schedules, and penalties for late payments. ",
    },
    {
      question: "What are the benefits of participating in Njangi?",
      answer:
        "Benefits include: boost in financial status, Increase in standard of living, financial discipline, access to lump sums without interest, community support and networking, financial planning opportunities, and no credit checks or collateral requirements. Members often use their Njangi funds for major purchases, business investments, education, or emergencies. ",
    },
    {
      question: "How are Njangi payments and schedules organized?",
      answer:
        "Njangi schedules are typically organized monthly, bi-weekly, or weekly depending on members' income patterns. Payment order is determined by our systems based on our analysis and certain criterial we follow strictly. Contributions are collected through our accounts(For security) and when it's your turn to receive payments, Our dedicated team makes the payments on time. At NJANGIFY we collect payments via mobile money platforms like MTN Mobile Money or Orange Money for convenience. Late payments have penalties to ensure commitment. Detailed records track all transactions, and stored securely.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
      {/* Left side geometric pattern */}
      <div className="absolute left-0 top-0 w-1/3 h-full">
        {/* Main triangular pattern */}
        <svg
          className="w-full h-full"
          viewBox="0 0 400 800"
          preserveAspectRatio="none"
        >
          {/* Large triangles */}
          <polygon
            points="0,0 200,0 100,173"
            fill="#0EA5E9"
            className="fill-sky-500 dark:fill-slate-800"
            opacity="0.8"
          />
          <polygon
            points="200,0 400,0 300,173"
            fill="#38BDF8"
            className="fill-sky-400 dark:fill-slate-700"
            opacity="0.6"
          />
          <polygon
            points="100,173 300,173 200,346"
            fill="#FFFFFF"
            className="fill-white dark:fill-slate-900"
            opacity="0.9"
          />
          <polygon
            points="0,173 200,173 100,346"
            fill="#7DD3FC"
            className="fill-sky-300 dark:fill-slate-600"
            opacity="0.7"
          />
          <polygon
            points="200,173 400,173 300,346"
            fill="#0EA5E9"
            className="fill-sky-500 dark:fill-slate-800"
            opacity="0.5"
          />

          {/* Medium triangles */}
          <polygon
            points="0,346 200,346 100,519"
            fill="#38BDF8"
            className="fill-sky-400 dark:fill-slate-700"
            opacity="0.8"
          />
          <polygon
            points="200,346 400,346 300,519"
            fill="#FFFFFF"
            className="fill-white dark:fill-slate-900"
            opacity="0.8"
          />
          <polygon
            points="100,519 300,519 200,692"
            fill="#0EA5E9"
            className="fill-sky-500 dark:fill-slate-800"
            opacity="0.6"
          />
          <polygon
            points="0,519 200,519 100,692"
            fill="#7DD3FC"
            className="fill-sky-300 dark:fill-slate-600"
            opacity="0.5"
          />
          <polygon
            points="200,519 400,519 300,692"
            fill="#38BDF8"
            className="fill-sky-400 dark:fill-slate-700"
            opacity="0.7"
          />

          {/* Bottom triangles */}
          <polygon
            points="0,692 200,692 100,800"
            fill="#0EA5E9"
            className="fill-sky-500 dark:fill-slate-800"
            opacity="0.8"
          />
          <polygon
            points="200,692 400,692 300,800"
            fill="#7DD3FC"
            className="fill-sky-300 dark:fill-slate-600"
            opacity="0.6"
          />
          <polygon
            points="100,692 300,692 200,800"
            fill="#FFFFFF"
            className="fill-white dark:fill-slate-900"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side  */}
          <motion.div
            className="relative order-2 lg:order-1 "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="relative">
              <Image
                src={faqImg}
                alt="Faq Image"
                className="w-full h-[520] object-cover faqImage"
                height={520}
                width={500}
              />

              <Image
                src={faqShape}
                alt="Faq Image Shape"
                className="w-full h-[520] object-cover absolute z-50 top-0 left-0"
                height={520}
                width={500}
              />
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="order-1 lg:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 dark:text-blue-400 mb-6"
              >
                -- FAQs --
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800 dark:text-white"
              >
                Frequently Asked
                <br />
                <span className="text-gray-700 dark:text-gray-200">
                  Questions ?
                </span>
              </motion.h2>
            </div>

            {/* FAQ Items */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-sm border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <span className="text-lg font-semibold pr-4 text-gray-800 dark:text-white">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        openFAQ === index
                          ? "bg-cyan-400 text-white"
                          : "bg-gray-800 text-white dark:bg-gray-600"
                      }`}
                    >
                      <motion.span
                        className="text-xl font-light"
                        animate={{ rotate: openFAQ === index ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        +
                      </motion.span>
                    </div>
                  </button>

                  {/* Answer Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFAQ === index ? "auto" : 0,
                      opacity: openFAQ === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-20 right-20 w-12 h-12 opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <polygon points="25,5 45,40 5,40" fill="#06B6D4" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-32 w-8 h-8 opacity-15"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <polygon points="25,5 45,40 5,40" fill="#38BDF8" />
        </svg>
      </motion.div>
    </div>
  );
};

export default FAQs;
