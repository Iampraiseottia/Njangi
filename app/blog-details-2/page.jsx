"use client";

import React, { useEffect, useState } from "react";

import Metadata from "../components/Metadata";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Default_Hero from "../components/Default_Hero";

import globalStyle from "../globals.css";

const BlogPostDetails2 = () => {
  const metadata = {
    title: "From Setup to Success: Your Complete NJANGIFY Journey | Njangi Web Application",
    description:
      "An application created where members join, create, and manage njangi groups with others all over the world.",
  };

  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll for back to top
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

  return (
    <main className="bg-[#f7f7f7]">
      <Metadata title={metadata.title} description={metadata.description} />

      {/* Navigation  */}
      <Navbar />

      {/* Hero Section */}
      <Default_Hero
        title="From Setup to Success ⚡"
        firstDescription="Home"
        MainDescription="Blog > Financial Success "
      />

      {/* Footer */}
      <Footer />

      {/* Back to Top  */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 hover:shadow-xl ${
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
