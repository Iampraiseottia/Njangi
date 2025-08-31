"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Linkedin,
  Twitter,
  Mail,
  Award,
  Code,
  TrendingUp,
  Shield,
  Palette,
  HeadphonesIcon,
} from "lucide-react";

import team1 from "/public/team/team.jpeg";
import team2 from "/public/team/team2.jpeg";
import team3 from "/public/team/team3.jpeg";
import team4 from "/public/team/team4.jpeg";
import team5 from "/public/team/team5.jpeg";
import team6 from "/public/team/team6.jpeg";

import Image from "next/image";

const Our_Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ottia Praise Beteck",
      role: "Chief Executive Officer",
      department: "Leadership",
      image: team1,
      bio: "Visionary leader with 5+ years in fintech and digital solutions across Africa.",
      expertise: [
        "Strategic Planning",
        "Fintech Innovation",
        "Team Leadership",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/ottia-praise/",
        twitter: "#",
        email: "ottiapraise50@gmail.com",
      },
      icon: Award,
      gradient: "from-blue-500 to-blue-600",
      teamAlt: "Ottia Praise Beteck",
    },
    {
      id: 2,
      name: "Nchanchu Shalom",
      role: "Chief Technology Officer",
      department: "Technology",
      image: team2,
      bio: "Tech innovator specializing in secure payment systems and blockchain technology.",
      expertise: ["Blockchain", "Mobile Development", "System Architecture"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "shalom@njangify.com",
      },
      icon: Code,
      gradient: "from-purple-500 to-purple-600",
      teamAlt: "Nchanchu Shalom",
    },
    {
      id: 3,
      name: "Njikang Martin",
      role: "Head of Product",
      department: "Product",
      image: team3,
      bio: "Product strategist focused on creating user-centric financial solutions for African markets.",
      expertise: ["Product Strategy", "UX Research", "Market Analysis"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "martin@njangify.com",
      },
      icon: TrendingUp,
      gradient: "from-green-500 to-green-600",
      teamAlt: "Njikang Martin",
    },
    {
      id: 4,
      name: "Ayuk Christain",
      role: "Head of Security",
      department: "Security",
      image: team4,
      bio: "Cybersecurity expert ensuring the highest level of protection for user funds and data.",
      expertise: ["Cybersecurity", "Risk Management", "Compliance"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "christain@njangify.com",
      },
      icon: Shield,
      gradient: "from-red-500 to-red-600",
      teamAlt: "Ayuk Christian",
    },
    {
      id: 5,
      name: "Mbonge Nina",
      role: "Lead UI/UX Designer",
      department: "Design",
      image: team5,
      bio: "Creative designer crafting intuitive and beautiful experiences for financial applications.",
      expertise: ["UI Design", "User Experience", "Design Systems"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "nina@njangify.com",
      },
      icon: Palette,
      gradient: "from-yellow-500 to-yellow-600", 
      teamAlt: "Mbonge Nina",
    },
    {
      id: 6,
      name: "Ajong Grace",
      role: "Customer Success Manager",
      department: "Support",
      image: team6,
      bio: "Customer advocate ensuring exceptional support and user satisfaction across all platforms.",
      expertise: ["Customer Support", "Community Management", "Training"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "grace@njangify.com",
      },
      icon: HeadphonesIcon,
      gradient: "from-indigo-500 to-indigo-600",
      teamAlt: "Ajong Grace",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Responsive items count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide 
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = teamMembers.length - itemsToShow;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, teamMembers.length, itemsToShow]);

  const nextSlide = () => {
    const maxIndex = teamMembers.length - itemsToShow;
    setCurrentIndex(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    const maxIndex = teamMembers.length - itemsToShow;
    setCurrentIndex(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const visibleMembers = teamMembers.slice(
    currentIndex,
    currentIndex + itemsToShow
  );
  if (visibleMembers.length < itemsToShow) {
    visibleMembers.push(
      ...teamMembers.slice(0, itemsToShow - visibleMembers.length)
    );
  }

  return (
    <main className="relative overflow-hidden bg-gray-200 dark:bg-gray-900 py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-20 h-12 bg-blue-200/20 dark:bg-blue-400/10 rounded transform rotate-12 animate-float"></div>
        <div className="absolute top-32 right-32 w-16 h-10 bg-purple-200/20 dark:bg-purple-400/10 rounded transform -rotate-6 animate-float-delayed"></div>
        <div className="absolute bottom-20 right-20 w-18 h-11 bg-green-200/20 dark:bg-green-400/10 rounded transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-20 right-64 w-14 h-8 bg-yellow-200/20 dark:bg-yellow-400/10 rounded transform -rotate-12 animate-float"></div>
        <div className="absolute bottom-32 right-8 w-16 h-9 bg-indigo-200/20 dark:bg-indigo-400/10 rounded transform rotate-23 animate-float-delayed"></div>

        <div className="absolute top-16 left-12 w-22 h-14 bg-red-200/20 dark:bg-red-400/10 rounded transform -rotate-15 animate-float"></div>
        <div className="absolute bottom-40 left-24 w-18 h-12 bg-teal-200/20 dark:bg-teal-400/10 rounded transform rotate-30 animate-float-slow"></div>
        <div className="absolute top-40 left-8 w-12 h-8 bg-pink-200/20 dark:bg-pink-400/10 rounded transform -rotate-25 animate-float-delayed"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500 dark:text-blue-400 mb-6"
          >
            -- OUR AWESOME TEAM --
          </motion.h1>

        
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Our passionate team of experts is dedicated to ensuring your
            Financial Transformation while meeting your needs and solving any
            issues you experience.
          </motion.p>
        </div>

        {/* Team Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Team Members Grid */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`}
                >
                  {visibleMembers.map((member, index) => {
                    const IconComponent = member.icon;
                    return (
                      <motion.div
                        key={`${member.id}-${currentIndex}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-700 overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-600 transition-all duration-500 hover:-translate-y-2"
                      >
                        {/* Card Content */}
                        <div className="relative p-6">
                          {/* Profile Image */}
                          <div className="relative mb-6">
                            <div
                              className={`w-40 h-40 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                            >
                              <Image
                                className=" object-cover w-40 h-40 rounded-full flex items-center justify-center overflow-hidden"
                                alt={member.teamAlt}
                                src={member.image} 
                              />
                            </div>

                            {/* Department Badge */}
                            <div className="absolute top-0 right-0 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                              <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold">
                                {member.department}
                              </span>
                            </div>
                          </div>

                          {/* Member Info */}
                          <div className="text-center mb-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                              {member.name}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                              {member.role}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                              {member.bio}
                            </p>
                          </div>

                          {/* Expertise Tags */}
                          <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {member.expertise.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {/* Social Links */}
                          <div className="flex justify-center space-x-4">
                            <a
                              href={member.social.linkedin}
                              className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300 group"
                            >
                              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                            </a>
                            <a
                              href={member.social.twitter}
                              className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300 group"
                            >
                              <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                            </a>
                            <a
                              href={`mailto:${member.social.email}`}
                              className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300 group"
                            >
                              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                            </a>
                          </div>

                          {/* Role Icon */}
                          <div className="absolute top-4 left-4">
                            <div
                              className={`w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-lg flex items-center justify-center`}
                            >
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg dark:shadow-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 group z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg dark:shadow-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 group z-10"
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
            {Array.from({
              length: Math.ceil(teamMembers.length / itemsToShow),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsToShow) === index
                    ? "bg-blue-600 dark:bg-blue-400 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </motion.div>

          {/* Team Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-700"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                15+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Team Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                25+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Years Combined Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                6
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Core Departments
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Dedicated to Success
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Our_Team;
