"use client";

import React, { useState } from "react";
import {
  Calendar,
  User,
  ArrowRight,
  DollarSign,
  Users,
  TrendingUp,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Revolutionizing Financial Growth Through NJANGIFY",
      excerpt:
        "Discover how NJANGIFY's innovative platform transforms your finances leading to a more stable and better standard of living.",
      author: "Sarah Mbah",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Finance",
      image: "💰",
      tags: ["Digital Banking", "Wealth Building", "Community Finance"],
      blogLink: "/blog-details-1",
    },
    {
      id: 2,
      title: "From Setup to Success: Your Complete NJANGIFY Journey",
      excerpt:
        "Learn how our intuitive platform makes joining or creating njangi groups effortless, with step-by-step guidance and admin verification.",
      author: "James Fon",
      date: "March 10, 2025",
      readTime: "4 min read",
      category: "Tutorial",
      image: "⚡",
      tags: ["User Guide", "Platform Features", "Getting Started"],
      blogLink: "/blog-details-2",
    },
    {
      id: 3,
      title:
        "Building Trust in Digital Finance: Security & Transparency at NJANGIFY",
      excerpt:
        "Explore the advanced security measures and transparent systems that make NJANGIFY the most trusted platform for njangi groups.",
      author: "Dr. Patience Kom",
      date: "March 5, 2025",
      readTime: "6 min read",
      category: "Security",
      image: "🛡️",
      tags: ["Cybersecurity", "Trust", "Financial Safety"],
      blogLink: "/blog-details-3",
    },
  ];

  const BlogCard = ({ post, index }) => (
    <div
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-gray-900 transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100 dark:border-gray-700 hover:scale-[1.03]"
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    >
      <Link href={post.blogLink}>
        {/* Card Header */}
        <div className="relative p-6 bg-gradient-to-br from-blue-50 to-yellow-50 dark:from-gray-700 dark:to-gray-800">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-blue-500 dark:bg-blue-600 text-white text-sm font-semibold rounded-full">
              {post.category}
            </span>
            <div className="text-4xl animate-bounce">{post.image}</div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
          </div>

          <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-300">
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </Link>
    </div>
  );

  return (
    <main className="relative overflow-hidden bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-16 w-32 h-20 bg-blue-200/20 dark:bg-blue-400/10 rounded-full transform rotate-12 animate-float"></div>
        <div className="absolute top-64 right-48 w-24 h-16 bg-yellow-200/20 dark:bg-yellow-400/10 rounded-full transform -rotate-6 animate-float-delayed"></div>
        <div className="absolute bottom-32 right-32 w-28 h-18 bg-blue-300/20 dark:bg-blue-500/10 rounded-full transform rotate-45 animate-float-slow"></div>
        <div className="absolute top-32 left-16 w-20 h-12 bg-yellow-300/20 dark:bg-yellow-500/10 rounded-full transform -rotate-12 animate-float"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center space-x-3 mb-6 animate-fade-in-up"
          >
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-bounce" />
              <Users
                className="w-8 h-8 text-yellow-500 dark:text-yellow-400 animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
              <DollarSign
                className="w-8 h-8 text-blue-500 dark:text-blue-400 animate-bounce" 
                style={{ animationDelay: "0.4s" }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-yellow-500 dark:from-blue-400 dark:via-blue-300 dark:to-yellow-400 bg-clip-text text-transparent mb-6 animate-fade-in-up"
          >
            NJANGIFY INSIGHTS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
          >
            Stay informed with the latest blogs, insights, tips, and success
            stories from the world of digital njangi systems. Discover how
            NJANGIFY is transforming people finances and empowering communities.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                10K+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Active Members
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                500M+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                XAF
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                1,200+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Active Groups
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                98.5%
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Success Rate
              </div>
            </div>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="animate-slide-in-up"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <BlogCard post={post} index={index} />
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-blue-500 to-yellow-500 dark:from-blue-600 dark:to-yellow-600 rounded-2xl p-8 md:p-12 text-white animate-fade-in-up"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join thousands of satisfied members who are already building wealth
            through NJANGIFY
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-blue-600 dark:text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Join NJANGIFY Community
            </Link>
            <Link
              href="/login"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 dark:hover:text-blue-700 transition-all duration-300 hover:scale-105"
            >
              Already a Member
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-20px) rotate(var(--rotation, 0deg));
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-15px) rotate(var(--rotation, 0deg));
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(var(--rotation, 0deg));
          }
          50% {
            transform: translateY(-10px) rotate(var(--rotation, 0deg));
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default Blog;
