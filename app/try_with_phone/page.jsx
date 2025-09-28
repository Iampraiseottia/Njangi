"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import globalStyle from "../globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faPhoneVolume,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import Metadata from "../components/Metadata";

import { motion } from "motion/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Try_With_Phone = () => {
  const metadata = {
    title: "Forgot Password | Try With Phone - Njangi Web Application",
    description: "Reset Your Password. ",
  };

  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [fieldValidation, setFieldValidation] = useState({
    phoneNumber: { isValid: null, hasInteracted: false },
  });

  const phoneNumberRef = useRef();

  const onMouseEnterPhoneNumberRef = () => {
    phoneNumberRef.current.focus();
  };

  const validatePhoneNumber = (value) => {
    if (!value) return false;

    const cleaned = value.replace(/[\s-]/g, "");

    const cmrFormat = /^\d{9}$/;

    return cmrFormat.test(cleaned);
  };

  const getBorderColor = () => {
    const field = fieldValidation.phoneNumber;

    if (!field.hasInteracted) {
      return "border-black dark:border-[gold]";
    }

    if (field.isValid === true) {
      return "border-green-500 focus:ring-green-500";
    } else if (field.isValid === false) {
      return "border-red-500 focus:ring-red-500";
    }

    return "border-black dark:border-[gold]";
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setError("");

    // Validate phone number as user types
    const isValid = validatePhoneNumber(value);

    setFieldValidation({
      phoneNumber: {
        isValid: value.length > 0 ? isValid : null,
        hasInteracted: true,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validatePhoneNumber(phoneNumber);

    if (!phoneNumber.trim() || !isValid) {
      setError("Please enter a valid 9-digit Phone Number (e.g., 679638673)");
      setFieldValidation({
        phoneNumber: {
          isValid: false,
          hasInteracted: true,
        },
      });
      return;
    }

    setIsLoading(true);
    router.push("/verify");
  };

  return (
    <main>
      <Metadata title={metadata.title} description={metadata.description} />

      {/* Navbar */}
      <Navbar />

      <div className="flex justify-center items-center w-full min-h-[70vh] dark:bg-gray-700 dark:text-white bg-gray-100 text-gray-900 p-4">
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl bg-transparent border-2 border-blue-600  overflow-hidden rounded-lg wrapper my-8 "
        >
          {/*  Left Section */}

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="w-full lg:w-[45%] p-6 lg:p-12 xl:p-20"
          >
            <h1 className="text-4xl lg:text-4xl font-extrabold tracking-wide mt-6 lg:mt-10 text-white">
              Forgot Password?
            </h1>
            <br />
            <p className="text-base lg:text-lg mb-5 text-white">
              No worries, enter your phone Number and regain access to your
              account so as to continue enjoying the amazing features of
              NJANGIFY.
            </p>
            <h1 className="font-extrabold text-2xl lg:text-3xl tracking-wider text-white">
              OR
            </h1>{" "}
            <br />
            <Link
              href="/forgot_password"
              className="bg-white text-black py-3 lg:py-3 px-6 lg:px-12 font-bold text-base lg:text-lg duration-300 rounded-md hover:opacity-90 cursor-pointer flex justify-center items-center hover:rounded-[40px]"
            >
              <FontAwesomeIcon
                icon={faMessage}
                className="werey2 mr-2 text-blue-600 "
              />
              Try With Email
            </Link>
          </motion.div>

          {/*  Right Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="w-full lg:w-[55%] p-6 lg:p-9"
          >
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wider mt-6  text-center mb-5">
              RESET PASSWORD
            </h1>
            <br />
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full max-w-xl"
            >
              <div className="ease-in-out transition-all w-full">
                <label
                  htmlFor="phoneNumber"
                  className="font-semibold text-lg tracking-wider flex items-center ml-4"
                >
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className="werey2 mr-3 text-[gold]"
                  />{" "}
                  Phone Number:
                </label>

                <div className="mt-4 mb-1 flex flex-row justify-center items-center">
                  <input
                    id="phoneNumber"
                    type="number"
                    ref={phoneNumberRef}
                    value={phoneNumber}
                    onChange={handleEmailChange}
                    onMouseEnter={onMouseEnterPhoneNumberRef}
                    placeholder="Enter Your Phone Number"
                    className={`w-full text-base bg-transparent rounded-xl border-2 ${getBorderColor()} py-3 px-4 focus:ring-1 focus:ring-blue-600 focus:outline-none duration-300 placeholder-gray-500 dark:placeholder-white`}
                  />
                </div>
                {error && (
                  <p className="text-red-500 mt-2 text-right font-medium">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="mt-3 bg-gradient-to-r from-blue-600  via-slate-700 to-blue-600  w-full hover:from-blue-500  hover:via-slate-600 hover:to-blue-500   text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider"
              >
                {isLoading ? (
                  <>
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="mr-2 animate-spin"
                    />
                    Resetting...
                  </>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>

            <p className="text-center text-black mt-4 dark:text-white tracking-wide">
              Go Back to{" "}
              <Link
                href="/login"
                className="text-blue-600 ml-1 font-extrabold hover:cursor-pointer hover:underline duration-300 dark:text-gray-300 hover:text-blue-500"
              >
                LOGIN
              </Link>
            </p>
          </motion.div>
        </motion.section>
      </div>

      {/* Footer  */}
      <Footer />
    </main>
  );
};

export default Try_With_Phone;
