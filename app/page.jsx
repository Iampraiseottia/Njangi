"use client";

import React from "react";

import globalStyle from "./globals.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import Our_Team from "./components/Our_Team";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs"

import Metadata from "./components/Metadata";

const General = () => {
  const metadata = {
    title: "Welcome | Njangi Web Application | NJANGIFY",
    description:
      "An application created where members join, create, and manage njangi groups with others all over the world.",
  };

  return (
    <main className="bg-[#f7f7f7]">
      <Metadata title={metadata.title} description={metadata.description} />

      {/* Hero Section */}
      <Hero />

      {/* About Us */} 
      <AboutUs />

      {/* Services */}
      <Service />

      {/* Testimonial */}
      <Testimonials />

      {/* Our Team */}
      <Our_Team />

      {/* Frequently Asked Questions */} 
      <FAQs />

      {/* Our Blog */}
      <Blog />

       {/* Contact */}
      <Contact />

      <Footer />
    </main>
  );
};

export default General;
