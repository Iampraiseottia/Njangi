"use client";

import React, { useRef, useEffect } from "react";
import { useActionState, useState } from "react";

import { useRouter } from "next/navigation";

import globalStyle from "../globals.css";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faCircleUser,
  faEyeSlash,
  faEye,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import { CreateUser01Page } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import { register01Schema } from "../lib/zodSchemas";

import Metadata from "../components/Metadata";

import { motion } from "motion/react";

import facebook from "/public/icons/facebook.png";
import github from "/public/icons/github.png";
import google from "/public/icons/google.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Image from "next/image";

const Login = () => {
  const [lastResult, action] = useActionState(CreateUser01Page, undefined);

  const [form, fields] = useForm({
    lastResult,
  });

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Validation states
  const [fieldValidation, setFieldValidation] = useState({
    userName: { isValid: null, hasInteracted: false },
    password: { isValid: null, hasInteracted: false },
  });

  const metadata = {
    title: "Welcome Back | Login - Njangi Web Application",
    description:
      "Sign In and continue enjoying all the amazing features of this application",
  };

  const [isLoading, setIsLoading] = useState(false);

  const userNameRef = useRef();
  const onMouseEnterUserNameRef = () => {
    userNameRef.current.focus();
  };

  const passwordRef = useRef();
  const onMouseEnterPasswordRef = () => {
    passwordRef.current.focus();
  };

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [errors, setErrors] = useState({
    password: "",
  });

  // Validation functions
  const validateField = (fieldName, value) => {
    try {
      switch (fieldName) {
        case "userName":
          return value.trim().length >= 5;
        case "password":
          register01Schema.shape.password.parse(value);
          return true;
        default:
          return false;
      }
    } catch (error) {
      return false;
    }
  };

  // Get border color based on validation state
  const getBorderColor = (fieldName, fieldValue) => {
    const field = fieldValidation[fieldName];

    if (!field.hasInteracted) {
      return "dark:border-[#d1ce89] border-slate-700 focus:ring-slate-800 dark:focus:ring-[#d1ce89]";
    }

    if (field.isValid === true) {
      return "border-green-500 focus:ring-green-500";
    } else if (field.isValid === false) {
      return "border-red-500 focus:ring-red-500";
    }

    return "dark:border-[#d1ce89] border-slate-700 focus:ring-slate-800 dark:focus:ring-[#d1ce89]";
  };

  // Handle input changes with validation
  const handleInputChange = (fieldName, value) => {
    switch (fieldName) {
      case "userName":
        setUserName(value);
        break;
      case "password":
        setPassword(value);
        break;
    }

    // Validate the field
    const isValid = validateField(fieldName, value);

    setFieldValidation((prev) => ({
      ...prev,
      [fieldName]: {
        isValid: value.length > 0 ? isValid : null,
        hasInteracted: true,
      },
    }));
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
  setErrors({ password: "" });

  // Validate userName
  const isUserNameValid = validateField("userName", userName);
  if (!isUserNameValid || userName.trim().length < 5) {
    setFieldValidation((prev) => ({
      ...prev,
      userName: {
        isValid: false,
        hasInteracted: true,
      },
    }));
    e.preventDefault();
    return; 
  }

  // Validate password
  const passwordErrors = validatePassword(password);
  if (passwordErrors.length > 0) {
    setErrors((prev) => ({
      ...prev,
      password: passwordErrors.join(". "),
    }));
    setFieldValidation((prev) => ({
      ...prev,
      password: {
        isValid: false,
        hasInteracted: true,
      },
    }));
    e.preventDefault();
    return; 
  }

  setIsLoading(true);
  setFormSubmitted(true);
};


 useEffect(() => {
  if (formSubmitted) {
    const isValid =
      userName.trim().length >= 5 &&
      password.trim().length >= 8 &&
      validatePassword(password).length === 0;

    if (isValid) {
      setFormIsValid(true);
      router.push("/dashboard");
    } else {
      setIsLoading(false);
      setFormSubmitted(false);
    }
  }
}, [formSubmitted, userName, password, router]);


  return (
    <main>
      <Metadata title={metadata.title} description={metadata.description} />

      {/* Navbar */}
      <Navbar />

      <div className="flex justify-center items-center w-full min-h-screen dark:bg-gray-700 dark:text-white bg-gray-100 text-gray-900 p-4">
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl bg-transparent border-2 border-blue-600  overflow-hidden rounded-lg wrapper2 my-16"
        >
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="w-full lg:w-[55%] p-6 lg:p-9"
          >
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-wider mt-6  text-center mb-5">
              SIGN IN 🔥
            </h1>
            <br />
            <form
              className="flex flex-col gap-6 w-full max-w-xl"
              id={form.id}
              onSubmit={async (e) => {
                await form.onSubmit(e);
                await handleSubmit(e);
              }}
              action={action}
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="userName"
                  className="font-semibold text-lg tracking-wide flex"
                >
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    className="werey2 mr-2 text-blue-500 mt-1 dark:text-white" 
                  />{" "}
                  User Name:
                </label>
                <input
                  ref={userNameRef}
                  onMouseEnter={onMouseEnterUserNameRef}
                  type="text"
                  name={fields.userName?.name}
                  onChange={(e) =>
                    handleInputChange("userName", e.target.value)
                  }
                  value={userName}
                  id="userName"
                  placeholder="Your User Name"
                  className={`w-full text-base bg-transparent rounded-xl outline-none border-2 py-3 px-4 focus:ring-1 duration-300 dark:placeholder-gray-300 placeholder-slate-400 text-black dark:text-white ${getBorderColor(
                    "userName"
                  )}`}
                />
                {fieldValidation.userName.hasInteracted &&
                  fieldValidation.userName.isValid === false && (
                    <p className="text-[16px] text-red-500 font-bold tracking-wide text-right">
                      Username must be at least 5 characters long
                    </p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="font-semibold text-lg tracking-wide flex"
                >
                  <FontAwesomeIcon
                    icon={faLock}
                    className="werey2 mr-2 text-blue-500 mt-1 dark:text-white"
                  />{" "}
                  Password:
                </label>
                <div className="mt-4 mb-1 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    ref={passwordRef}
                    name="password"
                    value={password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    onMouseEnter={onMouseEnterPasswordRef}
                    id="password"
                    placeholder="Your Password"
                    className={`w-full text-base bg-transparent outline-none focus:outline-none rounded-xl border-2 py-3 px-4 focus:ring-1 duration-300 dark:placeholder-gray-300 placeholder-slate-400 text-black dark:text-white pr-10 ${getBorderColor(
                      "password"
                    )}`}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-700 dark:text-white dark:hover:text-white"
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="w-5 h-5"
                    />
                  </button>
                </div>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-red-500 text-sm mt-3"
                  >
                    {errors.password}
                  </motion.p>
                )}
              </div>

              <p className="text-black dark:text-white text-right">
                <Link
                  href="/forgot_password"
                  className="hover:text-blue-400 mt-[-17px] font-extrabold hover:cursor-pointer hover:underline duration-300"
                >
                  Forgot Password
                </Link>
              </p>

              <button
                type="submit"
                className="mt-3 bg-gradient-to-r from-blue-600 via-[#8c8803] to-blue-600 w-full hover:from-blue-500 hover:via-[#c1bb21] hover:to-blue-500 text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider"
              >
                {isLoading ? (
                  <>
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="mr-2 animate-spin"
                    />
                    LOGGING IN...
                  </>
                ) : (
                  "LOGIN"
                )}
              </button>
            </form>

            <p className="registerSec text-center mt-4">
              Don't Yet Have An Account? <br />
              <Link
                href="/register"
                className="text-blue-600 font-extrabold hover:cursor-pointer hover:underline duration-300 dark:text-white"
              >
                REGISTER
              </Link>
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="w-full lg:w-[45%] p-6 lg:p-12 xl:p-20"
          >
            <h1 className="text-white text-4xl lg:text-6xl font-extrabold tracking-wide mt-6 lg:mt-10">
              WELCOME BACK!!!
            </h1>
            <br />
            <p className="text-white text-base lg:text-lg mb-5">
              We are delighted to have you 🔥 back. Follow the steps provided to
              get access to your account and take control of your financial 🤑
              freedom. If you need any assistance feel free to reach out.
            </p>
            <br />
            <h1 className="text-white text-center font-extrabold text-2xl lg:text-4xl tracking-wider">
              OR
            </h1>
            <br />
            <div className="flex flex-col gap-4">
              <button className="bg-white text-black py-3 lg:py-4 px-6 lg:px-12 font-bold text-base lg:text-lg duration-300 rounded-md hover:opacity-70 cursor-pointer flex justify-center items-center hover:rounded-xl shadow-md">
                <Image
                  height={25}
                  width={25}
                  src={google}
                  className="w-6 lg:w-8 mr-2"
                  alt="Google"
                />
                Continue With Google
              </button>
              <button className="bg-white text-black py-3 my-3 lg:py-4 px-6 lg:px-12 font-bold text-base lg:text-lg duration-300 rounded-md hover:opacity-70 cursor-pointer flex justify-center items-center hover:rounded-xl shadow-md">
                <Image
                  height={25}
                  width={25}
                  src={github}
                  className="w-6 lg:w-8 mr-2"
                  alt="GitHub"
                />
                Continue With GitHub
              </button>
              <button className="bg-white text-black py-3 lg:py-4 px-6 lg:px-12 font-bold text-base lg:text-lg duration-300 rounded-md hover:opacity-70 cursor-pointer flex justify-center items-center hover:rounded-xl shadow-md">
                <Image
                  height={25}
                  width={25}
                  src={facebook}
                  className="w-6 lg:w-8 mr-2"
                  alt="Facebook"
                />
                Continue With Facebook
              </button>
            </div>
          </motion.div>
        </motion.section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Login;
