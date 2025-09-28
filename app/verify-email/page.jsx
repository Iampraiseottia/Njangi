"use client";

import { React, useRef, useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Metadata from "../components/Metadata";

import { motion } from "motion/react";

import globalStyle from "../globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const EmailVerificationForm = () => {
  const emailRef = useRef();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Get email from URL parameters
  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    } else {
      setError("No email address provided. Please register first.");
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email.trim()) {
      setError("Please register first to get your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    // Redirect to verification code page with email
    router.push(`/verification-code?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="flex justify-center items-center w-full min-h-[70vh] dark:bg-gray-700 dark:text-white bg-gray-100 text-gray-900 p-4">
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="sm:w-full md:w-[80%] lg:w-[40%] max-w-7xl bg-transparent border-2 border-blue-600 overflow-hidden rounded-lg wrapper4 my-8 bg-slate-300 "
      >
        <div className="w-full max-w-md md:max-w-2xl lg:max-w-3xl h-[48vh] shadow-md py-6 md:py-8 lg:py-10 rounded-lg">
          <form onSubmit={handleSubmit} className="">
            <div className="px-[10%] mt-4 mb-4">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="text-3xl lg:text-5xl font-extrabold tracking-wider text-center flex justify-center items-center"
              >
                <img
                  src="/logo3.png"
                  alt="Njangi Logo"
                  className="w-20 h-20 mr-1"
                />
                NJANGIFY
              </motion.h1>
              <br />

              <motion.input
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                id="email"
                type="email"
                ref={emailRef}
                value={email}
                readOnly
                disabled
                className={`w-full text-[18px] rounded-xl border-2 ${
                  error ? "border-red-500" : "border-[#d1ce89]"
                } py-4 px-4 outline-none focus:outline-none duration-300 mt-3 text-slate-900 bg-gray-200 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white cursor-not-allowed opacity-75`}
                placeholder="Your email address"
              />

              {error && (
                <p className="text-red-500 mt-2 text-right font-medium">
                  {error}
                </p>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="px-[10%] mt-8"
            >
              <p className="text-[16px] text-gray-600 dark:text-white ">
                We will send a verification code to this email address.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className={`mx-[10%] mt-7 mb-4 py-4 flex justify-center items-center bg-blue-500 text-white ease-in-out duration-200 hover:bg-blue-600 hover:rounded-2xl text-xl font-bold tracking-wide w-[80%] sm:text-2xl md:text-3xl ${
                !email || error ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={!email || error}
            >
              {isLoading ? (
                <>
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="mr-2 animate-spin"
                  />
                  Sending...
                </>
              ) : (
                "Send Code"
              )}
            </motion.button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

// Loading fallback component
const LoadingFallback = () => (
  <div className="py-6 md:py-8 lg:py-10 flex items-center justify-center px-4 min-h-screen">
    <div className="bg-white w-full max-w-md md:max-w-2xl lg:max-w-3xl h-auto shadow-xl py-6 md:py-8 lg:py-10 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div className="px-[10%] mt-8">
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
        <div className="h-12 w-full bg-gray-200 rounded animate-pulse mt-8"></div>
      </div>
    </div>
  </div>
);

const Email_Verification = () => {
  const metadata = {
    title: "Verify Email Address - ConnectAID ",
    description:
      "ConnectAID is a charity application where seekers(those in need) of help can find and meet donors (those willing to help) in which they can gain valuable assistance.",
  };

  return (
    <main className="bg-[#f9f9f9]">
      <Metadata title={metadata.title} description={metadata.description} />

      {/* Navbar */}
      <Navbar />

      <Suspense fallback={<LoadingFallback />}>
        <EmailVerificationForm />
      </Suspense>

      {/* Footer  */}
      <Footer />
    </main>
  );
};

export default Email_Verification;
