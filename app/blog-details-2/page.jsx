"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  MessageSquare,
  CheckCircle,
  UserPlus,
  Settings,
  Rocket,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

import globalStyle from "../globals.css";

import Metadata from "../components/Metadata";

import Image from "next/image";
import Link from "next/link";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Default_Hero from "../components/Default_Hero";

import BlogImage from "/public/blog/blog2.png";
import BlogImage1 from "/public/blog/blog1.png";
import BlogImage3 from "/public/blog/blog3.png";

const BlogPostDetails2 = () => {
  const metadata = {
    title:
      "From Setup to Success: Your Complete NJANGIFY Journey | Njangi Web Application",
    description:
      "Learn how our intuitive platform makes joining or creating njangi groups effortless, with step-by-step guidance and admin verification.",
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
      title: "Revolutionizing Your Financial Growth Through NJANGIFY",
      category: "Finance",
      date: "January 15, 2025",
      excerpt:
        "Discover how NJANGIFY brings the time-honored practice of Njangi into the digital age, creating opportunities for financial growth.",
      link: "/blog-details-1",
      image: BlogImage1,
    },
    {
      title:
        "Building Trust in Digital Finance: Security & Transparency at NJANGIFY",
      category: "Technology",
      date: "December 23, 2024",
      excerpt:
        "Explore the advanced security measures and transparent systems that make NJANGIFY the most trusted platform for njangi groups.",
      link: "/blog-details-3",
      image: BlogImage3,
    },
  ];

  return (
    <main className="bg-[#f9f9f9] dark:bg-slate-900 min-h-screen">
      <Metadata title={metadata.title} description={metadata.description} />

      {/* Navigation  */}
      <Navbar />

      {/* Hero Section */}
      <Default_Hero
        title="Your Complete NJANGIFY Journey 🚀"
        firstDescription="Home"
        MainDescription="Blog > Setup to Success"
      />

      {/* Blog Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="rounded-lg overflow-hidden shadow-md dark:shadow-slate-700">
                {/* Blog Main Image */}
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="relative bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 w-full h-[50vh] sm:h-[68vh] flex items-center justify-center"
                >
                  <div className="text-center text-white">
                    <Image
                      alt="Blog Image"
                      src={BlogImage}
                      className="w-[100vw] h-[50vh] sm:h-[68vh] object-cover"
                    />
                  </div>
                  <div className="absolute top-0 left-0">
                    <div className="bg-blue-600 dark:bg-blue-700 text-white p-3 text-center rounded">
                      <p className="text-xl font-bold tracking-wide">
                        9 November 2024
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Blog Content */}
                <div className="p-6 bg-white dark:bg-slate-800">
                  <div className="mb-6">
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="flex flex-wrap gap-4 mb-5 items-center"
                    >
                      <div className="flex gap-2 items-center">
                        <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          By: NJANGIFY Team
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <MessageSquare className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Finance & Tutorial
                        </p>
                      </div>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4"
                    >
                      From Setup to Success: Your Complete NJANGIFY Journey
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                    >
                      Starting your journey with NJANGIFY is easier than you
                      might think. Whether you're joining your first Njangi
                      group or creating one for your community, our platform
                      guides you through every step with intuitive design and
                      helpful resources. This comprehensive guide will walk you
                      through the entire process, from creating your account to
                      celebrating your financial success.
                    </motion.p>

                    <motion.hr
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="my-6 border-gray-200 dark:border-gray-600"
                    />

                    {/* Feature Cards */}
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8"
                    >
                      <div className="bg-gradient-to-br from-blue-50 to-blue-50 dark:from-slate-700 dark:to-slate-700 p-6 rounded-lg border border-blue-200 dark:border-slate-600">
                        <UserPlus className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="font-bold text-lg mb-2 dark:text-white">
                          Easy Registration
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Get started in minutes with our simple signup process
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-50 dark:from-slate-700 dark:to-slate-700 p-6 rounded-lg border border-blue-200 dark:border-slate-600">
                        <Settings className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="font-bold text-lg mb-2 dark:text-white">
                          Flexible Setup
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Customize your group settings to match your needs
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-700 dark:to-slate-700 p-6 rounded-lg border border-blue-200 dark:border-slate-600">
                        <Rocket className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="font-bold text-lg mb-2 dark:text-white">
                          Quick Launch
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Start growing your finances immediately
                        </p>
                      </div>
                    </motion.div>

                    <motion.hr
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="my-6 border-gray-200 dark:border-gray-600"
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="text-gray-700 dark:text-gray-300 mb-6 space-y-6"
                    >
                      <div>
                        <h3 className="font-bold text-2xl mb-4 dark:text-white">
                          Step 1: Creating Your Account
                        </h3>
                        <p className="leading-relaxed">
                          Your NJANGIFY journey begins with a simple
                          registration process. Visit our website and click on
                          the "Sign Up" button. You'll need to provide basic
                          information including your name, email address, and
                          phone number. We use industry-standard encryption to
                          protect your personal information from the moment you
                          create your account. Once you verify your email,
                          you're ready to explore the platform and discover how
                          easy it is to start your savings journey.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3 dark:text-white">
                          Step 2: Joining or Creating a Group
                        </h3>
                        <div className="space-y-4">
                          <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1 dark:text-white">
                                Browse Available Groups
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                Search through our directory of active Njangi
                                groups. Filter by contribution amount, payout
                                frequency, group size, and location. Each group
                                listing shows important details like the number
                                of members, contribution schedule, and group
                                rules. You can read reviews from existing
                                members to help you make an informed decision.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1 dark:text-white">
                                Create Your Own Group
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                If you prefer to start fresh, creating a group
                                is equally straightforward. Choose your group
                                name, set the contribution amount and frequency,
                                decide on the payout rotation, and establish any
                                additional rules. The platform guides you
                                through each decision with helpful tips and
                                recommendations. Each new group must be verified
                                by admin before it can be made public.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1 dark:text-white">
                                Admin Verification Process
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                For your security, all new groups undergo a
                                verification process. Our admin team reviews the
                                group settings to ensure they comply with our
                                community guidelines. This typically takes 1
                                2-24 hours. Once verified, your group is live
                                and ready to accept members. Existing groups may
                                also require approval before you can join,
                                giving group creators control over their
                                membership.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3 dark:text-white">
                          Step 3: Setting Up Payment Methods
                        </h3>
                        <p className="mb-3 leading-relaxed">
                          To participate in contributions, you'll need to link a
                          payment method. NJANGIFY supports mobile money
                          payments from MTN and ORANGE for contributions and
                          payouts.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3 dark:text-white">
                          Step 4: Making Your First Contribution
                        </h3>
                        <p className="leading-relaxed mb-3">
                          Once you're part of a group and your payment method is
                          set up,then you can start making contributions. The
                          platform will send you reminders before each
                          contribution is due. Your dashboard shows your
                          contribution history, upcoming payments, and when
                          you're scheduled to receive your payout.
                        </p>
                        <p className="leading-relaxed">
                          If you ever need to make a one-time manual
                          contribution or adjust your payment schedule, these
                          options are easily accessible in your account
                          settings. The system is designed to be flexible while
                          maintaining the commitment structure that makes Njangi
                          groups successful.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3 dark:text-white">
                          Step 5: Tracking Your Progress
                        </h3>
                        <p className="leading-relaxed">
                          NJANGIFY's intuitive dashboard gives you complete
                          visibility into your financial journey. See real-time
                          updates on your total contributions, upcoming payout
                          dates, group activity, and overall savings progress.
                          Visual charts and graphs make it easy to understand
                          your financial growth at a glance. You can also
                          receive notifications about important group events,
                          contribution reminders, and payout confirmations
                          directly to your phone or email.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3 dark:text-white">
                          Tips for Success
                        </h3>
                        <p className="mb-3 leading-relaxed">
                          To get the most out of your NJANGIFY experience, keep
                          these best practices in mind:
                        </p>
                        <ul className="ml-7 space-y-2 leading-relaxed">
                          <li className="flex gap-2">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">
                              •
                            </span>
                            <span>
                              Start with a contribution amount you can
                              comfortably afford each cycle
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">
                              •
                            </span>
                            <span>
                              Join groups with members who share similar
                              financial goals
                            </span>
                          </li>
                         
                          <li className="flex gap-2">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">
                              •
                            </span>
                            <span>
                              Review your dashboard regularly to stay on top of
                              your commitments
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">
                              •
                            </span>
                            <span>
                              Plan how you'll use your payout in advance to
                              maximize its impact
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-blue-50 dark:from-slate-700 dark:to-slate-700 p-6 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Your journey from setup to success on NJANGIFY is
                          designed to be smooth, secure, and rewarding. With our
                          step-by-step guidance, admin verification for peace of
                          mind, and intuitive tools at your fingertips, you're
                          never alone in achieving your financial goals. Join
                          thousands of members who have already started their
                          journey to financial empowerment with NJANGIFY today!
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Tags and Share */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8">
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-full text-sm">
                        Finance
                      </span>
                      <span className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        Tutorial
                      </span>
                      <span className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        Getting Started
                      </span>
                      <span className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        Guide
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        Share:
                      </p>
                      <div className="flex gap-2">
                        <button className="w-10 h-10 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-full flex items-center justify-center hover:bg-blue-50 dark:hover:bg-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all">
                          <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </button>
                        <button className="w-10 h-10 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-full flex items-center justify-center hover:bg-blue-50 dark:hover:bg-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all">
                          <Instagram className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </button>
                        <button className="w-10 h-10 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-full flex items-center justify-center hover:bg-blue-50 dark:hover:bg-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all">
                          <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </button>
                        <button className="w-10 h-10 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-full flex items-center justify-center hover:bg-blue-50 dark:hover:bg-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all">
                          <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
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
                  className="text-xl font-bold text-gray-800 dark:text-white mb-6"
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
                      className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-slate-700 overflow-hidden"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 flex items-center justify-center">
                        <Image
                          alt="Related Blog Image"
                          src={post.image}
                          className="w-full h-64 object-cover "
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-4 mb-4 items-center">
                          <div className="flex gap-2 items-center">
                            <User className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              By: NJANGIFY
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <MessageSquare className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              {post.category}
                            </p>
                          </div>
                        </div>

                        <Link
                          href={post.link}
                          className="text-lg font-bold text-gray-800 dark:text-white mb-3 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer"
                        >
                          {post.title}
                        </Link>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm mt-1">
                          {post.excerpt}
                        </p>

                        <Link
                          href={post.link}
                          className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-full text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                        >
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
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-slate-700 p-6"
                >
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Finance",
                      "Technology",
                      "Community",
                      "Tutorials",
                      "Getting Started",
                    ].map((category, index) => (
                      <li key={category}>
                        <button
                          className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                            index === 0
                              ? "text-blue-700 dark:text-blue-400 font-medium"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {category}
                        </button>
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
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-md dark:shadow-slate-700 p-6"
                >
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Setup Guide",
                      "Registration",
                      "Payment Methods",
                      "Getting Started",
                      "Tutorial",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer transition-colors"
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
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-500 dark:from-blue-600 dark:to-blue-600 text-white rounded-full shadow-lg dark:shadow-slate-700 transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 hover:shadow-xl ${
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

export default BlogPostDetails2;
