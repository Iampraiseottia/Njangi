"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import Metadata from "../components/Metadata";

import { motion } from "motion/react";

import globalStyle from "../globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const New_Password = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const metadata = {
    title: "New Password | Njangi Web Application",
    description: `Set a new password, one unique and not easy to hack. DON'T share it with anyone.`,
  };

  const new_Pass = useRef(null);
  const confirm_new_Pass = useRef(null);

  const onMouseEnterNewPassword = () => {
    new_Pass.current.focus();
  };

  const onMouseEnterConfirmNewPassword = () => {
    confirm_new_Pass.current.focus();
  };

  const validatePassword = (password) => {
    const errors = [];

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }

    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    }

    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number");
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("Password must contain at least one special character");
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({ newPassword: "", confirmPassword: "" });

    const newPasswordErrors = validatePassword(newPassword);
    if (newPasswordErrors.length > 0) {
      setErrors((prev) => ({
        ...prev,
        newPassword: newPasswordErrors.join(". "),
      }));
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match",
      }));
      return;
    }

    router.push("/dashboard");
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
          className="sm:w-full md:w-[80%] lg:w-[40%] max-w-7xl bg-transparent border-2 border-blue-600 overflow-hidden rounded-lg wrapper4 my-8 bg-slate-300 "
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
            <motion.form
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              onSubmit={handleSubmit}
              className="flex-col gap-6 w-full mb-9"
            >
              <div className="ease-in-out transition-all">
                <label
                  htmlFor="new_pass"
                  className="text-left text-[22px] font-medium tracking-wider"
                >
                  New Password:
                </label>
                <div className="mt-4 mb-1 relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    ref={new_Pass}
                    name="new_pass"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    onMouseEnter={onMouseEnterNewPassword}
                    id="new_pass"
                    placeholder="Your New Password"
                    className={`w-full text-base bg-transparent rounded-xl border-2 ${
                      errors.newPassword ? "border-red-500" : "border-blue-600 "
                    } py-3 px-4 focus:ring-1 focus:ring-blue-600  focus:outline-none duration-300 placeholder-slate-500 dark:placeholder-white pr-10`}
                  />
                  <button
                    type="button"
                    onClick={toggleNewPasswordVisibility}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600  hover:text-white"
                  >
                    <FontAwesomeIcon
                      icon={showNewPassword ? faEyeSlash : faEye}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
                {errors.newPassword && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="text-red-500 text-sm mt-3"
                  >
                    {errors.newPassword}
                  </motion.p>
                )}
                <br />

                <label
                  htmlFor="confirm_new_Pass"
                  className="text-left text-[22px] font-medium tracking-wider"
                >
                  Confirm New Password:
                </label>
                <div className="mt-4 mb-1 relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    ref={confirm_new_Pass}
                    name="confirm_new_Pass"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onMouseEnter={onMouseEnterConfirmNewPassword}
                    id="confirm_new_Pass"
                    placeholder="Confirm Your New Password"
                    className={`w-full text-base bg-transparent rounded-xl border-2 ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-blue-600 "
                    } py-3 px-4 focus:ring-1 focus:ring-blue-600  focus:outline-none duration-300 placeholder-slate-500 dark:placeholder-white pr-10`}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600  hover:text-white"
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEyeSlash : faEye}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
                {errors.confirmPassword && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="text-red-500 text-sm mt-3"
                  >
                    {errors.confirmPassword}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                className="mt-10 bg-gradient-to-r from-blue-600  via-slate-700 to-blue-600  w-full hover:from-blue-500  hover:via-slate-600 hover:to-blue-500  text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider"
              >
                Continue{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-1 w-6 h-6" />
              </button>
            </motion.form>
          </div>
        </motion.section>
      </div>

      {/* Footer  */}
      <Footer />
    </main>
  );
};

export default New_Password;
