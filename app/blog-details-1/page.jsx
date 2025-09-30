"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  MessageSquare,
  TrendingUp,
  Users,
  Shield,
  Globe,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MoveRight,
} from "lucide-react";

import globalStyle from "../globals.css";

import Metadata from "../components/Metadata";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Default_Hero from "../components/Default_Hero";

import Link from "next/link";

const BlogPostDetails1 = () => {
  const metadata = {
    title:
      "Revolutionizing Financial Growth Through NJANGIFY | Njangi Web Application",
    description:
      "An application created where members join, create, and manage njangi groups with others all over the world.",
  };

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const relatedPosts = [
    {
      title: "From Setup to Success: Your Complete NJANGIFY Journey",
      category: "Finance",
      date: "November 9, 2024",
      excerpt:
        "Learn how our intuitive platform makes joining or creating njangi groups effortless, with step-by-step guidance and admin verification.",
      link: "/blog-details-2",
    },
    {
      title: "Building Trust in Digital Finance: Security & Transparency at NJANGIFY",
      category: "Technology",
      date: "December 23, 2024",
      excerpt: "Explore the advanced security measures and transparent systems that make NJANGIFY the most trusted platform for njangi groups.",
      link: "/blog-details-3",
    },
  ];

  return (
    <main className="bg-[#f9f9f9] min-h-screen">
      <Metadata title={metadata.title} description={metadata.description} />

      {/* Navigation  */}
      <Navbar />

      {/* Hero Section */}
      <Default_Hero
        title="Revolutionizing Financial Growth 💰"
        firstDescription="Home"
        MainDescription="Blog > Financial Growth"
      />

      {/* Blog Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="rounded-lg overflow-hidden shadow-md">
                {/* Blog Main Image */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="relative bg-gradient-to-br from-blue-400 to-blue-600 h-[68vh] flex items-center justify-center"
                >
                  <div className="text-center text-white p-8">
                    <TrendingUp className="w-32 h-32 mx-auto mb-6 opacity-80" />
                    <h2 className="text-5xl font-bold">Financial Growth</h2>
                  </div>
                  <div className="absolute top-0 left-0">
                    <div className="bg-emerald-600 text-white p-3 text-center rounded">
                      <p className="text-xl font-bold tracking-wide">
                        15 January 2025
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Blog Content */}
                <div className="p-6 bg-white">
                  <div className="mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="flex flex-wrap gap-4 mb-5 items-center"
                    >
                      <div className="flex gap-2 items-center">
                        <User className="w-5 h-5 text-gray-700" />
                        <p className="text-gray-600 text-sm">
                          By: NJANGIFY Team
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <MessageSquare className="w-5 h-5 text-gray-700" />
                        <p className="text-gray-600 text-sm">
                          Finance & Technology
                        </p>
                      </div>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
                    >
                      Revolutionizing Financial Growth Through NJANGIFY
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="text-gray-600 mb-6 leading-relaxed"
                    >
                      In communities across Africa and beyond, the concept of
                      "Njangi" has been a cornerstone of financial solidarity
                      for generations. This rotating savings and credit
                      association has helped countless individuals achieve their
                      financial goals through collective support. Today,
                      NJANGIFY brings this time-honored practice into the
                      digital age, creating a powerful platform that combines
                      cultural wisdom with modern technology.
                    </motion.p>

                    <motion.hr
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="my-6 border-gray-200"
                    />

                    {/* Feature Cards */}
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8"
                    >
                      <div className="bg-gradient-to-br from-blue-50 to-blue-50 p-6 rounded-lg border border-blue-200">
                        <Users className="w-12 h-12 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">
                          Global Community
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Connect with members worldwide and build financial
                          networks
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                        <Shield className="w-12 h-12 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">
                          Secure Transactions
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Bank-level security protecting your finance and
                          contributions
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200">
                        <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
                        <h3 className="font-bold text-lg mb-2">Track Growth</h3>
                        <p className="text-gray-600 text-sm">
                          Monitor your progress with real-time analytics
                        </p>
                      </div>
                    </motion.div>

                    <motion.hr
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="my-6 border-gray-200"
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="text-gray-700 mb-6 space-y-6"
                    >
                      <div>
                        <h3 className="font-bold text-2xl mb-4">
                          What is NJANGIFY?
                        </h3>
                        <p className="leading-relaxed">
                          NJANGIFY is a revolutionary web application that
                          digitizes the Njangi system, making it accessible to
                          anyone, anywhere in the world. Members can join
                          existing groups or create their own, set contribution
                          schedules, and manage their savings journey with
                          complete transparency and security.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3">Key Features</h3>
                        <div className="space-y-4">
                          <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-bold">1</span>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">
                                Group Creation & Management
                              </h4>
                              <p className="text-gray-600">
                                Create custom Njangi groups with your own rules,
                                contribution amounts, and payout schedules.
                                Invite members and manage everything from a
                                single dashboard.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-cyan-500 font-bold">2</span> 
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">
                                Payment System
                              </h4>
                              <p className="text-gray-600">
                                Set up automatic contributions and never miss a
                                payment. Our system handles reminders, tracking,
                                and distribution seamlessly.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                              <span className="text-indigo-600 font-bold">
                                3
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">
                                Transparent Tracking
                              </h4>
                              <p className="text-gray-600">
                                View real-time updates on contributions,
                                upcoming payouts, and group activity. Complete
                                transparency builds trust among members.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 font-bold">
                                4
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">
                                Global Connectivity
                              </h4>
                              <p className="text-gray-600">
                                Connect with Njangi members and grow side by
                                side. Send and receive contributions and see a
                                boost in your finances.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3">
                          The Benefits of NJANGIFY
                        </h3>
                        <p className="mb-3 leading-relaxed">
                          Njangi systems require physical meetings and manual
                          record-keeping, which can be challenging in our busy,
                          interconnected world. NJANGIFY solves these challenges
                          while preserving the community spirit that makes
                          Njangi special:
                        </p>
                        <ul className="ml-7 space-y-2 leading-relaxed">
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>
                              <strong>Convenience:</strong> Participate from
                              anywhere at any time, no need for physical
                              meetings
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>
                              <strong>Security:</strong> Your contributions are
                              protected by advanced encryption and secure
                              payment processing
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>
                              <strong>Accountability:</strong> Automated systems
                              ensure fairness and eliminate human error
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>
                              <strong>Accessibility:</strong> Join groups
                              globally and expand your financial network beyond
                              geographical boundaries
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3">
                          Building Financial Futures Together
                        </h3>
                        <p className="leading-relaxed">
                          NJANGIFY isn't just about money but it's about
                          building community, fostering financial discipline,
                          and creating opportunities. Whether you're saving for
                          education, starting a business, or planning a major
                          purchase, our platform empowers you to achieve your
                          goals with the support of a trusted community.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                        <p className="text-gray-700 leading-relaxed">
                          Join thousands of members who are already experiencing
                          the power of NJANGIFY. Together, we're revolutionizing
                          how communities save, grow, and achieve financial
                          independence—one contribution at a time.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Tags and Share */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8">
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm">
                        Finance
                      </span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                        Technology
                      </span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                        Savings
                      </span>
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                        Community
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <p className="text-gray-700 font-medium">Share:</p>
                      <div className="flex gap-2">
                        <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all">
                          <Link href="#">
                            <Facebook className="w-5 h-5 text-gray-600" />
                          </Link>
                        </button>
                        <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all">
                          <Link href="#">
                            <Instagram className="w-5 h-5 text-gray-600" />
                          </Link>
                        </button>
                        <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all">
                          <Link href="#">
                            <Twitter className="w-5 h-5 text-gray-600" />
                          </Link>
                        </button>
                        <button className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all">
                          <Link href="#">
                            <Linkedin className="w-5 h-5 text-gray-600" />
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-12">
                <motion.h3
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="text-xl font-bold text-gray-800 mb-6"
                >
                  Related Articles
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {relatedPosts.map((post, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <TrendingUp className="w-16 h-16 text-white opacity-70" />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-4 mb-4 items-center">
                          <div className="flex gap-2 items-center">
                            <User className="w-4 h-4 text-gray-700" />
                            <p className="text-gray-600 text-sm">
                              By: NJANGIFY
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <MessageSquare className="w-4 h-4 text-gray-700" />
                            <p className="text-gray-600 text-sm">
                              {post.category}
                            </p>
                          </div>
                        </div>

                        <Link href={post.link} className="text-lg font-bold text-gray-800 mb-3 hover:text-blue-500">
                          {post.title}
                        </Link>

                        <p className="text-gray-600 mb-6 text-sm">
                          {post.excerpt}
                        </p>

                        <Link href={post.link} className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors ">
                          Read More 
                        </Link>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-2 footer-links ">
                    {[
                      "Finance",
                      "Technology",
                      "Community",
                      "Savings",
                      "Investment",
                    ].map((category, index) => (
                      <li key={category} className="footer-link">
                        <Link
                          href="#"
                          className={`hover:text-blue-600 transition-colors ${
                            index === 0
                              ? "text-blue-700 font-medium"
                              : "text-gray-700"
                          }`}
                        >
                          {category}
                          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-1000 ease-out"></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Finance",
                      "Digital Banking",
                      "Savings",
                      "Community",
                      "Growth",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-500 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 hover:shadow-xl ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </main>
  );
};

export default BlogPostDetails1;
