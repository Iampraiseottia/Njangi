"use client";

import React from "react";

import globalStyle from "./globals.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";

import Metadata from "./components/Metadata";

const General = () => {
  const metadata = {
    title: "Njangi Web Application | NJANGIFY",
    description:
      "An application created where members join, create, and manage njangi groups with others all over the world.",
  };

  return (
    <main className="bg-[#f7f7f7]">
      <Metadata title={metadata.title} description={metadata.description} />

      {/* Hero SEction */}
      <Hero />

      <Footer />
    </main>
  );
};

export default General;
