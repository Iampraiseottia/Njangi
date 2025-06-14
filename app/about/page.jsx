import React from "react";

import { motion } from "motion/react";

import Metadata from "../components/Metadata"; 

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  const metadata = {
    title: "About Us | Njangi Web Application | NJANGIFY",
    description:
      "An application created where members join, create, and manage njangi groups with others all over the world.",
  };

  return (
    <main className="bg-[#f7f7f7]">
      <Metadata title={metadata.title} description={metadata.description} />

      <Navbar />

      <Footer />
    </main>
  );
};

export default About;
