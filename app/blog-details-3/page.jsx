"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  MessageSquare,
  Shield,
  Lock,
  Eye,
  FileCheck,
  CheckCircle,
  AlertCircle,
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

import BlogImage from "/public/blog/blog3.png";
import BlogImage1 from "/public/blog/blog1.png";
import BlogImage2 from "/public/blog/blog2.png";

const BlogPostDetails3 = () => {
  const metadata = {
    title:
      "Building Trust in Digital Finance: Security & Transparency at NJANGIFY | Njangi Web Application",
    description:
      "Learn how our intuitive platform makes ensures transparency and security for all njangi members and transactions.",
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
      title: "From Setup to Success: Your Complete NJANGIFY Journey",
      category: "Finance",
      date: "November 9, 2024",
      excerpt:
        "Learn how our intuitive platform makes joining or creating njangi groups effortless, with step-by-step guidance and admin verification.",
      link: "/blog-details-2",
      image: BlogImage2,
    },
  ];

  return (
    <main className="bg-[#f9f9f9] dark:bg-slate-900 min-h-screen">
      <Metadata title={metadata.title} description={metadata.description} />

      {/* Navigation  */}
      <Navbar />

      {/* Hero Section */}
      <Default_Hero
        title="Building Trust in Digital Finance 🛡️"
        firstDescription="Home"
        MainDescription="Blog > Digital Finance Trust"
      />

      {/* Blog Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="rounded-lg overflow-hidden shadow-lg">
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
                        23 December 2024
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
                          Technology & Security
                        </p>
                      </div>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4"
                    >
                      Building Trust in Digital Finance: Security & Transparency
                      at NJANGIFY
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                      className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                    >
                      In the digital age, trust is the foundation of any
                      financial platform. At NJANGIFY, we understand that when
                      you entrust us with your hard-earned money, you need
                      absolute confidence in our security measures and complete
                      transparency in our operations. This comprehensive guide
                      explores the advanced security protocols, transparent
                      systems, and protective measures that make NJANGIFY the
                      most trusted platform for digital Njangi groups.
                    </motion.p>

                    <motion.hr
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
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
                        <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="font-bold text-lg mb-2 dark:text-white">
                          Bank-Level Security
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Military-grade encryption protects your data and
                          transactions
                        </p> 
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-50 dark:from-slate-700 dark:to-slate-700 p-6 rounded-lg border border-blue-200 dark:border-slate-600">
                        <Eye className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="font-bold text-lg mb-2 dark:text-white">
                          Complete Transparency
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Real-time visibility into all transactions and group
                          activities
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-50 dark:from-slate-700 dark:to-slate-700 p-6 rounded-lg border border-blue-200 dark:border-slate-600">
                        <FileCheck className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="font-bold text-lg mb-2 dark:text-white">
                          Verified Platform
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Regular audits and compliance with financial
                          regulations
                        </p>
                      </div>
                    </motion.div>

                    <motion.hr
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}
                       className="my-6 border-gray-200 dark:border-gray-600"
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true, amount: 0.1 }}  className="text-gray-700 dark:text-gray-300 mb-6 space-y-6"
                    >
                      <div>
                        <h3 className="font-bold text-2xl mb-4 dark:text-white">
                          Our Security Infrastructure
                        </h3>
                        <p className="leading-relaxed">
                          Security isn't just a feature at NJANGIFY—it's the
                          foundation of everything we do. We employ multiple
                          layers of protection to ensure your funds and personal
                          information remain safe at all times. Our security
                          infrastructure is built on industry-leading
                          technologies and best practices, continuously updated
                          to address emerging threats. From the moment you
                          create your account to every transaction you make,
                          sophisticated security measures work silently in the
                          background to protect you.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3 dark:text-white">
                          Advanced Encryption Technology
                        </h3>
                        <div className="space-y-4">
                          <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <Lock className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">
                                End-to-End Encryption
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                All data transmitted between your device and our
                                servers is protected with 256-bit SSL
                                encryption—the same standard used by major banks
                                worldwide. This means your personal information,
                                financial data, and transaction details are
                                scrambled into an unreadable format that only
                                authorized systems can decode. Even if data were
                                somehow intercepted, it would be completely
                                useless to unauthorized parties.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <Lock className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">
                                Secure Data Storage
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                Your information is stored in highly secure,
                                geographically distributed data centers with
                                redundant backups. These facilities employ
                                physical security measures including biometric
                                access controls, 24/7 surveillance, and
                                environmental monitoring. Your sensitive
                                financial data is encrypted at rest, meaning it
                                remains protected even in the unlikely event of
                                a physical security breach.
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <Lock className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold mb-1">
                                Multi-Factor Authentication
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400">
                                We implement multi-factor authentication (MFA)
                                to add an extra layer of security to your
                                account. Beyond your password, you'll verify
                                your identity through a second method such as a
                                code sent to your phone or email. This ensures
                                that even if someone obtains your password, they
                                still cannot access your account without the
                                second authentication factor.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3">
                          Transaction Security & Monitoring
                        </h3>
                        <p className="mb-3 leading-relaxed">
                          Every transaction on NJANGIFY passes through multiple
                          security checkpoints. Our sophisticated fraud
                          detection system monitors all activities in real-time,
                          using advanced algorithms to identify suspicious
                          patterns or anomalies. Unusual activities trigger
                          immediate alerts and temporary holds, giving our
                          security team time to verify legitimacy before
                          processing continues.
                        </p>
                        <p className="leading-relaxed">
                          We partner exclusively with licensed and regulated
                          payment processors for all financial transactions.
                          When you make a contribution or receive a payout, your
                          payment information never touches our servers
                          directly—it flows through secure payment gateways that
                          comply with international payment security standards.
                          This architecture minimizes risk and ensures your
                          payment credentials remain protected.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3">
                          Transparency: The Heart of Trust
                        </h3>
                        <p className="leading-relaxed mb-3">
                          Trust requires more than just security—it demands
                          complete transparency. At NJANGIFY, we believe you
                          have the right to know exactly what happens with your
                          money at every step. Our platform provides
                          unprecedented visibility into all aspects of your
                          Njangi group's operations, from individual
                          contributions to group-wide financial activities.
                        </p>
                        <p className="leading-relaxed">
                          Your dashboard displays a complete, real-time record
                          of every transaction. You can see when contributions
                          are made, who has paid, upcoming payment schedules,
                          and when payouts are distributed. Every member of a
                          group has access to the same information, creating a
                          level playing field where everyone can verify the
                          group's financial integrity independently.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3">
                          Admin Verification & Group Integrity
                        </h3>
                        <p className="leading-relaxed mb-3">
                          Before any group becomes public on NJANGIFY, it
                          undergoes thorough verification by our admin team.
                          This process reviews the group's structure, rules, and
                          creator credentials to ensure compliance with our
                          community guidelines and financial regulations. We
                          check for red flags such as unrealistic promises,
                          unclear terms, or suspicious patterns that might
                          indicate fraudulent intent.
                        </p>
                        <p className="leading-relaxed">
                          This verification isn't a one-time event—we
                          continuously monitor active groups for compliance and
                          member satisfaction. If issues arise, our support team
                          investigates promptly and takes appropriate action to
                          protect members. This ongoing oversight creates a
                          safer environment where legitimate groups thrive and
                          problematic ones are quickly identified and addressed.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3">
                          Your Role in Security
                        </h3>
                        <p className="mb-3 leading-relaxed">
                          While we provide robust security infrastructure, your
                          participation is crucial to maintaining a secure
                          experience. Here are essential practices to follow:
                        </p>
                        <ul className="ml-7 space-y-2 leading-relaxed">
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>
                              Use a strong, unique password for your NJANGIFY
                              account and never share it with anyone
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>
                              Enable multi-factor authentication to add an extra
                              security layer
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>
                              Be cautious of phishing attempts—we will never ask
                              for your password via email or phone
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>
                              Regularly review your transaction history for any
                              unauthorized activities
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>
                              Report suspicious group activities or members
                              immediately to our support team
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>
                              Keep your contact information updated so we can
                              reach you about security matters
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3">
                          Compliance & Regulatory Standards
                        </h3>
                        <p className="leading-relaxed">
                          NJANGIFY operates in full compliance with applicable
                          financial regulations and data protection laws. We
                          maintain proper licensing for financial operations and
                          regularly undergo third-party security audits to
                          verify our compliance. Our commitment to regulatory
                          standards isn't just about meeting legal
                          requirements—it's about demonstrating our dedication
                          to operating a trustworthy, professional platform that
                          respects and protects your rights.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl mb-3">
                          Continuous Improvement & Future Security
                        </h3>
                        <p className="leading-relaxed">
                          The digital security landscape evolves constantly, and
                          so do we. Our security team stays current with
                          emerging threats and implements new protective
                          measures proactively. We invest in cutting-edge
                          security technologies, participate in industry
                          security forums, and maintain relationships with
                          cybersecurity experts to ensure NJANGIFY remains ahead
                          of potential threats. Your safety is our ongoing
                          commitment, not a destination.
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-blue-50 dark:from-slate-700 dark:to-slate-700 p-6 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          At NJANGIFY, security and transparency aren't optional
                          features—they're fundamental principles woven into
                          every aspect of our platform. We understand that your
                          trust must be earned through consistent, demonstrable
                          commitment to protecting your interests. By combining
                          advanced security technology with complete operational
                          transparency and unwavering regulatory compliance,
                          we've created a digital Njangi platform where you can
                          focus on your financial goals with complete peace of
                          mind. Join thousands of members who trust NJANGIFY to
                          protect their financial future while helping them
                          achieve their dreams.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Tags and Share */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-8">
                    <div className="flex items-center flex-wrap gap-2">
                       <span className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-full text-sm">
                        Technology
                      </span>
                      <span className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        Security
                      </span>
                      <span className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        Transparency
                      </span>
                      <span className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        Trust
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
                  transition={{ duration: 0.5 }}
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
                      "Security",
                      "Encryption",
                      "Transparency",
                      "Trust",
                      "Privacy",
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
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 hover:shadow-xl ${
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

export default BlogPostDetails3;
