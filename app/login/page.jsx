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
} from "@fortawesome/free-solid-svg-icons";

import { CreateUser01Page } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import { register01Schema } from "../lib/zodSchemas";

import Metadata from "../components/Metadata";

import { motion } from "motion/react";

const Login = () => {
  const [lastResult, action] = useActionState(CreateUser01Page, undefined);

  const [form, fields] = useForm({
    lastResult,

    // onValidate({ formData }) {
    //   parseWithZod(formData, {
    //     schema: register01Schema
    //   })
    // },

    // shouldValidate: "onBlur",
    // shouldRevalidate: "onInput"
  });

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const metadata = {
    title: "Welcome Back | Login - Njangi Web Application",
    description:
      "SIgn In and continue enjoying all the amazing features of this application",
  };

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

    setErrors({ password: "", confirmPassword: "" });

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setErrors((prev) => ({
        ...prev,
        password: passwordErrors.join(". "),
      }));
      return;
    }

    setFormSubmitted(true);
  };

  useEffect(() => {
    if (formSubmitted) {
      const isValid =
        userName.trim().length >= 5 && password.trim().length >= 8;

      if (isValid) {
        setFormIsValid(true);
        router.push("/dashboard");
      }
    }
  }, [formSubmitted, userName, password, router]);

  return (
    <main className="flex justify-center items-center w-full min-h-screen bg-gray-800 text-white p-4">
      <Metadata title={metadata.title} description={metadata.description} />

      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl bg-transparent border-2 border-blue-600  overflow-hidden rounded-lg wrapper2 my-8 "
      >
        {/* Registration Page 01 Left Section */}

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
                  className="werey2 mr-2 text-blue-600 "
                />{" "}
                User Name:
              </label>
              <input
                ref={userNameRef}
                onMouseEnter={onMouseEnterUserNameRef}
                type="text"
                name={fields.userName.name}
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                id="userName"
                placeholder="Your User Name"
                className={`w-full text-base bg-transparent rounded-xl outline-none border-2 border-blue-600  py-3 px-4 focus:ring-1  duration-300 placeholder-white
                ${
                  fields.userName.errors && userName.trim().length >= 5
                    ? "border-green-500 focus:ring-green-500"
                    : "border-blue-600  focus:ring-blue-600 "
                } 
                ${
                  fields.userName.errors && userName.trim().length < 5
                    ? "border-red-500 focus:ring-red-500"
                    : "border-blue-600  focus:ring-blue-600 "
                }`}
              />
              <p className="text-[16px] text-red-700 font-bold tracking-wide text-right">
                {fields.userName.errors}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-semibold text-lg tracking-wide flex"
              >
                <FontAwesomeIcon
                  icon={faLock}
                  className="werey2 mr-2 text-blue-600 "
                />{" "}
                Password:
              </label>
              <div className="mt-4 mb-1 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  ref={passwordRef}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onMouseEnter={onMouseEnterPasswordRef}
                  id="password"
                  placeholder="Your Password"
                  className={`w-full text-base bg-transparent outline-none focus:outline-none rounded-xl border-2 
                  ${
                    fields.password.errors && password.trim().length >= 8
                      ? "border-green-500 focus:ring-green-500"
                      : "border-blue-600  focus:ring-blue-600 "
                  } 
                  ${
                    fields.password.errors && password.trim().length < 8
                      ? "border-red-500 focus:ring-red-500"
                      : "border-blue-600  focus:ring-blue-600 "
                  }
                    py-3 px-4 focus:ring-1  duration-300 placeholder-white pr-10`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600  hover:text-white"
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="w-5 h-5"
                  />
                </button>
              </div>
              {fields.password.errors && (
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-red-500 text-sm mt-3"
                >
                  {fields.password.errors}
                </motion.p>
              )}
            </div>

            <p className=" text-white text-right">
              <Link
                href="/forgot_password"
                className="  hover:text-blue-600  mt-[-17px] font-extrabold hover:cursor-pointer hover:underline duration-300"
              >
                Forgot Password
              </Link>
            </p>

            <button
              type="submit"
              className="login_btn1 mt-3 bg-gradient-to-r from-blue-600  via-slate-700 to-blue-600  w-full hover:from-blue-500  hover:via-slate-600 hover:to-blue-500   text-white py-4 px-6 font-extrabold text-xl lg:text-2xl duration-500 rounded-sm hover:rounded-[40px] hover:opacity-95 cursor-pointer flex justify-center items-center tracking-wider"
            >
              LOGIN
            </button>
          </form>

          <p className="registerSec text-center mt-4">
            Don't Yet Have An Account? <br />
            <Link
              href="/register"
              className="text-blue-600  font-extrabold hover:cursor-pointer hover:underline duration-300"
            >
              REGISTER
            </Link>
          </p>
        </motion.div>

        {/* Registration Page 01 Right Section */}

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="w-full lg:w-[45%] p-6 lg:p-12 xl:p-20"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-wide mt-6 lg:mt-10">
            WELCOME BACK!!!
          </h1>
          <br />
          <p className="text-base lg:text-lg mb-5">
            We are delighted to have you 🔥 back. Follow the steps provided to
            get access to your account and take control of your financial 🤑
            freedom. If you need any assistance feel free to reach out.
          </p>
          <br />
          <h1 className="font-extrabold text-2xl lg:text-4xl tracking-wider">
            OR
          </h1>
          <br />
          <div className="flex flex-col gap-4">
            <button className="bg-white text-black py-3 lg:py-4 px-6 lg:px-12 font-bold text-base lg:text-lg duration-300 rounded-md hover:opacity-70 cursor-pointer flex justify-center items-center">
              <img src="/google.png" className="w-6 lg:w-8 mr-2" alt="Google" />
              Continue With Google
            </button>
            <button className="bg-white text-black py-3 my-3 lg:py-4 px-6 lg:px-12 font-bold text-base lg:text-lg duration-300 rounded-md hover:opacity-70 cursor-pointer flex justify-center items-center">
              <img src="/github.png" className="w-6 lg:w-8 mr-2" alt="GitHub" />
              Continue With GitHub
            </button>
            <button className="bg-white text-black py-3 lg:py-4 px-6 lg:px-12 font-bold text-base lg:text-lg duration-300 rounded-md hover:opacity-70 cursor-pointer flex justify-center items-center">
              <img
                src="/facebook.png"
                className="w-6 lg:w-8 mr-2"
                alt="Facebook"
              />
              Continue With Facebook
            </button>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Login;
