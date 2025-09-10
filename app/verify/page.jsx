"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import globalStyle from "../globals.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import Metadata from "../components/Metadata";

import { motion } from "motion/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Verify = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [codeValues, setCodeValues] = useState(["", "", "", ""]);
  const [codeErrors, setCodeErrors] = useState([false, false, false, false]);

  const metadata = {
    title: "Verify | Njangi Web Application",
    description: "Enter code sent to gain access to your account",
  };

  const codeRefs = [useRef(), useRef(), useRef(), useRef()];

  const onMouseEnterCode = (index) => {
    codeRefs[index].current.focus();
  };

  const handleCodeChange = (index, e) => {
    const value = e.target.value;

    if (value.length > 1) {
      e.target.value = value.charAt(0);
    }

    const newCodeValues = [...codeValues];
    newCodeValues[index] = e.target.value;
    setCodeValues(newCodeValues);

    setError("");

    const newCodeErrors = [...codeErrors];
    newCodeErrors[index] = false;
    setCodeErrors(newCodeErrors);

    if (value.length === 1 && index < 3) {
      codeRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && codeValues[index] === "") {
      codeRefs[index - 1].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = codeValues.some((val) => val === "");

    if (isEmpty) {
      setError("Please enter all 4 digits of the verification code");

      const newCodeErrors = codeValues.map((val) => val === "");
      setCodeErrors(newCodeErrors);

      return;
    }

    router.push("/new-password");
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
          className="sm:w-full md:w-[80%] lg:w-[40%] max-w-7xl bg-transparent border-[1px] border-blue-600  overflow-hidden rounded-lg wrapper4 my-8 bg-slate-300 dark:bg-slate-600 "
        >
          <div className="w-full lg:w-[100%] p-6 lg:p-9">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-3xl lg:text-5xl font-extrabold tracking-wider mt-6 text-center mb-5 flex justify-center items-center"
            >
              <img
                src="/logo3.png"
                alt="Njangi Logo"
                className="w-20 h-20 mr-1"
              />
              NJANGIFY
            </motion.h1>
            <br />

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-full justify-center align-middle items-center"
            >
              <div className="ease-in-out transition-all w-full">
                <motion.label
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  htmlFor="verification_code"
                  className="text-left text-[22px] font-medium tracking-wider"
                >
                  Verification Code
                </motion.label>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.1, delay: 0.2 }}
                    className="text-red-500 my-3 text-center font-medium"
                  >
                    {error}
                  </motion.p>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="mt-6 mb-1 flex flex-row justify-center items-center"
                >
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      type="text"
                      ref={codeRefs[index]}
                      value={codeValues[index]}
                      onChange={(e) => handleCodeChange(index, e)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onMouseEnter={() => onMouseEnterCode(index)}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      placeholder={index + 1}
                      className={`w-[25%] text-center text-base bg-transparent rounded-xl border-2  ${
                        codeErrors[index]
                          ? "border-red-500"
                          : "border-blue-600 "
                      } py-3 px-4 focus:ring-1 focus:ring-blue-600  focus:outline-none duration-300 placeholder-white dark:placeholder-slate-400 ${
                        index < 3 ? "mr-3" : ""
                      }`}
                    />
                  ))}
                </motion.div>
              </div>

              <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                type="submit"
                className="mt-3 bg-gradient-to-r from-blue-600  via-slate-700 to-blue-600  w-full hover:from-blue-500  hover:via-slate-600 hover:to-blue-500  text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider"
              >
                <FontAwesomeIcon icon={faLock} className="mr-1 w-6 h-6" />{" "}
                VERIFY
              </motion.button>
            </form>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-center mt-4 text-white tracking-wide"
            >
              Go Back to{" "}
              <Link
                href="/login"
                className="text-blue-600  ml-1 font-extrabold hover:cursor-pointer hover:underline duration-300"
              >
                LOGIN
              </Link>
            </motion.p>
          </div>
        </motion.section>
      </div>

      {/* Footer  */}
      <Footer />
    </main>
  );
};

export default Verify;
